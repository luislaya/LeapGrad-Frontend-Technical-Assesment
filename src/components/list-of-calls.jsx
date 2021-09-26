import React, { useState } from 'react'
import 'regenerator-runtime/runtime'
import { FaPhoneAlt } from 'react-icons/fa'
import { FiVoicemail, FiPhoneMissed } from 'react-icons/fi'
import { BsFillCaretLeftFill } from 'react-icons/bs'
import ActivityDetail from './ActivityDetail.jsx'

const ListOfCalls = ({ calls }) => {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className='call-box'>
      <div className='column-icon icon'>
        {calls.call_type === 'missed' ? (
          <FiPhoneMissed className='missedcall-icon' />
        ) : calls.call_type === 'answered' ? (
          <FaPhoneAlt className='asnwered-icon' />
        ) : (
          <FiVoicemail />
        )}
      </div>
      <div className='column-call'>
        <p className='calls-from'>{calls.from}</p>
        {showDetails ? <ActivityDetail calls={calls} /> : null}
      </div>
      <div className='column-icon'>
        <button className='btn' onClick={() => setShowDetails(!showDetails)}>
          <BsFillCaretLeftFill />
        </button>
      </div>
    </div>
  )
}

export default ListOfCalls
