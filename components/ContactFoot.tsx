import React from 'react'
import Backgroun from './ui/Backgroun'

const ContactFoot = () => {
  return (
    <div className='glass card'>
        <article className='grid place-content-center bg-base-300  p-5 py-24'>
        <h3 className="text-2xl md:text-4xl text-base-content  max-w-prose m-auto text-center text-balance">
            અમારી સેવાઓને ધ્યાનમાં લેવા બદલ ફરી એકવાર તમારો આભાર. અમે ટૂંક
            સમયમાં તમારી પાસેથી સાંભળવા માટે આતુર છીએ!
          </h3>
        </article>
        <article className='text-center py-24'>
            <h1 className='link text-3xl link-primary  md:text-5xl'>Book Now</h1>
        </article>
        <Backgroun/>
    </div>
  )
}


export default ContactFoot