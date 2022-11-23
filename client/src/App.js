import React, {useEffect, useState} from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
    
  }, [])

  return (
    <div>
      <button>
        Login With Google
      </button>
      <button>
        Login With Spotify
      </button>

    </div>
  )
}

export default App
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