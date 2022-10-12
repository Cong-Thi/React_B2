import React from 'react'

const GlassesDetail = ({glass}) => {
    if(!glass){
        return null;
    }
  return (
    <>  
    <img className='glass' src={glass.url} alt={glass.name} width="50%"/>
    <div class="card-img-overlay">
        <h4 class="card-title">{glass.name}</h4>
        <p class="card-text">{glass.desc}</p>
    </div>
  </>
  )
}

export default GlassesDetail