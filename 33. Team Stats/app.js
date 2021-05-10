let team ={
  _players : [
    {firstName: 'Pablo',
  lastName: 'Sanchez',
  age: 11
  },
  {
       firstName: 'Pablo',
  lastName: 'Picasso',
  age: 15
  },
  {
     firstName: 'Last',
  lastName: 'Crusaderr',
  age: 14
  }],
  _games : [
    {
      opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
    },
    {
    opponent: 'Barcelone',
  teamPoints: 65,
  opponentPoints: 24
    },
    {
      opponent: 'Broncos',
  teamPoints: 54,
  opponentPoints: 48
    }
  ],

  get players(){
    return team._players;
  },

  get games(){
    return team._games;
  },

  addPlayer(firstName,lastName,age){
    let obj = {
      firstName,
      lastName,
      age
    }
      this._players.push(obj);
  },

  addGame (opponent,teamPoints,opponentPoints){
    let obj = {
      opponent,
      teamPoints, 
      opponentPoints
    }
    this._games.push(obj);
  },

};


//console.log(team.players);
//console.log(team.games);
team.addPlayer('Steph','Curry',28);
console.log(team.players);
team.addGame('Cricket',54,76);
console.log(team._games); 
