/*
* @Author: lenovo
* @Date:   2017-08-28 19:17:48
* @Last Modified by:   lenovo
* @Last Modified time: 2017-08-30 22:55:17
*/
window.onload=function(){
	let right=document.querySelector('.right');
	let cw=right.offsetWidth;
	let ch=right.offsetHeight;
	// console.log(cw);
	// console.log(ch);
	let canvas=document.querySelector('canvas');
	// 获取mask
	let mask=document.querySelector('.mask')
	// console.log(mask)
	let canva=new palette(canvas,mask);
	// console.log(canvas)
	let Control=document.querySelectorAll('.left>ul>li>.sell');
	// console.log(Control)
	let now=0;

	// 橡皮擦
let rubObj=document.querySelector('.rubber');
// console.log(rubObj)

// 获取橡皮擦
let rubber=document.querySelector('#rubber')
rubber.onclick=function(){
	// rubObj.style.display='block'
	
	canva.rubber(rubObj);
}
	// 获取保存
	let save=document.querySelector('.icon-tubiaozhizuomoban') ;
	save.onclick=function(){
		save.href=canvas.toDataURL('image/png');
		save.download='canva.png'
	}             
    // 获取反像
    let fan=document.querySelector('.fan');
    fan.onclick=function(){
    	canva.fan();
    	
    }

    // 获取裁剪
    // 获取裁剪框
    let taiObj=document.querySelector('.taikuang')
    let tailor=document.querySelector('#tailor');
    // console.log(tailor)
    tailor.onclick=function(){
    	  canva.tailor(taiObj);
    }




	Control.forEach(function(value,index){
		// 获取属性有value的变量
          value.onclick=function(){
                   
	               // Control[now].style.border="2px solid #333";
          	  	  //  // value.style.active="true";
	               // value.style.border="2px solid #ff6700";
	              let actives=document.querySelector('.left>ul>li>a[active=true]')
	              
	              // console.log(actives)
	              // 进行设置
	              actives.setAttribute('active',false);
	              // console.log(value)
	              value.setAttribute('active',true);
	               if(value.id == 'qianbi'){
                         canva.qianbi();

	               }else if(value.id == 'Text'){
                          canva.Text();
	               }else if(value.id=='poly'){
                            canva.polyNum=prompt('请输入角的个数',5)
	               	       canva.overall(value.id)
	               }else if(value.id=='polygon'){
	               	    canva.polygonNum=prompt('请输入边的个数',5)
	               	       canva.overall(value.id) 
	               }else{
	               	   canva.overall(value.id)
	               }
	               
	               
	               now=index;
          	  }
          	   
          
	})




	// 获取撤销
	let repeal=document.querySelector('.top>ul>li>.icon-cancel')
	repeal.onclick=function(){
		canva.repeal();
	}
	// ctrl+z
	 document.onkeydown=function(e){
   	   if(e.ctrlKey  &&  e.keyCode==90){
   	   	     canva.repeal();
   	   }
     }
 

       // 获取填充和描边
       let style=document.querySelectorAll('.select-son1')
       // console.log(style)
       style.forEach(function(element){
              element.onclick=function(){
              	   canva.style=element.id;
              	   // console.log(canva.style)
              }
       })



       // 获取填充颜色和描边颜色
       let color=document.querySelectorAll('.select-son>input')
       // console.log(color)
       color.forEach(function(element,index){
          
                 element.onchange=function(){
                    if(index==0){

                 	    canva.fillStyle=this.value;
                 	    console.log(1)
                         console.log(canva.fillStyle)
                 }else if(index==1){
                        canva.strokeStyle=this.value;
                          console.log(canva.strokeStyle)
             	   }
             }
             
       })
}