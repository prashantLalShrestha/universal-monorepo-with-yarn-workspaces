# A universal monorepo using yarn workspaces

This monorepo uses [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) and [TypeScript](https://www.typescriptlang.org/) to support a modular React Native project.

The core idea is to isolate the JavaScript app code from the platform configurations (native code + the app bundlers like Metro and Webpack).  
This isolation happens by using different [workspaces](https://classic.yarnpkg.com/en/docs/workspaces/): We have an `app` workspace for the JavaScript app code, a `mobile` workspace for the React Native mobile configuration, a `macos` workspace for the React Native macOS configuration, and so on.

We fully embrace [Yarn `nohoist`](https://classic.yarnpkg.com/blog/2018/02/15/nohoist/) to allow using different versions of React Native on each platform (which is recommended but not required), simplifying the adoption of new React Native updates.  
Thanks nohoist, each platform workspace (`mobile`, `macos`, etc.) can depend on any React Native version, regardless of what version the other platform workspaces are using.
For example, we can use `react-native@0.67.1` on the mobile app and `react-native@0.64.3` on the macOS app — as long as the JavaScript app code supports both versions.  
This approach promotes gradual React Native updates over updates in lockstep.

> ⚠️ Please notice that I'm not saying this is the _right_ way to do React Native monorepos. This is just an approach that I enjoy using on larger codebases :)

## Supported platforms

- Android (React Native 0.67.1)
- iOS (React Native 0.67.1)
- MacOS (React Native 0.64.3)
- Web (React Native 0.67.1)
- Web - Browser Extension (React Native 0.67.1)
- Web - Electron (React Native 0.67.1)
