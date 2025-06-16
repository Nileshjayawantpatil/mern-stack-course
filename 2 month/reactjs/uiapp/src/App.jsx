import { useState } from "react"


function App() {
  const [name, setName] = useState()
  const [showName, setShowName] = useState(false);



  const handleonChange = (e) => {
    console.log(e.target.value);

    setshowName(e.target.value);


  };
  const handleSumit = () => {
    setshowName(true);

  };




  return (
    <>
      <input name="name"
        placeholder="Enter your name"
        onChange={handleonChange} />
      <Button onClick={handleSumit}>Sumit</Button>





    </>
  )

}

export default App;

