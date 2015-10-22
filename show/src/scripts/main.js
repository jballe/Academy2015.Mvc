'use strict';

var slideshow = Reveal.initialize({
	transition: 'fade',
	dependencies: [
		// Interpret Markdown in <section> elements
        { src: 'reveal-plugins/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'reveal-plugins/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },

        // Syntax highlight for <code> elements
        { src: 'reveal-plugins/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },

        // Speaker notes
        { src: 'reveal-plugins/notes/notes.js', async: true }
	]
});

Reveal.addEventListener( 'slidechanged', function( event ) {
	// event.previousSlide, event.currentSlide, event.indexh, event.indexv
	var notes = event.currentSlide.querySelector(".notes");
	if(notes) {
		console.info(notes.innerHTML.replace(/\n\s+/g,'\n'));
	}
} );
