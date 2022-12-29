<?php

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$username = $_POST['username'];
$password = $_POST['password'];
$institute = $_POST['institute'];


$conn = new mysqli('localhost', 'root', '', 'notamatic');

if ($conn->connect_error) {
    die('Connection failed : ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("insert into user(firstname, lastname, email, username, password, institute) values(?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $firstname, $lastname, $email, $username, $password, $institute);
    $stmt->execute();
    echo "Registered successfully";
    $stmt->close();
    $conn->close();
}
