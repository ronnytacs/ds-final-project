<?php

require 'common.php';

$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'INSERT INTO certification (certName, certAgency,standardExpiry )
  VALUES (?,?,?)'
);

$stmt->execute([
  $_POST['certName'],
  $_POST['certAgency'],
  $_POST['standardExpiry']
  ]);

$pk = $db->lastInsertId();

header('HTTP/1.1 303 See Other');
header('Location: ../comments/?certID='.$pk);
