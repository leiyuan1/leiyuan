/*
* @Author: wz
* @Date:   2017-08-30 23:16:23
* @Last Modified by:   wz
* @Last Modified time: 2017-09-02 20:14:37
*/


window.onload=function(){

	let gecebox=document.querySelector('.geci-box')
	let ul=document.querySelector('.geci-box .ul2')
	let ul1=document.querySelector('.geci-box .ul1')
	console.log(ul)
	let kssj=document.querySelector('.kssj')
	let jssj=document.querySelector('.jssj')
	let jdt=document.querySelector('.jdt')
	let kongjian=document.querySelector('.kongjian')
	let ss=document.querySelector('.kj1')
	let xs=document.querySelector('.kj3')
	let kj=document.querySelector('.kj2')
	let audio=document.querySelector('audio')
	let pro=document.querySelector('.jindu')
    let yinliang=document.querySelector('.yinliang')
	let yl1=document.querySelector('.yl1')
	let yl2=document.querySelector('.yl2')
	let yl3=document.querySelector('.yl3')
    let ylbtn=document.querySelector(".icon-yinliang-copy")
    let img=document.querySelector('.left>img')
    let bffs=document.querySelector('.bffs')
    let bf1=bffs.getElementsByClassName('bf1')


let now=0;

   rand(database[now])


	function rand(aa){
	for(let i=0;i<aa.lyrics.length;i++){      
		ul.innerHTML+=`<li>${aa.lyrics[i].lyric}</li>`

	}	
	     img.src=aa.photo
	     audio.src=aa.src
   	     audio.play() 
   	     ul1.innerHTML=aa.songs

      
}



		
// 播放暂停

 function bofang(){


    let flag=true
         kj.onclick=function(){
         	if(flag==true){
         		flag=false;
	       	   audio.pause()
	           kj.classList.remove('icon-zanting');  
	       	   kj.classList.add('icon-cplay1');


	       }else if(flag==false){
	       	   
         		audio.play() 
         		flag=true;
	           kj.classList.remove('icon-cplay1');
	           kj.classList.add('icon-zanting');
	       }
           

         }

      } 


// 循环播放

  bf1[0].onclick=function(){
  	 	if(now==5){
	   		now=0
	   	}
	   	now++
	   	rand(database[now])  
	    bofang()
	    bf1[1].classList.remove('color')
	    bf1[2].classList.remove('color')
	    bf1[0].classList.add('color')
  }

// 单曲循环
bf1[1].onclick=function(){
  	 	
	   	now=now
	   	rand(database[now])  
	    bofang()
	    bf1[0].classList.remove('color')
	    bf1[2].classList.remove('color')
	    bf1[1].classList.add('color')
  }


// 随机播放
bf1[2].onclick=function(){
  	 	
	   	now=Math.floor(Math.random()*6) 
	   	rand(database[now])  
	    bofang()
	    bf1[0].classList.remove('color')
	    bf1[1].classList.remove('color')
	    bf1[2].classList.add('color')
  }






// 上一首
   ss.onclick=function(){
	   	if(now==0){
	   		now=5
	   	}
	   	now--
	    rand(database[now]) 	   
	    bofang()

   }

// 下一首
   xs.onclick=function(){
	   	if(now==5){
	   		now=0
	   	}
	   	now++
	   	rand(database[now])  
	    bofang()
		   
   }






// 进度
   audio.ontimeupdate=function(){

   	   let m=Math.floor(audio.currentTime/60)>=10?Math.floor(audio.currentTime/60):`0${Math.floor(audio.currentTime/60)}`
   	   let s=Math.floor(audio.currentTime%60)>=10?Math.floor(audio.currentTime%60):`0${Math.floor(audio.currentTime%60)}`
   	   kssj.innerHTML=`${m}:${s}`

         let m1=Math.floor(audio.duration/60)>=10?Math.floor(audio.duration/60):`0${Math.floor(audio.duration/60)}`
   	   let s1=Math.floor(audio.duration%60)>=10?Math.floor(audio.duration%60):`0${Math.floor(audio.duration%60)}`

         jssj.innerHTML=`${m1}:${s1}`

         pro.style.width=(audio.currentTime/audio.duration)*100+'%';

         if(kssj.innerHTML==jssj.innerHTML){
         	if(now==5){
	   		now=0
	   	}
	   	now++
	   	rand(database[now])
	   	audio.src=database[now].src
	   	img.src=database[now].photo
	   	ul1.innerHTML=database[now].songs
	   	audio.play() 
         		
        
         }



// 歌词变化
	for(let i=0;i<database[now].lyrics.length;i++){

			if(kssj.innerText==database[now].lyrics[i].time){
				ul.innerHTML='';
				let a=i;
				if(a<=6){
					a=0;
				}else{
					a-=6;
				}
				for(let j=a;j<database[now].lyrics.length;j++){
					ul.innerHTML+=`<li class='lists${j}'>${database[now].lyrics[j].lyric}</li>`;		
				}
				 let li=document.querySelector(`.lists${i}`);
				    li.style.color='#ff6700';
			}

	 }


   }   


// 音量

let left1;

yinliang.onmousedown=function(e){
    let ox=e.clientX;
      left1=yl2.offsetLeft;
   yinliang.onmousemove=function(e){
	   	let cx=e.clientX;
          
	   	let lefts=cx-ox+left1;
	   	if(lefts<=-5){
	       lefts=-5
	   	}
	   	if(lefts>=100){
	   		lefts=100
	   	}
	   	console.log(lefts)
	   	yl2.style.left=lefts+5+'px'
	   	yl3.style.width=lefts+5+'px'
	   	audio.volume=(lefts+5)/105;
	   	
	   	yinliang.onmouseup=function(){
	   	yinliang.onmousemove=null;
	   	yinliang.onmouseup=null;
   }
	   	

   }

 
}


ylbtn.onclick=function(){

}








}















