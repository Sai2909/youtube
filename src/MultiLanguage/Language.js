import React, { useState } from 'react'
import About from './About';

const Language = () => {
const [lang,setLang]=useState("te");

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <select style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '0.25rem', margin: '0 auto' }} value={lang} onChange={(e)=>setLang(e.target.value)}>
        <option value="te">Telugu</option>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="ru">Russia</option>
        <option value="sp">Spanish</option>
      </select>
      <About  lang={lang} />
    </div>
    
       
    
  )
}

export default Language
