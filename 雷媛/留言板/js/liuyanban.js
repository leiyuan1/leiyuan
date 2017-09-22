window.onload=function(){
	
//	获取元素
   let shuxie=document.querySelector('textarea');
   console.log(shuxie)
// let str=shuxie.value.length;
// console.log(str)
   let max=shuxie.maxLength;
   console.log(max);
   let rest=document.querySelector('.rest');
   
//剩余文字个数
let sy=max
rest.innerText=`剩余字数:${sy}`

// console.log(sy);
  shuxie.onkeyup=function(){
       sy=max-this.value.length;
  	
  	  rest.innerText=`剩余字数:${sy}`
  	  console.log(sy)
  }
   let liuyan=document.querySelector('.item');
   console.log(liuyan)

// 获取昵称
   let nickname=document.querySelector('.nickname');
//  执行函数   键盘事件
// shuxie.addEventListener('keydown',fn,false);
//   function fn(e){
//   	
// 	   if(e.shiftKey && e.keyCode==13){
// 
//// 	    	      // 添加的文本
//				   let lis=document.createElement('li');
//				   console.log(lis)
//				   lis.innerHTML=`
//				    <img src="img/t01d3129e14b9123327.jpg" alt="" />
//					<div class="text">
//						<h1>昵称:${nickname.value}</h1>
//						<div class="content">
//							${this.value}
//						</div>
//					</div>
//				                 `
//				   lis.upperChildTO(liuyan)
//
//				   this.value='';
//                 nickname.value='';
//                 sy=max
//                 rest.innerText=`剩余字数:${sy}`
//         }
// 	   
//   }
//   
//   
////   提交按钮
////获取按钮
//let button=document.querySelector('.tijiao');
//button.onclick=function(){
//	    // 添加的文本
//				   let lis=document.createElement('li');
//				   console.log(lis)
//				   lis.innerHTML=`
//				    <img src="img/t01d3129e14b9123327.jpg" alt="" />
//					<div class="text">
//						<h1>昵称:${nickname.value}</h1>
//						<div class="content">
//							${shuxie.value}
//						</div>
//					</div>
//				                 `
//				   lis.upperChildTO(liuyan)
//
//				   shuxie.value='';
//                 nickname.value='';
//                 sy=max
//                 rest.innerText=`剩余字数:${sy}`
//}
//
  let liss=document.querySelectorAll('.item>li');
//console.log(lis);
    liss.forEach(function(element,index){
    	element.onclick=function(){
    		alert(1)
    	}
    })
  ////获取按钮
let button=document.querySelector('.tijiao');

 
   	   
  button.onclick=shuxie.onkeydown=function(e){
     	
   	           if(e.type=='click'){
   	           	   fn.call(shuxie)
//                    alert(1)
   	           	
   	           }else if(e.type=='keydown'){
   	           	    if(e.shiftKey && e.keyCode==13){
   	           	    	 fn.call(shuxie)
//                        alert(2)
   	           	    }
   	           	
   	           }
   	
   	        }   
          
           function fn(e){
   	    	      // 添加的文本
				   let lis=document.createElement('li');
				   console.log(lis)
				   lis.innerHTML=`
				    <img src="img/t01d3129e14b9123327.jpg" alt="" />
					<div class="text">
						<h1>昵称:${nickname.value}</h1>
						<div class="content">
							${this.value}
						</div>
					</div>
				                 `
				   lis.upperChildTO(liuyan)

				   this.value='';
                   nickname.value='';
                   sy=max
                   rest.innerText=`剩余字数:${sy}`
           }
	
}
