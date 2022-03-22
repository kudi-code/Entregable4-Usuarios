import React from "react";
import { useState , useEffect} from "react";
import axios from "axios";

const UsersForm = ({getUsers, userSelected, setUserSelected, setForm}) => {
    const [first_name, setFirst_Name] =useState("")
    const [last_name, setLast_name] =useState("")
    const [email, setEmail] =useState("")
    const [password, setPassword] =useState("")
    const [birthday, setBirthday] =useState("")

    const cleanForm = () => { //Limpia el Form
        setFirst_Name("")
        setLast_name("")
        setEmail("")
        setPassword("")
        setBirthday("")
    }
    //Si hay un cambio en userSelected
    useEffect(() => {
        if(userSelected){
            setFirst_Name(userSelected.first_name)
            setLast_name(userSelected.last_name)
            setEmail(userSelected.email)
            setPassword(userSelected.password)
            setBirthday(userSelected.birthday)            
        }
    },[userSelected])

    useEffect (() => {
    },[])

    const submit = (e) => {
        e.preventDefault()
        const user = {
            first_name,last_name,email,password,birthday
        }
        if(userSelected){
            // console.log("put")
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`,user)
            .then(() => {
                setUserSelected(null)})
                console.log("put realizado")
        }
        else{
         axios.post("https://users-crud1.herokuapp.com/users/",user)
         .then(() => {
            console.log("post realizado")
        getUsers()

         })
        }        
        getUsers()
        cleanForm()
        setForm(false)

    }
    return(
        <form className="userForm" onSubmit={submit}>
        <h2>{userSelected !==null ? "Edit User" : "New User"}</h2>
        
                {/* <label htmlFor="first_name">First Name</label> <br/> */}
                <i className="fas fa-user"></i>
                <input type="text"
                    onChange={e => setFirst_Name(e.target.value)}
                    //Si hay un cambio en el input, atrapa un evento y setea el valor con el valor del evento
                    value={first_name}
                    id="first_name"
                    placeholder="first name" />            
                {/* <label htmlFor="last_name">Last Name</label> <br/> */}
                <input type="text"
                    onChange={e => setLast_name(e.target.value)}
                    value={last_name}
                    id="last_name"
                    placeholder="last name" />
                    <br />
                <i class="fas fa-envelope-open-text"></i>

                {/* <label htmlFor="email">Email</label> <br/> */}
                <input type="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    className="email"
                    placeholder="email" />
                    <br />
                <i class="fas fa-lock"></i>            
                {/* <label htmlFor="password">password</label> <br/> */}
                <input type="password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    className="password"
                    placeholder="password" />
                    <br />            
                <i class="fas fa-calendar-day"></i>
                {/* <label htmlFor="birthday">birthday</label> <br/> */}
                <input type="date"
                    onChange={e => setBirthday(e.target.value)}
                    value={birthday}
                    className="birthday" />
                    <br />
                <div className="userForm--button">
                <button>Submit</button>

                </div>
            
           
            </form>
    )


}
export default UsersForm