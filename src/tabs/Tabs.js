import React, { useState } from 'react'
import '../tabs/Tabs.css';
const Tabs = () => {
    const[toggle,setToggle]=useState(1);
    const tabClik=(index)=>{
        setToggle(index)
    }

  return (
    <div className='container'>
        <div className='block-tabs'>
            <div className={toggle===1?"active":"tabs"} onClick={()=>tabClik(1)}>Tab1</div>
            <div className={toggle===2?"active":"tabs"} onClick={()=>tabClik(2)}>Tab2</div>
            <div className={toggle===3?"active":"tabs"} onClick={()=>tabClik(3)}>Tab3</div>
        </div>
        <div className='content-tab'>
            <div className={toggle===1?"content-active":"content"}>
                <h2>Content1</h2>
                <p>Google LLC is an American multinational technology company focusing on online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, consumer electronics, and artificial intelligence</p>
            </div>
            <div className={toggle===2?"content-active":"content"}>
                <h2>Content2</h2>
                <p>Google LLC is an American multinational technology company focusing on online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, consumer electronics, and artificial intelligence</p>
            </div>
            <div className={toggle===3?"content-active":"content"}>
                <h2>Content3</h2>
                <p>Google LLC is an American multinational technology company focusing on online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, consumer electronics, and artificial intelligence</p>
            </div>
        </div>  
    </div>
  )
}

export default Tabs
