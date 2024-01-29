import React from 'react'
import Table from './Table'
import Header from './Header'
import Description from './Description'
import ExcellentWinners from './ExcellentWinners'
import { Link } from 'react-router-dom'
const Nobelprize = () => {
  return (
    <div>
        <Header></Header>
        <Description></Description>
        <h4>To get information about winner who got Nobel prize more than one time <Link to='/excellentwinner'>Click here</Link></h4>
        <Table></Table>
    </div>
  )
}

export default Nobelprize