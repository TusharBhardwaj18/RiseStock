import React from 'react'
import { holdings } from '../Data/Data'

const Holdings = () => {
  return (
    <>
    <div className='holdings-container' />
    <h3 className='title'> Holdings ({holdings.length}) </h3>
    <div className='order-table'>
      <table>
        <thread>
        <tr>
          <th style={{ width: '20%', textAlign: 'left'}}>Instrument</th>
          <th style={{ width: '20%', textAlign: 'right'}}>Qty.</th>
          <th style={{ width: '20%', textAlign: 'right'}}>Avg. cost</th>
          <th style={{ width: '20%', textAlign: 'right'}}>LTP</th>
          <th style={{ width: '20%', textAlign: 'right'}}>Cur. val</th>
          <th style={{ width: '20%', textAlign: 'right'}}>P&L</th>
          <th style={{ width: '20%', textAlign: 'right'}}>Net chg.</th>
          <th style={{ width: '20%', textAlign: 'right'}}>Day chg.</th>
        </tr>
        </thread>
        <tbody>
        {holdings.map((stock, index)=>{
          const curValue = stock.price * stock.qty;
          const isProfit = curValue - stock.avg*stock.qty >= 0.0;
          const  profClass = isProfit ? "profit" : "loss";
          const dayClass = stock.isLoss ? "loss" : "profit";

          return(
            <tr key={index} >
          <td style={{ textAlign: 'left'}}>{stock.name}</td>
          <td style={{ textAlign: 'right'}}> {stock.Qty || stock.name}</td>
          <td style={{ textAlign: 'right'}}>{Number(stock.avg).toFixed(2)}</td>
          <td style={{ textAlign: 'right'}}>{Number(stock.price).toFixed(2)}</td>
          <td style={{ textAlign: 'right'}}>{Number(curValue).toFixed(2)}</td>
          <td className={profClass} style={{ textAlign: 'right'}}>{(curValue - stock.avg * stock.qty).toFixed(2)}</td>
          <td className={profClass} style={{ textAlign: 'right'}}>{stock.net}</td>
          <td className={dayClass} style={{ textAlign: 'right'}}>{stock.day}</td>
        </tr>
          );
        })}
        </tbody>
      </table>
    </div>
    <div className='row mt-4 stats-row'>
      <div className='col'>
        <h5 className='text-warning'>29,875.<span>55</span>
        </h5>
        <p>Total investment</p>
      </div>
      <div className='col'>
        <h5 className='text-warning'>
          31,428.<span>95</span>
        </h5>
        <p>Current value</p>
      </div>
      <div className='col'>
        <h5 className='profit'>1,553.40 <span>(+5.20%)</span>
        </h5>
        <p>P&L</p>
      </div>
    </div>
    </>
    
  )
}

export default Holdings