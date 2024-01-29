import React from 'react'
import Header from './Header'
const ExcellentWinners = () => {
  return (
    <div>
        <Header></Header>
       <h2>Our Top 4 Nobel Prize Winner's who got Nobel Prize More than 1 time</h2>
       <table border={1} cellPadding={0}> 
        <tr>
        <th > Id </th>
        <th > name </th>
        <th colSpan={2}>Year</th>
  
        <th  colSpan={2} >Category</th>
  
        
       </tr>

       <tr>
        <td >217</td>
        <td >Linus Pauling</td>
        <td >1962</td>
        <td >1954</td>
        <td >Peace </td>
        <td > Chemistry</td>
        
       </tr>
       <tr>
        <td >222</td>
        <td >Frederick Sanger</td>
        <td >1958</td>
        <td >1980</td>
       <td>Chemistry</td>
       <td>Chemistry</td>

        
        
       </tr>
       <tr>
        <td >66</td>
        <td >John Bardeen</td>
        <td >1972</td>
        <td >1956</td>
        <td >Physics </td>
        <td >Physics </td>
       
        
       </tr>
       <tr>
        <td >6</td>
        <td >Marie Curie</td>
        <td >1903</td>
        <td >1911</td>
        <td >Physics </td>
        <td > Chemistry</td>
        
       </tr>
       
       </table>
       
    </div>
  )
}

export default ExcellentWinners