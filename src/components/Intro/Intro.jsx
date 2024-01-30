import React from 'react'
import './intro.css'
import bg from '../../assets/hero.webp';
import btnImg from '../../assets/hireme.png'

const Intro = () => {
 
  return (
   <section id='intro'>
<div className='introContent'>
<span className='hello'>Hello,</span>
<span className='introText'>I'm <span className='introname'>Balu</span><br />Web Developer<br />Content Writer</span>
<p className='introPara'> I'm a passionated web developer and content writer,  having hands on skills on creating <br />visualised web sites and content writing.</p>
<a href ="https://drive.google.com/file/d/1fLrlrTT6tAoAv6U4hrNJsx_5bzwMibJS/view?usp=sharing"><button className='btn'><img src={btnImg} alt=" " className='btnImg'/>Hire Me</button></a>
</div>
<img src = {bg} alt='profile' className='bg'/>
   </section>

  )
}

export default Intro
