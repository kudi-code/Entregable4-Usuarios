
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';

function App() {
  const [users, setUsers] = useState([])
  //Estado para guardar Axios
  const [userSelected, setUserSelected] = useState(null)
  //Estado para guardar el user seleccionado

  const getUsers = () =>{
    //es el axios.get
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

 console.log(userSelected)


  return (
    <div className="App">
      <UsersForm
      getUsers={getUsers}
      userSelected={userSelected}
      setUserSelected={setUserSelected}></UsersForm>


      <UsersList users={users}
      setUserSelected={setUserSelected}
      deleteUser={deleteUser}></UsersList>

    </div>
  );
}

export default App;
