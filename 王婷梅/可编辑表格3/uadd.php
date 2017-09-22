<?php
include "db.php";
$username=$_POST["username"];
$password=$_POST["password"];
$db->query("insert into user(username,password)values('{$username}','{$password}')");
if($db->affected_rows>0){
 $tip="已注册，请点击登录";
    $url="log.php";
 include "mass.php";
}