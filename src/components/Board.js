import React from 'react';
import Cells from './Cells'

function Board() {
    const boardContent = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]
    return(
        <div>
            <div>
                <Cells content={boardContent[0][0]}/>
                <Cells content={boardContent[0][0]}/>
                <Cells content={boardContent[0][0]}/>
            </div>
            <div>
                <Cells content={boardContent[0][0]}/>
                <Cells content={boardContent[0][0]}/>
                <Cells content={boardContent[0][0]}/>
            </div>
        <div>
                <Cells content={boardContent[0][0]}/>
                <Cells content={boardContent[0][0]}/>
                <Cells content={boardContent[0][0]}/>
        </div>
    </div>
    )
}

export default Board;