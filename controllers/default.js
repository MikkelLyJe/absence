exports.install = function() {

	ROUTE('/');
    ROUTE('/floor/')
    ROUTE('/storage/')
	ROUTE('/office/');
    ROUTE('/supervisor/');

	// Enables a localization mechanism + compression for all client-side components
	LOCALIZE('/components/*.html', ['compress']);

};

function view_services() {
	var self = this;
	self.view('services');
}