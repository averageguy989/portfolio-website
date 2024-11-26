import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/NavBar'
import { IntroductionBar } from './Components/IntroductionBar'
import { ProfileCard } from './Components/ProfileCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='home'>
        <Navbar />
        <div className="px-6 py-2 sm:px-[6%] xl:px-[11%] grid grid-cols-1 sm:grid-cols-3 gap-6">
          <IntroductionBar />
          <ProfileCard />
        </div>
      </div>
      <div id='#projects'>

      </div>
    </>
  )
}

export default App
