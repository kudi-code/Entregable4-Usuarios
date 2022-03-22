import React from "react";

const UsersList = ({users, setUserSelected, deleteUser, setForm}) => {


    return(
        <div className="UsersList">
            {
                users.map((user) => {
                    return(
                        <div key={user.email} className="UserCard">
                            <div className="userCard--text">
                                <h3>{user.first_name} {user.last_name}</h3>
                                <p className="email">{user.email}</p>
                                <h4 className="birthday">{user.birthday}</h4>
                            </div>
                            <div className="UserCard--buttons">
                                <button id="trash" onClick={() => {
                                    deleteUser(user)
                                }}><i className="fas fa-trash"></i></button>
                                <a href="#addUser">
                                <button id="pencil" onClick={() => 
                                    {setUserSelected(user)                                        
                                    setForm(true)
                                }} ><i className="fas fa-edit"></i></button>
                                </a>
                             </div>
                        </div>
                    )
                })
            }

        </div>
    )

}

export default UsersList
