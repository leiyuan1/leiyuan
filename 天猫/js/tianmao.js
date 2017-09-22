/*
* @Author: lenovo
* @Date:   2017-08-13 21:33:00
* @Last Modified by:   lenovo
* @Last Modified time: 2017-08-20 22:30:10
*/

'use strict';
window.onload=function(){
     //	掉下窗口开始
   //	获取 浏览器高度
   let  ll=window.innerHeight;
// 获取元素
   let down=document.querySelector('.down-sousuo');
   let hflag=true;
   // 侧方隐藏导航开始
   // 获取
   let stzs=document.querySelectorAll('.stz');
   // console.log(stzs);
   //遍历元素获取距离页面顶部的距离
// 创建新数组:将距离传进去
     let stArr=[];
   stzs.forEach(function(element){
   	  
// 	   console.log(imgs)
   	   let stzsTop= element.offsetTop
// 	   console.log(ysTop)
   	   stArr.push(stzsTop);
   })
    // console.log(stArr);
    
   let tiaozhuan=document.querySelector('.aside-block');
   // console.log(tiaozhuan)
   let tiaozhuans=document.querySelectorAll('.aside-block>.tz')
   // console.log(tiaozhuans)
   let tnow=0;
   // 侧隐藏导航点击开始
   tiaozhuans.forEach(function(element,index){
     	  element.onclick=function(){
     	  	    animate(document.body,{scrollTop:stArr[index]-100},1000)
     	  	    tiaozhuans[tnow].style.background='#626262';
     	  	    tiaozhuans[index].style.background='#EA5F8D';
     	  	    tnow=index;
     	  }
     })
// console.log(down);
   window.onscroll=function(){
   	     let hd=document.body.scrollTop;

// console.log(hd)
   	    if(hd > 600){
   	    	if(hflag){
   	    		hflag=false;
   	    		animate(down,{top:0},50)
   	    		animate(tiaozhuan,{left:5},50)
   	    	}
   	    	
   	    }else{
   	    	if(!hflag){
   	    		animate(down,{top:-50},50)
   	    		animate(tiaozhuan,{left:-40},50)
   	    		hflag=true;

   	    	}
   	    	
   	    }

   	    // 隐藏导航
   	    stArr.forEach(function(value,index){
       	  if(ll + hd >= value + 200){
       	  	    tiaozhuans[tnow].style.background='#626262';
     	  	    tiaozhuans[index].style.background='#EA5F8D';
     	  	    tnow=index;
       	  }
       	   
       	     	   
     })
        
   }
//掉下窗口结束

	// 头部开始
	//1.对带有小三角的进行设置
	 let hrs=document.querySelectorAll('.hr1');
	 // console.log(hrs);
	 let hrblocks=document.querySelectorAll('.hrblock');
	 // console.log(hrblocks)
	 hrs.forEach(function(element,index){
         element.onmouseenter=function(){
         	  hrblocks[index].style.display='block';
         }     
          element.onmouseleave=function(){
         	  hrblocks[index].style.display='none';
         }    
	 })

     let shouji=document.querySelector('.shouji');
     let erweima=document.querySelector('.hr-erweima');
     shouji.onmouseenter=function(){
     	  erweima.style.display='block'
     }
     shouji.onmouseleave=function(){
     	  erweima.style.display='none'
     }

	// 头部结束
	// 轮播开始
	// let banner=document.getElementsByClassName('img-box')[0];
	// console.log(banner);
	// let blis=banner.getElementsByTagName('li');
	// console.log(blis);
	// let yuans=document.getElementsByClassName('yuan-son');
	// console.log(yuans)
	// let num=0;   //当前页面
	// for(let i=0;i<yuans.length;i++){
 //          yuans[i].onmouseover=function(){
 //          	   blis[num].style.display='none';
 //          	   blis[i].style.display='block';
 //          	   yuans[num].classList.remove('yuan-son2');
 //          	   yuans[i].classList.add('yuan-son2');
 //          	   num = i;

 //          }
	// }

	// 动画
	  // let t=setInterval(fn, 3000)

	  // function fn(){
	  // 	num++;
	  // 	if(num == yuans.length){
   //          num=0;
	  // 	}
	  // 	 for(let j=0;j<yuans.length;j++){
   //          blis[j].style.display='none';
   //          yuans[j].classList.remove('yuan-son2');
	  // 	 }
	  // 	  blis[num].style.display='block';
	  // 	  yuans[num].classList.add('yuan-son2');
	  // }
	  // 
	  
	  	// 第二种
	     let banner=document.getElementsByClassName('img-box')[0];
	     let bwidth=banner.offsetWidth;
	     console.log(bwidth);
	     let blis=banner.getElementsByTagName('li');
	     console.log(blis);
	     let yuans=document.getElementsByClassName('yuan-son');
	     console.log(yuans)
	     let now=0    //当前图片；
	     let next=0    //下张图片；
	     // 动画
	     let t2=setInterval(fn,3000);
	     function fn(){
	     	next++;
	     	if(next==blis.length){
                 next=0;
	     	}
	     	blis[next].style.left=`${bwidth}px`;
	     	// console.log(now);
	     	// console.log(next)
	     	animate(blis[now],{left:(-bwidth)});
	     	animate(blis[next],{left:0});
	     	yuans[now].classList.remove('yuan-son2');
	     	yuans[next].classList.add('yuan-son2');
	     	now=next;

	     }	
        banner.onmouseover=function(){
        	clearInterval(t2)
        }
        banner.onmouseout=function(){
        	t2=setInterval(fn,3000)
        }
        // 点击
        for(let i=0;i<yuans.length;i++){
             yuans[i].onclick=function(){
         	      if(now<i){
                        blis[i].style.left=`${bwidth}px`;         	
             	        animate(blis[now],{left:(-bwidth)});
		             	animate(blis[i],{left:0});
		             	yuans[now].classList.remove('yuan-son2');
			     	    yuans[i].classList.add('yuan-son2');
			     	    now=next=i;
         	      }else if(now >i){
         	      	    blis[i].style.left=`${-bwidth}px`;         	
             	        animate(blis[now],{left:(bwidth)});
		             	animate(blis[i],{left:0});
		             	yuans[now].classList.remove('yuan-son2');
			     	    yuans[i].classList.add('yuan-son2');
			     	    now=next=i;
         	      }else if(now==i){
         	      	   return;
         	      }
             }
        }
      // 轮播结束

	  // 侧导航开始
	     let aside=document.getElementsByClassName('aside-big');
	     let alis=document.getElementsByClassName('aside-bli');
	     console.log(alis);
	     let asson=document.getElementsByClassName('asideliNN');
	     console.log(asson);
	     for(let i=0;i<alis.length;i++){
              alis[i].onmouseenter=function(){
              	   asson[i].style.display='block';
              }

              alis[i].onmouseleave=function(){
              	  asson[i].style.display='none';
              }
	     }

	  // 侧导航结束
	  
}