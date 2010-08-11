javascript:(function() {
	var pre;
	try { pre = document.body.children[0]; } catch(e) {
		pre = document.getElementsByTagName('pre')[0]
	}
	var code = pre.innerHTML;

	document.body.innerHTML = '';

	document.write('
		<script type="text/javascript" src="http://alexgorbatchev.com/pub/sh/2.0.320/scripts/shCore.js"><\/script>
		<script type="text/javascript" src="http://alexgorbatchev.com/pub/sh/2.0.320/scripts/shBrushPerl.js"><\/script>

		<link type="text/css" rel="stylesheet" href="http://alexgorbatchev.com/pub/sh/2.0.320/styles/shCore.css"/>
		<link type="text/css" rel="stylesheet" href="http://alexgorbatchev.com/pub/sh/2.0.320/styles/shThemeMidnight.css" id="shTheme" />

		<style>
			body { background-color: black; }
		</style>
		<script type="text/javascript">
			SyntaxHighlighter.all();
		<\/script>

		<pre class="brush: perl">' + code + '<\/pre>
	');
	document.close();
})()
