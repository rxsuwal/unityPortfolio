import React, {  useEffect, useState } from 'react'
import Sidedrawer from '../../UI/Sidedrawer/Sidedrawer'
import Layout from '../Layout/Layout'
import * as styles from './SocialLink.module.scss'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import { connect } from 'react-redux';

import * as actionCreator from '../../../store/actions/actionCreators/index'

import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import UpdateButton from '../UI/UpdateButton/UpdateButton'
import EditButton from '../UI/EditButton/EditButton'


 const SocialLink =(props)=> {

    const [sideDrawer,setSideDrawer] = useState(false);
    const [links,setLinks] = useState({
        facebook:'',
        youtube:"",
        twitter:'',
        instagram:''
    })


    const sideDrawerClosedHandler = () =>{
        setSideDrawer(false)
    
      }
    
    const sideDrawerOpenHandler = () =>{
        setSideDrawer(true);
        setLinks({facebook:props.socialLinks.facebook,
            twitter:props.socialLinks.twitter,
            youtube:props.socialLinks.youtube,
            instagram:props.socialLinks.instagram})
      }
    const inputChange =(e)=>{
        console.log('input change')

        const value = e.target.value;
        const name = e.target.name;

        console.log(links.facebook)

        setLinks((prevValue)=>{
            if(name === "facebook"){
                return{
                    facebook:value,
                    youtube:prevValue.youtube,
                    twitter:prevValue.twitter,
                    instagram:prevValue.instagram,
                }
            }else if(name ==="youtube"){
                return{
                    facebook:prevValue.facebook,
                    youtube:value,
                    twitter:prevValue.twitter,
                    instagram:prevValue.instagram
                }
            }else if(name ==="instagram"){
                return{
                    facebook:prevValue.facebook,
                    youtube:prevValue.youtube,
                    twitter:prevValue.twitter,
                    instagram:value
                }
            }else if(name ==="twitter"){
                return{
                    facebook:prevValue.facebook,
                    youtube:prevValue.youtube,
                    twitter:value,
                    instagram:prevValue.instagram
                }
            }

        })

    }

    const formSubmit =(e)=>{
        e.preventDefault();

    }

    
    if(props.updateStatus){
        toast.success('Updated !');
        setTimeout(window.location.reload(),6000)
       
    }

    const socialLinkValue =()=>{
        return{
            facebook:links.facebook,
            twitter:links.twitter,
            instagram:links.instagram,
            youtube:links.youtube
        }
    }

    useEffect(()=>{
        props.initSocialLink(); 
    },[])



    return (
        <Layout>
            <h2>SOCIAL</h2>

        {/* SHOW DATA */}
            <ul className={styles.socialLinks}>
                <li><strong><FacebookIcon className={styles.icon}/> <a href={'https://'+ props.socialLinks.facebook} target='_blank' rel="noreferrer">{props.socialLinks.facebook}</a></strong></li>

                <li><strong><InstagramIcon className={styles.icon}/> <a href={'https://'+ props.socialLinks.instagram} target='_blank' rel="noreferrer">{props.socialLinks.instagram}</a></strong></li>
                <li><strong><YouTubeIcon className={styles.icon}/> <a href={'https://'+ props.socialLinks.youtube} target='_blank' rel="noreferrer">{props.socialLinks.youtube}</a></strong></li>

                <li><strong><TwitterIcon className={styles.icon}/> <a href={'https://'+ props.socialLinks.twitter} target='_blank' rel="noreferrer">{props.socialLinks.twitter}</a></strong></li>

            </ul>

            <EditButton clicked={sideDrawerOpenHandler}>EDIT</EditButton>

            <Sidedrawer open={sideDrawer} closed={sideDrawerClosedHandler}>
                 <form onSubmit={formSubmit} className={styles.form}>
                    <label>
                        <FacebookIcon/>
                        <input type='txt' 
                               value={links.facebook}
                               placeholder='Facebook link'
                               name='facebook'
                               onChange={inputChange}/>
                    </label>
                    <label>
                        <InstagramIcon/>
                        <input type='txt' 
                                value={links.instagram}
                                placeholder='Instagram link'
                                name ='instagram' 
                                onChange={inputChange}/>
                    </label>
                    <label>
                        <YouTubeIcon/>
                        <input type='txt' 
                                value={links.youtube}
                                placeholder='Youtube link'
                                name='youtube'
                                onChange={inputChange}/>
                    </label>
                    <label>
                        <TwitterIcon/> 
                        <input type='txt' 
                                value={links.twitter}
                                placeholder='twitter link'
                                name='twitter'
                                onChange={inputChange}/>
                    </label>

                    <UpdateButton clicked={()=>props.saveSocialLink(socialLinkValue())}>UPDATE</UpdateButton>
                 </form>
            </Sidedrawer>

            <ToastContainer/>
        </Layout>
    )
}

const mapStateToProps = state=>{
    return{
        socialLinks : state.socialLink.links,
        updateStatus: state.socialLink.updateStatus
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        saveSocialLink:(payload)=>dispatch(actionCreator.saveSocialLink(payload)),
        initSocialLink:()=>dispatch(actionCreator.initSocialLink())

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SocialLink)
