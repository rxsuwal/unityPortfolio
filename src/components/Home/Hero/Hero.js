import React, { Component } from 'react'

import axios from '../../../axios-data-push'

import logo from '../../../assets/img/logo.png'
import instagram from '../../../assets/img/ig.png'
import facebook from '../../../assets/img/facebook.png'
import youtube from '../../../assets/img/yt.png'
import twitter from '../../../assets/img/twitter.png'

import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';

import styles from './Hero.module.scss'

import Vl from '../../UI/Vl/Vl'
import BtnOrange from '../../UI/BtnOrange/BtnOrange'
import Sidedrawer from '../../UI/Sidedrawer/Sidedrawer'


 class Home extends Component {


  componentDidMount(){
    axios.get('/personalInfo.json')
          .then(respnse=>console.log(respnse.data))
          .catch(error=>console.log(error))
  }

  state ={
    showSideDrawer:false
  }

  sideDrawerClosedHandler = () =>{
    this.setState({showSideDrawer:false})

  }

  sideDrawerOpenHandler = () =>{
    this.setState({showSideDrawer:true})
  }


  render() {
    return (
      <div className={styles.Hero}>
        <header>

         <div className={styles.logo}>
         <img src={logo} alt=''/>
         </div>
         <div className={styles.socialLinks}>
           <ul>
             <li><a href="#!" target="_blank"> <img src={instagram} alt=''/></a></li>
             <li><a href="#!" target="_blank"> <img src={facebook} alt=''/></a></li>

             <li><a href="#!" target="_blank"> <img src={youtube} alt=''/></a></li>

             <li><a href="#!" target="_blank"> <img src={twitter} alt=''/></a></li>

           </ul>
         </div>

        </header>
      
        <div className={styles.menu}>
          <div className={styles.ham} onClick={this.sideDrawerOpenHandler}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <Sidedrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        </div>

        <div className={styles.banner}>

          <Vl/>

          <h1>It started with an idea</h1>

          <div className={styles.watchIntro}> <PlayCircleOutlineOutlinedIcon className={styles.play}/> <span>Watch an Intro </span></div>

          <BtnOrange className={styles.btn}>Discover</BtnOrange>


        </div>

      </div>
    )
  }
}

export default Home;
