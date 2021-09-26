import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import Header from './Header.jsx'
import ListOfCalls from './components/list-of-calls.jsx'
const url = 'https://aircall-job.herokuapp.com/activities'

const App = () => {
  const [call, setCall] = useState([])

  async function getCall() {
    try {
      const response = await fetch(`${url}`)
      const data = await response.json()
      setCall(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCall()
  }, [])

  let duplicates = []

  const dup = (value) => {
    if (!duplicates[value]) {
      duplicates[value] = 1
    } else {
      value = ''
    }
    return value
  }

  if (call.length > 0) {
    return (
      <div className='container'>
        <Header />
        <div className='container-view'>
          {call.map((calls, index) => {
            const d = new Date(calls.created_at)
            let date = d.toLocaleDateString()
            let n = dup(calls.from)
            return (
              <div key={index}>
                <h2 className='date'>{dup(date)}</h2>
                <ListOfCalls key={calls.id} calls={calls} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
  return <p>loading</p>
}

ReactDOM.render(<App />, document.getElementById('app'))

export default App
