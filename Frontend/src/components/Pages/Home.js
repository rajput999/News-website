import React,{useState,useEffect} from "react";
import Filter from "./Filter";
import News from "./News";
import axios from 'axios'
import {EmailForm} from "../../EmailForm";


export const Home = (props) => {
  const [location, setLocation] = useState('in')
  const [checked, setChecked] = useState([])
  const [input, setInput] = useState('')
  const [data,setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    getNews()
    const element = document.getElementsByClassName('news-start');
    console.log(element)
    element[0].scrollIntoView({ behavior: 'smooth' });
    setIsLoading(true)
    console.log("hey ",props.suscribeClick);
  },[location,checked])

  const getNews = () => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=${location}&category=${checked}&apiKey=83fe142f69934de285246b7befc86961`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
      console.log(`locations = ${checked}`)
      console.log(data)
  }
  
  return (
    <div>
      <Filter setLocation={setLocation} setChecked={setChecked} location={location} checked={checked} data={data} setInput={setInput} input={input}/>
      <News location={location} checked={checked} getNews={getNews} data={data} input={input} isLoading={isLoading}/>
      {props.suscribeClick&&<EmailForm suscribeClick={props.suscribeClick} setSuscribeClick={props.setSuscribeClick}/>}
    </div>
  );
};
