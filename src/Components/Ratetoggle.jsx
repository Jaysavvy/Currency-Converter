import React from 'react'
import '../App.css'
import App from '../App'


const hexs = ["AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "EUR", "GBP", "HKD", "HUF", "MXN"];

const hexToggle = hexs.map(hex => <button>{hex}</button>)



function Ratetoggle (props){
  return(
    <div className="button-currency">
    {hexToggle}
    </div>
  )
}

export default Ratetoggle