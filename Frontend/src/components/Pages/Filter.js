import React, { useEffect, useState } from 'react'
import './Filter.css'
import {Greater} from '../Icons';
// import greater from '../Icons,greater-than-solid.svg',

export default function Filter({ setLocation, setChecked, location, checked, setInput, input }) {
    const [isOpen, setIsopen] = useState(false)
    const [countryName,setCountryName] = useState('India')
    const checkList = ["sports", "business", "health", "entertainment", "science", "technology"];
    const locationList = [{in:"India"}, {us:"USA"}, {au:"Australia"}, {jp:"Japan"}]

    // Add/Remove checked item from list
    const handleCheck = (event) => {
        var updatedList = [];
        updatedList = [event.target.value];
        setChecked(updatedList);
        checkList.map((item, index) => {
            document.getElementById(`check${index}`).checked = false
        })
        document.getElementById(event.target.id).checked = true
    };

    // Generate string of checked items
    const checkedItems = checked.length
        ? checked.reduce((total, item) => {
            return total + ", " + item;
        })
        : "";

    const selectLocation = (item) => {
        setLocation(Object.entries(item)[0][0])
        setCountryName(Object.entries(item)[0][1])
        setIsopen((prev) => !prev)
        // getNews()
    }
    const reset = () => {
        setChecked([])
        setLocation('in')
        setIsopen(false)
        checkList.map((item, index) => {
            document.getElementById(`check${index}`).checked = false
        })
    }
    const inputChanged = (e)=>{
        setInput(e.target.value)
        console.log(input)
    }

    const [fil, setFil] = useState(false);
    const filterDisplay = (e) => {
        // e.preventDefault();
        if(!fil){
            const divi = document.getElementsByClassName('container')
            divi[0].style.display = "block"
            const btn = document.getElementsByClassName('filterButton')
            console.log(divi[0].style.width)
            btn[0].style.left='25vw'
            setFil(true);
        }
        else {
            const divi = document.getElementsByClassName('container')
            divi[0].style.display = "none"
            const btn = document.getElementsByClassName('filterButton')
            btn[0].style.left='0'
            setFil(false);
        }
        
    }
    console.log(locationList[0].India)

    return (
        <div className='filter-container'>
            <button className='filterButton' onClick={()=>filterDisplay()}> 
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M52.1 93.7C35.7 87.1 27.7 68.5 34.3 52.1s25.2-24.4 41.6-17.8l320 128C408 167.1 416 178.9 416 192s-8 24.9-20.1 29.7l-320 128c-16.4 6.6-35-1.4-41.6-17.8s1.4-35 17.8-41.6L297.8 192 52.1 93.7zM416 416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416z"/></svg>
                </button>
            <div className='container'>
                <div className='search'>
                    <input type="text" placeholder="Search here" onChange={(e)=>inputChanged(e)} value={input} className='input-search'/>
                </div>
                <div className='location'>
                    <div className='select-location-title'>Select Location</div>
                    <div className='location-title' onClick={() => setIsopen((prev) => !prev)}>{location != '' ? <div>{countryName}</div> : <div>selectLocation</div>} 
                        {!isOpen?<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/>
                        </svg>:<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"> 
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM377 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 167c9.4-9.4 24.6-9.4 33.9 0L377 271z"/>
                        </svg>}
                    </div>
                    {isOpen && <div className='location-list'>
                        {locationList.map((item, index) => (
                            <div key={index} className='item'>
                                <span onClick={() => selectLocation(item)}>{Object.entries(item)[0][1]}</span>
                            </div>
                        ))}
                    </div>}
                </div>
                <div className="category">
                    <div className="checkList">
                        <div className="title">Your CheckList:</div>
                        <div className="list-container">
                            {checkList.map((item, index) => (
                                <div key={index}>
                                    <input value={item} type="checkbox" onChange={handleCheck} className='check-box' id={'check' + index} />
                                    <span >{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='reset' >
                    <button className='reset-button' onClick={() => reset()}>Reset</button>
                </div>
            </div>
            {/* <div className='opener' onClick={()=>}>
                <Greater />
            </div> */}
        </div>
    )
}
