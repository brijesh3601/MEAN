GOAL
--------------------------------------------------------------------
How to use webpack with nodejs and enabling weback proxy feature.



Section A : How to Scratch Application
--------------------------------------------------------------------
- create dir 'expressWebpack'. cd expressWebpack<br/>
- Run 'npm init -y' to create package.json. copy 'build' & 'start' attribute as in git package.json.
- Run 'touch server.js' on cmd prompt & copy paste in this file all the code in git file 'server.js<br/>
- Run 'npm i -D webpack webpack-dev-server' to install webpack locally <br/>
- Run 'touch webpack.config.js' on cmd prompt & copy paste in this file all the code in git file 'webpack.config.js<br/>
- create dir 'src'. cd src
- Run 'touch index.js' on cmd prompt & copy paste in this file all the code in git file 'index.js<br/>
- npm i webpack-dev-server --save-dev
- Run 'npm start' in one cmd prompt
- Run 'node server' in another cmd prompt 





Section B : Introduction to Webpack
--------------------------------------------------------------------
Run following command to install webpack in project instead of installing it globally.

npm i webpack --save-dev

Do not use command -g as given it will install globally webpack and when you are starting project with same webpack URL say localhost 8080 it will 

npm i -g webpack webpack-dev-server (used to install webpack globally)
npm i -D webpack webpack-dev-server (used to install webpack in your project)


Section C : Global Webpack Error
--------------------------------------------------------------------

If we install webpack globally and we are testing different project using global webpack it will throw below warning. To resolve it delete the folder 'webpack-dev-server' (Delete folder 'webpack-dev-server' from C:\Users\bkachalia\AppData\Roaming\npm\node_modules)


WARNING in (webpack)/buildin/module.js
There is another module with an equal name when case is ignored.
This can lead to unexpected behavior when compiling on a filesystem with other case-semantic.
Rename module if multiple modules are expected or use equal casing if one module is expected.

WARNING in c:/Users/bkachalia/AppData/Roaming/npm/~/webpack-dev-server/~/webpack/buildin/module.js
There is another module with an equal name when case is ignored.
This can lead to unexpected behavior when compiling on a filesystem with other case-semantic.
Rename module if multiple modules are expected or use equal casing if one module is expected.




Section D : Introduction to Webpack
--------------------------------------------------------------------
Unlike Browsify & Require.js it is build from ground up to help you manage static files. While Browsify uses readFile function in Node, webpack uses loader that loads files that have names that match a certain pattern. Cool Feature of Webpack is Reach Hot-Loading that updates js on your pages without a page refresh.



Section E : Introduction to Webpack
--------------------------------------------------------------------
Babel is a JS compiler. Supports syntax transformer & allows you to use new Syntax.

Put in javascript  "[1,2,3].map(n => n + 1); " and get js out as 

[1,2,3].map(function(n) {
  return n + 1;
});





Debugging 
--------------------------------------------------------------------

- Run 'npm install -g webpack-dev-server' cmd. Not sure if 'npm i' works every time rather use 'npm install' or (not required though) try to set path C:\Users\bkachalia\AppData\Roaming\npm 

	'webpack-dev-server' is not recognized as an internal or external command

- Make sure entry & plugin has '[]'  else it will throw below error.
	SyntaxError: Unexpected identifier

- Kill process 8080 to resolve below error.

events.js:141
      throw er; // Unhandled 'error' event
Error: listen EACCES 127.0.0.1:8080

