import React from 'react'
import '../style/Jobs.css';
import Post from '../components/Post'

// class Company extends React.Component {
//     render() {
//         var squareStyle = {
//             height: 150,
//             padding: 10,
//             margin: 5,
//             backgroundColor: this.props.color
//         };

//         return (
//             <div style={squareStyle} className="company-cards">
//                 <p>{this.props.companyName}</p>
//             </div>
//         );
//     }
// }

// class Position extends React.Component {
//     render() {
//         var labelStyle = {
//             fontFamily: "sans-serif",
//             fontWeight: "bold",
//             padding: 13,
//             margin: 0
//         };

//         return (
//             <p style={labelStyle}>{this.props.jobPosition}</p>
//         );
//     }
// }

// class Post extends React.Component {
//     render() {
//         var cardStyle = {
//             height: 300,
//             width: 200,
//             padding: 0,
//             margin: 10,
//             backgroundColor: "#FFF",
//             WebkitFilter: "drop-shadow(0px 0px 5px #666)",
//             filter: "drop-shadow(0px 0px 5px #666)"
//         };

//         return (
//             <div style={cardStyle} className="post-cards">
//                 <Company color={this.props.color} companyName={this.props.companyName} />
//                 <Position  jobPosition={this.props.jobPosition}/>
//             </div>
            
//         );
//     }
// }

class Jobs extends React.Component {
    render() {
        return (
            <div className='job-cards'>
                <Post color="#00A4EF" companyName="Microsoft" jobPosition="Internship - Developer"/>
                <Post color="#FF6663" companyName="JP Morgan Chase & Co." jobPosition="Internship - Developer"/>
                <Post color="#FF6663" companyName="Goldman Sachs" jobPosition="Internship - APM"/>
                <Post color="#FF6663" companyName="Google" jobPosition="Internship - Web Dev"/>
                <Post color="#FF6663" companyName="Meta" jobPosition="Internship - JAVA Dev"/>
                <Post color="#FF6663" companyName="Amazon" jobPosition="Internship - Developer"/>
            </div>
            
        );
    }
}

export default Jobs