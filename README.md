# InterHaptics Technical Test Documentation

## Install

1. I use the official electronjs website docs to install/use the tool which proposed me to use **Electron Forge** to "create a full build pipeline that works out of the box, complete with code signing, installers, and artifact publishing"  
   `npm init electron-app@latest InterHapticsTestApp -- --template=webpack-typescript`

2. I chose to add a github publishing target (as per [the official docs](https://www.electronforge.io/config/publishers/github)) because i've never used it before.  
   I can now publish the executable using the script `"publish": "electron-forge publish"` with `npm run publish`.

3.
