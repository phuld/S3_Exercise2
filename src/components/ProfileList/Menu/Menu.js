import React, { Fragment } from 'react'
import MenuItem from './MenuItem/MenuItem'

const Menu = (props) => {
    const { menus } = props
    const displayMenus = menus.map((item, index) => (
        <MenuItem
            key={index}
            item={item}
        />
    ))
    return (
        <Fragment>
            {displayMenus}
        </Fragment>
    )
}


export default Menu