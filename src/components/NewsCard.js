import React, { useEffect, useState } from 'react'
import { Row,Col, Navbar, Container, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap'
import loader from '../assets/images/loader.gif'
import logo from '../assets/images/logo.png'
import helper from '../assets/images/helper.png'
import axios from 'axios'
import { closeSidebar } from '../redux/reducer/rootReducer'
import { useDispatch, useSelector } from 'react-redux'
function NewsCard() {
  let data = useSelector(state => state)
  let dispatch = useDispatch()
  useEffect(()=>{
    document.getElementById("loader").classList.remove("collapsed")
    document.getElementById("newsCards").classList.add("collapsed")
   async function getData(){
     await getNews()
    }
    getData()
   
  },[data.counter.value])
  function closeSidebarfn(){
    dispatch(closeSidebar(true))
  }
  let [newsData, setNewsData] = useState([])
  async function getNews(){
 await axios.get(`https://inshorts.deta.dev/news?category=${data.counter.value}`,{headers:{
    'Access-Control-Allow-Origin':'*'
  }}).then((res)=>{
    
    setNewsData(res.data.data)
    let loader = document.getElementById("loader")
    if(loader){
      loader.classList.add("collapsed")
    }
    let newsCards = document.getElementById("newsCards")
    if(newsCards){
      newsCards.classList.remove("collapsed")
    }
   
    // setNewsData([{
    //   id:"1"
    // }])
    
  }).catch(err=>{
    console.warn(err)
  })}
  useEffect(()=>{
    function getData(){
      getNews()
    }
    getData()
  },[])
  return (
    <>
   <div onClick={closeSidebarfn}>
   <Navbar >
      <div className='navbar'>
      <img src={logo} alt='' width='150px' className='position-fixed mt-5' />
      </div>
    </Navbar>
   
     <img src={loader} alt='' id='loader'  />
     <Container>
     <Row id='newsCards' className='align-items-center mt-5'>
      
      
    <img src={helper} alt='' className='helper mt-5 mb-2'  />
       {newsData?newsData.map((news, i)=>{
          return (
            <Card key={i} onClick ={()=> {setNewsData([news])}} className='d-xl-flex d-sm-block justify-content-xl-start my-2 NewsCard pb-2 h-auto'>
         <CardBody className='d-xl-flex d-sm-block flex-xl-direction-column flex-sm-row sm-h-100'>
        <CardImg src={news?.imageUrl} alt="" className='card-img me-2'  />
        <div className='d-block'>
        <CardTitle className='lead text-black'>{news?.title}</CardTitle>
        <CardText className='lead small date'><span><strong>short</strong></span> by {news?.author} / {news?.date}</CardText>
            <CardText className='lead mb-0'>{news?.content}</CardText>
            {news.readMoreUrl?<CardText className='lead text-black cursor-pointer mb-0'><a className='read-more' target='_blank' href={news?.readMoreUrl}>Read more...</a></CardText>:<></>}
        </div>
            
           
      
       </CardBody>
      
            </Card>
          )
        }):<></>}
      
      
    </Row>
     </Container>
    
   </div>
       
    </>
  )
}

export default NewsCard;