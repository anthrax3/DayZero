class Score
{
	constructor()
	{
		
		this.score = 0;
		this.x = app.canvas.width - 100;
		this.y = 40;
		this.scoreText = new Text();
	}

	Draw()
	{
		app.ctx = app.canvas.getContext("2d");
		app.ctx.font = "18px NONSTOP";
		app.ctx.fillStyle = "red";

		this.scoreText = 'Score: ' + this.score;

		app.ctx.fillText(this.scoreText,this.x, this.y);
	}

	UpScore()
	{
		this.score += 10;
	}

	LoseScore()
	{
		this.score = 0;
	}

}