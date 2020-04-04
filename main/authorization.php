<?php
	if (!isset($_SERVER['PHP_AUTH_USER'])) {
		header("WWW-Authenticate: Basic realm=\"Private Area\"");
		header("HTTP/1.0 401 Unauthorized");
		print "Sorry!!!\n";
		exit;
	} else {
		if (($_SERVER['PHP_AUTH_USER'] == 'xxx') && ($_SERVER['PHP_AUTH_PW'] == 'xxx')) {
			print "Welcome!";
		} else {
			header("WWW-Authenticate: Basic realm=\"Private Area\"");
			header("HTTP/1.0 401 Unauthorized");
			print "Sorry!\n";
			exit;
		}
	}
?>