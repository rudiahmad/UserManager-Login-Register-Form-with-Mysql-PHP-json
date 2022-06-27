<?php include 'config.php';

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$email = $obj['email'];

$password = $obj['password'];

if ($obj['email'] != "") {

	// $result= $mysqli->query("SELECT * FROM users where email='$email' and password='$password'");

	$query = sprintf(
		"SELECT * FROM users WHERE email= '%s' and password='%s' limit 1",
		$mysqli->real_escape_string($email),
		$mysqli->real_escape_string($password)
	);

	$result = $mysqli->query($query);

	if ($result->num_rows == 0) {
		echo json_encode('Wrong Details');
	} else {
		echo json_encode('ok');
	}
} else {
	echo json_encode('try again');
}
