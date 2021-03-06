import React, { Component } from 'react'
import './AlertDelete.scss'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteItem } from '../../../redux/actions/user';

class AlertDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.wrapperRef = React.createRef()
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside)
    }

    handleClickOutside = (e) => {
        const { target } = e
        const { show } = this.props
        if ((!this.wrapperRef.current.contains(target) && !target.classList.contains('delete') && show)) {
            this.props.toggleDel()
        }
    }

    onDeleteItem = () => {
        this.props.onDeleteItem()
        this.props.toggleDel()
    }

    render() {
        const { menus } = this.props
        const selectedItem = menus.filter(item => item.selected === true)
        return (
            <div className={`profile-del alert flex ${this.props.show ? 'show' : ''}`} ref={this.wrapperRef}>
                <div className="title">{`Delete ${selectedItem[0].name}`}</div>
                <div className="body-text t-center" id="delName">{selectedItem[0].name}</div>
                <div className="thx-btn" id="cfmDelete" onClick={this.onDeleteItem}>delete</div>
            </div>
        );
    }
}


AlertDelete.propTypes = {
    isShowDelAlert: PropTypes.bool.isRequired,
    menus: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    return {
        menus: state.user.menus
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteItem: () => dispatch(deleteItem())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AlertDelete)