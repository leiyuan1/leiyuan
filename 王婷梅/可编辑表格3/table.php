<?php
session_start();
if(!isset($_SESSION["login"])){
    $tip="未登录，将转到登陆页面";
    $url="php/log.php";
    include "mass.php";
    exit;
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<script src="jquery-3.2.1.js"></script>
<script src="table.js"></script>
<body>


<style>

    .box{
        width: 800px;
        height: auto;
        text-align:center;
        margin: auto;
        /*border:2px solid #666666;*/
        overflow: hidden;
        box-sizing: border-box;

    }
    .box>button{
        display: block;
        width:800px;
        height: 40px;

        text-align:center;
        line-height:30px;
        font-size: 35px;
        margin: auto;
        cursor: pointer;
        text-decoration: none;


    }



    table{
        width: 800px;
        height:auto;
        /*border:1px solid #666666;*/
        /*cellspacing:0;*/
        margin: auto;

    }

    td,th{
        padding-top: 10px;
        padding-bottom: 10px;
    }


    td>span{
        display: block;
        width: 100%;
        height:100%;
        cursor: pointer;

    }

   .mbox>h2{
        display: block;
        width:100%;
        height:50px;
        margin-top: 50px;
        text-align: center;
        line-height: 50px;
    }
    .mbox>a{
        display: block;
        width: 50px;
        height: 30px;
        font-size: 20px;
        position: absolute;
        right:50px;
        top:50px;
        text-align: center;
    }




</style>

<div class="box">
    <div class="mbox">
        <a href="logout.php">退出</a>
        <h2>欢迎<?php echo $_SESSION["username"] ?>来到表格编辑系统</h2>

    </div>
    <table border="1" cellspacing="0">
        <tr>
            <th>姓名</th>
            <th>年龄</th>
            <th>性别</th>
            <th>电话</th>
            <th>操作</th>



        </tr>




    </table>
    <button class="add">+</button>

</div>
</body>


</html>