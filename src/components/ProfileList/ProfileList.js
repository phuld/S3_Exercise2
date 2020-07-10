import React, { Component } from 'react'
import './Profile.scss'
import Menu from './Menu/Menu';
import MoveUp from './Actions/MoveUp/MoveUp';
import MoveDown from './Actions/MoveDown/MoveDown';
import AddItem from './Actions/AddItem/AddItem';
import DeleteItem from './Actions/DeleteItem/DeleteItem';
import AlertDelete from '../UI/AlertDelete/AlertDelete';
import EditField from '../UI/EditField/EditField';
import { connect } from 'react-redux';
import EditItem from './Actions/EditItem/EditItem';

class ProfileList extends Component {
    constructor(props) {
        super(props);
        this.scrollRef = React.createRef();
        this.state = {
            showDelete: false,
            showEdit: false
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { menus } = this.props
        if (prevProps.menus.length !== menus.length && menus.length > 6) {
            this.scrollRef.current.scrollTo(0, this.scrollRef.current.scrollHeight);
        }
    }

    toggleDeleteAlert = () => {
        this.setState(prevState => { return { showDelete: !prevState.showDelete } })
    }

    toggleEditField = () => {
        this.setState(prevState => {
            return {
                showEdit: !prevState.showEdit
            }
        })
    }

    render() {
        const { menus } = this.props
        const { showDelete, showEdit } = this.state
        return (
            <div className="thx-drawer flex">
                <div className="main-title">
                    Profile List
                        </div>
                <div id="profileWrapper" className="drawer-select flex">
                    <div
                        id="profileList"
                        className="scrollable"
                        ref={this.scrollRef}
                    >
                        <Menu menus={menus} />
                        <EditField
                            show={showEdit}
                            toggleEdit = {this.toggleEditField}/>
                    </div>
                    <div className="toolbar flex">
                        <AddItem />
                        <EditItem
                            onEdit={this.toggleEditField}/>
                        <DeleteItem onDel={this.toggleDeleteAlert} />
                        <MoveUp />
                        <MoveDown />
                    </div>
                    <AlertDelete show={showDelete} toggleDel={this.toggleDeleteAlert} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        menus: state.user.menus
    }
}



export default connect(mapStateToProps, null)(ProfileList);