import React, { useState } from 'react'
import { Quizes } from '../Questions'
import Scorechild from './Scorechild'

const ScoreCard = ({arr,retake}) => {
    const [total,increasetotal]=useState(0)
    function tut(){
        increasetotal(prev => prev+1)
    }

  return (
    <>
        <div className='container'>
            <table className='table table-light table-striped table-hover'>
                <tr>
                    <th> Sr No.</th>
                    <th>Question</th>
                    <th>Choosed</th>
                    <th>Right</th>
                    <th>Marks</th>
                </tr>
                {arr.map((t,ind)=>
                    <Scorechild val={t} key={ind} ind={ind} totali={tut}/>
                )}
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{total}</td>
                </tr>
            </table>

            <button className='btn btn-primary  align-self-end' onClick={retake}>Retake</button>
        </div>
    </>
  )
}
export default ScoreCard
