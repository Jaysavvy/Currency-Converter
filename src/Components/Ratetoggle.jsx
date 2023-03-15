import React from 'react'
import '../App.css'
import App from '../App'


function Ratetoggle (props){
  return(
    <div class="button-currency">
      <button id="AUD" class="btn aud">{props.country}
      </button>
    </div>

  )
}

export default Ratetoggle