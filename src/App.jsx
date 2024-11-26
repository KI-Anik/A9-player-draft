import { useEffect, useState } from "react"
import Cards from "./components/Cards/Cards"
import Footer from "./components/Footer/Footer"
import Banner from "./components/Header/Banner"
import Navbar from "./components/Header/Navbar"
import Selected from "./components/Cards/Selected"
import Available from "./components/Cards/Available"
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [allPlayers, setAllPlayers] = useState([])
  const [btnActive, setBtnActive] = useState({status: true})
  const [selectedPlayers, setSelectedPlayers] = useState([])
  const [count, setCount] = useState(0)
  const [price, setPrice] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const [addMore, setAddMore] = useState({status: true})

  useEffect(() => {
    fetch('/fake.json')
      .then(res => res.json())
      .then(data => setAllPlayers(data))
  }, [])


  const handleBtnActive = (status) => {
    if (status) {
      setBtnActive({ status: true })
      setAddMore({status: true})
    }
    else {
      setBtnActive({ status: false })
      setAddMore({status: false})
    }
  }

  const handleDecreasePrice = (pr) => {
    setPrice(price - pr)
  }

  const handleFreeCredit = () => {
    setPrice(price + 2000)
    toast.success('2000 Coin added succefully')
  }

  const handleSelectedPlayer = (player) => {
    const isExits = selectedPlayers.find(p => player.playerId == p.playerId)
    
    if (price <= player.biddingPrice) {
      toast.error('dont enough coin')
      return
    }

    if (isExits) {
      toast.warn(`${player.name} already selected`)
      return
    }

    if (selectedPlayers.length <= 5) {
      toast.info(`${player.name} added to your selected item`)
      setSelectedPlayers([...selectedPlayers, player])
      setCount(count + 1)
      handleDecreasePrice(player.biddingPrice)
    }
    else {
      toast.error("You can't select more than 6")
    }

  }

  const handleDelete = (id) => {
    toast.warning(`${id.name} removed`)

    setPrice(price + id.biddingPrice)
    const remainingPlayer = selectedPlayers.filter(p => p.playerId != id.playerId)
    setSelectedPlayers(remainingPlayer)
    setCount(count - 1)
  }

  const handleAddMore = (props) => {
    handleBtnActive(props)
  }
  return (
    <>
      <div className="w-4/5 mx-auto mt-4 space-y-12">
        <Navbar price={price}></Navbar>
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
              handleAddMore={handleAddMore}
            ></Selected>)
        }
        <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
