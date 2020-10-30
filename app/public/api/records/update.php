<?php

require 'common.php';

$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'UPDATE person  SET firstName = ?, lastName = ?, position = ?, department = ?, radioNumber = ?, stationNumber = ?, isActive = ?, startDate = ?, email = ? WHERE personID = ?'
);

$stmt->execute([
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['position'],
  $_POST['department'],
  $_POST['radioNumber'],
  $_POST['stationNumber'],
  $_POST['isActive'],
  $_POST['startDate'],
  $_POST['email']
]);


header('HTTP/1.1 303 See Other');
