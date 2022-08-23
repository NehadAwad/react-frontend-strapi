import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

export default  function Homepage() {
  const { loading, error, data } = useFetch('http://starpy-backend.herokuapp.com/api/restaurents?populate=*')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  const arrayData = data.data;
  console.log(data)

  return (
    <div>
      {arrayData.map(serverData => (
        <div key={serverData.id} className="serverData-card">
          
          <img width={200} height={200} src={'https://starpy-backend.herokuapp.com'+serverData.attributes.image?.data?.attributes.url} /> 
          <h2>{serverData.attributes.title}</h2>
          <p>Location : {serverData.attributes.location}</p>
          <Link to={`/restaurents/${serverData.id}`}>Details</Link> <Link to={`/edit/${serverData.id}`}>Edit</Link> <Link to={`/delete/${serverData.id}`}>Delete</Link>
        </div>
      ))}
    </div>
  )
}