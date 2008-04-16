/* jQuery UI Date Picker v3.4 compatibility with jQuery UI Date Picker v3.2.
   Written by Marc Grabanski (m@marcgrabanski.com) and Keith Wood (kbwood@virginbroadband.com.au).

   Copyright (c) 2007 Marc Grabanski (http://marcgrabanski.com/code/ui-datepicker)
   Dual licensed under the MIT (MIT-LICENSE.txt)
   and GPL (GPL-LICENSE.txt) licenses.
   Date: 09-03-2007  */

(function($) { // hide the namespace

$(document).ready(function() {
	$.datepicker.hideDatepicker = function(speed) {
		$(document).datepicker('hide');
	};

	$.datepicker.dialogDatepicker = function(dateText, onSelect, settings, pos) {
		$(document).datepicker('dialog', dateText, onSelect, settings, pos);
	};
});

$.fn.attachDatepicker = function(settings) {
	return this.datepicker(settings);
};
	
$.fn.removeDatepicker = function() {
	return this.datepicker('destroy');
};
	
$.fn.enableDatepicker = function() {
	return this.datepicker('enable');
};
	
$.fn.disableDatepicker = function() {
	return this.datepicker('disable');
};
	
$.fn.isDisabledDatepicker = function() {
	return this.datepicker('isDisabled');
};

$.fn.changeDatepicker = function(settings) {
	return this.datepicker('change', settings);
};

$.fn.showDatepicker = function() {
	return this.datepicker('show');
};

$.fn.setDatepickerDate = function(date, endDate) {
	return this.datepicker('setDate', date, endDate);
};

$.fn.getDatepickerDate = function() {
	return this.datepicker('getDate');
};

})(jQuery);
