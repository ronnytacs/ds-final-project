<?php

require 'common.php';

$db = DbConnection::getConnection();

$sql = 'SELECT p.firstName, p.lastName
FROM person p, receivedCerts rc
WHERE p.personID = rc.personID
AND rc.certID = ?';
$vars = [];

if (isset($_GET['certID'])) {
  // This is an example of a parameterized query
  $sql = 'SELECT p.firstName, p.lastName
  FROM person p, receivedCerts rc
  WHERE p.personID = rc.personID
  AND rc.certID = ?';
  $vars = [ $_GET['certID'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$comments = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($comments, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
