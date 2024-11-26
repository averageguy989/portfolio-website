import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/NavBar'
import { IntroductionBar } from './Components/IntroductionBar'
import { ProfileCard } from './Components/ProfileCard'
import { ProjectCard } from './Components/ProjectCard'
import { ContactCard } from './Components/ContactCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='home'>
        <Navbar />
        <div className="px-6 py-2 sm:px-[6%] xl:px-[12%] grid grid-cols-1 sm:grid-cols-3 gap-6">
          <IntroductionBar />
          <ProfileCard />
        </div>
      </div>
      <div id='projects'>
        <div className='px-6 py-2 sm:px-[6%] xl:px-[12%] grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <ProjectCard source={"./src/assets/image1.png"}/>
          <ProjectCard source={"./src/assets/image2.png"}/>
          <ProjectCard source={"./src/assets/image3.png"}/>
          <ProjectCard source={"./src/assets/image4.png"}/>
        </div>
      </div>
      <div id='contact' className='px-6 py-2 xl:px-[12%] sm:px-[6%]'>
          <ContactCard/>
      </div>
    </>
  )
}

export default App
