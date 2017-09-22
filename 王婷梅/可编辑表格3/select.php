<?php
include "db.php";
session_start();
$uid=$_SESSION["uid"];
$aa=($db->query("select * from student where uid=".$uid));
$arr=array();
while($row=$aa->fetch_assoc()){
    $arr[]=$row;
}

echo json_encode($arr);
/*   返回插入的id   */
/*if($db->affected_rows>0){
    echo ok;
}*/
