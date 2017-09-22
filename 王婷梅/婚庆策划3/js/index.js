/*
* @Author: wz
* @Date:   2017-08-05 09:29:15
* @Last Modified by:   wz
* @Last Modified time: 2017-08-25 17:25:11
*/

// 'use strict';

window.onload=function(){
	let banner=document.querySelector('.banner')
    let xian=document.querySelectorAll('.banner>.bn-bottom>li')
    let bnl1=document.querySelector('.banner>.bnl1')
    let bnr1=document.querySelector('.banner>.bnr1')

	let imgs=document.querySelectorAll('.banner>img')
    let now=0,next=0;
    let widths=banner.offsetWidth;
	let t=setInterval(fn1,2000)
    let flag=true;
	function fn1(){
        if(flag){
            flag=false;
        
       
        next++
         if(next>=3){
            next=0
        }
        imgs[next].style.left=widths+'px'
        // imgs[now].style.left=0+'px'
        animate(imgs[now],{left:-widths})
        xian[now].classList.remove('bnb1')
        animate(imgs[next],{left:0},function(){
            flag=true
        })
         xian[next].classList.add('bnb1')
        now=next;
       } 
	}

    banner.onmouseenter=function(){
        clearInterval(t)
    }

    banner.onmouseleave=function(){
       t=setInterval(fn1,2000)
    }

    bnl1.onclick=function(){
        fn1()
    }

     bnr1.onclick=function(){
        fn2()
    }
    
    function fn2(){
        if(flag){
          flag=false;

        next--;
        if(next<0){
            next=imgs.length-1
        }
       imgs[next].style.left=-widths+'px'
        // imgs[now].style.left=0+'px'
        animate(imgs[now],{left:widths})
        xian[now].classList.remove('bnb1')
        animate(imgs[next],{left:0},function(){
            flag=true
        })
         xian[next].classList.add('bnb1')
        now=next;
      }
    }



}


