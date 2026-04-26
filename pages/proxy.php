<?php
$url = 'http://node-de-01.tickhosting.com:40156' . ($_SERVER['REQUEST_URI'] ?? '/');
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
$response = curl_exec($ch);
$contentType = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
curl_close($ch);
header('Content-Type: ' . $contentType);
echo $response;
?>