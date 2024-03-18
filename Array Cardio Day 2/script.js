// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks

  // Array.prototype.some() // is at least one person 19 or older?
//   const d = new Date();
//   let year = d.getFullYear();
//   const result = people.some(element => year - element.year > 19);
//   console.log(result)
  

// Array.prototype.every() // is everyone 19 or older?
//   const d = new Date();
//   let year = d.getFullYear();
//   const result = people.every(element => year - element.year > 19);
//   console.log(result)

  // Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
//   const result = comments.find(element => element.id == 823423);
//   console.log(result)

  // Array.prototype.findIndex()
  // Find the comment with this ID
//   const result = comments.findIndex(element => element.id == 823423);
//   console.log(result)

  // delete the comment with the ID of 823423
  //const result = comments.findIndex(element => element.id == 823423);
  const {a : {text1, id1},b : {text2, id2},c : {text3, id3},d : {text4, id4},e : {text5, id5}} = comments;
  console.log(`hello im ${a}`)