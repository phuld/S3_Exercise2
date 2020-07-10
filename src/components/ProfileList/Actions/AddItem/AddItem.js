import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../../../redux/actions/user'

const AddItem = props => {
    return (
        <div className="icon add" onClick={props.onAddItem}></div>
    )
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddItem: () => dispatch(addItem())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)