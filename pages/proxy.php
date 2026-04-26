<?php
$url = 'http://node-de-01.tickhosting.com:40156/';
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
$response = curl_exec($ch);
$error = curl_error($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

echo "HTTP Code: $httpCode<br>";
echo "Error: $error<br>";
echo "Response length: " . strlen($response) . "<br>";
echo "<pre>" . htmlspecialchars(substr($response, 0, 500)) . "</pre>";