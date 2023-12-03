import React, { useEffect, useState } from 'react'
import './News.css'
import axios from 'axios'
import Loader from '../Loader';
// import logo from '.../Icons/logo.jpeg'

const News=({location ,checked , getNews ,data,input,isLoading}) =>{

  const handleClick = (index) => {
    console.log(data)
    // console.log(document.getElementsByClassName(`desc${index}`))
    // document.getElementsByClassName(`desc${index}`).style.display='none'
  };
  const redirectToExternalURL = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='news-full'>
      <div className='news-start'>
      <div className='container-news' onClick={()=>getNews()}>News</div>
      {!isLoading?data.articles?.filter((item)=>{
        return input.toLowerCase() === ''?item :item.title.toLowerCase().includes(input)
      })?.map((item,index)=>(
          <div className='news-div' key={index}>
            <div className='news-title-header' onClick={()=>handleClick(index)}>
              <img src={item.urlToImage} className='news-image' />
              <div className={'news-title-desc desc'+index}>{item.title}</div>
            </div>
            <div className='news-desc'>{item.description}</div>
            <div className='read-more'><div className='read' onClick={()=>redirectToExternalURL(item.url)}>Read more</div></div>
          </div>
        )):<Loader />}
      </div>
    </div>
  )
}

export default News