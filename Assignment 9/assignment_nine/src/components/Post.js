import React from 'react'
import Company from './Company'
import Position from './Position'

class Post extends React.Component {
    render() {
        var cardStyle = {
            height: 300,
            width: 200,
            padding: 0,
            margin: 10,
            backgroundColor: "#FFF",
            WebkitFilter: "drop-shadow(0px 0px 5px #666)",
            filter: "drop-shadow(0px 0px 5px #666)"
        };

        return (
            <div style={cardStyle} className="post-cards">
                <Company color={this.props.color} companyName={this.props.companyName} />
                <Position  jobPosition={this.props.jobPosition} />
            </div>
            
        );
    }
}

export default Post