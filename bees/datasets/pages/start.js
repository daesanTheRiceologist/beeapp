import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Stuff from '../comps/Display/Stuff'
import {Logo} from '../comps/Display/Stuff' 

export default function Home() {
  return (
    <div className={styles.container}>
      <Stuff></Stuff>
      <Logo></Logo>
    </div>
  )
}
