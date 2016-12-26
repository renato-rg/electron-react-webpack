import React, {Component}  from 'react'
import styles from '../styles/local.css'

export default class Logo extends Component {
    render() {
        return (<img src={this.props.src} className={styles.logo}/>)
    }
}
