import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit{
  squares!: any[];
  player!: string;
  xIsNext!: boolean;
  winner!: string;
  gameIsDraw!: boolean;
  constructor() {}
  ngOnInit(): void {
      this.newGame();
  }
  newGame() : void{
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.gameIsDraw = false;
  }
  getPlayer() {
    return this.xIsNext ? 'X' : 'O';
  }
  makeMove(id: number){
    if(!this.squares[id]){
      this.squares.splice(id,1, this.getPlayer());
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
    if (!this.winner && this.squares.every(square => square)) {
      this.gameIsDraw = true;
    }
  }
  calculateWinner() {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for(let i=0; i<lines.length;i++){
      const [a,b,c] = lines[i];
      if(
        this.squares[a] &&
        this.squares[a] == this.squares[b] &&
        this.squares[a] == this.squares[c]
      ){
        return this.squares[a];
      }
    }
    return null;
  }
}
