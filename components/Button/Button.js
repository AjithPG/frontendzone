import React from 'react'
import styles from "./Button.module.css"
export default function Button({...props}) {
  const {text="Default"} = props
  return (
    <button className={`${styles.btn}`}> {text}</button>
  )
}
