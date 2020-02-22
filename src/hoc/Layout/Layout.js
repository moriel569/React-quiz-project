import React, { Component } from 'react'
import classes from './Layout.module.css'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'


class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout}>



                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout

