/*
* @Author: wz
* @Date:   2017-08-10 15:28:53
* @Last Modified by:   wz
* @Last Modified time: 2017-09-16 16:53:55
*/

// 'use strict';
// 

$(function(){

    let fr1=$(".fr1")  
      fr1.mouseenter(function(){     
         $(this).find(".fl-xiala").slideDown(100,"swing")
      })
      fr1.mouseleave(function(){
         $(this).find(".fl-xiala").slideUp(1)

      })




  let eb=$(".right5")
  let ewm=$(".ewm")
     
     eb.mouseenter(function(){
      ewm.css("display","block")
     })

     eb.mouseleave(function(){
       ewm.css("display","none")  
     })




    // let gouwuche=document.getElementsByClassName('gouwuche')[0]
    let gouwuche=$(".gouwuche")
    // let gwc=document.getElementsByClassName('gwc')[0]
    let gwc=$(".gwc")    
     gouwuche.mouseenter(function(){
      gwc.css("display","block")
     })
     gouwuche.mouseleave(function(){
      gwc.css("display","none")
     })





// 轮播
     let gundong=$(".gundong")
     let gdimg=$(".gundong>.gdimg")
     let gdg=$(".gdimg .gdg")
  
      let dd=$(".dd")
      let btn=$(".dd li")
      let zz=$(".zz")
      let yy=$(".yy")
     
      // let left=gdimg.innerWidth;
 var t=setInterval(move,2000);

 var num=0;
 function move(){
  num++
  if(num==gdg.length){
    num=0;
  }
  gdg.fadeOut()
  gdg.eq(num).fadeIn()
  btn.removeClass('frist');
  btn.eq(num).addClass('frist')
 }

btn.hover(function(){
  var next=$(this).index(".dd li")
  gdg.fadeOut()
  gdg.eq(next).fadeIn()
  btn.removeClass('frist');
  $(this).addClass('frist')
  num=next;
})


zz.click(function(){
    num--;
  if(num==-1){
    num=gdg.length-1
  }

  gdg.fadeOut()
  gdg.eq(num).fadeIn()
  btn.removeClass('frist');
  btn.eq(num).addClass('frist')
})

yy.click(function(){

   move()



})





gundong.hover(function(){
  clearInterval(t)
})


gundong.mouseleave(function(){
  t=setInterval(move,2000)
})


})







window.onload=function(){
/*	let fr1=document.getElementsByClassName('fr1')
	let xl = document.getElementsByClassName('fl-xiala')

	for(let i=0;i<fr1.length;i++){

		
        fr1[i].onmouseenter=function(){
        
        	 xl[i].style.height='auto'
        }


		fr1[i].onmouseleave=function(){
	       xl[i].style.height=0;

	}

	}*/

/*
	let eb=document.getElementsByClassName('right5')[0]
	let ewm=document.getElementsByClassName('ewm')[0]
     
     eb.onmouseenter=function(){
     	ewm.style.display="block"
     }

     eb.onmouseleave=function(){
     	ewm.style.display="none"
     }




    let gouwuche=document.getElementsByClassName('gouwuche')[0]
	let gwc=document.getElementsByClassName('gwc')[0]
     
     gouwuche.onmouseenter=function(){
     	gwc.style.display="block"
     }

     gouwuche.onmouseleave=function(){
     	gwc.style.display="none"
     }*/




/*

	 let gundong=document.getElementsByClassName('gundong')[0]
     let gdimg=gundong.querySelectorAll(".gundong>.gdimg")[0]
     let gdg=gdimg.getElementsByClassName('gdg')
  


     let dd=document.getElementsByClassName('dd')[0]
     let btn=dd.getElementsByTagName('li')
      let zz=document.getElementsByClassName('zz')[0]
      let yy=document.getElementsByClassName('yy')[0]
     // console.log(gdg)
     // console.log(btn)
     //   

// 点击轮播

    for(let i=0;i<gdg.length;i++) {

        btn[i].onmouseenter=function(){

          for(let j=0;j<gdg.length;j++){

          gdg[j].style.display="none";
          btn[j].classList.remove("frist")
          }

          gdg[i].style.display="block";
          btn[i].classList.add("frist")

    }

   }


// 自动轮播
     var t=setInterval(fn,2000)
      var num=0; 

       gundong.onmouseenter=function(){
      	// alert(t)
      	clearInterval(t)
      }

       gundong.onmouseleave=function(){
      	t=setInterval(fn,2000)
      }

   // console.log(gdg[0])
  
     zz.onclick=fn;
     yy.onclick=fn1;


// 左右键切换
     function fn1(){
     	num--
           if(num==-1){
           	num=gdg.length-1;
           }

          for(let i=0;i<gdg.length;i++){
            // console.log(i)
         
           	gdg[i].style.display="none";
            btn[i].classList.remove("frist");
           }
       	 	
            gdg[num].style.display="block";
            btn[num].classList.add("frist"); 

     }

        function fn(){
                     
           num++

           if(num==gdg.length){
           	num=0;
           }

          for(let i=0;i<gdg.length;i++){
            // console.log(i)
         
           	gdg[i].style.display="none";
            btn[i].classList.remove("frist");
           }
       	 	
            gdg[num].style.display="block";
            btn[num].classList.add("frist");
 
        }*/





}