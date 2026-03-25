
import { Suspense } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import PlayersCard from './Components/PlayersCard/PlayersCard'



const PlayersPromise = fetch('PlayerData.json').then( res => res.json())


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='max-w-330 m-auto'>

        <Navbar></Navbar>

        
        
        <main>

          <Suspense fallback={"Loading..."}>

            <PlayersCard PlayersPromise={PlayersPromise}></PlayersCard>

          </Suspense>

        </main>

      </div>

    </>
  )
}

export default App
