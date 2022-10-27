const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
  });
  it("expected it should be a reversed string", () => {
    const expectedString = "olleh";
    const reversedString = new Algo().reverse("hello");
    expect(reversedString).toEqual(expectedString);
  });
  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
  });
  it("should return an object containing a 'number' property when called with the 'new' keyword", () => {
    const obj = new Arithmetic();

    expect("number" in obj).toEqual(true);
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
  });
});
