/*
* @Author: lenovo
* @Date:   2017-08-30 23:01:15
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-03 01:47:20
*/
window.onload=function(){
	// 获取audio
	let audio=document.querySelector('audio')
	// console.log(audio)
	// 获取右边
	let rtop=document.querySelector('.right-top');
	// console.log(right)
	// 获取歌词内容
	let Slyrics=document.querySelector('.lyrics');
	// 获取图片
	let img=document.querySelector('.left-top>img')
	// 获取播放时间条
	let progress=document.querySelector('.progress')
	// 变化条
	let proson=document.querySelector('.progress-son')
	// 获取时间的第一个span
	let btime=document.querySelector('.time>span:first-child');
	let ztime=document.querySelector('.time>span:last-child')
	// 获取最下方内容
	let bcontent=document.querySelector('.lyric');
    let now=0;
     // 定义循环
    let xun=2;    
     content(database[now])      
	function content(obj){
		        audio.src=obj.src;
		        img.src=obj.photo;
                let h2=document.createElement('h2')
		           rtop.appendChild(h2);
		          let span=document.createElement('span')
		           rtop.appendChild(span);
		            let a=document.createElement('a')
		           rtop.appendChild(a);
		         h2.innerText=obj.songs
		         span.innerText='歌手：'
		         a.innerText=obj.name
		         // 获取歌词内容
		         Slyrics.innerHTML='';
		        for(let j=0;j<obj.lyrics.length;j++){

		        	Slyrics.innerHTML +=`
		        	<li>${obj.lyrics[j].lyric}</li>
		        	                    `
		        	
		          }

		          // 总时长
			        // console.dir(audio)
			        audio.ontimeupdate=function(){
			        	let cF=Math.floor(audio.currentTime/60)>=10?Math.floor(audio.currentTime/60):`0${Math.floor(audio.currentTime/60)}`
			        	let cM=Math.floor(audio.currentTime%60)>=10?Math.floor(audio.currentTime%60):`0${Math.floor(audio.currentTime%60)}`
			        	ztime.innerText=obj.alltime;
			        	btime.innerText=`${cF}:${cM}`;
			        	let ratio=(audio.currentTime)/(audio.duration)
                        proson.style.width=ratio*progress.offsetWidth+'px'
                      
                        obj.lyrics.forEach(function(value,index){
                        	let a=index;
                        	if(index<=4){
                                 index=0;
                        	}else if(index>4){
                                  index -=4
                        	}

	                          if(value.time==`${cF}:${cM}`){

	                          	    Slyrics.innerHTML='';
	                              for(let n=index;n<obj.lyrics.length;n++){
                                    
	                              	Slyrics.innerHTML +=`<li class='temp${n}'>${obj.lyrics[n].lyric}</li>`
                                    
	                              }
                                let lis=document.querySelectorAll('.lyrics>li')
	                              let temp=document.querySelector(`.temp${a}`);
	                              temp.style.color='#F92672';
	                              // temp.style.transform=`scale(1.2, 1.2)`
	                              temp.style.fontSize=25+'px';
	                              // temp.style.fontWeight='bold'
                                  bcontent.innerText=temp.innerText; 
		                           
	                           }
                                

	                           
                        })

                         if(audio.currentTime==audio.duration){
                         // 	    rtop.innerText='';
         	               //      Slyrics.innerHTML='';
                         //        now++;
                         //        content(database[now]) 
                         //        audio.play();
                         //        pause.classList.remove('icon-kaishi')
                         //        pause.classList.add('icon-zanting')
                         
                         // 按顺讯播放
                          if(xun==0){
                                rtop.innerText='';
         	                    Slyrics.innerHTML='';
                                now++;
                                content(database[now]) 
                                audio.play();
                                pause.classList.remove('icon-kaishi')
                                pause.classList.add('icon-zanting')
                          }else if(xun==1){
                                 // 单曲播放
                                rtop.innerText='';
         	                    Slyrics.innerHTML='';
                                content(database[now]) 
                                audio.play();
                                pause.classList.remove('icon-kaishi')
                                pause.classList.add('icon-zanting')
                          }else if(xun==2){
                          	   
                                 rtop.innerText='';
         	                    Slyrics.innerHTML='';
         	                     now=Math.floor(Math.random()*6);
                          	    console.log(now)
                                content(database[now]) 
                                audio.play();
                                pause.classList.remove('icon-kaishi')
                                pause.classList.add('icon-zanting')
                          }

                        }
                           
			        }

                  
		          
		   }



		 // 获取按钮切换
		 let pause=document.querySelector('.pause');
		 // console.log(pause) 
		 pause.onclick=function(){
		 	if(audio.paused){
                 audio.play();
                 pause.classList.remove('icon-kaishi')
                 pause.classList.add('icon-zanting')
		 	}else{
		 		audio.pause();
		 		 pause.classList.remove('icon-zanting')
                 pause.classList.add('icon-kaishi')
		 	}
		 	// 切换
		 	// pause.classList.toggle('icon-kaishi')
		 } 
         // 获取按钮下一首
         let  next=document.querySelector('.icon-xiayishou');
        
         next.onclick=function(){

         	   rtop.innerText='';
         	   Slyrics.innerHTML='';
         	   now++;
         	   
         	   if(now==database.length){
                    now=0;
         	   }
         	   content(database[now])
               audio.play();
               pause.classList.remove('icon-kaishi')
                 pause.classList.add('icon-zanting')
         }
         
         // 获取上一首
         let on=document.querySelector('.icon-shangyishou')
         on.onclick=function(){
         	   rtop.innerText='';
         	   Slyrics.innerHTML='';
         	   now--;
         	   if(now==-1){
                    now=database.length-1;
         	   }
         	   content(database[now])
               audio.play();
               pause.classList.remove('icon-kaishi')
                 pause.classList.add('icon-zanting')
         }
        
        
	// 声音
	// 获取声音控制键
	let voice=document.querySelector('.icon-shengyin');
	// 获取控件
	let vall=document.querySelector('.control')
	let vtop=document.querySelector('.control-top');
	let vbottom=document.querySelector('.control-bottom')
	voice.onmouseenter=function(){
         vall.style.display='block';
         vtop.onmousedown=function(e){
              // 获取初始值
              let oy=e.clientY;
	          // console.log(vall.offsetHeight)
           //    console.log(vtop.offsetTop)
              let otop=vtop.offsetTop
              vall.onmousemove=function(e){
                  let my=e.clientY;
                  let tops=my-oy+otop;
                  if(tops<0){
                  	    tops=0;
                       
                  }
                  if(tops==vall.offsetHeight){
                         tops=vall.offsetHeight;
                  }
                  vtop.style.top=tops+'px';
                  vbottom.style.height=vall.offsetHeight-tops+'px';
                  audio.volume=vbottom.offsetHeight/vall.offsetHeight;

              }

              vall.onmouseup=function(){
              	  vall.onmousemove=null;
              	  vall.onmouseup=null;
              }
         }
	}
	voice.onmouseleave=function(){
		vall.style.display='none'
	}

     // 循环按钮
     let circulation=document.querySelector('.icon-danquxunhuan');
     circulation.onclick=function(){
     	        xun=1;
     	        rtop.innerText='';
         	   Slyrics.innerHTML='';
     	       content(database[now])
               audio.play();
               pause.classList.remove('icon-kaishi')
               pause.classList.add('icon-zanting')
     }

     // 下载
     let msave=document.querySelector('.icon-xiazai');
     msave.onclick=function(){
     	  msave.href=database[next].src;
		msave.download=database[next].songs;
     }

}
