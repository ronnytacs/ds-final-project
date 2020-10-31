<?php

require 'common.php';

$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'UPDATE certification  SET certName = ?, certAgency = ?, standardExpiry = ? WHERE certID = ?'
);

$stmt->execute([
  $_POST['certName'],
  $_POST['certAgency'],
  $_POST['standardExpiry'],
  $_POST['certID']
]);
