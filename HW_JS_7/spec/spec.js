var jquery = require('../js/jquery.js');
var jasjquery = require('../js/jasmine-jquery.js');
var script = require('../js/script.js');

xdescribe("A questions", function() {
  it("contains answers", function() {
    expect('questions').toContain('answers');
  });
});

xdescribe("Function Clear", function() {
  it("resets results", function() {
  	var input = $('input')
    expect(questions.answers).toBeDefined();
  });
});

describe("Function isCorrect", function() {
  it("checking results", function() {
    expect('profile').toBe('obj');
  });
});

describe("Function isCorrect", function() {
  it("checking results", function() {
    expect(true).toBe(true);
  });
});

/*function clearLocalStorage(){
 window.localStorage.clear();
}
function getItemFromLocalStorage(key){
 return window.localStorage.getItem(key);
}
function setLocalStorage(obj){
 window.localStorage.setItem("obj",JSON.stringify(obj));
}
describe("localStorage: ", function(){

  var obj = {
    data: "dummy data"
  };


  it("SHOULD SAVE ITEM IN LOCALSTORAGE", function(){
    setLocalStorage(obj);
    var result = window.localStorage.getItem("obj");

    expect(result).toBeDefined();
    expect(JSON.parse(result)).toEqual(obj);
  });

  it("SHOULD RETURN ITEM", function(){
    setLocalStorage(obj);
    var result = getItemFromLocalStorage("obj");

    expect(JSON.parse(result)).toEqual(obj);
  })

})