requirejs.config({
    paths:{
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery'
    },
    shim: {
        'jquery': {
            exports: 'jQuery',
        }
    }
});


require(
	['jquery', 'vendor/lodash', 'modules/Model', 'modules/View', 'modules/Controller'/*, 'script'*/],

	function($, _, Model, View, Controller){
		$(function(){
			var firstToDoList = ['text 1', 'text 2', 'text 3'];
		    var model = new Model(firstToDoList);
		    var view = new View(model);
		    console.log (view);
		    var controller = new Controller(model, view);
		});

	}
);