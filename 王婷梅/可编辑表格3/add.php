<?php
session_start();
include "db.php";
$uid = $_SESSION["uid"];
$db->query("insert into student(name,age,sex,tel,uid)VALUES ('','','','','{$uid}')");
if($db->affected_rows>0){
    echo $db->insert_id;
}
