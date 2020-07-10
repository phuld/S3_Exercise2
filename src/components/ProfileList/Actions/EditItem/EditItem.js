import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { showEdit, hideEdit, showClickOutside, hideClickOutside } from '../../../../redux/actions/ui'

const EditItem = (props) => {
    const { menus, onEdit } = props
    const hideList = ['default', 'game', 'movie', 'music']
    const activeItems = menus.filter(e => e.selected === true)
    const disabled = hideList.indexOf(activeItems[0].name) !== -1 ? true : false

    return (
        <div
            className={`icon edit ${disabled ? '' : 'show'}`}
            onClick={onEdit}
        >
        </div>
    )
}

EditItem.propTypes = {
    menus: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    return {
        menus: state.user.menus,
        isShowEdit: state.ui.isShowEdit,
        isClickOutside: state.ui.isClickOutside
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShowEdit: () => dispatch(showEdit()),
        onHideEdit: () => dispatch(hideEdit()),
        onHideClickOutside: () => dispatch(hideClickOutside()),
        onShowClickOutside: () => dispatch(showClickOutside())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditItem)