import React, {  useEffect, useState } from 'react'
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const Api = () => {
  const[Array, setArray]=useState([])
  const[Array2,setArray2]=useState([])
  const API="https://api.nobelprize.org/v1/prize.json"
  const fetchApi=async(url)=>{
      try{
          const res=await fetch(url);
          const data=await res.json();
         // console.log(data.prizes[0]);
             setArray(data.prizes)
           setArray2(data.prizes)
      }
      catch(error){
          console.log(error)
      }
     
  };

useEffect(()=>{
  fetchApi(API);
},[])
const[value1,setvalue]=useState()
const[value2,setvalue2]=useState()
const Change=(event)=>{
  setvalue(event.target.value)
 
}
const Change1=(event)=>{
  setvalue2(event.target.value)
 
}

const Filterelement2=(()=>{
  
  const update=Array.filter((element)=>{
      return element.year===value2;
  })
  setArray2(update)
})

const Filterelement=(()=>{
  
  const update=Array.filter((element)=>{
      return element.category===value1;
  })
  setArray2(update)
})

return (
  

<div>
<div class="input-icons">
 
            <input class="input-field" 
                   type="text" placeholder='Search by Year' value={value2} onChange={Change1}/>
                   <Button id='searchbtn' onClick={Filterelement2}>Search</Button></div>
      <select name="category" onChange={Change}  >
      <option value="Peace">Select Category</option>
   <option value="literature">literature</option>
    <option value="chemistry">chemistry</option>
    <option value="peace">peace</option>
    <option value="medicine">Medicine</option>
    <option value="physics">Physics</option>
    <option value="economics">Economics</option>


</select>



    
         
<SearchIcon  style={{
  marginLeft:"5px"
}}onClick={Filterelement}></SearchIcon>




    
      <h2 >Our Nobel Prize Winner's</h2>
      <p>1901 to 2023 </p>
      
 
      <table border={1} cellPadding={0}>

<tr>

  <th >Year</th>
  
  <th >Category</th>
  
  <th > Id and Name</th>
 
</tr>



      



          {
              Array2.map(element=>{
                  return(
                         <>   <tr scope='row'>
                         <th id='year' rowSpan={element.size}>{element.year}</th>
                         <td id='category'>{element.category}</td>
                        <td> {element.laureates && element.laureates.map(d=>(
                                         <div className="laureates" style={{
                                          margin:"20px"
                                         }}>
                                        <td  id='id'>{d.id}</td>
                                          <td> {d.firstname} {d.surname} </td> 
                                          <br></br>
                                        </div>
                                           
                                   
                                           
                                       
                                     ))}</td>
                            
                                  
                           
                        
                          
                            </tr>
                    </>
                   
                 
        
                  )
              })
          }
    
  
 
</table>
  
   </div>
  

)
}

export  default Api