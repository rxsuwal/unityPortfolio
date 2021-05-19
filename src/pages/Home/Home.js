import React, { Fragment } from 'react'
import Hero from '../../components/Home/Hero/Hero'
import About from '../../components/Home/About/About'
import Team from '../../components/Home/Team/Team'
import Works from '../../components/Home/Works/Works'
import Services from '../../components/Home/Services/Services'
import Testimonials from '../../components/Home/Testimonials/Testimonials'
import Footer from '../../components/Home/Footer/Footer'

const Home = () => {
    return (
        <Fragment>
            <Hero/>
            <About/>
            <Team/>
            <Works/>
            <Services/>
            <Testimonials/>
            <Footer/>
        </Fragment>
    )
}

export default Home
