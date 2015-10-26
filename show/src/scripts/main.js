'use strict';

var slideshow = Reveal.initialize({
	transition: 'fade',
	dependencies: [
		// Interpret Markdown in <section> elements
        { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },

        // Syntax highlight for <code> elements
        { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },

        // Speaker notes
        { src: 'plugin/notes/notes.js', async: true },
		
		// UML
		{ src: 'plugin/nomnoml-plugin.js', async: true }
	]
});

Reveal.addEventListener( 'slidechanged', function( event ) {
	// event.previousSlide, event.currentSlide, event.indexh, event.indexv
	var notes = event.currentSlide.querySelector(".notes");
	if(notes) {
		console.info(notes.innerHTML.replace(/\n\s+/g,'\n'));
	}
} );
