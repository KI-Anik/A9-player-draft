import { useEffect, useState } from "react"
import Cards from "./components/Cards/Cards"
import Footer from "./components/Footer/Footer"
import Banner from "./components/Header/Banner"
import Navbar from "./components/Header/Navbar"
import Selected from "./components/Cards/Selected"

function App() {
  const [allPlayers, setAllPlayers] = useState([])
  const [btnActive, setBtnActive] = useState({status: true})
  const [selectedPlayers, setSelectedPlayers] = useState([])

  
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
    setSelectedPlayers([...selectedPlayers, player])
  }
  return (
    <>
      <div className="container mx-auto mt-4 space-y-12">
        <Navbar></Navbar>
        <Banner></Banner>
        {
          btnActive.status ? ( <Cards
            allPlayers={allPlayers}
            handleBtnActive={handleBtnActive}
            btnActive = {btnActive}
            handleSelectedPlayer = {handleSelectedPlayer}
            selectedPlayers={selectedPlayers}
            ></Cards>): (<Selected selectedPlayers={selectedPlayers} ></Selected>)
        }
       
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
