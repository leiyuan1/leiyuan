$(function(){
    $.ajax({
        url:"select.php",
        type:"get",
        dataType:"json",
        success:function(data) {

            data.forEach(function(obj,index){
                $(`<tr><td attr="name">${obj.name}</td><td attr="age">${obj.age}</td><td attr="sex">${obj.sex}</td><td attr="tel">${obj.tel}</td><td class="btn"><span  attr="${obj.id}" class="del">删除</span></td></tr>`).appendTo("tbody")
            })
        }
    })

    $(".add").click(function(){
        $.ajax({
            url:"add.php",
            type:"get",
            dataType:"json",
            success:function(e){
                if(e>0){
                    $(`<tr><td attr="name">新建</td><td attr="age"></td><td attr="sex"></td><td attr="tel"></td><td class="btn"><span attr="${e}" class="del">删除</span></td></tr>`).appendTo("tbody")
            }

            }

        })
    })

    $("table").on("click",".del",function(){

        var id=$(this).attr("attr");
        var that=$(this)
        $.ajax({
            data:{id:id},
            url:"del.php",
            type:"get",
            // dataType:"json",
            success:function(e){
                if(e=="ok"){
                   that.parents("tr").remove();

                }



            }
        })
    })

    var value;var attr;
    $("table").on("dblclick","td:not('.btn')",function(){
        $(this).attr("contenteditable","true").focus();
        attr=$(this).attr("attr");
        value=$(this).html();


    }).on("blur","td:not('.btn')",function(){
         blur.call(this);

    }).on("keydown","td:not('.btn')",function(e){
        if(e.keyCode==13){
            blur.call(this);
            return false;
        }
    })

    function blur(){
        $(this).removeAttr("contenteditable");
        var value1=$(this).html();
        var id=$(this).nextAll(".btn").find("span").attr("attr");
        // console.log(id)
        if(value!=value1){
            $.ajax({
                data:{attr:attr,value1:value1,id:id},
                url:"updata.php",
                type:"get",
                success:function(e){

                }
            })
        }
    }



})