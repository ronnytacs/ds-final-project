<?php

require 'common.php';

$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'UPDATE certification  SET certName = ?, certAgency = ?, standardExpiry = ? WHERE certID = ?'
);

$stmt->execute([
  $_POST['certID'],
  $_POST['certName'],
  $_POST['certAgency'],
  $_POST['standardExpiry']
]);

header('HTTP/1.1 303 See Other');
