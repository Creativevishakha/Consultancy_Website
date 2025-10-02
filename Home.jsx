import React from 'react'
import Header from '../components/Header'
import Speciality from '../components/Speciality'
import TopLawyers from '../components/TopLawyers'

import Banner from '../components/Banner'


const Home = () => {
  return (
    <div>
       <Header/>
       <Speciality/> 
       <TopLawyers/>
       <Banner/>
    </div>
  )
}

export default Home