import React, { Component } from 'react'

import instagram from '../../../assets/img/ig.png'
import facebook from '../../../assets/img/facebook.png'
import youtube from '../../../assets/img/yt.png'
import twitter from '../../../assets/img/twitter.png'

import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';

import styles from './Hero.module.scss'

import Vl from '../../UI/Vl/Vl'
import BtnOrange from '../../UI/BtnOrange/BtnOrange'
import Sidedrawer from '../../UI/Sidedrawer/Sidedrawer'


import * as actionCreator from '../../../store/actions/actionCreators/index'
import { connect } from 'react-redux'

 class Home extends Component {


  state ={
    showSideDrawer:false
  }

  sideDrawerClosedHandler = () =>{
    this.setState({showSideDrawer:false})

  }

  sideDrawerOpenHandler = () =>{
    this.setState({showSideDrawer:true})
  }

  componentDidMount(){
    this.props.initInfo()
    this.props.initSocialLink()
    window.addEventListener('scroll', this.sideDrawerClosedHandler);

  }

 

 
  render() {

    

    return (
      <div className={styles.Hero}>
        <header>
        {console.log('sociallink',this.props.socialLinks)}
         <div className={styles.logo}>
         <a href='/'><img src={this.props.info.logo} alt=''/></a>
         </div>
         <div className={styles.socialLinks}>
           <ul>
             <li><a href={'https://' + this.props.socialLinks.instagram} target="_blank" rel='noreferrer'> <img src={instagram} alt='instagram-link'/></a></li>
             <li><a href={'https://' + this.props.socialLinks.facebook} target="_blank" rel='noreferrer'> <img src={facebook} alt='facebook-link'/></a></li>

             <li><a href={'https://' + this.props.socialLinks.youtube} target="_blank" rel='noreferrer'> <img src={youtube} alt='youtube-link'/></a></li>

             <li><a href={'https://' + this.props.socialLinks.twitter} target="_blank" rel='noreferrer'> <img src={twitter} alt='twitter-link'/></a></li>

           </ul>
         </div>

        </header>
      
        <div className={styles.menu}>
          <div className={styles.ham} onClick={this.sideDrawerOpenHandler}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <Sidedrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}>
            <ul className={styles.navItems}>
              <li><a href="#about">about</a></li>
              <li><a href="#portfolio">portfolio</a></li>
              <li><a href="#services">services</a></li>
              <li><a href="#contact">contact</a></li>

            </ul>
          </Sidedrawer>
        </div>

        <div className={styles.banner}>

          <Vl/>

          <h1>It started with an idea</h1>

          <div className={styles.watchIntro}> <PlayCircleOutlineOutlinedIcon className={styles.play}/> <span>Watch an Intro </span></div>

          <BtnOrange href='#about' className={styles.btn}>Discover</BtnOrange>


        </div>

      </div>
    )
  }
}


const mapStateToProps = state =>{
  return{
    info : state.info.info,
    socialLinks:state.socialLink.links
  }

}

const mapDispatchToProps = dispatch => {
  return{
    
    initInfo : ()=>dispatch(actionCreator.initInfo()),
    initSocialLink:()=>dispatch(actionCreator.initSocialLink())
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(Home)