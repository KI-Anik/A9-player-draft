import Cards from "./components/Cards/Cards"
import Footer from "./components/Footer/Footer"
import Banner from "./components/Header/Banner"
import Navbar from "./components/Header/Navbar"

function App() {

  return (
    <>
      <div className="container mx-auto mt-4 space-y-12">
        <Navbar></Navbar>
        <Banner></Banner>
        <Cards></Cards>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
