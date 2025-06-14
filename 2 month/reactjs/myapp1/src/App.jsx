import { useState } from "react"


function App() {
  const [name, setName] = useState() //Hook 1
  const [ShowName, setShowName] = (false);


  const handleonChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);

  };

  const handleSumit = () => {
    setShowName(true);
  }





  return (
    <>
      <input name="name" placeholder="Enter your name" onChange={handleonChange} />
      <Button onClick={handleSumit} >Sumit</Button>
      {
        ShowName && <h1>{name}</h1>
      }




    </>
  );

}

export default App