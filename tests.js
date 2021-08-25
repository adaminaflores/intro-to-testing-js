// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe("sayHello", function() {
    it("should be a defined function", function () {
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called", function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello Jane!" when executed', function(){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("should return the string 'Hello Alex!' when executed", function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("should return the string 'Hello Pat!' when executed", function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("should return the input string when called", function() {
        expect(sayHello(name)).toBe("Hello, " + name + "!");
    });
    it("should return the string 'Hello World' when called", function() {
        expect(sayHello("World")).toBe("Hello, World!");
    });
    it("should return the string 'true' when called", function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("should return the string 'false' when called", function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });

});

describe("isFive", function(){
    it("should be a defined function", function(){
        expect(typeof isFive).toBe("function");
    });
    it("should return the boolean when called", function(){
       expect(typeof isFive()).toBe("boolean");
    });
    it("should return the boolean 'true' when called", function(){
       expect(isFive(true)).toBe("boolean");
    });
    it("should return the boolean 'false' when called", function(){
        expect(isFive(false)).toBe("boolean");
    });
    it("should return the boolean 'string' when called", function(){
        expect(isFive(" ")).toBe(false);
    });
    it("should return the boolean 5 when called", function(){
        expect(isFive(5)).toBe(false);
    });
});
describe("isEven", function(){
    it("should be a defined function", function(){
        expect(typeof isEven).toBe("function");
    });
    it("should return the boolean when called", function(){
        expect(typeof isEven()).toBe("boolean");
    });
    it("should return true when executed", function(){
        expect(isEven(2)).toBe(true);
    });
    it("should return true when negative is executed", function(){
       expect(isEven(-4)).toBe(true);
    });
    it("should return false when executed", function(){
        expect(isEven(3)).toBe(isEven(false));
    });
    it("should return false when 'banana' is called", function(){
        expect(isEven('banana')).toBe(false);
    });
    it("should return true when '8' is called", function(){
       expect(isEven('8')).toBe(true);
    });
    it("should return false when 'infinity' is called",function(){
       expect(isEven('infinity')).toBe(false);
    });
    it("should return false when called with a boolean input", function(){
        expect(isEven(true)).toBe(isEven(false));
    });
    it("should return false when called without an argument", function(){
        expect(isEven()).toBe(false);
    });
});