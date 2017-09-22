/*
* @Author: wz
* @Date:   2017-08-28 18:59:13
* @Last Modified by:   wz
* @Last Modified time: 2017-08-30 23:12:18
*/

window.onload=function(){
	let canvas=document.querySelector('canvas');
	let mask=document.querySelector('.mask');
    let ca=new point(canvas,mask)


    let center=document.querySelector('.center');
    let xinjian=document.querySelector('.xinjian')
    xinjian.onclick=function(){
       let canvas1=document.createElement('canvas')
       center.push(canvas1)
    }

// 文本

 let wenzi=document.querySelector('.wenzi');
 wenzi.onclick=function(){
 	ca.text()
 }

// 加粗

 let jiacu=document.querySelector('.jiacu');
 jiacu.onclick=function(){
 	ca.boo='bold';
 }



// 保存
   // let baocun=document.querySelector('.baocun')
   let save=document.querySelector('a')
   // console.log(save)
   save.onclick=function(){
   	
    save.href=canvas.toDataURL('image/png');

    save.download='a.png'

   }

// 反相
   let fanxiang=document.querySelector('.fanxiang')
   fanxiang.onclick=function(){
   	ca.fanxiang()

   }

 //裁切
  let caijian=document.querySelector('.caijian') 
  let caiqie=document.querySelector('.caiqie') 

  caijian.onclick=function(){
  	ca.clip(caiqie)
  }

      

    

// 撤销
    let cxx=document.querySelector('.chexiao')

     ca.chexiao=cxx

       



  //橡皮擦   
    let xiangpi=document.querySelector('.xiangpi')
    xiangpi.onclick=function(){
    	xiangpi.style.background='#ff6700'
	    let esr1=document.querySelector('.esr')
	    console.log(esr1)

      ca.esr(esr1)
    }




// 点击效果
 let label=document.querySelectorAll('.bb');

   label.forEach(elements=>{
  // let num=0;
   
   	  	// let xian=document.querySelector('.huaxian')
	   elements.onclick=function(){
        xiangpi.style.background=''
	    for(let i=0;i<label.length;i++){

	    	label[i].style.background=""
	    }
	   
	   	this.style.background="#ff6700"
	   	if(elements==label[1]){
		    ca.xian()

      
	   }else if(elements==label[3] || elements==label[4] ){
	 	   		
	   		ca.bianshu=prompt('请输入您的边数：',5)
	   	  	ca.draw(this.id)
	   	 
	   }else{
	   	
	   	  	ca.draw(this.id)
	   }
       
	  }
	   	  
   })


 

   // 填充描边的颜色
    let tc=document.querySelector('.tccolor');
    let mb=document.querySelector('.mbcolor');

    tc.onchange=function(){
    	ca.fillcolor=this.value;
    }

    mb.onchange=function(){
    	ca.strokecolor=this.value;
    	console.log(ca.strokecolor)
    }



// 填充描边切换
      let stroke=document.querySelector('#stroke')

    let fill=document.querySelector('#fill')
   stroke.style.background='#ff6700'
    stroke.onclick=function(){
    	this.style.background='#ff6700'
    	fill.style.background=''
    	ca.style='stroke'
    }

    fill.onclick=function(){
    	this.style.background='#ff6700'
    	stroke.style.background=''
    	ca.style='fill'
    }

  







}

	