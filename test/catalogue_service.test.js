const catalogueService = require("../app/catalogue_service");
//Q1 TEST
describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });

})

//Q2 TEST
describe("catalogueService", () => {
describe("catalogueService.checkBookByTitle", () => {
  test("returns true if the book exists", () => {
    expect(
      catalogueService.checkBookByTitle(
        "The Assassination of Margaret Thatcher"
      )
    ).toBe(true);
  });
});
});

//Q3 TEST
describe.only("catalogueService", () => {
  describe("catalogueService.countBooksByFirstLetter", () => {
    test("receive a letter as an arguments and return the total number of books that begin with that letter", () => {
      expect(catalogueService.countBooksByFirstLetter("T")).toBe(5);
      expect(catalogueService.countBooksByFirstLetter("G")).toBe(2);
    });
  });

})

//Q4 TEST
describe("catalogueService", () => {
  describe("catalogueService.getQuantity", () => {
    test("receives a book title and returns the number of copies in stock", () => {
      expect(catalogueService.getQuantity("Normal People")).toBe(2);
      expect(catalogueService.getQuantity("Great Expectations")).toBe(1);
    });
  });

})

//Q5 TEST***


//Q6 TEST
describe("catalogueService", () => {
  describe("catalogueService.checkQuantity", () => {
    test("recieves a title and a quantity as an argument and returns true if there are at least that many books in stock, and false if not", () => {
      expect(catalogueService.checkQuantity("Normal People", 1)).toBe(true);
      expect(catalogueService.checkQuantity("Great Expectations", 50)).toBe(false);
    });
  });

})


