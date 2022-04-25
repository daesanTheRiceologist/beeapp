import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MainImg } from '../comps/Display'
import Stuff from '../comps/Display/Stuff'
import {Logo} from '../comps/Display/Stuff' 
import styled from 'styled-components';


import { useRouter } from 'next/router'
import { ChangeName } from '../data/que_content'

const GetStartedButton = styled.button`
margin-top: 5vh;
background-color: #FF9F0E; /* Green */
border: none;
color: white;
padding: 20px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
cursor: pointer;
border-radius: 12px;
`;

const ScreenCont = styled.div`
background-image: url("/loadingScreen.png");
height:100vh;
`

export default function Home() {

  
  const r = useRouter();
  return (
    <ScreenCont className={styles.container}>
      <Stuff></Stuff>
      <Logo></Logo>
      <input type='text' placeholder='Type your name here'
      onChange={
        (e)=>ChangeName(e.target.value)
      }
      />
      <GetStartedButton onClick={
        ()=>r.push("/start")
      }>Get Started</GetStartedButton>
    </ScreenCont>
  )
}
