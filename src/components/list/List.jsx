import React from 'react'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined} from '@material-ui/icons';
import ListItem from "../listItem/listItem"
import {useRef} from "react"
import {useState} from "react"
import "./list.scss"
 const List = () => {
     const [slideNumber,setSlideNumber] = useState(0)

     const listRef = useRef()
     const handleClick =(direction) => {
         let distance = listRef.current.getBoundingClientRect().x -50
         if(direction ==="left" && slideNumber >0){
            setSlideNumber (slideNumber -1) 
           listRef.current.style.transform = `translateX(${230 + distance}px)`
         }
         if(direction ==="right" && slideNumber<5){
            setSlideNumber (slideNumber +1) 
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
          }
     }
    return (
        <div className="list">
            <span className="listTitle"> Continue to Watch</span>
            <div className="wrapper">
               <ArrowBackIosOutlined  className="sliderarrow left" onClick={()=>handleClick("left")}/>
               <div className="container" ref={listRef}>
                   <ListItem/>
                   <ListItem/>
                   <ListItem/>
                   <ListItem/>
                   <ListItem/>
                   <ListItem/>
                   <ListItem/>
                   <ListItem/>
                   <ListItem/>
                   <ListItem/>

               </div>
               <ArrowForwardIosOutlined className="sliderarrow right" onClick={()=>handleClick("right")}/>
            </div>
        </div>
    )
}
export default List