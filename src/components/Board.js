import React from 'react';
import Cells from './Cells'

function Board() {
    const [boardContent, setBoardContent] = React.useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ])

    return(
        <div style={{  
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 100px)',
            gridTemplateRows: 'repeat(3, 100px)'
            }}>
                <Cells content={boardContent[0][0]}/>
                <Cells content={boardContent[0][1]}/>
                <Cells content={boardContent[0][2]}/>
                <Cells content={boardContent[1][0]}/>
                <Cells content={boardContent[1][1]}/>
                <Cells content={boardContent[1][2]}/>
                <Cells content={boardContent[2][0]}/>
                <Cells content={boardContent[2][1]}/>
                <Cells content={boardContent[2][2]}/>
        </div>
    )
}

export default Board;