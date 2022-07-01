import React from 'react'
import { ReactNode } from 'react'
import hello from './index.module.css'

export default class Hello extends React.Component {
    render(): ReactNode {
        return <h2 className={hello.title}>Hello,React!!!!</h2>
    }
}
