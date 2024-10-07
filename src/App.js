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
import CalisthenicsPage from "./components/train/calisthenics/calisthenics";
// import AboutsPage from "./components/about/aboutmsx";
import LoginPage from "./components/Login/login";
import SignUpPage from "./components/Login/signUp";



function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-400 via-yellow-600 to-red-100 animate-gradient-move bg-[length:300%_600%]">
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
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signUp" element={<SignUpPage/>}/>


      </Routes>
    </div>
    </Router>    
    </main>
  );
}

export default App;
