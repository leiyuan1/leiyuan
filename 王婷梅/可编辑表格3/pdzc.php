<?php
include "db.php";
$username=$_POST["username"];
$result=$db->query("select * from user where username='{$username}'");

if($result->num_rows){
    echo "error";
}else{
    echo "ok";
}