import NavBar from "./Components/NavBar/NavBar"
import Banner from "./Components/Banner/Banner"
import Cards from './Components/Movies/cards';
import Footer from "./Components/footer/footer"
import {originals,action,trendings,comedy,horror,romance,documentation} from './url'


function App() {


  return (
    <>
     <NavBar/>
     <Banner/>
     <Cards url={originals} title="Originals"/>
     <Cards url={trendings} title="Trendings"/>
     <Cards url={action} title="Actions"/>
     <Cards url={comedy} title="Comedy"/>
     <Cards url={horror } title="Horror"/>
     <Cards url={romance } title="Romance"/>
     <Cards url={documentation } title="Documentary"/>
     <Footer/>

    </>
  )
}

export default App
