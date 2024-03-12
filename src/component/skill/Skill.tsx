import React, { useRef } from 'react'
import "./Skill.scss";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function Skill() {
  const settings = {
    // Customize your slider settings here
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const skillsData = [
    { id: 1, title: 'Html', description: 'User configuration builds the interface web', image: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
    { id: 2, title: 'Scss', description: 'Generate css coding results and easy maintenance', image: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/sass-5.png' },
    { id: 3, title: 'ReactJs', description: 'JavaScript library for building UI', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' },
    { id: 4, title: 'NodeJs', description: 'JavaScript library for build the application backend', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png' }
    // Add more data items as needed
  ];
  return (
    <div data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="800" id='skill' className='skill'>
    <h5 className='contact__title skill__title'>Skill</h5>
    <div className='contact__line'></div>
    <div className='skill_slide'>
    <Slider className='slide' {...settings}>
        {/* Map over the skillsData array to generate slides */}
        {skillsData.map((skill) => (
  <div key={skill.id}>
    <div className='slide__container'>
    <h3 className='slide__title'>{skill.title}</h3>
    </div>
    <img  className="slide__img"src={skill.image} alt={skill.title} />
   
    <p className='slide__desc'>{skill.description}</p>
  </div>
))}

      </Slider>
    </div>
    
  </div>
  )
}

export default Skill
