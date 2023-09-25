import React from 'react'

function Table({countriesArr}) {
  return (
    <div>
        <table className='table table-striped w-25 mx-auto'>
            <thead className='fw-bold'>
                <tr><td>Countries</td><td>Capital</td></tr>
            </thead>
            <tbody>
                {countriesArr.map((e,index)=> <tr key={index}><td>{e.country}</td><td>{e.city}</td></tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default Table