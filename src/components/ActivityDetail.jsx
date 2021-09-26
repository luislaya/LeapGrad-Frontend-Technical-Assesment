import React from 'react'

import 'regenerator-runtime/runtime'

const ActivityDetail = ({ calls }) => {
  const date = new Date(calls.created_at)
  let time = date.toLocaleTimeString()

  return (
    <div className='call_details'>
      <p>{calls.to}</p>
      <p> tried to call on: {calls.via}</p>
      <p>{calls.is_archived}</p>
      <p>Rang for {calls.duration} secs</p>
      <p>called at {time}</p>
    </div>
  )
}

export default ActivityDetail
