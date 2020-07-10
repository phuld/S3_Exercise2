import React from 'react'
import { connect } from 'react-redux'
import { changeMenuItem } from '../../../../redux/actions/user'

const MenuItem = (props) => {
    const { item } = props
    const defaultIcons = ['game', 'movie', 'music']
    return (
        <div
            className={`profile-item ${defaultIcons.indexOf(item.name) === -1 ? 'default': item.name} no-edit ${item.selected === true ? 'active' : null}`}
            onClick={() => props.onChangeMenuItem(item)}
        >{item.name}</div>
    )
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeMenuItem: (item) => dispatch(changeMenuItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem)