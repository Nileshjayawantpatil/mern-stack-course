import { useState } from "react"


function App() {
  const [name, setName] = useState()
  const [showName, setshowName] = useState(false)

  const handleonChange = (e) => {

    console.log(e.target.value)

    setName(e.target.value)



  }
  const handleSumit = () => {

    setshowName(true);


  }






  return (
    <>

      <input type="name" Placeholder="Enter your name" onChange={handleonChange} />
      <Button onClick={handleSumit} Sumit></Button>
      {
        showName && <h1>{name}</h1>
      }






    </>
  )

}

export default App

