export default function GameOver({ winner, onRestart }) {
    return <div className="game-over">
        <h2>Game Over!</h2>
        {winner && <p> won!</p>}
        {!winner && <p>It's a draw!</p>}
        <p>
            <button onClick={onRestart}>Rematch!</button>
        </p>
    </div>
}