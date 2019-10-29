import React from 'react';

function Cell({ boardContent }) {
    return(
        <button
            style={{ 
                backgroundColor: 'light-blue', 
                height: '100px',
                width: '100px'
            }}>
            {boardContent}
        </button>
    )
}

export default Cell