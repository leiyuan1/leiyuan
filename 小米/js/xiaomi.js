/*
* @Author: lenovo
* @Date:   2017-08-10 22:56:38
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-21 09:58:19
*/

'use strict';
window.onload=function(){

  // 头部开始
  let shopping=document.querySelector('.head-right2');
  // console.log(shopping);
  let shblock=document.querySelector('.head-block');
  // console.log(shblock)
    shopping.onmouseenter=function(){
          shblock.style.height='100px';
          shblock.innerHTML=`购物车中还没有商品，赶紧选购吧！` 
    }
     shopping.onmouseleave=function(){
          shblock.style.height='0px';
          shblock.innerHTML=``; 
    }
  // 头部结束
 


	// 导航开始
	let navlis=document.getElementsByClassName('nav-li');
	// console.log(navlis);
	let navitem = document.getElementsByClassName('nav-bottom');
	// console.log(navitem[0]);
	let navcot=document.getElementsByClassName('nav-bbig');

	for(let n=0;n<navitem.length;n++){
        navlis[n].onmouseover=function(){
        	navitem[n].style.boxShadow='0px 3px 8px 1px rgba(30, 30, 30, 0.5)'
        	navitem[n].style.borderTop='2px solid #E0E0E0'
        	navitem[n].style.display='block';
        }
        navlis[n].onmouseout=function(){
        	navitem[n].style.boxShadow='0px 3px 8px 1px rgba(30, 30, 30, 0)'
        	navitem[n].style.borderTop='none'
        	navitem[n].style.display='none';
        }
	}

  // 导航右侧开始
  let navl=document.querySelector('.nav-r1');
  // console.log(navr);
  let navtext1=document.querySelector('.nav-r1text');
  // console.log(navtext1);
  let navtext2=document.querySelector('.nav-r2text');
  let navr=document.querySelector('.nav-r2');
  let navblock=document.querySelector('.nav-block');
      navl.onfocus=function(){
            navtext1.style.display='none';
            navtext2.style.display='none';
            navl.style.border='1px solid #ff6700';
            navr.style.border='1px solid #ff6700';
            navr.style.borderLeft='none';
            navblock.style.display='block'

      }
      navl.onblur=function(){
           navtext1.style.display='block';
            navtext2.style.display='block';
            navl.style.border='';
            navr.style.border='';
            navr.style.borderLeft='none';
            navblock.style.display='none';
      }
  // 导航右侧结束
	//导航结束
  //侧导航
      	let abig=document.getElementsByClassName('aside-big')[0];
      	let alis=abig.getElementsByClassName('aside-big1');
           console.log(alis);
      	// 第一种
      	// let bl=document.getElementsByClassName('item');
      	// console.log(bl);
      	// for(let i=0;i<alis.length;i++){
          //          alis[i].onmouseover=function(){
                  
          //          	bl[i].style.display='block'
                	
          //          }

          //          alis[i].onmouseout=function(){
                	
          //          	bl[i].style.display='none'
                	
          //          }
      	   // }
      	    // 第二种
      	   // for(let i=0;i<alis.length;i++){
          //          alis[i].onmouseover=function(){
          //          	let bl=this.getElementsByClassName('item');
          //          	console.log(bl[0]);
          //          	bl[0].style.display='block'
                	
          //          }

          //          alis[i].onmouseout=function(){
          //          	let bl=this.getElementsByClassName('item');
          //          	console.log(bl[0]);
          //          	bl[0].style.display='none'
                	
          //          }
      	   // }
      	
      	// 第三种classList(1)
      	// let bl=document.getElementsByClassName('item');
      	// console.log(bl);
      	// for(let i=0;i<alis.length;i++){
          //          alis[i].onmouseover=function(){
                  
          //          	bl[i].classList.add('xianshi');
          //          	 bl[i].classList.remove('xiaoshi');
          //          	console.log(bl[i]);
                	
          //          }

          //          alis[i].onmouseout=function(){
                	
          //          bl[i].classList.remove('xianshi');
          //          bl[i].classList.add('xiaoshi');
                	
          //          }
      	   // }
      	
           // 第三种classList(2)
      	     //  for(let i=0;i<alis.length;i++){
            //          alis[i].onmouseover=function(){
            //          	let bl=this.getElementsByClassName('item');
            //          	console.log(bl[0]);
            //          	bl[0].classList.add('xianshi');
            //          	 bl[0].classList.remove('xiaoshi');
            //          }

            //          alis[i].onmouseout=function(){
            //          	let bl=this.getElementsByClassName('item');
            //          	console.log(bl[0]);
            //          	bl[0].classList.remove('xianshi');
            //          	   bl[0].classList.add('xiaoshi');
                	
            //          }
      	     // }
      	

      	     // 第四种
      	     //    for(let i=0;i<alis.length;i++){
            //          alis[i].onmouseover=function(){
            //          	let bl=this.getElementsByClassName('item');
            //          	console.log(bl[0]);
            //          	bl[0].classList.toggle('xianshi');
                	
            //          }

            //          alis[i].onmouseout=function(){
            //          	let bl=this.getElementsByClassName('item');
            //          	console.log(bl[0]);
            //          	bl[0].classList.toggle('xianshi');
                	  
                	
            //          }
      	     // }
      	
          // 第五种 自定义函数
            for(var i=0;i<alis.length;i++){
            	   alis[i].index=i;
            	   // console.log(i);
                alis[i].onmouseover=function(){
                	let bl=this.getElementsByClassName('item');
                	console.log(bl[0]);
                	bl[0].classList.toggle('xianshi');
                	
                }

                alis[i].onmouseout=function(){
                	let bl=this.getElementsByClassName('item');
                	console.log(bl[0]);
                	bl[0].classList.toggle('xianshi');
                	  
                	
                }
      	}

      	// 第六种   闭合函数（自调用）
      	

  // 轮播开始
      	let lunbo=document.getElementsByClassName('lunbo')[0];
      	// console.log(lunbo);
      	let llis=lunbo.getElementsByTagName('li');
      	// console.log(llis);
      	let yn=document.getElementsByClassName('banner-yuan')[0];
      	let ylis=yn.getElementsByTagName('li');
      	// console.log(ylis);
      	let dq=0;
      	// console.log(dq)
      	     // 点击执行
      	    for(let i=0;i<ylis.length;i++){
                      ylis[i].onclick=function(){
                      	// console.log(dq)
                      	 llis[dq].style.display='none';
                            ylis[dq].classList.remove('yuan');
                      	llis[i].style.display='block';
                      	ylis[i].classList.add('yuan');
                      	 dq=i;
                      }

      	    }
      	    
      	    // for(let i=0;i<ylis.length;i++){
           //          ylis[i].onclick = function(){
           //          	  for(let j=0;j<ylis.length;j++){
           //                       llis[j].style.display = 'none';
           //                      ylis[j].classList.remove('yuan');
           //          	  }
           //          	  llis[i].style.display = 'block';
           //          	   ylis[i].classList.add('yuan');
           //          }
                    
      	    // }


      	    // 自动轮播
      	     
      	    let t=setInterval(move,2000);
             
      	    // 轮播函数
      	    //向左滑动
      	    function move(){
      	    	dq++;
      	    	if(dq == llis.length){
                      dq = 0;
      	    	}
      	    	for(let i=0;i<llis.length;i++){
                       
                       llis[i].style.display='none';
                        ylis[i].classList.remove('yuan');
      	    	}
      	       llis[dq].style.display='block';
                 ylis[dq].classList.add('yuan');
      	    }
              // 向右滑动
              function move1(){
      	    	dq--;
      	    	if(dq == -1){
                      dq = llis.length-1;
      	    	}
      	    	for(let i=llis.length-1;i>=0;i--){
                       
                       llis[i].style.display='none';
                        ylis[i].classList.remove('yuan');
      	    	}
      	       llis[dq].style.display='block';
                 ylis[dq].classList.add('yuan');
      	    }
      	    // 鼠标移入停止
      	    let bm=document.getElementsByClassName('banner-main')[0];
      	    bm.onmouseenter=function(){
      	    	clearInterval(t)
      	    }
      	    bm.onmouseleave=function(){
      	    	t=setInterval(move,2000)
      	    }

      	    // 左按钮
      	    let bleft=document.getElementsByClassName('banner-left')[0];
      	    // console.log(bleft)
      	    bleft.onclick=move;

      	    // 右按钮
      	    let bright=document.getElementsByClassName('banner-right')[0];
      	    bright.onclick=move1;

              

        
  // 小米明星单品轮播开始
        let start=document.querySelector('.star-big');
        let widths=start.offsetWidth;
        let sbig=start.getElementsByClassName('star-pro')[0];
      
        // console.log(widths)
        // console.log(start);
        //  // 按钮
        let sleft=document.querySelector('.star-ttr1');
        let sright=document.querySelector('.star-ttr2');
        let lefts=0
           // 初始状态
           sright.style.color='#B5B0B0';
           sright.classList.add('shouxing'); 
             sright.style.corsur='pointer';
           // 右
           sright.onmouseover=function(){
                  sright.style.color='#ff6700';
              }
           sright.onmouseout=function(){
                  sright.style.color='#B5B0B0';
              }
          let st= setInterval(fn,5000)
           // 点击左边
          function moveL(){
                  sbig.style.left=0+'px';
                      // 手型设置
              sright.classList.add('shouxing');
              sleft.classList.remove('shouxing');
               // 颜色设置
              sleft.style.color='#e0e0e2';
              sright.style.color='#B5B0B0';
               // 移入效果
               // 左
               sleft.onmouseover=function(){
                  sleft.style.color='#e0e0e2';
                  clearTimeout(st)

              }
              sleft.onmouseout=function(){
                  sleft.style.color='#e0e0e2';
                   st= setInterval(fn,5000)

              }
               // 右
              sright.onmouseover=function(){
                  sright.style.color='#ff6700';
                  clearTimeout(st)

              }
              sright.onmouseout=function(){
                  sright.style.color='#B5B0B0';
                   st= setInterval(fn,5000)

              }
                  lefts=0;
                  // clearTimeout(st)
                  
            }

             sleft.onclick=moveL;
            console.log(lefts)
            // 点击右边
            function moveR(){
                  // 手型设置
                 sleft.classList.add('shouxing');
                  sright.classList.remove('shouxing');
                 // 颜色设置
                  sright.style.color='#e0e0e2';
                  sleft.style.color='#B5B0B0';
                  // 移入效果
                  // 左
                  sleft.onmouseover=function(){
                      sleft.style.color='#ff6700';
                      clearTimeout(st)
                  }
                  sleft.onmouseout=function(){
                      sleft.style.color='#B5B0B0';
                       st= setInterval(fn,5000)
                  }
                  // 右
                  sright.onmouseover=function(){
                      sright.style.color='#e0e0e2';
                      clearTimeout(st)

                  }
                  sright.onmouseout=function(){
                      sright.style.color='#e0e0e2';
                       st= setInterval(fn,5000)

                  }
                sbig.style.left=`${-widths}px`;

                 lefts=-widths;
            }
           sright.onclick=moveR;


        function fn(){
              lefts=sbig.offsetLeft;
          if(lefts>=0){
            // 手型设置
             sleft.classList.add('shouxing');
              sright.classList.remove('shouxing');
             // 颜色设置
              sright.style.color='#e0e0e2';
              sleft.style.color='#B5B0B0';
              // 移入效果
              // 左
              sleft.onmouseover=function(){
                  sleft.style.color='#ff6700';
                  clearTimeout(st)
              }
              sleft.onmouseout=function(){
                  sleft.style.color='#B5B0B0';
                   st= setInterval(fn,5000)
              }
              // 右
              sright.onmouseover=function(){
                  sright.style.color='#e0e0e2';
                  clearTimeout(st)

              }
              sright.onmouseout=function(){
                  sright.style.color='#e0e0e2';
                   st= setInterval(fn,5000)

              }
             sbig.style.left=`${-widths}px`;
               // moveR();
          }
          if(lefts<=(-widths)){
            // console.log(lefts)
              // 手型设置
              sright.classList.add('shouxing');
              sleft.classList.remove('shouxing');
               // 颜色设置
              sleft.style.color='#e0e0e2';
              sright.style.color='#B5B0B0';
               // 移入效果
               // 左
               sleft.onmouseover=function(){
                  sleft.style.color='#e0e0e2';
                  clearTimeout(st)

              }
              sleft.onmouseout=function(){
                  sleft.style.color='#e0e0e2';
                   st= setInterval(fn,5000)

              }
               // 右
              sright.onmouseover=function(){
                  sright.style.color='#ff6700';
                  clearTimeout(st)

              }
              sright.onmouseout=function(){
                  sright.style.color='#B5B0B0';
                   st= setInterval(fn,5000)

              }
             sbig.style.left=0+'px';
          }
        }
       
        // console.log(sleft)

           

        
  // 为你推荐开始
          let tuijian=document.getElementsByClassName('tuijian-big')[0];
          // console.log(tuijian);
          let zc=tuijian.offsetWidth;
          // console.log(zc)
          let tleft=document.getElementsByClassName('tuijian-ttr1')[0];
          let tright=document.getElementsByClassName('tuijian-ttr2')[0];
           let speed=-1226;
           let tnow=0;
           let snum=zc/(-speed);
           console.log(snum)
           	  tright.style.color='#B5B0B0';
              // 右边按钮移入移出
              tright.onmouseover=function(){
                 if(tnow==snum-1){
                     tright.classList.remove('anniu')
                     tright.style.color='#e0e0e2';
                     return;
                 }else{
                  tright.classList.add('anniu');
                   tright.style.color='#FF6709';
                 }
             	     
             	   
              } 
                
              tright.onmouseout=function(){
             	   if(tnow==snum-1){
                     tright.style.color='#e0e0e2';
                     return;
                 }else{
                  tright.style.color='#B5B0B0';
                 }
             	  
             	} 

              // 左键
             // 左键按钮移入移出
              tleft.onmouseover=function(){
                 if(tnow==0){
                     tleft.classList.remove('anniu')
                     tleft.style.color='#e0e0e2';
                     return;
                 }
                 if(tnow>0&&tnow<=snum-1){
                   tleft.classList.add('anniu');
                   tleft.style.color='#FF6709';
                 }  
                 
              } 
                
              tleft.onmouseout=function(){
                 if(tnow==0){
                     tleft.style.color='#e0e0e2';
                     return;
                 }
                 if(tnow>0&&tnow<=snum-1){
                     tleft.classList.remove('anniu');
                    tleft.style.color='#B5B0B0';
                 }
                
              } 
 
           // 点击右键
            tright.onclick=function(){
            	    // 左键变化
            	     tleft.classList.add('anniu');
             	        tleft.style.color='#B5B0B0';
                  let ws=parseInt(window.getComputedStyle(tuijian,null).marginLeft+speed);
                  // console.log(ws) 
                   if(tnow<snum-1){
                      speed = -1226;
             	     }
                   if(tnow==snum-1){
                     return;
                   }
               	   tuijian.style.marginLeft = `${ws+speed}px`;
                    tnow++;
            }

           
           // 点击左键
            tleft.onclick=function(){
              	       tright.classList.add('anniu');
                     
                 	   tright.style.color='#B5B0B0';
                     let ws=parseInt(window.getComputedStyle(tuijian,null).marginLeft+speed);
                      
                     if(tnow>0){
                       	    console.log(tnow);
                         speed = 1226;
                     }
                     if(tnow==0){
                        return;
                     }
                    tuijian.style.marginLeft = `${ws+speed}px`;
                      tnow--;
            }



  // 内容开始
        
   // // 获取隐藏的元素
   //   let nbox=document.getElementsByClassName('nb-son')[0];
   //   let nwidth=nbox.offsetWidth;
   //   console.log(nwidth);
   //   let contents=document.getElementsByClassName('neirong-bson1');
   //   console.log(contents);
   //   let ybig=document.getElementsByClassName('neirong-yuan');
   //   console.log(ybig)
     
   //     // 第一个
   //        let clis=contents[0].getElementsByClassName('neirong-bsson');
   //        // console.log(clis);
   //        let yuans=ybig[0].getElementsByClassName('neirong-yson');
   //        // console.log(yuans);
   //        let now0=0;
   //        let next0=0;
   //        for(let j0=0;j0<yuans.length;j0++){
   //               yuans[j0].onclick=function(){
                       
   //                 console.log(yuans[j0]);
   //                 console.log(j0)
   //                 clis[j0].style.left=`${nwidth}px`
   //                 animate(clis[now0],{left:(-nwidth)})
   //                 animate(clis[j0],{left:0});
   //                 yuans[now0].classList.remove('yfirst')
   //                 console.log(now0);
   //                  yuans[j0].classList.add('yfirst');
   //                  now0=next0=j0;
   //               }
   //        }
   //        // 左右按钮
   //        let nleft0=document.getElementsByClassName('neirong-lbutton')[0];
   //        let nright0=document.getElementsByClassName('neirong-rbutton')[0];
   //         nleft0.onmouseover=function(){
   //             if(next0==0){
   //                nleft0.classList.remove('anniu');
   //             }else{
   //               nleft0.classList.add('anniu');
   //             }
            
   //         }
   //         nright0.onmouseover=function(){
   //              if(next0==clis.lengtn-1){
   //                nright0.classList.remove('anniu');
   //             }else{
   //               nright0.classList.add('anniu');
   //             }
            
   //          }
   //        // 左按钮
   //          nleft0.onclick=function(){
           
   //            if(next0>0){
   //              nright0.classList.add('anniu');
   //               next0--;
   //                clis[next0].style.left=`${nwidth}px`;
   //               animate(clis[now0],{left:(-nwidth)})
   //                animate(clis[next0],{left:0});
   //                yuans[now0].classList.remove('yfirst')
   //                yuans[next0].classList.add('yfirst');
   //                now0=next0;

   //            }
   //            if(next0==0){
   //               nleft0.classList.remove('anniu');

   //            }
               
   //          }
   //         // 右按钮
   //          nright0.onclick=function(){
   //           if(next0<clis.length-1){
   //            nleft0.classList.add('anniu');
   //            next0++;
   //            clis[next0].style.left=`${nwidth}px`;
   //             animate(clis[now0],{left:(-nwidth)})
   //             animate(clis[next0],{left:0});
   //             yuans[now0].classList.remove('yfirst')
   //             yuans[next0].classList.add('yfirst');
   //             now0=next0;
   //           }
   //           if(next0==clis.length-1){
   //               nright0.classList.remove('anniu');
                 
   //            }

   //          }
   //     // 第二个
   //        let clis1=contents[1].getElementsByClassName('neirong-bsson');
   //        // console.log(clis1);
   //        let yuans1=ybig[1].getElementsByClassName('neirong-yson');
   //        // console.log(yuans1);
   //        let now1=0;
   //        let next1=0;
   //        for(let j1=0;j1<yuans1.length;j1++){
                 
   //               yuans1[j1].onclick=function(){
                   
   //                 clis1[j1].style.left=`${nwidth}px`
   //                 animate(clis1[now1],{left:(-nwidth)})
   //                 animate(clis1[j1],{left:0});
   //                 yuans1[now1].classList.remove('yfirst')
   //                 console.log(now1);

   //                 yuans1[j1].classList.add('yfirst');
   //                  now1=next1=j1;
   //               }
   //        }

   //            // 左右按钮
   //        let nleft1=document.getElementsByClassName('neirong-lbutton')[1];
   //        let nright1=document.getElementsByClassName('neirong-rbutton')[1];
   //         nleft1.onmouseover=function(){
   //          if(next1==0){
   //             nleft1.classList.remove('anniu');
   //          }else{
   //            nleft1.classList.add('anniu');
   //          }
            
   //        }
   //         nright1.onmouseover=function(){
   //          if(next1==clis1.lengtn-1){
   //             nright1.classList.remove('anniu');
   //          }else{
   //            nright1.classList.add('anniu');
   //          }
            
   //        }
   //        // 左按钮
   //        nleft1.onclick=function(){
   //            if(next1>0){
   //              nright1.classList.add('anniu')
   //               next1--;
   //                clis1[next1].style.left=`${nwidth}px`;
   //               animate(clis1[now1],{left:(-nwidth)})
   //                animate(clis1[next1],{left:0});
   //                yuans1[now1].classList.remove('yfirst')
   //                yuans1[next1].classList.add('yfirst');
   //                now1=next1;

   //            }
   //            if(next1==0){
   //               nleft1.classList.remove('anniu');

   //            }
               
   //        }
   //         // 右按钮
   //          nright1.onclick=function(){
   //           if(next1<clis1.length-1){
   //            nleft1.classList.add('anniu')
   //            next1++;
   //            clis1[next1].style.left=`${nwidth}px`;
   //            animate(clis1[now1],{left:(-nwidth)})
   //             animate(clis1[next1],{left:0});
   //             yuans1[now1].classList.remove('yfirst')
   //             yuans1[next1].classList.add('yfirst');
   //             now1=next1;
   //           }
   //           if(next1==clis1.length-1){
   //               nright1.classList.remove('anniu')
   //           }

   //        }
          
   //      // 第三个

   //        let clis2=contents[2].getElementsByClassName('neirong-bsson');
   //        // console.log(clis1);
   //        let yuans2=ybig[2].getElementsByClassName('neirong-yson');
   //        // console.log(yuans1);
   //        let now2=0;
   //        let next2=0;
   //        for(let j2=0;j2<yuans2.length;j2++){
                 
   //               yuans2[j2].onclick=function(){
                   
   //                 clis2[j2].style.left=`${nwidth}px`
   //                 animate(clis2[now2],{left:(-nwidth)})
   //                 animate(clis2[j2],{left:0});
   //                 yuans2[now2].classList.remove('yfirst')
   //                 // console.log(now2);

   //                 yuans2[j2].classList.add('yfirst');
   //                  now2=next2=j2;
   //               }
   //        }

   //            // 左右按钮
   //        let nleft2=document.getElementsByClassName('neirong-lbutton')[2];
   //        let nright2=document.getElementsByClassName('neirong-rbutton')[2];
   //        nleft2.onmouseover=function(){
   //          if(next2==0){
   //             nleft2.classList.remove('anniu');
   //          }else{
   //            nleft2.classList.add('anniu');
   //          }
            
   //        }
   //         nright2.onmouseover=function(){
   //          if(next2==clis2.lengtn-1){
   //             nright2.classList.remove('anniu');
   //          }else{
   //            nright2.classList.add('anniu');
   //          }
            
   //        }
   //        // 左按钮
   //        nleft2.onclick=function(){
   //            if(next2>0){
   //              nright2.classList.add('anniu')
   //               next2--;
   //                clis2[next2].style.left=`${nwidth}px`;
   //               animate(clis2[now2],{left:(-nwidth)})
   //                animate(clis2[next2],{left:0});
   //                yuans2[now2].classList.remove('yfirst')
   //                yuans2[next2].classList.add('yfirst');
   //                now2=next2;

   //            }
   //           if(next2==0){
   //               nleft2.classList.remove('anniu')
   //           }  
   //        }
   //         // 右按钮
   //          nright2.onclick=function(){
   //           if(next2<clis2.length-1){
   //            nleft2.classList.add('anniu')
   //            next2++;
   //            clis2[next2].style.left=`${nwidth}px`;
   //            animate(clis2[now2],{left:(-nwidth)})
   //             animate(clis2[next2],{left:0});
   //             yuans2[now2].classList.remove('yfirst')
   //             yuans2[next2].classList.add('yfirst');
   //             now2=next2;
   //           }
   //            if(next2==clis2.length-1){
   //                  nright2.classList.remove('anniu')
   //            }
   //        }
          

   //      // 第四个

   //        let clis3=contents[3].getElementsByClassName('neirong-bsson');
   //        // console.log(clis1);
   //        let yuans3=ybig[3].getElementsByClassName('neirong-yson');
   //        // console.log(yuans1);
   //        let now3=0;
   //        let next3=0;
   //        for(let j3=0;j3<yuans3.length;j3++){
                 
   //               yuans3[j3].onclick=function(){
                   
   //                 clis3[j3].style.left=`${nwidth}px`
   //                 animate(clis3[now3],{left:(-nwidth)})
   //                 animate(clis3[j3],{left:0});
   //                 yuans3[now3].classList.remove('yfirst')
   //                 // console.log(now2);

   //                 yuans3[j3].classList.add('yfirst');
   //                  now3=next3=j3;
   //               }
   //        }

   //            // 左右按钮
   //        let nleft3=document.getElementsByClassName('neirong-lbutton')[3];
   //        let nright3=document.getElementsByClassName('neirong-rbutton')[3];
   //        // nright3.classList.add('anniu')
   //        nleft3.onmouseover=function(){
   //          if(next3==0){
   //             nleft3.classList.remove('anniu');
   //          }else{
   //            nleft3.classList.add('anniu');
   //          }
            
   //        }
   //        nright3.onmouseover=function(){
   //          if(next3==clis3.lengtn-1){
   //             nright3.classList.remove('anniu');
   //          }else{
   //            nright3.classList.add('anniu');
   //          }
            
   //        }
   //        // 左按钮
   //        nleft3.onclick=function(){
   //            if(next3>0){
   //              nright3.classList.add('anniu')
   //               next3--;
   //                clis3[next3].style.left=`${nwidth}px`;
   //               animate(clis3[now3],{left:(-nwidth)})
   //                animate(clis3[next3],{left:0});
   //                yuans3[now3].classList.remove('yfirst')
   //                yuans3[next3].classList.add('yfirst');
   //                now3=next3;

   //            }
   //           if(next3==0){
   //               nleft3.classList.remove('anniu')
   //           }  
   //        }
   //         // 右按钮
   //          nright3.onclick=function(){
   //           if(next3<clis3.length-1){
   //            nleft3.classList.add('anniu')
   //            next3++;
   //            clis3[next3].style.left=`${nwidth}px`;
   //            animate(clis3[now3],{left:(-nwidth)})
   //             animate(clis3[next3],{left:0});
   //             yuans3[now3].classList.remove('yfirst')
   //             yuans3[next3].classList.add('yfirst');
   //             now3=next3;
   //           }
   //            if(next3==clis3.length-1){
   //                  nright3.classList.remove('anniu')
   //            }
   //        }
   // 使用函数   内容；
   content(0);
   content(1);
   content(2);
   content(3);

      

   // 家电开始
   let jiadian=document.querySelectorAll('.jiadian-tright');
     let jiaimg=document.querySelectorAll('.jiadian-nr');
     // console.log(jiaimg);
     // console.log(jiadian);
     jiadian.forEach(function(element,index){
           let now=0;  
           // let next=0;
           let jiaa=element.querySelectorAll('a');
           let jiaaimg=jiaimg[index].querySelectorAll('.nr-right');
           // console.log(jiaaimg)
           // 初始状态
            jiaa[now].style.color='#fb9300';
              jiaa[now].style.borderBottom= '1px solid #fb9300';
              jiaa[now].style.paddingBottom= '5px';
              jiaaimg[now].classList.add('nr-block');
           // console.dir(jiaa)
           for(let ji=0;ji<jiaa.length;ji++){
                  jiaa[ji].onmousemove=function(){
                      jiaa[now].style.color='#424242';
                      jiaa[now].style.borderBottom= 'none';
                      jiaa[now].style.paddingBottom= '0';
                      jiaaimg[now].classList.remove('nr-block');
                      jiaa[ji].style.color='#fb9300';
                      jiaa[ji].style.borderBottom= '1px solid #fb9300';
                      jiaa[ji].style.paddingBottom= '5px';
                      jiaaimg[ji].classList.add('nr-block');
                      now=ji;
                  }
                
           }
     })

          
           
}