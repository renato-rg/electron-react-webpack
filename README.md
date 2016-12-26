# electron-react-webpack
Try this Electron/React/Webpack2 template for a quick development and prototyping.

![w10 sample](https://cloud.githubusercontent.com/assets/11739632/21486843/dc5e56b8-cbbb-11e6-8891-c5a72e46d8a7.png)

## Install
``` bash
# Clone the repository
$ git clone https://github.com/pastahito/electron-react-webpack

# Go into the repository
$ cd electron-react-webpack

# Install dependencies
$ npm install
```

## Usage
Run this two commands in two different prompts to start developing with hot reloading.
``` bash
# Webpack builds once and watches for changes to apply
$ npm run dev

# Start electron app
$ npm start
```

## What's included
- JSX support for React using Babel.
- ES6 native support for React via Node (this is Electron, no need for Babel to transpile ES6).
- CSS modules support.
- JS, CSS and assets bundling with hot reloading via Webpack 2.


## Folder structure
```
├── electron-react-webpack/             # Your project's name

    ├── app/

        ├── build/                      # Webpack 2 will create and update this folder
            ├── bundle.css              # Bundled CSS
            ├── bundle.js               # Bundled JS
            ├── ...                     # Your images will be copied here

        ├── src/

            ├── assets/                 # Images
                ├── electron.png
                ├── react.png
                ├── webpack.png

            ├── components/             # React Components
                ├── Link.jsx
                ├── Logo.jsx

            ├── styles/                 
                ├── Local.css           # Local CSS
                ├── Global.css          # Global CSS and constants

            ├── App.jsx                 # React main component
            ├── entry.js                # App entry. Your global JS can go here

        ├── index.html                  # Single Page Application HTML, it only uses build's files

    ├── main.js                         # Electron app
    ├── package.json
    ├── webpack.config.js               # Webpack 2 setup
```

## Related
- [electron-vue-webpack](https://github.com/pastahito/electron-vue-webpack) -
Minimal Electron template using Vue 2 instead of React.
