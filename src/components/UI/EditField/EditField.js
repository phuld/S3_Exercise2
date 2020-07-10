import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { hideEdit, showClickOutside, hideClickOutside } from '../../../redux/actions/ui';
import { editItem } from '../../../redux/actions/user';


class EditField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.wrapperRef = React.createRef();
        this.defaultTitle = "";
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside)
    }

    componentDidUpdate(prevProps, prevState) {
        const prevSelect = prevProps.menus.filter(e => e.selected === true)[0]
        const nowSelect = this.props.menus.filter(e => e.selected === true)[0]

        const oldIndex = prevProps.menus.indexOf(prevSelect);
        const newIndex = this.props.menus.indexOf(nowSelect);

        if (oldIndex !== newIndex) {
            this.defaultTitle = nowSelect.name;
        }

        if (this.props.show) {
            this.wrapperRef.current.focus()
            this.wrapperRef.current.select()
        }

        if (prevSelect.name !== nowSelect.name) {
            this.setState({
                text: nowSelect.name
            })
        }
    }

    handleChange = (e) => {
        let text = e.target.value;
        if (e.key === 'Enter') {
            if (text.trim() === '') {
                this.props.onEditItem(this.defaultTitle)
            } else {
                this.props.onEditItem(text)
            }
            this.props.onHideEdit()
        } else {
            this.props.onEditItem(text)
        }
        this.setState({
            text
        })
    }

    handleClickOutside = (event) => {
        this.props.onHideEdit()
        this.props.onHideClickOutside()
        const { target } = event
        const { show } = this.props
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target) && !target.classList.contains('edit') && show) {
            this.props.toggleEdit()
        }
    }

    render() {
        const { menus, show } = this.props
        const { text } = this.state
        const selectedItem = menus.filter(e => e.selected === true)
        const selectIndex = menus.indexOf(selectedItem[0])
        return (
            <input
                className={`profile-item ${show ? 'show' : ''}`}
                value={text}
                placeholder="Enter Profile Name"
                maxLength="25"
                style={{ top: 120 + 30 * (selectIndex - 4) }}
                ref={this.wrapperRef}
                onChange={this.handleChange}
                onKeyDown={this.handleChange}
            />
        )
    }
}

EditField.propTypes = {
    menus: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    return {
        menus: state.user.menus
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onHideEdit: () => dispatch(hideEdit()),
        onEditItem: (value) => dispatch(editItem(value)),
        onClickOutside: () => dispatch(showClickOutside()),
        onHideClickOutside: () => dispatch(hideClickOutside())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditField)