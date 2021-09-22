# Electron React Webpack template

[![dependencies Status](https://david-dm.org/MrRefactoring/electron-react-webpack/status.svg?style=flat-square)](https://david-dm.org/MrRefactoring/electron-react-webpack)
[![devDependencies Status](https://david-dm.org/MrRefactoring/electron-react-webpack/dev-status.svg?style=flat-square)](https://david-dm.org/MrRefactoring/electron-react-webpack?type=dev)

Try this Electron 15 & React 17 & Webpack 5 template for a quick development and prototyping.

![w10 sample](https://user-images.githubusercontent.com/11739632/37350993-59ad48d4-26da-11e8-9ac5-d3539cf1e2f9.PNG)

## Install
``` bash
# Clone the repository
$ git clone https://github.com/pastahito/electron-react-webpack

# Go into the repository
$ cd electron-react-webpack

# Install dependencies
$ npm install
```

## Develop
Just run this command to start developing with hot reloading.
``` bash
$ npm start
```

## What's included
- JSX support for React.
- CSS modules support.
- JS, CSS and assets automatic bundling.
- Hot reloading via Webpack 4.


## Folder structure
```
├── electron-react-webpack/             # Your project's name, you can rename it

    ├── app/

        ├── build/                      # Webpack 4 will manage this folder for you
            ├── bundle.css              # Bundled CSS
            ├── bundle.js               # Bundled JS
            ├── ...                     # Your images will be copied here

        ├── src/

            ├── assets/                 # Images
                ├── electron.png
                ├── react.png
                ├── webpack.png

            ├── components/             # React Components
                ├── Link/               # To keep them modularized follow this structure:
                    ├── index.ts       # Your component's React code
                    ├── styles.css      # Your component's scoped CSS
                ├── Logo/
                    ├── index.ts
                    ├── styles.css

            ├── app.tsx                 # React main component where everything is tied up
            ├── rendererProcess.tsx     # Electron's renderer-process, where you React app is called.
            ├── global.css              # Global CSS and global constants go here

        ├── index.html                  # This HTML only uses build/ folder's files

    ├── main.js                         # Electron's configuration. Whole app is launched from here
    ├── package.json
    ├── webpack.config.ts               # Webpack 4 setup
```

## Related
- [electron-vue-webpack](https://github.com/pastahito/electron-vue-webpack) -
Minimal Electron template using Vue 2 instead of React.
