import React, {Component} from 'react'
import ServicesCard from '../../UI/ServicesCard/ServicesCard'

import Vl from '../../UI/Vl/Vl'
import styles from './Services.module.scss'

import * as actionCreator from '../../../store/actions/actionCreators/index'
import { connect } from 'react-redux'


class Services extends Component {
    componentDidMount(){
        this.props.initServices()
    }

    render(){
        return (
            <div className={styles.services} id='services'>
    
                <div className={styles.header}>
                    <h1>Your money is yours, we don't  take a cut.</h1>
                    <p>Veniam qui excepteur dolore laboris anim reprehenderit ut culpa consectetur nulla irure minim. Pariatur mollit proident magna cupidatat et do cillum nostrud. Veniam tempor ullamco amet do sit non ipsum occaecat est pariatur dolore Lorem. Elit minim elit irure labore adipisicing voluptate ipsum commodo.</p>
    
                </div>
                <Vl/>
    
                
                <div className={styles.servicesList}>
                    {this.props.services.map(service=>(

                         <ServicesCard img={service.icon} title={service.title} description={service.description}/>

                    ))}
                    
    
    
                </div>
            </div>
        )
    }

    

   
}

const mapStateToProps = state =>{
    return{
        services : state.services.services
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        initServices : ()=>dispatch(actionCreator.initServices())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Services)
