window.onload=function(){
//	导航头部开始
     let hlis=document.querySelectorAll('.nav>li')
//   console.log(hlis)
     let dxians=document.querySelectorAll('.dxian')
//   console.log(dxians)
     hlis.forEach((value,index)=>{
//   	console.log(value)
     	  let dxwidth=value.offsetWidth;
//   	  console.log(dxwidth);
     	  value.onmouseover=function(){
     	  	    dxians[index].style.width=`${0.7*dxwidth}px`
     	  }
     })
     
      hlis.forEach((value,index)=>{
     	  value.onmouseout=function(){
     	  	    dxians[index].style.width=0+'px'
     	  }
     })
      
//    轮播图片
//   获取轮播:
     let banner=document.querySelector('.banner');
//   console.log(banner)
     let bwidth=banner.offsetWidth;
//   console.log(bwidth)
     let blis=document.querySelectorAll('.banner>li');
  // console.log(blis);
     let zhishi=document.querySelector('.zhishi');
     let zlis=document.querySelectorAll('.zhishi>li>.back');
  // console.log(zlis)
     let t=setInterval(fn,5000);

     let now=0;
     let next=0;
     zlis[now].style.width=60+'px';
     function fn(){
     	next++;
          if(next==blis.length){
              next=0;
          }
     	for(let i=0;i<blis.length;i++){
     		blis[next].style.left=`${bwidth}px`;
               animate(blis[now],{left:-bwidth});
                zlis[now].style.transition='none';
               zlis[now].style.width='0';
               zlis[next].style.transition='all ease 5s';
               zlis[next].style.width=60+'px';
               animate(blis[next],{left:0});
               now=next;

     		
     	}
     }


   
     
}
