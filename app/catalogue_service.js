// eslint-disable-next-line no-unused-vars
const catalogue = [

  {
            title:"The Catcher in the Rye",
            author: "J.D. Salinger",
            quantity: 10
          },
  
            {
              title:"Dracula",
              author:"Bram Stoker",
              quantity:0
            },
  
  
            {
              title:"Between the Assassinations",
              author:"Aravind Adiga",
              quantity:9
            },
  
  
            {
              title:"Wolf Hall",
              author:"Hilary Mantel",
              quantity: 33
            },
  
  
            {
              title:"Bringing Up The Bodies",
              author:"Hilary Mantel",
              quantity:11
            },
  
  
           {
              title:"A Place of Greater Safety",
              author:"Hilary Mantel",
              quantity:11
            },
  
  
            {
              title:"Giving Up The Ghost",
              author:"Hilary Mantel",
              quantity:8
            },
  
            {
              title:"The Assassination of Margaret Thatcher",
              author:"Hilary Mantel",
              quantity:43
            },
  
            {
              title:"The Yellow Wallpaper",
              author:"Charlotte Perkins Gilman",
              quantity:12,
            },
  
            {
              title:"Conversations With Friends",
              author:"Sally Rooney",
              quantity:1,
            },
  
            {
              title:"Normal People",
              author:"Sally Rooney",
              quantity:2,
            },
  
            {
              title:"Everything I Never Told You",
              author:"Celeste Ng",
              quantity:6,
            },
  
            {
              title:"2666",
              author:"Robert Bolaño",
              quantity:17,
            },
  
            {
              title:"By Night In Chile",
              author: "Robert Bolaño",
              quantity:8,
            },
  
            {
              title:"A Tale of Two Cities",
              author:"Charles Dickens",
              quantity:3,
            },
  
            {
              title: "Oliver Twist",
              author: "Charles Dickens",
              quantity: 7
            },
  
            {
              title:"Great Expectations",
              author:"Charles Dickens",
              quantity:1,
            },
  
            {
              title:"The Blind Assassin",
              author:"Margaret Atwood",
              quantity:8,
            },
  
            {
              title:"Why Be Happy When You Could Be Normal?",
              author:"Jeanette Winterson",
              quantity:19,
            },
  
            {
              title:"The Origin Of Species",
              author:"Charles Darwin",
              quantity:50,
            }
  
  ];

function countBooksByAuthor(author) {
 /*for (let property in obj){

 }

}
Q - Should obj be author??
Q - How do I do a running count? Is it accumulator/value? or let count =0??
Q - How do you let a loop run through various objects? In the example's 
we looked at we were searching through one object at a time?(I think?)
*/

function checkBookByTitle(title) {
  /*
  
  for (let property in obj){
    if (obj[property]===title) 
    {return true} 
    else return false;
  }
}
Q- should obj be title? How does it know to search titles if we use obj?
*/

function countBooksByFirstLetter(letter) {
  /* for(let property in obj){

  }

}
Q - How do you do a running count??
I want to say - loop through books.title and for all titles that begin with a 
specific letter if(letter === books.title[0])?? then add this to the count

*/
function getQuantity(title) {
  /* for(
  })
  
}

I want to say - go through the given object
 and get the quantity value and return it...something to do with title.quantity??
 
*/

function getBooksByAuthor(author) {
  /* Your code here
}

I want to say - go through all of the objects, and return the book.author that match
a given author (=== author).
*/
function checkQuantity(title, quantity) {
  /* Your code here
}

I want to say - loop through the objects untill you find a specific title and if the given quantity matches the actual quantity, 
{return true} else {return false}
*/


module.exports = {
  countBooksByAuthor,
  checkBookByTitle,
  countBooksByFirstLetter,
  getQuantity,
  getBooksByAuthor,
  checkQuantity
};
