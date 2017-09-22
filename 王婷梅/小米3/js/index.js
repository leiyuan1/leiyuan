/*
* @Author: wz
* @Date:   2017-08-10 12:05:25
* @Last Modified by:   wz
* @Last Modified time: 2017-09-16 16:20:46
*/

// 'use strict';
// 




$(function(){


// 购物车

  let gwc=$(".right2").eq(0)
  // let gwcw=document.getElementsByClassName('r2-xiala')[0]
  let gwcw=$(".r2-xiala").eq(0)

  gwc.hover(function(){
    gwcw.slideDown()
  })

  gwc.mouseleave(function(){
    gwcw.slideUp()
  })


// 下拉菜单
  let nav=$(".nav").eq(0)
  let navbtn=$(".nav>li")
  let xlbb=$(".xl-bottom")

  for(let i=0;i<navbtn.length;i++){
    navbtn.eq(i).hover(function(){
              xlbb.eq(i).slideDown(200) 
    })

    navbtn.eq(i).mouseleave(function(){
              xlbb.eq(i).slideUp(200) 
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
          // $(".lba").finish()
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


      })
          // $(".lba").finish()


      $(".brdd>li").click(function(){

        let next=$(this).index(".brdd>li")
        // console.log(next)
        $(".lba").fadeOut()
          $(".lba:eq("+next+")").fadeIn()
          $(".brdd>li").css("background","#666")
          $(this).css("background","#CCB4B5")
        num=next

      })

  
   $(window).blur(function(){
    clearInterval(t)
   })






    let ssx=$(".navx-right").eq(0)
    let nr=$(".nr1").eq(0)
    let nxl=$(".nav-xiala").eq(0)
    let body=$("body")

    let flag=true;   
    nr.click(function(){
      nxl.css("display","block")
      // nxl.style.height="auto";
    })

    nr.mouseleave(function(){
      nxl.css("display","none")
    })






  
})














window.onload=function(){
/*	let gwc=document.getElementsByClassName('right2')[0]
	let gwcw=document.getElementsByClassName('r2-xiala')[0]
	gwc.onmouseenter=function(){
		gwcw.style.display="block"
	}

	gwc.onmouseleave=function(){
		gwcw.style.display="none"
	}
*/


/*
		let ssx=document.getElementsByClassName('navx-right')[0]
		let nr=ssx.getElementsByClassName('nr1')[0]
	
		let nxl=ssx.getElementsByClassName('nav-xiala')[0]
		let body=document.getElementsByTagName('body')

    let flag=true;   
		nr.onclick=function(){
		  nxl.style.display="block"
			// nxl.style.height="auto";
		}

    nr.onmouseleave=function(){
      nxl.style.display="none"
    }*/
/*

	let blx=document.getElementsByClassName('bl-x')[0];
	let blbtn=blx.querySelectorAll(".bl-x>li")
	let blx1=document.getElementsByClassName('blx1');

	for(let i=0;i<blbtn.length;i++){
		blbtn[i].onmouseenter=function(){
       blx1[i].style.display='block';
		}

		blbtn[i].onmouseleave=function(){
       blx1[i].style.display='none';
		}
	}
*/

// 下拉菜单1
    // let navtop=document.getElementsByClassName('navx-right')[0]
    // let topbtn=navtop.getElementsByTagName('button')[0];

    // topbtn.onclick=function(){
    // 	topbtn.style.border="1px solid ##FF6700"
    // }





/*$(".nav>li").each(obj.mouseenter($(".xl-bottom").each(obj.css("display:block"))))
$(".nav>li").each(obj.mouseleave($(".xl-bottom").each(obj.css("display:none"))))
*/






/*
  let nav=document.getElementsByClassName('nav')[0];
	let navbtn=nav.querySelectorAll(".nav>li")
	let xlb=document.getElementsByClassName('xl-bottom')



	for(let i=0;i<navbtn.length;i++){
		navbtn[i].onmouseenter=function(){
              xlb[i].style.display='block';
		}

		navbtn[i].onmouseleave=function(){
              xlb[i].style.display='none';
		}
	}*/


// 下拉菜单2

   /* let nav=document.getElementsByClassName('nav')[0];
	let navbtn=nav.querySelectorAll(".nav>li")
    let xlb=document.getElementsByClassName('xl-bottom')

	for(var i=0;i<navbtn.length;i++){
      	navbtn[i].index=i;
		navbtn[i].onmouseenter=function(){
        xlb[this.index].style.display='block';
		}

		navbtn[i].onmouseleave=function(){			
        xlb[this.index].style.display='none';
		}
	}*/



	// 下拉菜单3
/*
	let nav=document.getElementsByClassName('nav')[0];
	let navbtn=nav.querySelectorAll(".nav>li")
    let xlb=document.getElementsByClassName('xl-bottom')
      for(let i=0;i<navbtn.length;i++){
    	navbtn[i].onmouseenter=(function(i){
    		return function(){
    			xlb[i].style.display="block";
    		}
    	})(i)

    	navbtn[i].onmouseleave=(function(i){
    		return function(){
    			xlb[i].style.display="none";
    		}
    	})(i)
     }*/


// jQuery
// 
 

// 轮播
// 
    





    
/*
     let banner=document.getElementsByClassName('banner')[0]
     let lbbox=banner.querySelectorAll(".banner>main")[0]
     let lunbo=document.getElementsByClassName('lunbo')[0]

  
     let lba=document.getElementsByClassName('lba')

     let brdd=document.getElementsByClassName('brdd')[0]
     let btn=brdd.getElementsByTagName('li')
      let brl=document.getElementsByClassName('brl')[0]
      let brr=document.getElementsByClassName('brr')[0]
     // console.log(lba)
     // console.log(btn)
     //   
     var a=true;
   
      let widths=lunbo.offsetWidth;
      console.log(widths)
      var now=next=0;
       let t=setInterval(move,3000)

      lbbox.onmouseenter=function(){
        clearInterval(t)
      }
      lbbox.onmouseleave=function(){
          t=setInterval(move,3000)
      }



// 点击
    for(let i=0;i<lba.length;i++){
      btn[i].onclick=function(){
        if(a){
          a=false
        if(now==i){return }

        if(i==lba.length){
          i=0;
        }

        if(now<i){
         lba[i].style.left=widths+'px';
        // lba[now].style.left=0+'px';
        animate(lba[now],{left:-widths},function(){
          a=true
        });
        btn[now].classList.remove("brdd-frist")
        
        animate(lba[i],{left:0});
         btn[i].classList.add("brdd-frist") 
        }

         if(now>i){
         lba[i].style.left=-widths+'px';
        // lba[now].style.left=0+'px';
        animate(lba[now],{left:widths},function(){
          a=true
        });
        btn[now].classList.remove("brdd-frist")
        
        animate(lba[i],{left:0});
         btn[i].classList.add("brdd-frist") 
        }

        

        now=next=i;
      }
    }
   }

// 切换  
    
      brl.onclick=function(){
        if(a){
          a=false;
           move()
        }
       
      }

       function move(){
        next++;
        if(next==lba.length){
          next=0;
        }
        lba[next].style.left=widths+'px';

        animate(lba[now],{left:-widths},function(){
          a=true;
        });
        btn[now].classList.remove("brdd-frist")
        
        animate(lba[next],{left:0});
        btn[next].classList.add("brdd-frist")

        now=next;
    }




      brr.onclick=function(){
          if(a){
          a=false;
           move1()
        }
      }

      function move1(){

        next--
        if(next<0){
          next=lba.length-1;
        }

        lba[next].style.left=-widths+'px'
        // lba[now].style.left=0;

        animate(lba[now],{left:widths},function(){
          a=true;
        })
        btn[now].classList.remove('brdd-frist')
        animate(lba[next],{left:0})
        btn[next].classList.add('brdd-frist')
        now=next;

      }















*/








// 点击轮播

   /* for(let i=0;i<lba.length;i++) {

        btn[i].onclick=function(){

          for(let j=0;j<lba.length;j++){

          lba[j].style.display="none";
          btn[j].classList.remove("brdd-frist")
          }

          lba[i].style.display="block";
          btn[i].classList.add("brdd-frist")

    }

   }


// 自动轮播
     var t=setInterval(fn,2000)
      var num=0; 

       lbbox[0].onmouseenter=function(){
      	// alert(t)
      	clearInterval(t)
      }

       lbbox[0].onmouseleave=function(){
      	t=setInterval(fn,2000)
      }

   // console.log(lunbo[0])
  
     brl.onclick=fn;
     brr.onclick=fn1;


// 左右键切换
     function fn1(){
     	num--
           if(num==-1){
           	num=lba.length-1;
           }

          for(let i=0;i<lba.length;i++){
            // console.log(i)
         
           	lba[i].style.display="none";
            btn[i].classList.remove("brdd-frist");
           }
       	 	
            lba[num].style.display="block";
            btn[num].classList.add("brdd-frist"); 

     }

        function fn(){
                     
           num++

           if(num==lba.length){
           	num=0;
           }

          for(let i=0;i<lba.length;i++){
            // console.log(i)
         
           	lba[i].style.display="none";
            btn[i].classList.remove("brdd-frist");
           }
       	 	
            lba[num].style.display="block";
            btn[num].classList.add("brdd-frist");
 
        }


*/










// 内容
      
        let neirongx=document.getElementsByClassName('neirong-x')[0]
        
        let nrr=neirongx.getElementsByClassName('neirong')[0]
    function nrm(nrr){
        let dd0=nrr.getElementsByClassName('nr-dd')[0];
        let ddm0=dd0.getElementsByClassName('ddm')
        let nrbox0=nrr.getElementsByClassName('neirong-center')
        let nrx=nrr.getElementsByClassName('nrcx')[0]
        console.log(nrx)
        let jt1=nrr.getElementsByClassName('jiantou1')[0]
        let jt2=nrr.getElementsByClassName('jiantou2')[0]
        let width1=nrbox0[0].offsetWidth;
         console.log(width1)

       let num1=0;

        let num2=0
        for(let i=0;i<nrbox0.length;i++){
           ddm0[i].onclick=function(){
            animate(nrx,{left:-width1*i})
            ddm0[num1].classList.remove('ddm1')
            ddm0[i].classList.add('ddm1')
            num1=num2=i
           
           }
        }


    
        jt1.onclick=function(){
          
          if(num2==nrbox0.length-1){
            return
          }
          num2++;
          animate(nrx,{left:-width1*num2})
           ddm0[num1].classList.remove('ddm1')
           ddm0[num2].classList.add('ddm1')
           num1=i=num2
        }


        jt2.onclick=function(){
           
          if(num2==0){
            return
          }
         num2--;
          animate(nrx,{left:-width1*num2})
           ddm0[num1].classList.remove('ddm1')
           ddm0[num2].classList.add('ddm1')
           num1=i=num2
        }
      
      
    }
    nrm(nrr);

    let nrr1=neirongx.getElementsByClassName('neirong')[1]
    nrm(nrr1);

    let nrr2=neirongx.getElementsByClassName('neirong')[2]
    nrm(nrr2);

     let nrr3=neirongx.getElementsByClassName('neirong')[3]
    nrm(nrr3);

        /*let dd1=nrr[1].getElementsByClassName('nr-dd')[1];
        let ddm1=dd1.getElementsByClassName('ddm')
        let nrbox1=nrr[1].getElementsByClassName('neirong-center')

        let dd2=nrr[2].getElementsByClassName('nr-dd')[2];
        let ddm2=dd2.getElementsByClassName('ddm')
        let nrbox2=nrr[2].getElementsByClassName('neirong-center')

        let dd3=nrr[3].getElementsByClassName('nr-dd')[2];
        let ddm3=dd3.getElementsByClassName('ddm')
        let nrbox3=nrr[3].getElementsByClassName('neirong-center')
       */



         /*for(let i=0;i<lba.length;i++){
      btn[i].onclick=function(){

        if(now==i){return }

        if(i==lba.length){
          i=0;
        }

        lba[i].style.left=widths+'px';
        // lba[now].style.left=0+'px';
        animate(lba[now],{left:-widths});
        btn[now].classList.remove("brdd-frist")
        
        animate(lba[i],{left:0});
         btn[i].classList.add("brdd-frist")

        now=next=i;
      }
    }
*/

/*
        	for(let i=0;i<dd1.length;i++){
        	ddm1[i].onclick=function(){
             for(let j=0;j<nrbox.length;j++){
                ddm1[j].className='ddm'
   
        		nrbox1[j].style.display="none"
               }

        		ddm1[i].className='ddm ddm1'
        		nrbox1[i].style.display="block"
        

        	}
        }
*/


// 滚动




    let xxmm=document.getElementsByClassName('xxmm')[0]
    let gundong=xxmm.getElementsByClassName('gundong')[0]
    let main=gundong.querySelector('.gundong>main')
    
    // 获取按钮
    let xr1=xxmm.getElementsByClassName('xr1')[0]
    let xr2=xxmm.getElementsByClassName('xr2')[0]

    // 盒子
    let gd=main.querySelector('.gd')
    // 长盒子
    let gdx=gd.querySelector('.gdx')
  


    let lefts=gd.offsetWidth;
    let flags=true;

// 鼠标移上停止动画
  xxmm.onmouseenter=function(){
      clearInterval(m)
  }

   xxmm.onmouseleave=function(){
      m=setInterval(fnn,3000)
  }

// 自动轮播
    let m=setInterval(fnn,3000)

    function fnn(){
      if(flags){

        animate(gdx,{left:-lefts})
        xr1.style.color="#E0E0E0"
        xr2.style.color="#AFB2BB"

        flags=false;
      }else{
        animate(gdx,{left:0})
        xr2.style.color="#E0E0E0"
        xr1.style.color="#AFB2BB"
        flags=true;
      }


    }


// 鼠标移上按钮变色
      xr1.onmouseenter=function(){
        if(gdx.style.left==0+'px'){
          xr1.style.color="red"
        }else{
          return
        }        
    }
      xr1.onmouseleave=function(){
        if(gdx.style.left==0+'px'){
          xr1.style.color="#AFB2BB"
        }else{
           xr1.style.color="#E0E0E0"
        }

        
    }

      xr2.onmouseenter=function(){
        if(gdx.style.left==-lefts+'px'){
          xr2.style.color="red"
        }else{
          return
        }
        
    }

      xr2.onmouseleave=function(){
        if(gdx.style.left==-lefts+'px'){
          xr2.style.color="#AFB2BB"
        }else{
           xr2.style.color="#E0E0E0"
        }

        
    }


// 点击按钮时
     xr1.onclick=function(){
      if(gdx.style.left==-lefts+'px'){
        return
      }

      animate(gdx,{left:-lefts})
      xr1.style.color="#E0E0E0"
        xr2.style.color="#AFB2BB"

    }

      xr2.onclick=function(){
      if(gdx.style.left==0+'px'){
        return
      }
      animate(gdx,{left:0})

      xr2.style.color="#E0E0E0"
       xr1.style.color="#AFB2BB"
    }





 //为你推荐

   let xxmm1=document.getElementsByClassName('xxmm')[1]
    let gundong1=xxmm1.getElementsByClassName('gundong')[0]
    let main1=gundong1.querySelector('.gundong>main')
    
    // 获取按钮
    let xr11=xxmm1.getElementsByClassName('xr1')[0]
    let xr21=xxmm1.getElementsByClassName('xr2')[0]

    // 盒子
    let gd1=main1.querySelector('.gd')
    // 长盒子
    let gdx1=gd1.querySelector('.gdx')
  


    let lefts1=gd1.offsetWidth;
    let flags1=true;

// 鼠标移上停止动画
/*  xxmm1.onmouseenter=function(){
      clearInterval(m1)
  }

   xxmm1.onmouseleave=function(){
      m1=setInterval(fnn,2000)
  }*/

// 自动轮播
   /* let m1=setInterval(fnn1,2000)

    function fnn1(){
      if(flags1){

        animate(gdx1,{left:-lefts})
        xr11.style.color="#E0E0E0"
        xr21.style.color="#AFB2BB"

        flags1=false;
      }else{
        animate(gdx1,{left:0})
        xr21.style.color="#E0E0E0"
        xr11.style.color="#AFB2BB"
        flags1=true;
      }


    }

*/
// 鼠标移上按钮变色
      xr11.onmouseenter=function(){
        if(gdx1.style.left==-lefts1*3+'px'){
           return
        }else{
           xr11.style.color="red"
          
        }        
    }
      xr11.onmouseleave=function(){
        if(gdx1.style.left==-lefts1*3+'px'){
           xr11.style.color="#E0E0E0"
        }else{
           xr11.style.color="#AFB2BB"
        }

        
    }

      xr21.onmouseenter=function(){
        if(gdx1.style.left==0+'px'){
           return
        }else{
           xr21.style.color="red"
          
        }        
    }

      xr21.onmouseleave=function(){
        if(gdx1.style.left==0+'px'){
           xr21.style.color="#E0E0E0"
        }else{
           xr21.style.color="#AFB2BB"
        }

        
    }


// 点击按钮时

    
    let nums=1;
     xr11.onclick=function(){
       if(nums==3){
        xr11.style.color="#E0E0E0"

        return
      }
      nums++;
      animate(gdx1,{left:-lefts1*nums})
      xr21.style.color="#AFB2BB"

    }

      xr21.onclick=function(){
       if(nums==0){
         xr21.style.color="#E0E0E0"
        return
      }

      nums--;
      animate(gdx1,{left:-lefts1*nums})

       xr11.style.color="#AFB2BB"


    }


  }





  



        






		
	
