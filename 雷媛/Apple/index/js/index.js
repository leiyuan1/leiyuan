/*
* @Author: lenovo
* @Date:   2017-08-26 10:07:12
* @Last Modified by:   lenovo
* @Last Modified time: 2017-08-28 08:39:46
*/
window.onload=function(){

		// 头部开始
	let dh=document.querySelector('.j');
	let sblock=document.querySelector('.small-block');
	let slis=document.querySelectorAll('.small-block>li');
	let stop=document.querySelector('.jtop')
	let sbottom=document.querySelector('.jbottom')
	let sHeight=window.innerHeight;
	let sWidth=document.body.clientWidth;
	let flag1=true;
	dh.onclick=function(){
		if(flag1){
			  stop.style.transform='translateY(5px) rotate(45deg)'
			  sbottom.style.transform='translateY(-5px) rotate(-45deg)'
			  // sblock.style.width=sWidth+'px';
              sblock.style.height=sHeight+'px';
			  slis.forEach(element=>{
			  element.style.display='block'
		       })
			  // document.body.style.cssText=`height:${sHeight}px;overflow:hidden;`;
			
              
		}else{
			 sblock.style.height='0';
			  slis.forEach(element=>{
			  element.style.display='none'
		       })
			  stop.style.transform='none'
			  sbottom.style.transform='none'
		}
		flag1=!flag1;
	}
	// 轮播开始
	// 获取大盒子
	let bbig=document.querySelector('.banner-big');
	// console.log(bbig)
	let bwidth=document.body.clientWidth;
	// 获取li
	let blis=document.querySelectorAll('.banner-big>li');
	// console.log(blis)
	// 获取线条
	let  bxian=document.querySelector('.xian')
	let bxlis=document.querySelectorAll('.xian>li');
	// console.log(bxlis)
    let now=0;
    let next=0;
    let t=setInterval(fn, 3000);
    function fn(){
    	next++;
    	if(next==blis.length){
              next=0;
              clearInterval(t)
    	}
    	blis[next].style.left=`${bwidth}px`
        animate(blis[now],{left:-bwidth});
        bxlis[now].style.background='#272727'
        animate(blis[next],{left:0})
        bxlis[next].style.background='#808080'
        now=next;
    	
    }
    // bbig.onmouseenter=function(){
    // 	clearInterval(t)
    // }
    // 点击下方按钮
    for(let i=0;i<bxlis.length;i++){
           bxlis[i].onclick=function(){
           	   clearInterval(t)
               if(i<now){
                   	blis[i].style.left=`${-bwidth}px`
			        animate(blis[now],{left:bwidth});
			        bxlis[now].style.background='#272727'
			        animate(blis[i],{left:0})
			        bxlis[i].style.background='#808080'
			        now=next=i;

               }else if(i>now){
                    blis[i].style.left=`${bwidth}px`
			        animate(blis[now],{left:-bwidth});
			        bxlis[now].style.background='#272727'
			        animate(blis[i],{left:0})
			        bxlis[i].style.background='#808080'
			        now=next=i;
               }else if(i=now){
                     now=next=i;
                     return;
               }
          
             
           }




    // 点击左右按钮
    // 获取左按钮
    let bleft=document.querySelector('.icon-neiyexiangzuofanhuianniu01')
    let bright=document.querySelector('.icon-neiyexiangzuofanhuianniu01-copy')
    bleft.onclick=fn1;
    function fn1(){
    	next--;
    	if(next==-1){
              next=blis.length-1;
              
    	}
    	blis[next].style.left=`${-bwidth}px`
        animate(blis[now],{left:bwidth});
        bxlis[now].style.background='#272727'
        animate(blis[next],{left:0})
        bxlis[next].style.background='#808080'
        now=next;
    }
     bright.onclick=fn;
	}


    // 分类点击开始
    let biaoti=document.querySelectorAll('.biaoti')
	    // console.log(biaoti)
	    let ful=document.querySelectorAll('.la')
	    // console.log(ful)
	   
	    let jia=document.querySelectorAll('.jia');
	    // console.log(jia)
	     let Harr=[];


         // 在外面设置
   let fwidth=window.innerWidth;
	    // console.log(fwidth)
	    // 获取a链接的高度
	  
	   if(fwidth>768){
           ful.forEach(element=>{
	   	   let fheight=element.offsetHeight
	   	    // console.log(fheight)
	   	    Harr.push(fheight)
	   	    return Harr
	      })
	   	    for(let i=0;i<biaoti.length;i++){
	   	    	ful[i].style.height=`${Harr[i]}px`
	   	    	ful[i].style.transition='none'
				  let fas=ful[i].getElementsByTagName('a');
				  for(let j=0;j<fas.length;j++){
                      fas[j].style.display='block'
                  }
	   	    }
           
	   }
	   // console.log(Harr)
	    
	   
	    if(fwidth<768){
            for(let i=0;i<biaoti.length;i++){
            	let flag=true;
            	for(let i=0;i<biaoti.length;i++){
	   	    	ful[i].style.height=`0px`
				  let fas=ful[i].getElementsByTagName('a');
				  for(let j=0;j<fas.length;j++){
                      fas[j].style.display='none'
                  }
	   	       }
                biaoti[i].onclick=function(){
                	
                	 if(flag){
                	 	// console.log(flag);
                	 	ful[i].style.transition='all ease 1s'
                         ful[i].style.height=`${Harr[i]}px`
	                	// console.log(Harr[i])
	                	 // 获取ul下的a;
						  let fas=ful[i].getElementsByTagName('a');
						  // console.log(fas)
						  for(let j=0;j<fas.length;j++){
	                          fas[j].style.display='block'
	                          // console.log(fas[j])
	                          
                	      }
                	      jia[i].style.transform='rotate(45deg)';
					  }else{
					  	// console.log(flag)
                         ful[i].style.height=`0px`;
                         let fas=ful[i].getElementsByTagName('a');
						  for(let j=0;j<fas.length;j++){
	                          fas[j].style.display='none'
                	      }
					      jia[i].style.transform='none';
                       }
                   flag=!flag     
                }
	     }
      }


    window.onresize=function(){
         
	    let fwidth=window.innerWidth;
	    // console.log(fwidth)
	    // 获取a链接的高度
	  
	   if(fwidth>768){
           ful.forEach(element=>{
	   	   let fheight=element.offsetHeight
	   	    // console.log(fheight)
	   	    Harr.push(fheight)
	   	    return Harr
	      })
	   	   for(let i=0;i<biaoti.length;i++){
	   	    	ful[i].style.height=`${Harr[i]}px`
	   	    	ful[i].style.transition='none'
				  let fas=ful[i].getElementsByTagName('a');
				  for(let j=0;j<fas.length;j++){
                      fas[j].style.display='block'
                  }
	   	    }  
           
	   }
	   // console.log(Harr)
	    
	   
	    if(fwidth<768){
            for(let i=0;i<biaoti.length;i++){
            	let flag=true;
            	for(let i=0;i<biaoti.length;i++){
	   	    	ful[i].style.height=`0px`
				  let fas=ful[i].getElementsByTagName('a');
				  for(let j=0;j<fas.length;j++){
                      fas[j].style.display='none'
                  }
	   	       }  
                biaoti[i].onclick=function(){
                	
                	 if(flag){
                	 	// console.log(flag);
                	 	ful[i].style.transition='all ease 1s'
                         ful[i].style.height=`${Harr[i]}px`
	                	// console.log(Harr[i])
	                	
	                	 // 获取ul下的a;
						  let fas=ful[i].getElementsByTagName('a');
						  // console.log(fas)
						  for(let j=0;j<fas.length;j++){
	                          fas[j].style.display='block'
	                          // console.log(fas[j])
	                          
                	      }
                	      jia[i].style.transform='rotate(45deg)';
					  }else{
					  	// console.log(flag)
                         ful[i].style.height=`0px`;
                         let fas=ful[i].getElementsByTagName('a');
						  for(let j=0;j<fas.length;j++){
	                          fas[j].style.display='none'
                	      }
					      jia[i].style.transform='none';
                       }
                   flag=!flag     
                }
	     }
     }

   }

  




}