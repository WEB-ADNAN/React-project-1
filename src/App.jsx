import './App.css'
import Banner from './components/banner'
import Clients from './components/Clients'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Success from './components/Success'
import We from './components/We'
import Why from './components/Why'
import Work from './components/Work'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Success></Success>
    <Services></Services>
    <Work></Work>
    <Why></Why>
    <Clients></Clients>
    <We></We>
    <Footer></Footer>
    </>
  )
}

export default App
