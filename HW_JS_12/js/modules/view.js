define (
    'modules/View',

    ['jquery', 'vendor/lodash', 'modules/Model'],

    function (Model) {
        return function View(Model) {
            console.log ('View is ready');
            var self = this;

            function init() {
            	var wrapper =_.template($('#wrapper_tmpl').html());
            	$('body').append(wrapper);

                self.elements = {
            		input         : $('.item_value'),
            		addBtn        : $('.item_add'),
            		listContainer : $('.item_list')
            	};

                self.renderList(Model.data);
            };  

            self.renderList = function(data) {
                var tmpl = _.template($('#list_tmpl').html());
                var list = tmpl({data : data});
                self.elements.listContainer.html(list);
            };

            init();
        }
    }
);