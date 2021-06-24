import React,{Component} from 'react'

import styles from './Works.module.scss'

import * as actionCreator from '../../../store/actions/actionCreators/index'
import { connect } from 'react-redux'

class Works extends Component {

    componentDidMount(){
        this.props.initWorks()
    }

    render(){
        return (
            <div id="portfolio" className={styles.works}>
                <div>
                    <h1>What we have done</h1>
                    <p>Id consectetur cillum proident aliquip occaecat ullamco cillum in.Aliquip laboris mollit est aute.</p>
                </div>
    
                <ul class={styles.filter}>
                    <li><button data-name="*" className="active" >All</button></li>
                    <li> <button data-name=".webdesign" class=" ">Web Design </button></li>
                    <li> <button data-name=".mobile" class=" ">Mobile</button></li>
                    <li> <button data-name=".photography" class="">Photography</button></li>
                </ul>
                
                <div className={styles.grid}>

                    {this.props.works.map(work=>(

                            <div class={styles.gridItem} >
                                <a href="#!"><img src={work.icon} alt=""/>
                                    <div class={styles.gridHover}>
                                        <span>{work.title} </span>
                                        <p>{work.description}</p>
                                    </div>
                                </a>
                            </div>
                    ))}
                   
    
          
                </div>
                
            
                
            </div>
        )
    }

  
}

const mapStateToProps = state =>{
    return{
        works : state.portfolio.portfolio

    }
}

const mapDispatchToProps = dispatch =>{
    return{
        initWorks : ()=>dispatch(actionCreator.initPortfolio())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Works)
