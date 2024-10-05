import React from "react";
import { Behance, Home } from 'lucide-react';
import '../src/tailwind.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

import Homepage from './components/homepage/homepage';
import MealsPage from "./components/mealplans/meal";
import AboutsPage from "./components/about/aboutmsx";
import TrainingsPage from "./components/train/trainyourself";
import ContactsPage from "./components/contact_feedback/contact";
import BlogsPage from "./components/blogs/blogs";
import YogaPage from "./components/train/yoga/yoga";
import CalisthenicsPage from "./components/train/calisthenics/calisthenics"
// import AboutsPage from "./components/about/aboutmsx";


function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<AboutsPage/>}/>
        <Route path="/meal" element={<MealsPage/>}/>
        <Route path="/train" element={<TrainingsPage/>}/>
        <Route path="/blog" element={<BlogsPage/>}/>
        <Route path="/contact" element={<ContactsPage/>}/>

        {/* <Route path="/about" element={<AboutsPage/>}/> */}
        <Route path="/yoga" element={<YogaPage/>}/>
        <Route path="/calisthenics" element={<CalisthenicsPage/>}/>


      </Routes>
    </div>
    </Router>    
  );
}

export default App;
