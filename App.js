import React from "react";
import Home from "./Home";
import About from "./About";
import Services from './Services'
import Cars from './Cars'
import Blog from './Blog.jsx'
import Contact from './Contact.jsx'
import Pricing from './Pricing.jsx'
import ReadBlog from "./ReadBlog.jsx";
import {Routes,Route} from 'react-router-dom';



function App() {
 return(
  <main>
      
      
    
  

        <Routes>
            <Route path="/" element={<Home/>}></Route>
             <Route path="/about" element={<About/>}></Route>
             <Route path="/home" element={<Home/>}></Route>        
              <Route path="/services" element={<Services/>}></Route>  
               <Route path="/pricing" element={<Pricing/>}></Route>  
                <Route path="/blog" element={<Blog/>}></Route>  
                <Route path="/cars" element={<Cars/>}></Route>  
                 <Route path="/contact" element={<Contact/>}></Route>    
                 <Route path="/readblog" element={<ReadBlog/>}></Route>   
         </Routes>


  </main>
 )
}

export default App;
