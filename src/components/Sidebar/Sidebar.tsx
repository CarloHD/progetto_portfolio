import React from 'react'

import styles from './Sidebar.module.css'

export function Sidebar () {
  return (
    <nav className={styles['navbar-principale']} aria-label='principale'>
      <ul>
        <li>
          <a href='#1'>1</a>
        </li>
        <li>
          <a href='#2'>2</a>
        </li>
        <li>
          <a href='#3'>3</a>
        </li>
      </ul>
    </nav>
  )
}
