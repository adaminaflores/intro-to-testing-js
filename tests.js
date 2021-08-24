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