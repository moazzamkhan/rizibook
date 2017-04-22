// require('codemirror/mode/xml/xml');
// require('codemirror/mode/javascript/javascript');
// require('codemirror/mode/css/css');
// require('codemirror/mode/htmlmixed/htmlmixed');

// const CodeMirror = require("codemirror");

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


// var myCodeMirror = CodeMirror(document.body, {
//  value: "function myScript(){\n\treturn 100;\n}\n",
//  mode:  "javascript",
//  extraKeys: {
//     'Ctrl-Space': 'autocomplete'
//   },
//   lineNumbers: true,
//   theme: '3024-day'
// });

var RZB = require("./lib/js/components/rzb");


const dirPath = "./rzb";
FileUtils.init(dirPath);

// Add the listener
document.addEventListener('DOMContentLoaded', function () {
    console.log("yay");new RZB(document.getElementById("rzb-box"), dirPath).render();
});
