import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import Swal from "sweetalert2"
import axios from 'axios';


export default  function Homepage() {
  const { loading, error, data } = useFetch('https://starpy-backend.herokuapp.com/api/restaurents?populate=*&sort=createdAt:DESC')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  const arrayData = data.data;
  console.log(data)

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete('https://starpy-backend.herokuapp.com/api/restaurents/'+id)
        .then(()=>{
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          ).then(() => {
            window.location.reload()
          })
        })
      }
    })
  }

  return (
    <div>
      {arrayData.map(serverData => (
        <div key={serverData.id} className="serverData-card">
          
          <img width={200} height={200} src={'https://starpy-backend.herokuapp.com'+serverData.attributes.image?.data?.attributes.url} /> 
          <h2>{serverData.attributes.title}</h2>
          <p>Location : {serverData.attributes.location}</p>
          <Link to={`/restaurents/${serverData.id}`}>Details</Link> <Link to={`/edit/${serverData.id}`}>Edit</Link> <button className="bootstrap-btn" onClick={() => handleDelete(serverData.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}