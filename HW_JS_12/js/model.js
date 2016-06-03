define (
    'model',

    [],

    function () {
        console.log ('model is ready');
        var model = function Model(data) {
        var self = this;
        //data = ['text 1', 'text 2', 'text 3'];
        self.data = data;
        console.log (data);

        self.addItem = function (item) {
        	if (item.length === 0) {
        		return;
        	}

        	self.data.push(item);
        	return self.data;
        };

        self.removeItem = function (item) {
        	var index = self.data.indexOf(item);
        	if (index === -1) {
        		return self.data;
        	}
            
        	self.data.splice(index, 1);
        	return self.data;
        };}
    return model;
    }
)