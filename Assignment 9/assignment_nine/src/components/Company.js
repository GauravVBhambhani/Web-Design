import React from 'react'

class Company extends React.Component {
    render() {
        var squareStyle = {
            height: 150,
            padding: 10,
            margin: 5,
            backgroundColor: this.props.color
        };

        return (
            <div style={squareStyle} className="company-cards">
                <p>{this.props.companyName}</p>
            </div>
        );
    }
}

export default Company;