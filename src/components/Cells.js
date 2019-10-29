import React from 'react';

function Cell(props) {

    const  { content } = props;

    return(
        <button
            style={{ 
                backgroundColor: 'light-blue', 
                height: '100px',
                width: '100px'
            }}>
            {content}
        </button>
    )
}

export default Cell