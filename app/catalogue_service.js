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

/*Q3 - ***INCOMPLETE***
This function should receive a letter as an argument (e.g. "H") and return the total number
 of books that begin with this letter. Note that the quantity is not relevant here.
 Ensure it passes regardless of case*/

function countBooksByFirstLetter(letter) {
  let count = 0;
  for (let i = 0; i < catalogue.length; i++) {

    if (catalogue[i].charAt(0) === letter) {
      count++
    }
  }
  return count;
}

/*Q4 - INCOMPLETE
This function should receive a title as an argument (e.g. "The Origin of Species") and
 return the quantity of this item which is in stock*/

function getQuantity(title) {
 for (let i=0; i< catalogue.length; i++){
   return catalogue[title].quantity
 }
}

/*Q5 *no test*
This function should receive an author as an argument (e.g. "Robert Bolaño") and return
 an array of books*/

function getBooksByAuthor(author) {

}
/*Q6
This function should receive a title and a quantity as an argument
 (e.g. "By Night In Chile" and 4) and return `true` if there are at least as many books
  in stock as the given quantity, and false otherwise.*/
function checkQuantity(title, quantity) {
  

}





module.exports = {
  countBooksByAuthor,
  checkBookByTitle,
  countBooksByFirstLetter,
  getQuantity,
  getBooksByAuthor,
  checkQuantity
};