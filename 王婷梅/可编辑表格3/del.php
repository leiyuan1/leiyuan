<?php
$id=$_GET["id"];
include "db.php";
$db->query("delete from student where id=".$id);

if($db->affected_rows>0){
    echo "ok";
}