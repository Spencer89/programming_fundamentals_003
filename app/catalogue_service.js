// eslint-disable-next-line no-unused-vars
const catalogue = [

  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    quantity: 10
  },

  {
    title: "Dracula",
    author: "Bram Stoker",
    quantity: 0
  },


  {
    title: "Between the Assassinations",
    author: "Aravind Adiga",
    quantity: 9
  },


  {
    title: "Wolf Hall",
    author: "Hilary Mantel",
    quantity: 33
  },


  {
    title: "Bringing Up The Bodies",
    author: "Hilary Mantel",
    quantity: 11
  },


  {
    title: "A Place of Greater Safety",
    author: "Hilary Mantel",
    quantity: 11
  },


  {
    title: "Giving Up The Ghost",
    author: "Hilary Mantel",
    quantity: 8
  },

  {
    title: "The Assassination of Margaret Thatcher",
    author: "Hilary Mantel",
    quantity: 43
  },

  {
    title: "The Yellow Wallpaper",
    author: "Charlotte Perkins Gilman",
    quantity: 12,
  },

  {
    title: "Conversations With Friends",
    author: "Sally Rooney",
    quantity: 1,
  },

  {
    title: "Normal People",
    author: "Sally Rooney",
    quantity: 2,
  },

  {
    title: "Everything I Never Told You",
    author: "Celeste Ng",
    quantity: 6,
  },

  {
    title: "2666",
    author: "Robert Bolaño",
    quantity: 17,
  },

  {
    title: "By Night In Chile",
    author: "Robert Bolaño",
    quantity: 8,
  },

  {
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    quantity: 3,
  },

  {
    title: "Oliver Twist",
    author: "Charles Dickens",
    quantity: 7
  },

  {
    title: "Great Expectations",
    author: "Charles Dickens",
    quantity: 1,
  },

  {
    title: "The Blind Assassin",
    author: "Margaret Atwood",
    quantity: 8,
  },

  {
    title: "Why Be Happy When You Could Be Normal?",
    author: "Jeanette Winterson",
    quantity: 19,
  },

  {
    title: "The Origin Of Species",
    author: "Charles Darwin",
    quantity: 50,
  }

];
//Q1 - COMPLETE
function countBooksByAuthor(obj) {

  let count = 0;

  for (let i = 0; i < catalogue.length; i++) {
    if (catalogue[i].author === obj) {
      count++;
    }
  }
  return count;
}

//Q2 - COMPLETE
function checkBookByTitle(title) {
  for (let i = 0; i < catalogue.length; i++) {
    if (catalogue[i].title === title) { return true; }

  }
}

//Q3 - COMPLETE

function countBooksByFirstLetter(letter) {
  let count = 0;
  for (let i = 0; i < catalogue.length; i++) {

    if (catalogue[i].title.charAt(0) === letter) {
      count++
    }
  }
  return count;
}

//Q4 - COMPLETE

function getQuantity(title) {
 for (let i=0; i< catalogue.length; i++){
   if(catalogue[i].title === title)
  // we're going to say:
  // if catalogue[i].title is equal to the title we're getting passed in
  // then I want to return catalogue[i] 's quantity (so .quantity)

   return catalogue[i].quantity
 }
}

/*Q5 - COMPLETE
This function should receive an author as an argument (e.g. "Robert Bolaño") and return
 an array of books*/

function getBooksByAuthor(author) {
  for (let i=0; i< catalogue.length; i++){
    if (catalogue[i].author === author)
    return catalogue[i]
  }
}


/*Q6
This function should receive a title and a quantity as an argument
 (e.g. "By Night In Chile" and 4) and return `true` if there are at least as many
  books in stock as the given quantity, and false otherwise.*/
function checkQuantity(title, quantity) {
  for (let i = 0; i < catalogue.length; i++) {
    if  (catalogue[i].quantity=== quantity && catalogue[i].title)
    return true; 

  }
}




module.exports = {
  countBooksByAuthor,
  checkBookByTitle,
  countBooksByFirstLetter,
  getQuantity,
  getBooksByAuthor,
  checkQuantity
};