var script = require ('../js/script.js');
console.log (script);


describe("Jasmine", function() {
  it("makes testing JavaScript awesome!", function() {
    expect(true).toBe(true);
  });
});

describe("pow", function() {
  it("возводит a в степень b", function() {
  	var a = 2;
  	var b = 2;
    expect(pow(a, b)).toBe(4);
  });
});

xdescribe("Jasmine", function() {
  it("makes testing JavaScript awesome!", function() {
  	a = 5;
    expect(a).toBeDefined();
  });
});

describe("Jasmine", function() {
  it("makes testing JavaScript awesome!", function() {
  	var func = script.pow();
    expect(pow).toBeDefined();
  });
});


xdescribe("Jasmine", function() {
  it("makes testing JavaScript awesome!", function() {
  	a = 2;
  	b = 0;
  	result = pow(a, b);
    expect(result).toBe(1);
  });
});