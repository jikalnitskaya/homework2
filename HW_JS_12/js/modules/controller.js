define (
    'modules/Controller',

    ['jquery', 'vendor/lodash', 'modules/Model', 'modules/View'],

    function () {

        return function Controller (Model, View) {
            console.log ('Controller is ready');
            var self = this;
            
            View.elements.addBtn.on('click', addItem);
            View.elements.listContainer.on('click', '.item_delete', removeItem);
            View.elements.listContainer.on('click', '.item_edit', editItem);

            function addItem() {
            	var newItem = View.elements.input.val();
            	Model.addItem(newItem);
            	View.renderList(Model.data);
            	View.elements.input.val('');
            }

            function removeItem() {
            	var item = $(this).attr('data-value');
            	Model.removeItem(item);
            	View.renderList(Model.data);
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
    }
);