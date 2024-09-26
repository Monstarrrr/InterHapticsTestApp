# InterHaptics Technical Test Documentation

## Install

1. I use the official **Electronjs** website docs to install/use the tool which proposed me to use **Electron Forge**, "_an all-in-one solution that unifies this fractured ecosystem. With Forge, you can create a build pipeline that brings your app from development to distribution with minimal configuration._"  
   Alternatively to **Forge** there is also a tool called **Builder**, it's very similar but i'll just use the tool linked in the official **Electronjs** docs.

   `npm init electron-app@latest InterHapticsTestApp -- --template=webpack-typescript`

2. I chose to add a github publishing target (as per [the docs](https://www.electronforge.io/config/publishers/github)) because i've never used it before and I want to learn about it.  
   I can now publish the executable using the script `"publish": "electron-forge publish"` with `npm run publish`.

3.
