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
	['jquery', 'vendor/lodash', 'modules/model', 'modules/view', 'modules/controller'/*, 'script'*/],

	function($, _, Model, View, Controller){
		$(function(){
			console.log (Model);
			var firstToDoList = ['text 1', 'text 2', 'text 3'];
		    var model = new Model(firstToDoList);
		    var view = new View(Model);
		    var controller = new Controller(Model, View);
		});

	}
);