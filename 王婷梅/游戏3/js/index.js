/*
* @Author: wz
* @Date:   2017-08-15 17:41:08
* @Last Modified by:   wz
* @Last Modified time: 2017-08-15 20:13:40
*/

// 'use strict';


 window.onload=function(){
    let box=document.getElementsByClassName("box")[0]
    
    for(let i=0;i<=100;i++){
    let divs=document.createElement('div');
    divs.classList.add('circle')
   let ws=window.innerWidth-80;
   let hs=window.innerHeight-80;
   box.appendChild(divs);
   console.log(box)
   let widths=Math.round(Math.random()*20+20)
   // let heights=Math.round(Math.random()*20+20)
   let left=Math.round(Math.random()*ws)-ws/2
   let top=Math.round(Math.random()*hs)-hs/2
   divs.style.cssText=`
          width:${widths}px;
          height:${widths}px;
          background:${bgColor()};
     `;
   setTimeout(()=>{

      divs.style.left=`${left}px`
     divs.style.top=`${top}px`
   },10)

   
 }



 function bgColor(){
    
 	let r=Math.round(Math.random()*256)
 	let g=Math.round(Math.random()*256)
 	let b=Math.round(Math.random()*256)
 	let rgb=`rgb(${r},${g},${b})`;
 	return rgb;

 }

 // console.log(bgColor())


 }