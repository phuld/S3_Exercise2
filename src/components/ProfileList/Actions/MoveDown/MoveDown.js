import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { moveDown } from '../../../../redux/actions/user'

const MoveDown = (props) => {
    const { menus, onMoveDown } = props
    const disabled = menus[menus.length - 1].selected === true ? true : false
    return (
        <div className={`icon down ${disabled? 'disabled': null}`} onClick={onMoveDown}></div>
    )
}

MoveDown.propTypes = {
    menus: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    return {
        menus: state.user.menus
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onMoveDown: () => dispatch(moveDown())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoveDown)
