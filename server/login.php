<?php
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Headers: Content-Type, Access-Controll-Allow-Header,Authorization");
 header("Content-Type: application/json; charset=UTF-8");
 //var1=value1&...
if ($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST)){
    $_POST = json_decode(file_get_contents('php://input'), true);
    file_put_contents('request.data', print_r($_POST, true));
    echo json_encode($_POST);
}
