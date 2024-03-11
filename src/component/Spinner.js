import React from 'react'
import load from './load.gif'

const Spinner = () => {
    return (
        <div className='text-center'>
            <img src={load} style={{ width: "5rem", heigth: "4rem" }} alt='img' className="my-3" />
        </div>
    )
}
export default Spinner