function Game() {
  return (
    <div className="app">
      <h3>Memory Card Game</h3>
      <div className="title">
        <h3>Score:</h3>
        <h3>High Score:</h3>
      </div>
      <div className="rows">
        <div className="row1">
          <img src="1.jpg" alt="" />
          <img src="2.jpg" alt="" />
          <img src="3.jpg" alt="" />
          <img src="4.jpg" alt="" />
        </div>

        <div className="row2">
          <img src="5.jpg" alt="" />
          <img src="6.jpg" alt="" />
          <img src="7.jpg" alt="" />
          <img src="2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Game;
