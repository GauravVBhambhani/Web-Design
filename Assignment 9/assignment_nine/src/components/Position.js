import React from 'react'

class Position extends React.Component {
    render() {
        var labelStyle = {
            fontFamily: "sans-serif",
            fontWeight: "bold",
            padding: 13,
            margin: 0
        };

        return (
            <p style={labelStyle}>
                {this.props.jobPosition}
            </p>
        );
    }
}

export default Position;