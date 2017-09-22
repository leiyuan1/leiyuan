<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<style>
    .register{
        width:600px;
        height:330px;
        position: absolute;
        top:50%;
        left:50%;
        margin-top: -200px;
        margin-left: -300px;

        background: #efefef;
        border-radius:10px;

        border:2px solid #666666;

    }
    h3{
        display: block;
        width:100%;
        height:30px;
        font-size: 22px;
        color:#000000;
        text-align: center;
        margin-top: 30px;
        box-sizing: border-box;
    }

    form{
        display: block;
        width:100%;
        height:100%;
        margin-top: 30px;
    }
    .use{
        width: 100%;
        height:60px;
        margin-top:10px;
        /*background: red;*/
        position: relative;
        /*margin-top: 50px;*/
    }
    .use span{
        width: 150px;
        height:40px;
        display: block;
        font-size: 16px;
        color:#333;
        line-height: 50px;
        padding-left: 50px;
        float: left;
        /*background: blue;*/
        box-sizing: border-box;
        font-weight: bold;
    }
    .user{
        width:430px;
        height:40px;
        float: left;
    }
    .error{
        width:434px;
        height:20px;
        /*background: yellowgreen;*/
        position: absolute;
        bottom: 0;
        left:150px;
    }
    .pass{
        width: 100%;
        height:60px;
        margin-top:10px;
        /*background: red;*/
        position: relative;
    }
    .pass span{
        width: 150px;
        height:40px;
        display: block;
        font-size: 16px;
        color:#333;
        line-height: 50px;
        padding-left: 60px;
        float: left;
        font-weight: bold;
        /*background: blue;*/
        box-sizing: border-box;
    }
    .password{
        width:430px;
        height:40px;
        float: left;
    }
    .error{
        width:434px;
        height:20px;
        /*background: yellowgreen;*/
        position: absolute;
        bottom: 0;
        left:150px;
    }
    .pass1{
        width: 100%;
        height:60px;
        margin-top:10px;
        /*background: red;*/
        position: relative;
    }
    .pass1 span{
        width: 150px;
        height:40px;
        display: block;
        font-size: 16px;
        color:#333;
        line-height: 50px;
        padding-left: 40px;
        float: left;
        font-weight: bold;
        /*background: blue;*/
        box-sizing: border-box;
    }
    .password1{
        width:430px;
        height:40px;
        float: left;
    }
    .error{
        width:234px;
        height:20px;
        /*background: yellowgreen;*/
        position: absolute;
        bottom: 15px;
        left:350px;
        text-align: center;
    }
    .btn{
        display: block;
        width: 100px;
        height:40px;
        margin:auto;
        margin-top: 20px;

    }
    .skip{
        display: block;
        width:auto;
        height: 30px;
        float: left;
        margin-left: 5px;
        line-height: 30px;
        float: right;
        margin-right: 30px;
    }
</style>
<body>
<div class="register">
    <h3>欢迎您，请登录</h3>
    <form action="pddl.php" method="post">
        <div class="use">
            <span>用户名：</span>
            <input type="text" name="username" class="user" placeholder="请输入用户名">
<!--            <div class="error"></div>-->
        </div>

        <div class="pass">
            <span>密码：</span>
            <input type="password" name="password" class="password" placeholder="请输入密码">
<!--            <div class="error"></div>-->
        </div>


        <input type="submit" class="btn" value="登录">
        <div class="skip">还未注册，请先<a href="zhuce.php">注册</a></div>
    </form>
</div>
</body>
</html>