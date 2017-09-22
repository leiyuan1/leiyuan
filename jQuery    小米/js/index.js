/*
* @Author: lenovo
* @Date:   2017-09-11 09:26:28
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-17 21:45:06
*/
// 获取li 
    $(function(){
    	// 头部开始
    $(".head-right2").on("mouseenter",function(){
    	$(".head-block").css({height:100}).html("购物车中还没有商品，赶紧选购吧！");
    }).on("mouseleave",function(){
    	$(".head-block").css({height:0}).html("");
    })
    // 导航开始
	$(".nav-li>a").on("mouseenter",function(){
         $(this).next(".nav-bottom").css({boxShadow:'0px 3px 8px 1px rgba(30, 30, 30, 0.1)',borderTop:'2px solid #E0E0E0',display:'block'});
		
	}).on("mouseleave",function(){
    	 $(this).next(".nav-bottom").css({boxShadow:'0px 3px 8px 1px rgba(30, 30, 30, 0)',borderTop:'none',display:'none'});
    })
    	// 轮播开始
    	let now=0;
    	let lis=$(".lunbo>li");
    	let yuans=$(".banner-yuan>li");
    	let t=setInterval(function(){
    		move('l')
    	}, 5000)
    	function move(del){
            if(del=='l'){
               now++;
               if(now==lis.length){
                    now=0;
               }
            }else if(del=='r'){
               	 now--;
               if(now<0){
                    now=lis.length-1;
               }
            }
            lis.animate({opacity:0.3,zIndex:0},0)
            lis.eq(now).animate({opacity:1,zIndex:1},0)
            yuans.removeClass("yuan");
            yuans.eq(now).addClass("yuan")
    	}
    	// 移入取消动画
    	   $(".lunbo").hover(function(){
               clearInterval(t)
    	   },function(){
    	   	    t=setInterval(function(){
			    		move('l')
			    	}, 5000)
    	   })
         // 左按钮
         $(".banner-left").click(function(l){
              move('l');
            
         })
         // 右按钮
         $(".banner-right").click(function(r){
         	  move('r')
         })
         // 下方圆按钮
         yuans.click(function(){
         	  now=$(this).index(".banner-yuan>li")
         	   move();
         	   yuans.finish();
         })


    	$(".aside-big1>a").hover(function(){
    	   $(".item").css({display:"none"});
    	   $(this).next('.item').css({display:"block"});
           
    	 })
    	$('.aside-big').hover(function(){},function(){
    		$(".item").css({display:"none"});
    	})


// 小米明星单品轮播开始
        let start=$('.star-big');
        // console.log(start)
        let widths=start.width();
        // console.log(widths)
        let sbig=$('.star-pro');
        // console.log(sbig)
        //  // 按钮
        let sleft=$('.star-ttr1');
        let sright=$('.star-ttr2');
        let lefts=0;
           // 初始状态
           sright.css({color:'#B5B0B0',corsur:'pointer'});
            
           // 右
           sright.hover(function() {
           	    $(this).css({color:'#ff6700'})
           }, function() {
           	    $(this).css({color:'#B5B0B0'})
           });   
          let st=setInterval(fn,5000)
           // 点击左边
          function moveL(){
          	     console.log(1)
                  sbig.css({left:0});
               // 颜色设置
               sleft.css({color:'#e0e0e2'})
               sright.css({color:'#B5B0B0'})
               // 移入效果
               // 左
          
              sleft.hover(function() {
              	  sleft.css({color:'#e0e0e2'});
              	  clearTimeout(st)
              }, function() {
              	  sleft.css({color:'#e0e0e2'});
              	  st= setInterval(fn,5000)
              });
               // 右
              sright.hover(function() {
           	    $(this).css({color:'#ff6700'})
           	    clearTimeout(st)
	           }, function() {
	           	    $(this).css({color:'#B5B0B0'})
	           	    st= setInterval(fn,5000)
	           });  
                  lefts=0;
                  
                  
            }
              sleft.on("click",moveL)
            // 点击右边
            function moveR(){                
                  // 颜色设置
	               sright.css({color:'#e0e0e2'})
	               sleft.css({color:'#B5B0B0'})
                  // 移入效果
                  // 左
                 sleft.hover(function() {
	           	    $(this).css({color:'#ff6700'})
	           	    clearTimeout(st)
		           }, function() {
		           	    $(this).css({color:'#B5B0B0'})
		           	    st= setInterval(fn,5000)
		           });  
                  // 右
                  sright.hover(function() {
	              	  $(this).css({color:'#e0e0e2'});
	              	  clearTimeout(st)
	              }, function() {
	              	  $(this).css({color:'#e0e0e2'});
	              	  st= setInterval(fn,5000)
	              });
                sbig.css({left:-widths})
            }
           sright.on("click",moveR);


        function fn(){
              lefts=sbig.offset().left;
              // console.log(lefts)
          if(lefts>=0){
          	// console.log("左")
             // 颜色设置
	               sright.css({color:'#e0e0e2'})
	               sleft.css({color:'#B5B0B0'})
                  // 移入效果
                  // 左
                 sleft.hover(function() {
	           	    $(this).css({color:'#ff6700'})
	           	    clearTimeout(st)
		           }, function() {
		           	    $(this).css({color:'#B5B0B0'})
		           	    st= setInterval(fn,5000)
		           });  
                  // 右
                  sright.hover(function() {
	              	  $(this).css({color:'#e0e0e2'});
	              	  clearTimeout(st)
	              }, function() {
	              	  $(this).css({color:'#e0e0e2'});
	              	  st= setInterval(fn,5000)
	              });
	              sbig.css({left:-widths})
               
          }
          if(lefts<=(-widths)){
          	// console.log("右")
             sbig.css({left:0})
               // 颜色设置
               sleft.css({color:'#e0e0e2'})
               sright.css({color:'#B5B0B0'})
               // 移入效果
               // 左
          
              sleft.hover(function() {
              	  sleft.css({color:'#e0e0e2'});
              	  clearTimeout(st)
              }, function() {
              	  sleft.css({color:'#e0e0e2'});
              	  st= setInterval(fn,5000)
              });
               // 右
              sright.hover(function() {
           	    $(this).css({color:'#ff6700'})
           	    clearTimeout(st)
	           }, function() {
	           	    $(this).css({color:'#B5B0B0'})
	           	    st= setInterval(fn,5000)
	           });  
                 
                  
                  
          }
        }




// 家电开始
   let jiadian=$('.jiadian-tright');
    jiadian.each(function(index, el){
   	   $(this).children('a').first().css({color:'#fb9300',borderBottom:'1px solid #fb9300',paddingBottom:'5px'})
   })
   $('.jiadian-nr').each(function(index, el){
   	   $(this).children('.nr-right').first().css({display:"block"})
   })
     jiadian.each(function(index,el) {
     	 $(this).children('a').on("mouseenter",function(){
     	 	  $(this).parent().children('a').css({color:'#424242',borderBottom:'0px solid #424242',paddingBottom:'0px'})
     	 	  $(this).css({color:'#fb9300',borderBottom:'1px solid #fb9300',paddingBottom:'5px'})
     	 	  index=$(this).index();
     	 	  $(this).parent().parent().next(".jiadian-nr").children(".nr-right").css({display:"none"})
     	 	 let jia=$(this).parent().parent().next(".jiadian-nr").children(".nr-right")[index];
     	     jia.style.display="block"
     	 })
     	
     });
     


// 为你推荐开始
          let tuijian=$('.tuijian-big');
          // console.log(tuijian);
          let zc=tuijian.width();
          // console.log(zc)
          let tleft=$('.tuijian-ttr1');
          let tright=$('.tuijian-ttr2');
           let speed=-1226;
           let tnow=0;
           let snum=zc/(-speed);
           // console.log(snum)
           	  tright.css({color:'#B5B0B0'});
              // 右边按钮移入移出
              tright.hover(function(){
                 if(tnow==snum-1){
                     tright.removeClass('anniu')
                     tright.css({color:'#e0e0e2'});
                     return;
                 }else{
                  tright.addClass('anniu');
                   tright.css({color:'#FF6709'});
                 }             	   
              },function(){
              	   if(tnow==snum-1){
                     tright.css({color:'#e0e0e2'});
                     return;
                 }else{
                  tright.css({color:'#B5B0B0'});
                 }
             	  
              })

              // 左键
             // 左键按钮移入移出
             tleft.hover(function(){
                 if(tnow==0){
                     tleft.removeClass('anniu')
                     tleft.css({color:'#e0e0e2'});
                     return;
                 }else if(tnow>0&&tnow<=snum-1){
                  tleft.addClass('anniu');
                   tleft.css({color:'#FF6709'});
                 }             	   
              },function(){
              	   if(tnow==0){
                     tright.css({color:'#e0e0e2'});
                     return;
                 }else if(tnow>0&&tnow<=snum-1){
                  tright.css({color:'#B5B0B0'});
                 }
             	  
              })
          
           // 点击右键
            tright.on("click",function(){
            	    // 左键变化
            	     tleft.addClass('anniu');
             	        tleft.css({color:'#B5B0B0'});
                  let ws=tuijian.offset().left;
                   console.log(ws)
                   if(tnow<snum-1){
                      speed = -1226;
             	     }
                   if(tnow==snum-1){
                     return;
                   }
               	   tuijian.css({marginLeft:ws+speed});
                    tnow++;
            })

           
           // 点击左键
            tleft.on("click",function(){

              	       tright.addClass('anniu');
                     
                 	   tright.css({color:'#B5B0B0'});
                     let ws=tuijian.offset().left;
                      
                     if(tnow>0){
                       	    // console.log(tnow);
                         speed = 1226;
                     }
                     if(tnow==0){
                        return;
                     }
                    tuijian.css({marginLeft:ws+speed});
                      tnow--;
            })

// 使用函数   内容；
   content(0);
   content(1);
   content(2);
   content(3);



    })
	