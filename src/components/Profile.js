
import React, {useState} from 'react'

const Profile = () => {
    var [name,setName]=useState("Tosen")
    const changeName= () => {
        setName(
            name = "Tom")
    }    
  return (
    <div>Logged in as {name}
      <button onClick={changeName} className='btn btn-success'>Login</button>
      </div>
  
    
  )
}

export default Profile