import React from 'react';
import '../style/Contact.css';

function Contact(){

    const companies = ['Goldman Sachs', 'Google', 'Microsoft', 'Meta', 'Walmart', 'Amazon', 'Apple', 'hello']

    return (
        <div className='list-of-companies'>
            <hr/><p className='title'>Companies page </p>
            {
                companies.map((element, index) => 
                    <div className='companies-display' key={index}>
                        {element} <hr/>
                    </div>
                )
            }
        </div>
    );
}

export default Contact