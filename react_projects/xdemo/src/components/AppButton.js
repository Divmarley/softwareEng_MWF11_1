import React from 'react'
import '../styles/appbutton.css'
export default function AppButton({id,label,onClick,classNameDanger}) {
  return (
    <button id={id} className={`button  ${classNameDanger}`} onClick={onClick}>{label}</button> 
  )
}
