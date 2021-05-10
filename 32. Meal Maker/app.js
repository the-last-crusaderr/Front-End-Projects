menu = {
  _courses: {
    appetizers: [], 
    mains: [],
    desserts:[],
  
/*
get appetizers (){

},

set appetizers (){

},

get mains(){

},

set mains(){

},

get desserts(){

},

set desserts(){

},

  },


*/
get courses(){
  return Object.entries(menu._courses);
},

addDishToCourse(courseName, dishName, dishPrice){
    let ob = {
      name : dishName,
      price : dishPrice,
    };
    if (courseName === 'main')
      this._courses.main.push(ob);
    else if (courseName === 'desserts')  
      this._course.desserts.push(ob);
      else
        this._course.appetizers.push(ob);
},

getRandomDishFromCourse(courseName){
    let dishes = this._courses.courseName;
    let index = math.floor(Math.random()*dishes.length);
    return dishes[index];
},

generateRandomMeal(){
  let appetizer = this.getRandomDishFromCourse('apetizers');
  let main = this.getRandomDishFromCourse('mains');
  let dessert = this.getRandomDishFromCourse('desserts');
  let price = appetizer.price + main.price + dessert.price;
  return `${appetizer},${main} and ${dessert}. Total price is ${price} `;
},
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Caesar Soup', 5.25);
menu.addDishToCourse('appetizers', 'Fruit Salad', 7.25);

menu.addDishToCourse('mains', 'Chicken', 44.25);
menu.addDishToCourse('mains', 'Beef', 12.00);
menu.addDishToCourse('mains', 'Paneer', 14.25);


menu.addDishToCourse('desserts', 'Ice cream', 2.25);
menu.addDishToCourse('desserts', 'Sweet', 3.25);
menu.addDishToCourse('desserts', 'Cold Drink', 1.25);


let meal = menu.generateRandomMeal();
console.log(meal);
 
