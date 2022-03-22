
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';

function App() {
  const [users, setUsers] = useState([])
  //Estado para guardar Axios
  const [userSelected, setUserSelected] = useState(null)
  //Estado para guardar el userSelected
  const [showForm, setForm] = useState(false)

  //Estado para guardar el user seleccionado

  const getUsers = () =>{
    //es el axios.get
    setUserSelected(null)
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then(res => setUsers(res.data))
  }

  useEffect(() => {
    getUsers()
  }, [])

  const deleteUser = (user) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${user.id}/`)
    .then(() => getUsers())
  }

// console.log(userSelected2)


  return (
    <div className="App">
      <button id='addUser' onClick={() => {
        setForm(!showForm)
        setUserSelected(null)
      } }
      className={showForm===true ? "addUser--red" : "addUser--green" }>{showForm === true ? "Close form" : "Add User"}</button>
      {showForm ===true ? <UsersForm
      getUsers={getUsers}
      userSelected={userSelected}      
      setForm={setForm}
      setUserSelected={setUserSelected}></UsersForm>
      : <span></span>}
      


      <UsersList users={users}
      setUserSelected={setUserSelected}
      setForm={setForm}      
      deleteUser={deleteUser}></UsersList>

    </div>
  );
}

export default App;
