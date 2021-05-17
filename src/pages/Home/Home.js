import React, { Fragment } from 'react'
import Hero from '../../components/Home/Hero/Hero'
import About from '../../components/Home/About/About'
import Team from '../../components/Home/Team/Team'
import Works from '../../components/Home/Works/Works'
import Services from '../../components/Home/Services/Services'
import Testimonials from '../../components/Home/Testimonials/Testimonials'

const Home = () => {
    return (
        <Fragment>
            <Hero/>
            <About/>
            <Team/>
            <Works/>
            <Services/>
            <Testimonials/>
        </Fragment>
    )
}

export default Home
