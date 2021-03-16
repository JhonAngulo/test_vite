import React, { useState } from 'react'
import './App.css'
const info = [
  {
    id: 1,
    name: 'Zapato',
    check: false
  },
  {
    id: 2,
    name: 'Camisa',
    check: false
  },
  {
    id: 3,
    name: 'Corbata',
    check: false
  },
]


function App() {
  const [state, setState] = useState(info)
  const [filter, setFilter] = useState([])

  const handleClick = () => {

    let filter = state.filter((item) => item.check === true)
    
    const orderData = [...filter].sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })

    setFilter(orderData)
 
  }

  const handleSelect = (id) => {
    state.map((item) => {
      if (item.id === id) {
        item.check = !item.check
      }
      return item
    })
  }
 
  return (
    <div className="App">
        <ul>
          {
            state.map(({ id, name, check}) => (
              <li key={id} >
                <a href="#">{name}</a>
                <input type="checkbox" defaultChecked={check ? true : false} onClick={() => handleSelect(id)} />
              </li>
            ))
          }
        </ul>
        <p>
          <button onClick={handleClick}>
            Ordenar
          </button>
        </p>

        <ul>
          {
            filter.map(({ id, name}) => (
              <li key={id} >
                <a href="#">{name}</a>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default App
