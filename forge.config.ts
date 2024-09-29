import type { ForgeConfig } from '@electron-forge/shared-types'
import { MakerSquirrel } from '@electron-forge/maker-squirrel'
import { MakerZIP } from '@electron-forge/maker-zip'
import { MakerDeb } from '@electron-forge/maker-deb'
import { MakerRpm } from '@electron-forge/maker-rpm'
import { AutoUnpackNativesPlugin } from '@electron-forge/plugin-auto-unpack-natives'
import { WebpackPlugin } from '@electron-forge/plugin-webpack'
import { FusesPlugin } from '@electron-forge/plugin-fuses'
import { FuseV1Options, FuseVersion } from '@electron/fuses'

import { mainConfig } from './webpack.main.config'
import { rendererConfig } from './webpack.renderer.config'

import 'dotenv/config'

const config: ForgeConfig = {
  packagerConfig: {
    asar: true,
    icon: 'assets/icon',
  },
  rebuildConfig: {},
  makers: [
    // new MakerSquirrel({}),
    // new MakerZIP({}, ['darwin']),
    // new MakerRpm({}),
    // new MakerDeb({}),

    // Windows
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        bin: 'Electron Starter',
      },
    },
    // MacOS
    {
      name: '@electron-forge/maker-dmg',
      config: {
        bin: 'Electron Starter',
      },
    },
    // Debian
    {
      name: '@electron-forge/maker-deb',
      config: {
        bin: 'Electron Starter',
      },
    },
    // RPM
    {
      name: '@electron-forge/maker-rpm',
      config: {
        bin: 'Electron Starter',
      },
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'Monstarrrr',
          name: 'InterHapticsTestApp',
        },
        authToken: process.env.GITHUB_TOKEN,
        draft: false,
      },
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    new AutoUnpackNativesPlugin({}),
    new WebpackPlugin({
      mainConfig,
      renderer: {
        config: rendererConfig,
        entryPoints: [
          {
            html: './src/index.html',
            js: './src/renderer.ts',
            name: 'main_window',
            preload: {
              js: './src/preload.ts',
            },
          },
        ],
      },
    }),
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
}

export default config
