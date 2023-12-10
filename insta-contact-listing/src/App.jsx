import { useState } from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import ShowUser from './ShowUser'
import AddUser from './AddUser'

function App() {
  const [userList, setUserList] = useState([
    {
      id: 1,
      name: "Ajio",
      instaId: "aj_9809"
    },
    {
      id: 2,
      name: "Sheela",
      instaId: "Sheela_2384"
    },
  ])

  const deleteUserHandler = (userId) => {
    const updatedUsers = userList.filter(
      (user) => user.id !== userId
    );
  
    // Reassign IDs after deletion
    const reindexedUsers = updatedUsers.map((user, index) => ({
      ...user,
      id: index + 1,
    }));
  
    setUserList(reindexedUsers);
  };

  const addUserHandler = (newUser) => {
    newUser.id = userList.length > 0 ? userList[userList.length - 1].id + 1 : 1;
    setUserList([...userList, newUser]);
  }

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<ShowUser userList={userList} deleteUserHandler={deleteUserHandler}/>}/>
        <Route exact path='/add' element={<AddUser addUserHandler={addUserHandler}/>}/>
      </Routes>
    </Router>
  )
}

export default App
