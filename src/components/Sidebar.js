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
    <div className='container position-fixed para'>
     {!showSideBar?<p className='d-block '><Menu id='menu' onClick={()=>setShowsidebar(true)} /> Menu</p>:<></>}
     <Row><Col xl='3'>
   {showSideBar?
    <div className='sidebar p-2 postion-fixed ' id='sidebar'>
        <div className='top_section ms-5'>
        
       
        <img src={logo} alt='' width='200px' />
        </div>
       <div className='ms-5' >
       <p className='category'>
        Categories
       </p> {
            menuItems.map((item, index)=>(
                <button onClick={()=>{setCategoryIndex(index);setShowsidebar(false)}}  key={index} className='link d-block p-2 my-3 w-75' >{item}</button>
            ))
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