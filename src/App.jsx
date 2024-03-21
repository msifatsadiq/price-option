
import './App.css'
import PriceOptions from './Components/PriceOptions/PriceOptions'
import Nav from './Nav/Nav'
// import DaisyNav from './Components/DaisyNav'

function App() {

  return (
    <>
    <Nav></Nav>
    {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl bg-rose-200 text-center p-4 font-extrabold'>Vite + React</h1>

      <PriceOptions>  </PriceOptions>


    </>
  )
}

export default App
