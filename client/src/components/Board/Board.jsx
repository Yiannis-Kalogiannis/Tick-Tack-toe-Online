import BoardSquare from "./BoardSquare";



function Board() {
    return ( 
        <div className="board">
            <div className="board-row">
                <BoardSquare />
                <BoardSquare />
                <BoardSquare />
            </div>
            <div className="board-row">
                <BoardSquare />
                <BoardSquare />
                <BoardSquare />
            </div>
            <div className="board-row">
                <BoardSquare />
                <BoardSquare />
                <BoardSquare />
            </div>      

</div>
     );
}

export default Board;