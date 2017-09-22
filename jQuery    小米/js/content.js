/*
* @Author: lenovo
* @Date:   2017-08-14 19:20:18
* @Last Modified by:   lenovo
* @Last Modified time: 2017-08-19 23:20:43
*/

'use strict';
function content(index){
    let nbox=document.getElementsByClassName('nb-son')[index];
     let nwidth=nbox.offsetWidth;
     // console.log(nwidth);
     let contents=document.getElementsByClassName('neirong-bson1')[index];
     // console.log(contents);
     let ybig=document.getElementsByClassName('neirong-yuan')[index];
     // console.log(ybig)
     
       // 第一个
          let clis=contents.getElementsByClassName('neirong-bsson');
          // console.log(clis);
          let yuans=ybig.getElementsByClassName('neirong-yson');
          // console.log(yuans);
          let now0=0;
          let next0=0;
          for(let j0=0;j0<yuans.length;j0++){
                 yuans[j0].onclick=function(){
                       
                   // console.log(yuans[j0]);
                   // console.log(j0)
                   if(next0>j0){
                      clis[j0].style.left=`${-nwidth}px`
                       animate(clis[now0],{left:(nwidth)},500)
                       animate(clis[j0],{left:0},500);

                       yuans[now0].classList.remove('yfirst')
                        yuans[j0].classList.add('yfirst');
                        now0=next0=j0;

                   }else if(next0<j0){
                      clis[j0].style.left=`${nwidth}px`;
                       animate(clis[now0],{left:(-nwidth)},500)
                       animate(clis[j0],{left:0},500);
                       yuans[now0].classList.remove('yfirst')
                      yuans[j0].classList.add('yfirst');
                      now0=next0=j0;
                   }else if(next0==j0){
                        return;
                   }
                  
                 }
          }
          // 左右按钮
          let nleft0=document.getElementsByClassName('neirong-lbutton')[index];
          let nright0=document.getElementsByClassName('neirong-rbutton')[index];
           nleft0.onmouseover=function(){
               if(next0==0){
                  nleft0.classList.remove('anniu');
               }else{
                 nleft0.classList.add('anniu');
               }
            
           }
           nright0.onmouseover=function(){
                if(next0==clis.lengtn-1){
                  nright0.classList.remove('anniu');
               }else{
                 nright0.classList.add('anniu');
               }
            
            }

               

          // 左按钮
            nleft0.onclick=function(){
               
              if(next0>0){
                next0--;
                nright0.classList.add('anniu');
                  clis[next0].style.left=`${-nwidth}px`; 
                  animate(clis[now0],{left:nwidth},500);
                  yuans[now0].classList.remove('yfirst');
                  animate(clis[next0],{left:0},500);
                  yuans[next0].classList.add('yfirst');
              }
                 
              if(next0==0){
                 nleft0.classList.remove('anniu');

              }
                 
                  
                  now0=next0;
               
            }
           // 右按钮
            nright0.onclick=function(){
              
             if(next0<clis.length-1){
               next0++;
              clis[next0].style.left=`${nwidth}px`;
              nleft0.classList.add('anniu');
               animate(clis[now0],{left:-nwidth},500)
               animate(clis[next0],{left:0},500);
               yuans[now0].classList.remove('yfirst')
               yuans[next0].classList.add('yfirst');
               
             }
             if(next0==clis.length-1){
                 nright0.classList.remove('anniu');
                 
              }
              now0=next0;

            }
}