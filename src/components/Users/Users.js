import React from "react";
import './Users.css';

const Users = (props) => {
  return (
      <div className={'Users'}>
          {props.users.map(user => <div>{user.nameUser}</div>)}
      </div>
  )
}

export default Users