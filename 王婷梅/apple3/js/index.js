/*
* @Author: wz
* @Date:   2017-07-24 22:17:21
* @Last Modified by:   wz
* @Last Modified time: 2017-08-27 18:29:43
*/

window.onload=function(){
	let banner=document.querySelector('.banner')
    let dd=document.querySelectorAll('.banner>.dd>.dd1')
    let jiantou1=document.querySelector('.banner>.jtx1>.jiantou1')
    let jiantou2=document.querySelector('.banner>.jtx2>.jiantou2')
 

    let imgs=document.querySelectorAll('.bann')
	// let imgs=document.querySelectorAll('.banner>.bann>img')
    let now=0,next=0;
    let widths=banner.offsetWidth;
	let t=setInterval(fn1,2000)

	let min=banner.offsetWidth;
		if(min<=1092){
			clearInterval(t)
		}else{
			t=setInterval(fn1,2000)
		}
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
        dd[now].classList.remove('dd2')
        animate(imgs[next],{left:0},function(){
            flag=true
        })
         dd[next].classList.add('dd2')
        now=next;
       } 
	}

    banner.onmouseenter=function(){
        clearInterval(t)
    }

    banner.onmouseleave=function(){
       t=setInterval(fn1,2000)
    }

    jiantou1.onclick=function(){
        fn1()
    }

     jiantou2.onclick=function(){
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
        dd[now].classList.remove('dd2')
        animate(imgs[next],{left:0},function(){
            flag=true
        })
         dd[next].classList.add('dd2')
        now=next;
      }
    }

		for(let i=0;i<imgs.length;i++){
			dd[i].onclick=function(){
               if(now==i){return}
				if(i==imgs.length){
					i=0
				}

				if(now<i){

			imgs[i].style.left=widths+'px';
             animate(imgs[now],{left:-widths})
            dd[now].classList.remove('dd2')
				
				animate(imgs[i],{left:0})
             dd[i].classList.add('dd2')

             }

             if(now>i){
             	 imgs[i].style.left=-widths+'px';
             	animate(imgs[now],{left:widths})
            dd[now].classList.remove('dd2')
				
				animate(imgs[i],{left:0})
             dd[i].classList.add('dd2')

             }

             	now=next=i
			}

		
		}
   



    let dy=document.querySelector('.dengyu');
    let xl=document.querySelector('.xiala');
    let dy1=document.querySelector('.dy1')
    let dy2=document.querySelector('.dy2')
    let fl=true;
    dy.onclick=function(){
    	if(fl){
    	fl=false;
    	dy1.style.cssText=`
            transform: rotate(45deg) translateY(6px);
	        transition: all 0.3s;

    	`

    	dy2.style.cssText=`
           transform: rotate(135deg) translateY(6px);
	       transition: all 0.3s;
    	`


    	   
    	xl.style.height=550+'px';

      }else{
      	fl=true;
      	dy1.style.cssText=`
         
    	`
    	dy2.style.cssText=`
         
    	`
    	xl.style.height=0;

      }
    	


    }




      let lb1=document.querySelectorAll('.lb1')
      console.log(lb1.length)
      for(let i=0;i<lb1.length;i++){
        if(i==3){
        	let ul2=lb1[2].getElementsByTagName('ul')
        	for(let i=0;i<ul2.length;i++){
        		let biaoti2=ul2[i].getElementsByClassName('biaoti')[0]
        		let jiahao2=biaoti2.getElementsByClassName('jiahao')[0]

        		let f11=true
        		 biaoti2.onclick=function(){

            if(f11){
            	f11=false;

            	jiahao2.style.cssText=`
                transform: translate(3px, 3px) rotate(45deg);
	          transition: all 0.3s;
            	`

            let aa2=ul2[i].getElementsByTagName('a')

      		for(let i=0;i<aa2.length;i++){
      			aa2[i].style.display='block'
      			
             }

      		}else{
      			f11=true;

      			jiahao2.style.cssText=`
               
            	`
               
              let aa2=ul2[i].getElementsByTagName('a')

      		   for(let i=0;i<aa2.length;i++){
      			aa2[i].style.display='none'
      			
             }

      		}
      		
      	}


        	}
        }



         if(i==4){
        	let ul3=lb1[3].getElementsByTagName('ul')
        	for(let i=0;i<ul3.length;i++){
        		let biaoti3=ul3[i].getElementsByClassName('biaoti')[0]
        		let jiahao3=biaoti3.getElementsByClassName('jiahao')[0]

        		let f13=true
        		 biaoti3.onclick=function(){

            if(f13){
            	f13=false;

            	jiahao3.style.cssText=`
                transform: translate(3px, 3px) rotate(45deg);
	          transition: all 0.3s;
            	`

            let aa3=ul3[i].getElementsByTagName('a')

      		for(let i=0;i<aa3.length;i++){
      			aa3[i].style.display='block'
      			
             }

      		}else{
      			f13=true;

      			jiahao3.style.cssText=`
               
            	`
               
              let aa3=ul3[i].getElementsByTagName('a')

      		   for(let i=0;i<aa3.length;i++){
      			aa3[i].style.display='none'
      			
             }

      		}
      		
      	}


        	}
        }

      	let biaoti=lb1[i].getElementsByClassName('biaoti')[0]
      	let jiahao=biaoti.getElementsByClassName('jiahao')[0]
        let f1=true;
      	   biaoti.onclick=function(){

            if(f1){
            	f1=false;

            	jiahao.style.cssText=`
                transform: translate(3px, 3px) rotate(45deg);
	          transition: all 0.3s;
            	`

            let aa=lb1[i].getElementsByTagName('a')

      		for(let i=0;i<aa.length;i++){
      			aa[i].style.display='block'
      			
             }

      		}else{
      			f1=true;

      			jiahao.style.cssText=`
               
            	`
               
              let aa=lb1[i].getElementsByTagName('a')

      		   for(let i=0;i<aa.length;i++){
      			aa[i].style.display='none'
      			
             }

      		}

            

      	
      		
      	}
      }




}