function Model(data) {
    var self = this;
    self.data = data;

    self.addItem = function (item) {
    	if (item.length === 0) {
    		return;
    	}

    	self.data.push(item);
    	return self.data;
    }

    self.removeItem = function (item) {
    	var index = self.data.indexOf(item);
    	if (index === -1) {
    		return;
    	}

    	self.data.splice(index, 1);
    	return self.data;
    }
}


function View(model) {
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


function Controller (model, view) {
    var self = this;
    
    view.elements.addBtn.on('click', addItem);
    view.elements.listContainer.on('click', 'item_delete', removeItem);

    function addItem() {
    	var newItem = view.elements.input.val();
    	model.addItem(newItem);
    	view.renderList(model.data);
    	view.elements.input.val('');
    }

    function removeItem() {
    	var item = $(this).attr('data-value');
    	console.log (item);
    	model.removeItem(item);
    	view.renderList(model.data);
    }
}


$(function(){
    var firstToDoList = ['text 1', 'text 2', 'text 3'];
    var model = new Model(firstToDoList);
    var view = new View(model);
    var controller = new Controller(model, view);
});