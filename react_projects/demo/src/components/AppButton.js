import React from 'react'
import '../styles/appbutton.css'
export default function AppButton({id,label,onClick}) {
  return (
    <button id={id} className="button" onClick={onClick}>{label}</button> 
  )
}
