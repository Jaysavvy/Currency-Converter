import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Rate from './Components/Rate'
import Ratetoggle from './Components/Ratetoggle'

function App() {

  const [currency, setCurrencyData] = useState([])


  useEffect(()=>{
    const Url ='https://api.frankfurter.app/latest'
    
    fetch(Url)
    .then(res => res.json())
    .then(ApiData => setCurrencyData(ApiData))
    
    
  }, [])

  console.log(currency)

  // setCurrencyData(PreCurrency => {
  //   if(condition){
  //     return{
  //       ...preCurrency,
  //       rates: [...preCurrency, newObj]
  //     }
  //   }
  // })


  // const baseElement = currency.map(currCurrency => <Ratetoggle country={currCurrency.base} />)

// const baseElement = currency.map(currCurrency => <Ratetoggle country={currCurrency.base} />)

// console.log(Object.keys(currency.rates));

// for (let pair of Object.entries(
//   currency.rates
// )){
//   console.log(pair)
// }


  return (
    <main>
      <Rate
      amount={currency.amount}
      />
      <Ratetoggle
      country={currency.base}
      />
    </main>
  )
}

export default App
