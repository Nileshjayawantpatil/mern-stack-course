import { useState } from "react"


function App() {
  const [name, setName] = useState();
  const [showName, setShowName] = useState(false);

  const handleonChange = (e) => {


    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleSumbit = () => {
    setShowName(true);

  }


};



return (
  <>
    <input type="name"
      placeholder="Enter your Name"
      onChange={handleonChange} />
    <button onClick={handleSumbit}>Sumbit</button>
    {
      showName && <h1>{name}</h1>
    }


  </>
);

}

export default App;

