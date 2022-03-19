import React from "react";
import { useState, useEffect } from "react";

const UsersList = ({users, setUserSelected, deleteUser}) => {


    return(
        <div className="UsersList">
            {
                users.map((user) => {
                    return(
                        <div key={user.email}>
                            <h3>{user.first_name} {user.last_name}</h3>
                            <p className="email">{user.email}</p>
                            <h4 className="birthday">{user.birthday}</h4>
                            <button onClick={() => deleteUser(user)}>Borrar</button>
                            <button onClick={() => setUserSelected(user)} >Editar</button>
                        </div>
                    )
                })
            }

        </div>
    )

}

export default UsersList
