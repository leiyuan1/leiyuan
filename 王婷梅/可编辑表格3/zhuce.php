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
        height:400px;
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
    <h3>欢迎您，请先注册</h3>
    <form action="uadd.php" method="post">
        <div class="use">
            <span>用户名：</span>
            <input type="text" name="username" class="user" placeholder="请输入用户名">
            <div class="error"></div>
        </div>

        <div class="pass">
            <span>密码：</span>
            <input type="password" name="password" class="password" placeholder="请输入密码">
            <div class="error"></div>
        </div>

        <div class="pass1">
            <span>再输入密码：</span>
            <input type="password" name="password1" class="password1" placeholder="再输入密码">
            <div class="error"></div>
        </div>

        <input type="submit" value="注册" class="btn">
        <div class="skip">已经注册，请<a href="log.php">登录</a></div>
    </form>
</div>
</body>
<script src="jquery-3.2.1.js"></script>
<script>
    var user = $(".user")
    var password=$(".password")
    var password1=$(".password1");


            user.keyup(function(){

                var userreg=/^[a-zA-Z]\w{2,12}$/;
                var user=$(this).val()
                var that=$(this)

                if(userreg.test(user)){

                    $.ajax({
                        url:"pdzc.php",
                        type:"post",
                        data:{username:user},
                        success:function(data){
                            if(data=="ok"){

                                that.next(".error").html("用户名输入正确").css("color","blue")
                                that.data("flag",true)
                            }
                            if(data=="error"){
                                that.next(".error").html("用户名已经存在").css("color","red")
                                that.data("flag",false)
                            }

                        }
                    })



                }else{
                    that.next(".error").html("用户名输入格式不正确").css("color","red")
                    that.data("flag",false)

                }
                 check()
                })


            password.keyup(function(){

                var passwordreg=/\w{4,12}/;
            var password=$(this).val();
                var that=$(this);
                if(passwordreg.test(password)){
                    if(password==$(".password1").val()){
                        that.nextAll(".error").html("两次密码输入一致").css("color","blue")
                        $(".password1").nextAll(".error").html("两次密码输入一致").css("color","blue")
                        that.data("flag",true)
                        $(".password1").data("flag",true)

                    }else{
                        that.nextAll(".error").html("两次密码输入不一致").css("color","red")
                        that.data("flag",false)
                    }

//                    that.nextAll(".error").html("密码输入正确").css("color","blue")
                }else{
                    that.nextAll(".error").html("密码格式不正确").css("color","red")
                    that.data("flag",false)
                }
                check()
            })

            password1.keyup(function(){
                var password1reg=/\w{4,12}/;
                var password1=$(this).val();
                var that=$(this);
                if(password1reg.test(password1)){
                    if(password1==$(".password").val()){
                        that.nextAll(".error").html("两次密码输入一致").css("color","blue")
                        $(".password").nextAll(".error").html("两次密码输入一致").css("color","blue")
                        that.data("flag",true)
                        $(".password").data("flag",true)
                    }else{
                        that.nextAll(".error").html("两次密码输入不一致").css("color","red")
                        that.data("flag",false)
                    }

        //                    that.nextAll(".error").html("密码输入正确").css("color","blue")
                }else{
                    that.nextAll(".error").html("密码格式不正确").css("color","red")
                    that.data("flag",false)

                }
                check()

            })


      function check(){
         var flag=true;
         $("input").each(function(index,obj){
               if(index!=3){
               if(!($(obj).data("flag"))){
                    flag=false;
               }
             }

          })
          if(flag){
             $(".btn").removeAttr("disabled")
          }else{
              $(".btn").attr("disabled","disabled")
          }
      }



</script>
</html>