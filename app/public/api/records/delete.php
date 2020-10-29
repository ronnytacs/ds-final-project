<?php

require 'common.php';


// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'DELETE FROM person
  WHERE personID = ?');


  $stmt->execute([
    $_POST['personID']
  ]);

  header('HTTP/1.1 303 See Other');
