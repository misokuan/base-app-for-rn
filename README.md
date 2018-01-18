# Base App for React Native

## Installation Guide

```
git clone https://github.com/misokuan/base-app-for-rn.git
cd base-app-for-rn
npm install
```

## Usage Guide

- To use for new project, rename:
> 'baseapp' to 'yourprojectname'

> 'BaseApp' to 'YourProjectName'

- Remove 'ios' and 'android' folders
- run `react-native eject`

## Features Included

- Async action, reducer and state storage using redux & redux-thunk
- Basic routing structure using native Router & Scene
- Styling structure using native-base components & extended-stylesheet (for more css flexibility)
- Code structure checking using Eslint, installation guide:
> Sublime Text:
> 1. Open "Command Pallet" Ctrl + Shift + p (Cmd + Shift + p on OSX)
> 2. Select "Package Control: Install Package"
> 3. Select ESLint

> Atom:
> 1. Open "Preferences" (Cmd + ,)
> 2. Select "Install"
> 3. Install linter, linter-eslint

> VSCode:
> [Installation Guide](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

** Note: .eslintrc and package (npm install --save eslint) is already available upon cloning

## Useful Add-ons

- [CodePush](https://github.com/Microsoft/react-native-code-push) silently pushes updates to users' app
- [Lottie](https://github.com/airbnb/lottie-react-native) for animation support: [free library here](https://www.lottiefiles.com/)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) if planning to add additional icons not supported by native-base

## To Do

- [ ] Replace react-native-router-flux to react-native-navigations
- [ ] Refactor/refine code to bare minimum
