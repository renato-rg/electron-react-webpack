import React, {Component} from 'react'
import {render} from 'react-dom'
import {} from './styles/global.css'
import Logo from './components/Logo.jsx'
import Link from './components/Link.jsx'

const logos = [
    require('./assets/electron.png'),
    require('./assets/react.png'),
    require('./assets/webpack.png')
]


export default class App extends Component {
    render() {
        const logosRender = logos.map( (logo, index) => {
            return <Logo key = {index} src = { logo } />
        })

        return (
            <div>
                {logosRender}

                <div className="hello">
                    <h1>Hello React!</h1>
                </div>

                <p>
                    If you are trying to build Electron apps using React, or you just
                    want to play around with them like me, feel free to use this
                    seed as a starting point.
                </p>

                <p>
                    Pay attention to how everything inside src/ are bundled
                    into build/, how global and scoped CSS work, how to compose
                    React components, or simply how Webpack changes relative
                    image paths to public paths after building.
                </p>

                <p>
                    Check out the docs for&nbsp;
                    <Link to='http://electron.atom.io/docs/'>Electron</Link>,&nbsp;
                    <Link to='https://facebook.github.io/react/docs/hello-world.html'>React </Link> and&nbsp;
                    <Link to='https://webpack.js.org/configuration/'>Webpack 2</Link>.
                    Customize this template as you wish by adding any fancy tool
                    you are used to. If you have any issue, please file an issue at this seed's&nbsp;
                    <Link to='https://github.com/pastahito/electron-react-webpack'>
                    repository</Link>.
                </p>
            </div>
        )
    }
}
