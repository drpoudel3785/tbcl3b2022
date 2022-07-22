<!doctype html>
<html lang="en">

<head>
    <title>Test site</title>
    <meta charset="uts-8">
    <meta name="author" content="your name">
    <style>
        body {
            background-color: black;
        }

        p {
            width: 300px;
            padding: 50px;
            margin: 20px;
            background-color: black;
            color: white;
            align-self: center;
            font-size: 1.6em;

        }
        h1{align-self: center;
            text-align: center;
            color: white;
            font-size: 2.3em;
        }
    </style>
</head>

<body>
    <h1>Welcome to my site</h1>
    <p>Hello there!</p>
    <p id="1"></p>
    
	<?php
	echo "<br>";
	date_default_timezone_set('Asia/Kathmandu');
	echo "Today is ". date('Y-m-d: H:i:s');
	?>


</html>