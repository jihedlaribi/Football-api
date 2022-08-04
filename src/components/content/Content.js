import React, { useState } from 'react'
import Leagues from '../leagues/Leagues';
import RapidApi from '../rapid api/RapidApi';
import Standings from '../strandings/Standings';
import './content.css'
const Content = () => {
  const [active, setActive] = useState(true);

  return (
    <div className='content-container'>
      <div className="tabs">
        <div className="tab-leagues" onClick={() => setActive(true)}>
          <h2 style={{color: active ? "orange" : null}}>Leagues</h2>
        </div>
      { /* <div className="tab-standings"  onClick={() => setActive(false)}>
          <h2 style={{color: !active ? "orange" : null}}>Standings</h2>
  </div>*/}
      <div className="tab-standings"  onClick={() => setActive(false)}>
          <h2 style={{color: !active ? "orange" : null}}>Rapid api</h2>
        </div>
      </div>
{active ? <Leagues/> : <RapidApi/>}
  
  
  
      
       </div>
  )
}

export default Content