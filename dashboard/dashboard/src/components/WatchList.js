import React, { useState } from 'react'
import { Tooltip, Grow} from '@mui/material';
import { watchlist } from '../Data/Data'

const Watchlist = () => {

  return (
    <div className='watchlist-container'>
      <div className='search-container' style={{ position: 'relative', display: 'flex', alignItems: 'center', boxSizing: 'border-box'}}>
        <input type='text'
         name='search'
          id='search'
           placeholder='Search eg: infy, bse, nifty fut weekly, gold mcx' 
           className='search'
           style={{
            width: '100%',
            boxSizing: 'border-box',
            padding: '5px 12px',
            border: 'transparent',
            color: '#fff',
            outline: 'none',
           }}
            />

          <span className='counts'>{watchlist.length} / 50</span>
      </div>
      <ul className='watchlist-items'>
        {watchlist.map((stock, index) => {
          <WatchListItem key={index} stock={stock} />
})}
      </ul>
    </div>
  )
}

export default Watchlist

const WatchListItem = ({ stock }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const handleMouseEnter = (e) => {
    setShowTooltip(true);
  }
  const handleMouseLeave = (e) => {
    setShowTooltip(false);
  }
  return (
    <li className='watchlist-item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
     <div className='item'>
      <p className={stock.isDown ? 'down' : 'up'}>{stock.name}</p>
     </div>
    </li>
  )
}