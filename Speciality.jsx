import React from 'react'
import {specialityData} from '../assets/assets'
import {Link} from 'react-router-dom'

const Speciality = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
        <h1 className='text-3xl font-medium'>Find by Speciality</h1>
        <p className='sm:1/3 text-center text-sm'>Simply Browse through our extensive Doctors,schedule your Appointment hassale-free</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {/* <button>All Specialties</button>
            <button>Family Law</button>
            <button>Criminal Law</button>
            <button>Business Law</button>
            <button>Healthcare Law</button>
            <button>Environmental Law</button>
            <button>Civil Law</button>
            <button>Real Estate Law</button>
            <button>Immigration Law</button>
            <button>Tax Law</button>
            <button>Employment Law</button>
            <button>Property Law</button>
            <button>Education Law</button>
            <button>Marriage & Family Law</button>
            <button>Military Law</button>
            <button>Conflict Resolution</button>
            <button>Psychology Law</button>
            <button>Forensic Law</button>
            <button>Veterans Law</button> */}
            {specialityData.map((item,index)=>(
                <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y[-10px] transition-all duration-500' key={index} to={`/Lawyer/${item.speciality}`}>
                    
                        <img className='w-16 sm:w-24 mb-2' src={item.image} alt=""/>
                        <p>{item.speciality}</p>
                       

                </Link>
            ))}

        </div>

    </div>
  )
}

export default Speciality