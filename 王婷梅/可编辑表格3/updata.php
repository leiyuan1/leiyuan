<?php
include "db.php";
$id=$_GET["id"];
$attr=$_GET["attr"];
$value1=$_GET["value1"];
$db->query("update student set $attr='{$value1}' where id=".$id);

