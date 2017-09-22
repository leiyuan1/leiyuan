/*
* @Author: wz
* @Date:   2017-09-06 21:40:44
* @Last Modified by:   wz
* @Last Modified time: 2017-09-10 16:53:33
*/



$(function(){



  // let nav=document.getElementsByClassName('nav')[0];
  let nav=$(".nav").eq(0)
	// let navbtn=nav.querySelectorAll(".nav>li")
	let navbtn=$(".nav>li")
	// let xlbb=document.getElementsByClassName('xl-bottom')

	let xlbb=$(".xl-bottom")



	for(let i=0;i<navbtn.length;i++){
		navbtn.eq(i).hover(function(){
              xlbb.eq(i).slideDown()
  
		})

		navbtn.eq(i).mouseleave(function(){
              xlbb.eq(i).slideUp()
 
		})

		 xlbb.eq(i).finish()
	}









    // 侧定航
		$(".bl-x>li>a").hover(function(){
			$(".blx1").css("display","none")
			$(this).next(".blx1").css("display","block")
		})
		$(".bl-x").mouseleave(function(){
			$(".blx1").css("display","none")
		})


    // 轮播图



    var t=setInterval(move,3000)
    var num=0
    function move(){
    	num++
       

        if(num==$(".lba").length){
	    		num=0
	      }

	    	      
	       $(".lba").fadeOut()
	       $(".lba:eq("+num+")").fadeIn()
	        $(".brdd>li").css("background","#666")
	        $(".brdd>li:eq("+num+")").css("background","#CCB4B5")
      }




	    $(".banner").hover(function(){
	    	clearInterval(t)
	    })

	    $(".banner").mouseleave(function(){
	    	t=setInterval(move,3000)
	    })


	    $(".brl").click(function(){
	    	move()
	    	  $(".lba").finish()
	    })

	    $(".brr").click(function(){
	    	num--
       	      if(num==-1){
	    		num=$(".lba").length-1
	      }  	      
	        $(".lba").fadeOut()
	        $(".lba:eq("+num+")").fadeIn()
	        $(".brdd>li").css("background","#666")
	        $(".brdd>li:eq("+num+")").css("background","#CCB4B5")

	        $(".lba").finish()

	    })


	    $(".brdd>li").click(function(){

	    	let next=$(this).index(".brdd>li")
	    	console.log(next)
	    	$(".lba").fadeOut()
	        $(".lba:eq("+next+")").fadeIn()
	        $(".brdd>li").css("background","#666")
	        $(this).css("background","#CCB4B5")
	    	num=next

	    })

  
   $(window).blur(function(){
   	clearInterval(t)
   })











	
})