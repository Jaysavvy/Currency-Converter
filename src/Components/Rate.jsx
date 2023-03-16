import React from 'react'
import App from '../App'
import { useState } from 'react'
import '../App.css'

function Rate (props){
  return(
  <div>
    <h1>
				Current Rate
		</h1>
    <span id="value"> 
    {props.amount}
    </span>
  </div>
  )
}

export default Rate