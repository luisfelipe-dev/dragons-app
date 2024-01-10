import axios from 'axios'
import React, { useEffect, useState } from 'react'

import LoginPage from '@/templates/Login'

// import DragonDetailsPage from './components/DragonDetailsPage'
// import DragonFormPage from './components/DragonFormPage'
// import DragonListPage from './components/DragonListPage'

const API_URL = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon'

export function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  // const [username, setUsername] = useState('')
  // const [dragons, setDragons] = useState([])
  // const [selectedDragon, setSelectedDragon] = useState(null)

  // useEffect(() => {
  //   if (loggedIn) {
  //     // Fetch dragons if logged in
  //     axios.get(API_URL).then((response) => {
  //       setDragons(response.data)
  //     })
  //   }
  // }, [loggedIn])

  // const handleLogin = (user) => {
  //   setLoggedIn(true)
  //   setUsername(user)
  // }

  // const handleLogout = () => {
  //   setLoggedIn(false)
  //   setUsername('')
  // }

  // const handleRemoveDragon = (id) => {
  //   axios.delete(`${API_URL}/${id}`).then(() => {
  //     setDragons((prevDragons) =>
  //       prevDragons.filter((dragon) => dragon.id !== id),
  //     )
  //   })
  // }

  // const handleChangeDragon = (id) => {
  //   const dragon = dragons.find((d) => d.id === id)
  //   setSelectedDragon(dragon)
  // }

  // const handleSubmitDragon = (newDragon) => {
  //   axios.post(API_URL, newDragon).then((response) => {
  //     setDragons((prevDragons) => [...prevDragons, response.data])
  //   })
  // }

  return (
    <div>
      {loggedIn ? (
        <div>
          <h1>Welcome, {10}!</h1>
          {/* <button onClick={handleLogout}>Logout</button>
          <DragonListPage
            dragons={dragons}
            onRemoveDragon={handleRemoveDragon}
            onChangeDragon={handleChangeDragon}
          />
          {selectedDragon && <DragonDetailsPage dragon={selectedDragon} />}
          <DragonFormPage onSubmit={handleSubmitDragon} /> */}
        </div>
      ) : (
        <LoginPage onLogin={() => console.log('oi')} />
      )}
    </div>
  )
}
