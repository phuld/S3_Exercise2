import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { moveUp } from '../../../../redux/actions/user'

const MoveUp = (props) => {
    const { menus, onMoveUp } = props
    const disabled = menus[0].selected === true ? true: false
    return (
        <div className={`icon up ${disabled ? 'disabled': null}`} onClick={onMoveUp}></div>
    )
}

MoveUp.propTypes = {
    menus: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    return {
        menus: state.user.menus
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onMoveUp: () => dispatch(moveUp())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoveUp)
