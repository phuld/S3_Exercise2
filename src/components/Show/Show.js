import React from 'react'
import { connect } from 'react-redux'

const Show = (props) => {
    const { menus } = props
    const activeItem = menus.filter(e => e.selected === true)
    return (
        <div className="thx-window">
            <div className="sub-title flex">
                <h1 id="eqTitle" className="eq-title">{activeItem[0].name}</h1>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        menus: state.user.menus
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)