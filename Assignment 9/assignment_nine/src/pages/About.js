import React from 'react'
// import '../style/About.css';
import Post from '../components/Post'

class About extends React.Component {
    render() {
        return (
            <div className='about-cards'>
                <Post companyName="About Page" 
                jobPosition="Some information about assignment"/>
                
            </div>
            
        );
    }
}

export default About