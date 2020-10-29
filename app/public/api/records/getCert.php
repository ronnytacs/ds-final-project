<?php

require 'common.php';

$db = DbConnection::getConnection();

$sql = 'SELECT c.certName, c.certAgency, c.standardExpiry
FROM certification c, receivedCerts rc
WHERE c.certID = rc.certID
AND rc.personID = ?';
$vars = [];

if (isset($_GET['personID'])) {
  // This is an example of a parameterized query
  $sql = 'SELECT c.certName, c.certAgency, c.standardExpiry
  FROM certification c, receivedCerts rc
  WHERE c.certID = rc.certID
  AND rc.personID = ?';
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
