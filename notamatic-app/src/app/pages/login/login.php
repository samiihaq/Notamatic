<?php

$email = $_POST['email'];
$username= $_POST['username'];
$password= $_POST['password'];
$institute= $_POST['institute'];

$conn = new mysqli('localhost', 'root', '', 'notamatic')
