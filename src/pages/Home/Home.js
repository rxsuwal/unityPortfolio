import React, { Fragment } from 'react'
import Hero from '../../components/Home/Hero/Hero'
import Services from '../../components/Home/Services/Services'
import Team from '../../components/Home/Team/Team'

const Home = () => {
    return (
        <Fragment>
            <Hero/>
            <Services/>
            <Team/>
        </Fragment>
    )
}

export default Home
