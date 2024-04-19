import React, { useEffect, useState } from 'react'

const Test = () => {
  const [data, setData] = useState()
  const url = "http://localhost:3000/data"


  useEffect(()=>{
    fetchData()
  }, [])

  const fetchData = async () => {
    await fetch(url)
    .then(data => data.json())
    .then(data => setData(data.cards[1].card.card.gridElements.infoWithStyle.restaurants))
  }
  return (
    <div>Test</div>
  )
}

export default Test