requirejs.config({
    paths:{
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery'
    },
    shim: {
        'jquery': {
            exports: 'jQuery',
        }
    }
});


require(
	['jquery', 'tmpl', 'model', 'view', 'controller', 'script'],

	function($, tmpl, model, view, controller, script){
		/*$(function(){
			var firstToDoList = ['text 1', 'text 2', 'text 3'/*, 'text 4'];
		    /*var model = new Model(firstToDoList);
		    var view = new View(model);
		    var controller = new Controller(model, view);
		});*/

	}
);