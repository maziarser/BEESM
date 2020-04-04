<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js?ver=1.4.2"></script>
<link rel="stylesheet" href="styles/default.css">
<script src="highlight.pack.js"></script>
</head>

<body>
<div class="php">$objects = json_decode($url, true);</div>
<input id="g" type="button" value="highlight" />


<script>
$('#g').click(function(){
	hljs.highlightBlock($('div').get(0));
});


</script>
</body>

</html>