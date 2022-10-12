import React from 'react'

const GlassesList = ({glasses, onSelect}) => {
  return (
    <div className='container bg-white'>
        <div className='row'>
            {glasses.map((glass) =>(
                <div key={glass.id} className='col-2 py-2'>
                    <button type="button" className='' onClick={()=> onSelect(glass)}>
                    <img src={glass.url} alt={glass.name} width="100%"/>
                    </button>
                </div>
            ))}  
        </div>
    </div>
  )
}

export default GlassesList