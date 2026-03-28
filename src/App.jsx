
import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import PlayersCard from './Components/PlayersCard/PlayersCard'
import Footer from './Components/FooterSection/Footer'



const PlayersPromise = fetch('PlayerData.json').then( res => res.json())


function App() {
  const [dollar, setDollar] = useState(2500000);

  return (
    <>
      <div className='max-w-330 m-auto'>

        <Navbar dollar={dollar}></Navbar>

        
        
        <main>

          <Suspense fallback={"Loading..."}>

            <PlayersCard PlayersPromise={PlayersPromise} setDollar={setDollar} dollar={dollar} ></PlayersCard>

          </Suspense>

        </main>
        

      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
