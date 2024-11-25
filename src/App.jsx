import { useEffect, useState } from "react"
import Cards from "./components/Cards/Cards"
import Footer from "./components/Footer/Footer"
import Banner from "./components/Header/Banner"
import Navbar from "./components/Header/Navbar"
import Selected from "./components/Cards/Selected"
import Available from "./components/Cards/Available"

function App() {
  const [allPlayers, setAllPlayers] = useState([])
  const [btnActive, setBtnActive] = useState({status: true})
  const [selectedPlayers, setSelectedPlayers] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() =>{
    fetch('/fake.json')
    .then(res => res.json())
    .then(data => setAllPlayers(data))
  },[])

  
  const handleBtnActive = (status)=>{
    if(status){
      setBtnActive({status: true})
    }
    else{
      setBtnActive({status: false})
    }
  }
  
  const handleSelectedPlayer = (player) => {
    console.log(selectedPlayers.length)
    if(selectedPlayers.length <= 5){
      setSelectedPlayers([...selectedPlayers, player])
      setCount(count+1)
    }
    else{
      alert("You cna't add more than 6")
    }
  }
  return (
    <>
      <div className="container mx-auto mt-4 space-y-12">
        <Navbar></Navbar>
        <Banner></Banner>
        <Cards
            handleBtnActive={handleBtnActive}
            btnActive = {btnActive}
            count={count}
            ></Cards>
        {
          btnActive.status ? (<Available 
            allPlayers={allPlayers}
            handleSelectedPlayer = {handleSelectedPlayer}
            ></Available>): 
            (<Selected selectedPlayers={selectedPlayers} ></Selected>)
        }
           
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
