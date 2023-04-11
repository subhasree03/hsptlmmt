import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const RecordCard = (props) => {
  const hsptlmmt = props.hsptlmmt



  return (
    <div className='card-container'>
      <img
        src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
        alt='Records'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={ `/show-record/${hsptlmmt._id}` }>
            {hsptlmmt.name}  
          </Link> 
        </h2>
        <h3>{hsptlmmt.age}</h3>
        <p>{hsptlmmt.disease}</p>
      </div>
    </div>  
  )
}

export default RecordCard;