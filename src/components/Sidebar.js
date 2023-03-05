import React, { useEffect, useState } from 'react'
import { Menu, X } from 'react-feather'
import logo from '../assets/images/logo.png'
import { useDispatch } from 'react-redux'
import { changeCategory } from '../redux/reducer/rootReducer'
import { Col, Row } from 'reactstrap'
function Sidebar() {

    let [showSideBar, setShowsidebar] = useState(false)
   
    const [categoryIndex, setCategoryIndex] = useState(0)
    let dispatch = useDispatch()
    const menuItems = ["all","national", "business", "sports", "world", "politics", "technology", "startup","entertainment", "miscellaneous","hatke","science", "automobile" ]
    useEffect(()=>{
   
        dispatch(changeCategory(menuItems[categoryIndex]))
        console.log(menuItems[categoryIndex])
    },[categoryIndex])
  return (
    <div className='container position-fixed para '>
     {!showSideBar?<p className='d-block '><Menu id='menu' onClick={()=>setShowsidebar(true)} /> Menu</p>:<></>}
     <Row><Col xl='3'>
   {showSideBar?
    <div className='sidebar p-2 postion-fixed ' id='sidebar'>
        <div className='top_section ms-4'>
        
       
        <img src={logo} alt='' width='180px' />
        </div>
       <div className='ms-5' >
       <p className='category'>
        Categories
       </p> {
            menuItems.map((item, index)=>{
             
              item =item[0].toUpperCase() + item.substring(1)
              if(item == "National"){
                item = "Indian"
              } else if(item == "All"){
                item = "All news"
              } 
              let item1 = {name:item,class:"notselected"}
            
              if(categoryIndex==index){
                debugger
                item1 = {name:item,class:"selected"}
              } 
             
              return (
                <button  onClick={()=>{setCategoryIndex(index)}}   key={index} className={"link d-block p-2 my-3  "+item1.class} >{item1.name}</button>
              )
       })
        }</div>
      
    </div>:<></>}
    </Col>
    <Col xl='3'>
    {showSideBar?<p className='cursor-pointer closebtn' onClick={()=> setShowsidebar(false)}><X /> Close</p>:<></>}
    </Col>
    </Row>
    </div>
  )
}

export default Sidebar