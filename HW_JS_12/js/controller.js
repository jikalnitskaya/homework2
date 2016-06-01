define (
    'controller',
    [],
    function Controller (model, view) {
        console.log ('controller is ready');
        var self = this;
        
        view.elements.addBtn.on('click', addItem);
        view.elements.listContainer.on('click', '.item_delete', removeItem);
        view.elements.listContainer.on('click', '.item_edit', editItem);

        function addItem() {
        	var newItem = view.elements.input.val();
        	model.addItem(newItem);
        	view.renderList(model.data);
        	view.elements.input.val('');
        }

        function removeItem() {
        	var item = $(this).attr('data-value');
        	model.removeItem(item);
        	view.renderList(model.data);
        }

        function editItem() {
        	var index = $('.item_edit').index(this);
        	console.log (index);
            var item = $('li').eq(index).html();
            var li = $('li').eq(index);
            var input = '<input type="text" class="new" value="'+item+'"></input>';
            li.after(input);
            li.hide();
            var btnSave = '<button class="item_save">Save</button>';
            $(this).after(btnSave);
            $('.item_save').on('click', saveItem);

            function saveItem () {
               	item = $('.new').val();
            	console.log (item);
            	li.html(item).show();
            	$('.new').remove();
                $('.item_save').remove();
            };
        }
    }
)