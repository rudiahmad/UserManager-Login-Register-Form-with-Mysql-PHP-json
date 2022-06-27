<?php

$mysqli = mysqli_connect("localhost", "testingdb", "test", "test@123");

// Check connection
if (mysqli_connect_errno()) {
  // echo "Failed to connect to MySQL: " . mysqli_connect_error();
  
  echo json_encode(array('err' => true, 'msg' => mysqli_connect_error()));
}