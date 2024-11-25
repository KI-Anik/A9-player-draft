import { useEffect, useState } from "react"
import Cards from "./components/Cards/Cards"
import Footer from "./components/Footer/Footer"
import Banner from "./components/Header/Banner"
import Navbar from "./components/Header/Navbar"
import Selected from "./components/Cards/Selected"
import Available from "./components/Cards/Available"

function App() {
  const [allPlayers, setAllPlayers] = useState([])
  const [btnActive, setBtnActive] = useState({ status: true })
  const [selectedPlayers, setSelectedPlayers] = useState([])
  const [count, setCount] = useState(0)
  const [price, setPrice] = useState(0)

  useEffect(() => {
    fetch('/fake.json')
      .then(res => res.json())
      .then(data => setAllPlayers(data))
  }, [])


  const handleBtnActive = (status) => {
    if (status) {
      setBtnActive({ status: true })
    }
    else {
      setBtnActive({ status: false })
    }
  }

  const handleIncreasePrice = (pr) => {
    setPrice(price - pr)
  }

  const handleFreeCredit = () => {
    setPrice(price + 2000)
  }

  const handleSelectedPlayer = (player) => {
    const isExits = selectedPlayers.find(p => player.playerId == p.playerId)
    
    if (price < player.biddingPrice) {
      alert('dont enough coin')
      return
    }

    if (isExits) {
      alert(`${player.name} already selected`)
      return
    }

    if (selectedPlayers.length <= 5) {
      setSelectedPlayers([...selectedPlayers, player])
      setCount(count + 1)
      handleIncreasePrice(player.biddingPrice)
    }
    else {
      alert("You can't select more than 6")
    }

  }

  const handleDelete = (id) => {
    setPrice(price + id.biddingPrice)
    const remainingPlayer = selectedPlayers.filter(p => p.playerId != id.playerId)
    setSelectedPlayers(remainingPlayer)
    setCount(count - 1)
  }
  return (
    <>
      <div className="container mx-auto mt-4 space-y-12">
        <Navbar className='' price={price}></Navbar>
        <Banner handleFreeCredit={handleFreeCredit}></Banner>
        <Cards
          handleBtnActive={handleBtnActive}
          btnActive={btnActive}
          count={count}
        ></Cards>
        {
          btnActive.status ? (<Available
            allPlayers={allPlayers}
            handleSelectedPlayer={handleSelectedPlayer}
          ></Available>) :
            (<Selected
              selectedPlayers={selectedPlayers}
              handleDelete={handleDelete}
            ></Selected>)
        }

        <Footer></Footer>
      </div>
    </>
  )
}

export default App
