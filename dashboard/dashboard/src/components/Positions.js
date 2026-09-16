import React from 'react'
import { positions } from '../Data/Data'
const Positions = () => {
  return (
    <>
    <h3 className='title'>Positions ({positions.length})</h3>
    <div className='order-table' style={{overflowX: 'auto', width: '100%'}}>
       <table style={{width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed', display: 'table'}}>
         <colgroup >
         <col style={{ textAlign: 'left'}} />
                <col style={{ width: '20%' }} />
                <col style={{ width: '8%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '12%' }} />
                </colgroup>
              <thread style={{ display: 'table-header-group'}}>
              <tr style={{ display: 'table-row'}}>
                <th style={{ width: '20%', textAlign: "left" }}>Product</th>
                <th style={{ width: '20%', textAlign: "right" }}>Instrument</th>
                <th style={{ width: '10%', textAlign: "right" }}>Qty.</th>
                <th style={{ width: '15%', textAlign: "right" }}>Avg. cost</th>
                <th style={{ width: '15%', textAlign: "right" }}>LTP</th>
                <th style={{ width: '15%', textAlign: "right" }}>P&L</th>
                <th style={{ width: '12%', textAlign: "right" }}>Chg.</th>
              </tr>
              </thread>
              <tbody style={{ display: 'table-row-group'}}>
              {positions.map((stock, index)=>{
                const curValue = stock.price * stock.qty;
                const isProfit = curValue - stock.avg*stock.qty >= 0.0;
                const  profClass = isProfit ? "profit" : "loss";
                const dayClass = stock.isLoss ? "loss" : "profit";
      
                return(
                  <tr key={index} style={{ display: 'table-row'}}>
                <td style={{  textAlign: "left" }}>{stock.product}</td>
                <td style={{  textAlign: "right" }}> { stock.name}</td>
                <td style={{  textAlign: "right" }}> {stock.qty }</td>
                <td style={{   textAlign: "right" }}>{Number(stock.avg).toFixed(2)}</td>
                <td style={{  textAlign: "right" }}>{Number(stock.price).toFixed(2)}</td>
             
                <td className={profClass} style={{  textAlign: "right" }}>{(curValue - stock.avg * stock.qty).toFixed(2)}</td>
                <td className={dayClass} style={{  textAlign: "right" }}>{stock.day}</td>
              </tr>
                );
              })}
              </tbody>
            </table>
    </div>
    </>
  )
}

export default Positions