import './App.css'
import LineChart from './components/line-chart/LineChart'
import MyNavbar from './components/navbar-custom/my-navbar'
import Phones from './components/phones/Phones'
import PriceOptions from './components/price-options/PriceOptions'

function App() {

  return (
    <>
      <MyNavbar></MyNavbar><hr />
      <div className='my-20'>
        <Phones></Phones>
      </div><hr />
      <PriceOptions></PriceOptions><hr />
      <LineChart></LineChart>
    </>
  )
}

export default App
