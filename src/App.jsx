
import './App.css'
import LineChart from './Components/LineChart/LineChart'
import Phones from './Components/Phones/Phones'
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
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
