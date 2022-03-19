import React from "react";
import { useState , useEffect} from "react";
import axios from "axios";

const UsersForm = (getUsers, userSelected, setUserSelected) => {
    const [first_name, setFirst_Name] =useState("")
    const [last_name, setLast_name] =useState("")
    const [email, setEmail] =useState("")
    const [password, setPassword] =useState("")
    const [birthday, setBirthday] =useState("")
    console.log(userSelected)

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


    const submit = (e) => {
        e.preventDefault()
        const user = {
            first_name,last_name,email,password,birthday
        }
        if(!userSelected){
            // console.log("put")
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`,user)
            .then(() => {
                getUsers()
                cleanForm()
                setUserSelected(null)})
                console.log("put realizado")
        }
        else{
         axios.post("https://users-crud1.herokuapp.com/users/",user)
         .then(() => {
            getUsers()
            cleanForm()
            console.log("post realizado")
         })
        }

    }
    return(
        <form onSubmit={submit}>
        <div className="input-container">
                <label htmlFor="first_name">First Name</label> <br/>
                <input type="text"
                    onChange={e => setFirst_Name(e.target.value)}
                    //Si hay un cambio en el input, atrapa un evento y setea el valor con el valor del evento
                    value={first_name}
                    className="first_name" />
            </div>
            <div className="input-container">
                <label htmlFor="last_name">Last Name</label> <br/>
                <input type="text"
                    onChange={e => setLast_name(e.target.value)}
                    value={last_name}
                    className="last_name" />
            </div>
            <div className="input-container">
                <label htmlFor="email">Email</label> <br/>
                <input type="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    className="email" />
            </div>
            <div className="input-container">
                <label htmlFor="password">password</label> <br/>
                <input type="password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    className="password" />
            </div>
            <div className="input-container">
                <label htmlFor="birthday">birthday</label> <br/>
                <input type="date"
                    onChange={e => setBirthday(e.target.value)}
                    value={birthday}
                    className="birthday" />
            </div>
            <button>Submit</button>
           
            </form>
    )


}
export default UsersForm