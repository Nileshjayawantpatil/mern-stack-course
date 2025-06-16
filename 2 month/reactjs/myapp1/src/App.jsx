import { useState } from "react"


function App() {
  const [name, setName] = useState()
  const [showname, setShowName] = useState(false);


  const handleOnchange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);





  };

  const handleSumit = () => {
    setShowName(true);


  };








  return (


    <>
      <input name="name" placeholder="Enter your name" onChange={handleOnClick} />
      <Button onClick={handleSumit}>Sumit</Button>
      {
        showName && <h1>{name}</h1>
      }




    </>
  );

};


export default App;

