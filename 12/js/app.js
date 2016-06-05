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

	function($, _, model, view, controller){
		$(function(){
			var firstToDoList = ['text 1', 'text 2', 'text 3'];
		    var model = new model(firstToDoList);
		    var view = new view(model);
		    var controller = new controller(model, view);
		});

	}
);