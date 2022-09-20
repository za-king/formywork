import React from 'react'
import Blog from '../../components/blog'
import Footer from '../../components/footer'
import Hero from '../../components/hero'
import Learning from '../../components/Learning'
import MyProject from '../../components/myproject'
import Navbar from '../../components/navbar'
import ProjectTeam from '../../components/projectteam'
import Skills from '../../components/Skills'


function HomePage() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Blog />
    <MyProject/>
    <ProjectTeam/>
    <Skills/>
    <Learning/>
    <Footer/>

    
    </>
  )
}

export default HomePage