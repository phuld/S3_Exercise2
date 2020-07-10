import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const DeleteItem = (props) => {
    const { menus } = props
    const hideList = ['default', 'game', 'movie', 'music']
    const activeItems = menus.filter(e => e.selected === true)
    const disabled = hideList.indexOf(activeItems[0].name) !== -1 ? true : false
    return (
        <div className={`icon delete ${disabled ? null : 'show'}`} onClick={props.onDel}></div>
    )
}

DeleteItem.propTypes = {
    menus: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    return {
        menus: state.user.menus
    }
}

export default connect(mapStateToProps, null)(DeleteItem)