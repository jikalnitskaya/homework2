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
			var firstToDoList = ['text 1', 'text 2', 'text 3'];
		    var model = new model.Model(firstToDoList);
		    var view = new view.View(model);
		    var controller = new controller.Controller(model, view);
		});*/

	}
);