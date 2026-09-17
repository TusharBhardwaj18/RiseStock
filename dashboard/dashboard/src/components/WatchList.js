import React, { useState } from 'react'
import { Tooltip, Grow} from '@mui/material';
import { watchlist } from '../Data/Data'
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const Watchlist = () => {

  return (
    <div className='watchlist-container' style={{ width: '32vw',minWidth:'32vw',maxWidth:'32vw',borderRight:'1px solid #333', boxSizing: 'border-box'}}>
      <div className='search-container' style={{ position: 'relative', display: 'flex', alignItems: 'center', boxSizing: 'border-box', width: '100%', borderBottom: '1px solid #333'}}>
        <input type='text'
         name='search'
          id='search'
           placeholder='Search eg: infy, bse, nifty fut weekly, gold mcx' 
           className='search'
           style={{
            flex:'1',
            padding: '12px',
            background: 'transparent',
            border: 'none',
            fontSize: '13px',
            color: '#fff',
            outline: 'none',
           }}
            />

          <span className='counts' style={{
            fontSize:'12px',
            color:'#777',
            marginLeft:'10px',
            whiteSpace:'nowrap'
          }}>{watchlist.length} / 50</span>
      </div>
      <ul className='watchlist-items'>
        {watchlist.map((stock, index) => {
          return(
            <WatchListItem key={index} stock={stock} />
          )
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
      <div className='itemInfo'>
        <span className='percent'>{stock.percent}</span>
        {stock.isDown ? (
          <KeyboardArrowDown className='down' />
        ) : (
          <KeyboardArrowUp className='up' />
        )}
        <span className='price'>{stock.price}</span>
      </div>
     </div>
    </li>
  )
}