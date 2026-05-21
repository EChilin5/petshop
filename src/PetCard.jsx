import React from 'react'
import thunder from "./images/goldenthunder.jpg"
import "./PetCard.css"

const PetCard = () => {
  return (
    <div>
        <div className='card'>
            <div className="card-header">
                <div className='card-header-top'>
                    🐕 k9
                </div>               
                 <div className='card-header-bottom'>CodeName: Golden Thunder</div>

                <img className='card-img' src={thunder} alt="thunder"/>
            </div>
            <div className='card-bottom'>
                <div className='card-bottom-name'>
                    Max
                </div>
                <div className='card-bottom-breed'>Golden Retriever</div>
                <div className='card-bottom-specialty'>Specialty</div>
                <div className='card-bottom-info'>Explosive Detection & Coastal Infiltration</div>
                <div className='card-bottom-button'><button className='card-btn-pet'>Recruit Golden Thunder</button></div>
            </div>

        </div>
    </div>
  )
}

export default PetCard