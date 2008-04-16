/* jQuery UI Date Picker v3.4 compatibility with jQuery UI Date Picker v3.2.
   Written by Marc Grabanski (m@marcgrabanski.com) and Keith Wood (kbwood@virginbroadband.com.au).

   Copyright (c) 2007 Marc Grabanski (http://marcgrabanski.com/code/ui-datepicker)
   Dual licensed under the MIT (MIT-LICENSE.txt)
   and GPL (GPL-LICENSE.txt) licenses.
   Date: 09-03-2007  */

(function($) { // hide the namespace

$(document).ready(function() {
	// Add the old functions back again
	$.extend($.datepicker, {
		enableFor: function(control) {
			$(control).datepicker('enable');
			return this;
		},
	
		disableFor: function(control) {
			$(control).datepicker('disable');
			return this;
		},
	
		isDisabled: function(control) {
			return $(control).datepicker('isDisabled');
		},

		reconfigureFor: function(control, settings) {
			$(control).datepicker('change', settings);
			return this;
		},
		
		showFor: function(control) {
			$(control).datepicker('show');
			return this;
		},

		setDateFor: function(control, date, endDate) {
			$(control).datepicker('setDate', date, endDate);
			return this;
		},

		getDateFor: function(control) {
			return $(control).datepicker('getDate');
		}
	});
});

})(jQuery);
