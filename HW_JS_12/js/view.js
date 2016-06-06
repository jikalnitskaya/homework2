define (
    'view',

    ['jquery',
    'lodash',
    'model'],

    function($, _, model){
        function view(model) {
        console.log ('view is ready');
        var self = this;

        function init() {
        	var wrapper = tmpl($('#wrapper_tmpl').html());
        	$('body').append(wrapper);

        	self.elements = {
        		input         : $('.item_value'),
        		addBtn        : $('.item_add'),
        		listContainer : $('.item_list')
        	};

        	self.renderList(model.data);
        };

        self.renderList = function(data) {
        	var list = tmpl($('#list_tmpl').html(), {data : data});
        	self.elements.listContainer.html(list);
        };

        init();
    }
    return {view : view};
}
)