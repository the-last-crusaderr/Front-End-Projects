class Media{
  constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
  }

  get title(){
    return this._title;
  }

  get isCheckedOut(){
    return this._isCheckedOut;
  }

  get ratings(){
    return this._ratings;
  }

  getAverageRating(){
      let sum = 0;
      if(this._ratings.length === 0){
        console.log('Nothing to show. Sorry!for inconvinience');
        return -1;
      }

      for(let i=0;i<this._ratings.length;i++){
          sum += this._ratings[i];
      }
       return sum/this._ratings.length;
  }

  toggleCheckOutStatus(){
    if (this._isCheckedOut)
      this._isCheckedOut = false;
    else
      this._isCheckedOut = true;  
  }

  addRating(num){
      this._ratings.push(num);
  }

}


class Book extends Media{
  constructor(title,author,pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author(){
    return this._author;
  }

  get pages(){
    return this._pages;
  }
}

class Movie extends Media{
  constructor(title,director,runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director(){
  return this._director;
  }

  get runTime(){
  return this._runTime;
  }

}


class CD extends Media{
  constructor(title,artist,songs){
    super(title);
    this._artist = artist;
    this.songs = songs;
  }

  get artist(){
    return this._artist;
  }

  get songs(){
    return this._songs;
  }

}



/*
let m = new Media('rock');
m.getAverageRating();

m.addRating(10);
m.addRating(8);
console.log(m.ratings);
console.log(m.getAverageRating());
*/ 
