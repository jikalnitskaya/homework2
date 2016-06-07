//var script = require ('../js/script.js');
//console.log (script);


describe("Jasmine", function() {
  it("makes testing JavaScript awesome!", function() {
    expect(true).toBe(true);
  });
});

describe("pow", function() {
  it("возводит a в степень b", function() {
  	var a = 2;
  	var b = 2;
    //var pow = script.pow;
    expect(pow(a, b)).toBe(4);
  });
});

xdescribe("Jasmine", function() {
  it("makes testing JavaScript awesome!", function() {
  	a = 5;
    expect(a).toBeDefined();
  });
});

describe("Is function pow", function() {
  it("defined", function() {
  	var func = pow(a, b);
    expect(func).toBeDefined();
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