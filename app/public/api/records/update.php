<?php

$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'UPDATE person  SET firstName = ?, lastName = ?, position = ?, radioNumber = ?, stationNumber = ?, email = ?, department = ? WHERE personID = ?'
);

$stmt->execute([
  $_POST['personID']
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['position'],
  $_POST['radioNumber'],
  $_POST['stationNumber'],
  $_POST['email'],
  $_POST['department']
]);

header('HTTP/1.1 303 See Other');
