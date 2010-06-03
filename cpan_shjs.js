javascript:(function() {
	var pre = document.body.children[0];
	var code = pre.innerHTML;

	code = code.replace( /(([A-Z]\w+::[A-Z]\w+)(::[A-Z]\w+)*)/g, '<a class="perldoc" href="http://search.cpan.org/perldoc?$1">$1</a>' );
	code = code.replace( /^(use|require) (\w+(::\w+)*)/gm, '$1 <a class="perldoc" href="http://search.cpan.org/perldoc?$2">$2</a>' );

	document.body.innerHTML = '
		<link type="text/css" rel="stylesheet" href="http://shjs.sourceforge.net/sh_style.css" />
		<style>
			.perldoc { color: brown; text-decoration: none; font-weight: bold; }
			a:hover { border-bottom: dotted 1px #cc0000; text-decoration: none; font-weight: bold; }
		</style>
		<style>
			/* sh_main.css overwrites */
			pre.sh_sourceCode .sh_comment { color: #808080; font-style: italic; }
		</style>

		<pre class="sh_perl">' + code + '<\/pre>
		';
	var sc=document.createElement('script');
	sc.type = 'text/javascript';
	sc.src = "http://shjs.sourceforge.net/lang/sh_perl.js"; 
	document.body.appendChild(sc);
	var sc2=document.createElement('script');
	sc2.type = 'text/javascript';
	sc2.src = "http://shjs.sourceforge.net/sh_main.min.js";
	sc2.onload = function(){ sh_highlightDocument(); };
	document.body.appendChild(sc2);
})(); 
