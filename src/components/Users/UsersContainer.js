import {connect} from "react-redux";
import React from "react";
import axios from "axios";
import Users from "./Users";
import {setUsers} from "../../redux/reducers/usersReducer";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:5000/users`)
            .then(response => {
                let users = response.data.users;
                this.props.setUsers(users);
            });
    }

    render() {
        return <Users users={this.props.users} />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

export default connect(mapStateToProps,{setUsers})(UsersContainer);