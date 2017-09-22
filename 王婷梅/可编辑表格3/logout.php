<?php
session_start();
$tip="用户{$_SESSION["username"]}已退出登录，将转到登录页面";

unset($_SESSION["login"]);
unset($_SESSION["username"]);
unset($_SESSION["uid"]);
$url="log.php";
include "mass.php";