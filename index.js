// super simple module for the most common nodejs use case.
//exports.markdown = require("./markdown");
//exports.parse = exports.markdown.toHTML;

var markdown = require( "./src/markdown" );

var mdFormat="Basic useful feature list:"+

" * Ctrl+S / Cmd+S to save the file"+
" * Ctrl+Shift+S / Cmd+Shift+S to choose to save as Markdown or HTML"+
" * Drag and drop a file into here to load it"+
" * File contents are saved in the URL so you can share files"+


" I'm no good at writing sample / filler text, so go write something yourself."+

" Look, a list!"+

" * foo"+
" * bar"+
" * baz"+

" And here's some code! :+1:";
console.log( markdown.toHTML( mdFormat ) );