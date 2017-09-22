<?php
include "db.php";
$username=$_POST["username"];
$password=$_POST["password"];
$result=$db->query("select * from user where username='{$username}'and password='{$password}'");

if($result->num_rows){
    $row=$result->fetch_assoc();
    session_start();
    $_SESSION["login"]="ok";
    $_SESSION["username"]=$row["username"];
    $_SESSION["uid"]=$row["id"];
    $tip="登录成功，即将跳到主页面";
    $url="table.php";
    include "mass.php";

}else{
    $tip="用户名或密码输入错误，请重新登录";
    $url="log.php";
    include "mass.php";
}