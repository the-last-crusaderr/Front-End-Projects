class School{
  constructor(name,level,numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
  }

  get name(){
    return this._name;
  }

  get level(){
    return this._level;
  }

  get numberOfStudents(){
    return this._numberOfStudents;
  }

  set numberOfStudents(num){
    this._numberOfStudents = num;
  }

  quickFacts(){
    console.log('Some quick facts about school!')
  }

  pickSubstituteTeacher(){
    let teachers = ['Adam','Mike','Smith','Henry'];
    console.log('Pick one from ${teachers}');
  }
}


class Primary extends School{
  constructor(name,level,numberOfStudents,pickupPolicy){
    super(name,level,numberOfStudents);
    this._pickupPOlicy = pickupPolicy;
  }
}

class Middle extends School{
  constructor(name,level,numberOfStudents){
    super(name,level,numberOfStudents);
  }
}

class High extends School{
  constructor(name,level,numberOfStudents,sportsTeam){
    super(name,level,numberOfStudents);
    this._sportsTeam = sportsTeam;
  }
}
