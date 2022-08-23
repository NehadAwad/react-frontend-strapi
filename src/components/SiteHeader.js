

import React from 'react'
import { Link } from 'react-router-dom'

export default function SiteHeader() {
  return (
    <div className="site-header">
      <Link to="/"><h1>Restaurants</h1></Link>
      <Link to="/create"><h1>Create Restaurants</h1></Link>
    </div>
  )
}