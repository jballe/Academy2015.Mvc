(function() {
	'use strict';
	
	function getCodeFromElement(element) {
		var html = element.innerHTML.trim();
		html = html.replace(/&lt;/g, '<');			
		html = html.replace(/&gt;/g, '>');	
		
		// Add layout directives
		html += '\n\n#fill: #ffffff;#eeeeee;#ffffff;#eeeeee\r#zoom: 1.5';
				
		return html;	
	}

	if( typeof window.addEventListener === 'function' ) {
		var nodes = document.querySelectorAll( 'pre code.lang-uml' );

		for( var i = 0, len = nodes.length; i < len; i++ ) {
			var element = nodes[i]
			
			var source = getCodeFromElement(element);	
			var canvas = document.createElement('canvas');
			element = element.parentElement;
			element.parentElement.insertBefore(canvas, element);
			window.nomnoml.draw(canvas, source);
			element.style.display = 'none';
		}
	}
})();