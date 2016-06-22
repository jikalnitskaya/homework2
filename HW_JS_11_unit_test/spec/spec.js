//var script = require ('../js/script.js');
//console.log (script);


describe("Функция pow", function() {
  it("возводит a в степень b", function() {
     a = 2;
     b = 2;
     pow (a, b);
    expect(result).toBe(4);
  });
});

describe("Функция pow", function() {
  it("при возведении в 0 степень дает 1", function() {
    a = 3;
    b = 0;
    pow (a, b);
   expect(result).toBe(1);
  });
});
describe("Функция pow", function() {
  it("возводит -a в степень b", function() {
   a = -2;
   b = 2;
   pow (a, b);
   expect(result).toBe(4);
  });
});

describe("Определены ли", function() {
  it("a, b, result", function() {
  
    expect(a).toBeDefined();
    expect(b).toBeDefined();
    expect(result).toBeDefined();
  });
});
describe("Определены ли", function() {
  it("функции", function() {
    expect(pow).toBeDefined();
    expect(check).toBeDefined();
  });
});
describe("b > 0", function() {
  it("значение должно быть верно", function() {
    expect(b).toBeGreaterThan(0);
  });
});
describe("str", function() {
  it("значение должно соответствовать", function() {
    result = 8;
    str = 'Результат = '+ result;
   expect(str).toMatch('Результат = 8');
  });
});