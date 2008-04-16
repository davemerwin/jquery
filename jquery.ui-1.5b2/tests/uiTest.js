
function uiTest(testSet) {
	deserializeTests(testSet, $('#tests'), "");
}

function uiTestLog(msg) {
	$('#test-container').prepend('<div class="log-entry">' + msg + '</div>');
}

$(function() {

	$('body').append('<div id="blackhole"/>');
	$('#blackhole').css({width: 0, height: 0, overflow: 'hidden'});
	$('body').append('<dl id="tests"/>');

});

	function deserializeTests( jsObj, dl, path ) {
		$.each( jsObj, function(name, value) {
			if ( typeof value == 'object' ) {
				dl.append('<dt id="' + path + ((name.length) ? name : '') + '">' + ((name.length) ? name : '[default]') + '</dt>');
				var dd = $( document.createElement( 'dd' ) ).appendTo( dl );
				var newDl = $( document.createElement( 'dl' ) ).appendTo( dd );
				deserializeTests( value, newDl, path + name + '-' );
			} else {
				dl.append('<dt id="' + path + ((name.length) ? name : '') + '">' + ((name.length) ? path + name : '[default]') + '</dt>');
				var dd = $( document.createElement( 'dd' ) ).appendTo( dl );
				var link = $( document.createElement( 'a' ) ).appendTo( dd );
				link
					.attr( 'href', '#' + path + ((name.length) ? name : '') )
					.text( value )
					.click(function() {
						$( '#test-container' ).remove();
						$( '#foo' ).remove();
						$( '#bar' ).remove();
						$( '#blackhole' ).append( '<div id="foo"/>' ).append( '<div id="bar"/>' );
						$( '#foo' )
							.html( '<pre><code>' + value + '</code></pre>' )
							.prepend( '<div>' + path + ((name.length) ? name : '[default]') + '</div><hr>' );
						$( this ).after( '<div id="test-container"/>' );
						$( '#test-container' ).append( $( '#foo' ) ).append( $( '#bar' ) );
						try {
							eval( value );
						} catch ( err ) {
							var errDl = $(document.createElement('dl')).insertAfter(link);
							$.each(err, function(name, value) {
								errDl.append('<dt>' + name + '</dt>');
								errDl.append('<dd><pre><code>' + value + '</code></pre></dd>');
							});
							link.after('<div class="error">' + err + '</div>');
						} finally {
							return false;
						}
					});
			}
		});
	}
