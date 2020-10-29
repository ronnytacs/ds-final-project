<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT * FROM person';
$vars = [];

if (isset($_GET['personID'])) {
  // This is an example of a parameterized query
  $sql = 'SELECT * FROM person WHERE personID = ?';
  $vars = [ $_GET['personID'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$comments = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($comments, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
