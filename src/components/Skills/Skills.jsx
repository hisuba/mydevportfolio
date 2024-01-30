import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import ContentWriting from '../../assets/content.webp';
import GreatLearning from '../../assets/GreatLearning.png';
import SimpliLearn from '../../assets/simplilearn.png'

const Skills = () => {
  return (
    <>
    <section id='skills'>
   <span className='skillTitle'>What I do</span>
   <span className='skillDesc'>I'm a passionated web developer and content writer, having hands on skills on creating
visualised web sites and content writing. I have strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, Material-UI, Javascript, & ReactJs, as well as knowledge on technical content writing.</span>
<div className='skillBar'>
    <img src={UIDesign} alt ='' className='skillBarImg'/>
   < div className ="skillBarText">
    <h2> UI/UX Design</h2>
    <p>This is a demo text, you can write your own content here.</p>
   </div>
</div>
<div className='skillBar'>
    <img src={WebDesign} alt ='' className='skillBarImg'/>
   < div className="skillBarText">
    <h2>Website Design</h2>
    <p> This is demo text can be changes while making the production ready website.</p>
   </div>
</div>
<div className='skillBar'>
    <img src={ContentWriting} alt ='' className='skillBarImg3'/>
   < div className ="skillBarText">
    <h2>Content writing</h2>
    <p> This is demo text for ContentWriting/Copy writing.</p>
   </div>
</div>
    </section>
    <h3 className='h3'>My Certificates</h3>
    <section className=' certificates '>
    
      <div className='greatLearning'>
        <h4>Great Learning</h4>
      <img className= "certificate "src = {GreatLearning} alt="Great Learning"/>
      </div>
      <div className='simpliLearn'>
        <h4>Simpli Learn</h4>
        <img className= "certificate "src = {SimpliLearn} alt="Great Learning"/>
      </div>
    </section>
    </>
  )
}

export default Skills
