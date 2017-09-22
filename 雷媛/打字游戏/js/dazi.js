

//  创建属性
    function game(){
    	this.charSheet=[
    	                 ['Q','img/Q.jpg'],
    	                 ['W','img/W.jpg'],
    	                 ['E','img/E.jpg'],
    	                 ['R','img/R.jpg'],
    	                 ['T','img/T.jpg'],
    	                 ['Y','img/Y.jpg'],
    	                 ['U','img/U.jpg'],
    	                 ['I','img/I.jpg'],
    	                 ['O','img/O.jpg'],
    	                 ['P','img/P.jpg'],
    	                 ['A','img/A.jpg'],
    	                 ['S','img/S.jpg'],
    	                 ['D','img/D.jpg'],
    	                 ['F','img/F.jpg'],
    	                 ['G','img/G.jpg'],
    	                 ['H','img/H.jpg'],
    	                 ['J','img/J.jpg'],
    	                 ['K','img/K.jpg'],
    	                 ['L','img/L.jpg'],
    	                 ['Z','img/Z.jpg'],
    	                 ['X','img/X.jpg'],
    	                 ['C','img/C.jpg'],
    	                 ['V','img/V.jpg'],
    	                 ['B','img/B.jpg'],
    	                 ['N','img/N.jpg'],
    	                 ['M','img/M.jpg']]
        this.length=5;
        this.charlength=this.charSheet.length;
//      创建的元素集合
        this.charsArr=[];
        this.speed=10;
//      创建定位数组
        this.positionL=[];
//      创建分数
        this.sco=0;
        this.score=document.querySelector('.score>span');
//      达到这个分数就进入下一关
        this.max=10;
//      定义时间
        this.time=0;
        //      创建生命值
        this.lif=5;
        this.life=document.querySelector('.lifes>span');
//      当前关卡
        this.off=1;
        this.office=document.querySelector('.office>span');
    }
    
//  创建方法
     game.prototype={
//   	  开始
         start:function(){
//       	执行创建元素
              this.charAll(this.length);
              this.drap();
              this.down();
//            this.score.innerText=this.sco;
            
         },
         
//       创建所有元素
         charAll:function(length){
         	    for(let i=0;i<length;i++){
         	    	  this.chari();
         	    }
         },
         
//       创建元素
         chari:function(){
//       	  获取字母
              let num;
//            let num=Math.floor(Math.random()*this.charlength);
//            //       	   去重
//       	  while(this.noRepeat(this.charSheet[num],this.charsArr)){
////       	  	重新取值
//       	  	  num=Math.floor(Math.random()*this.charlength);
//            	
//            }
              do{
              	num=Math.floor(Math.random()*this.charlength)
              }while(this.noRepeat(num))
//            位置
              let lefts=(window.innerWidth-400)*Math.random()+200;
              while(this.overlap(lefts)){
              	  lefts=(window.innerWidth-400)*Math.random()+200;
              }
              let tops=Math.random()*100;
         	  let divs=document.createElement('div');
         	  divs.classList.add('char');
         	  divs.style.cssText=`
         	                  top:${tops}px;
         	                  left:${lefts}px;
         	                  background-image:url(${this.charSheet[num][1]});
         	                   `;
         	  divs.innerText=this.charSheet[num][0];
         	  document.body.appendChild(divs)
         	  this.charsArr.push(divs);
         	  this.positionL.push(lefts);

         },
         
//       掉落
         drap:function(){
         	let that=this;
//              时间函数
               this.time=setInterval(function(){
               	  for(let i=0;i<that.charsArr.length;i++){
               	  	  let topp=that.charsArr[i].offsetTop;
               	  	  that.charsArr[i].style.top=`${topp+that.speed}px`;
               	  	  
//             	  	  删除
               	  	  if(topp > 550){
//             	  	  	移除
               	  	  	  document.body.removeChild(that.charsArr[i]);
//             	  	  	  在数组中删除
                          that.charsArr.splice(i,1);
//                      在定位中清除
                        that.positionL.splice(i,1);
//                      生命值减少
                        that.lif--;
                 	   	that.life.innerText=that.lif;
                 	   	if(that.lif==-1){
                 	   		let flag=confirm('是否重来一局');
        		                if(flag){
        		                	
        		                   that.again();
        		                }else{
        		                	close();
        		                }
                 	   	}
               	  	  	  
               	  	  }
//             	  	  添加
                     if(that.charsArr.length<that.length){
                     	that.chari();
                     }
               	  	  
               	  }
               },300)
         	   
         },
         
//       键盘按下
         down:function(){
                 that=this;
                 
         	     document.onkeydown=function(e){
//       	     	第一种:将键盘对应的Unicode编码转换成字母
//       	     	  let t=e.keyCode;
//       	     	  
//                   let a= String.fromCharCode(t);
//                   console.log(a)
//       	     	for(let j=0;j<that.charsArr.length;j++){
//       	     		  if(a==that.charsArr[j].innerText){
////       	     		  	    alert(1)
////移除
//             	  	  	    document.body.removeChild(that.charsArr[j]);
////             	  	  	  在数组中删除
//                          that.charsArr.splice(j,1);
//                             
//       	     		  }
//
//       	     	}
//              第二种:将数组中的字母转换为Unicode编码;
                 for(let j=0;j<that.charsArr.length;j++){
                 	   let str=that.charsArr[j].innerText;
                 	   let a=str.charCodeAt()
//               	   console.log(a)
                 	   if(e.keyCode==a){
                 	   	    document.body.removeChild(that.charsArr[j]);
////             	  	  	  在数组中删除
                            that.charsArr.splice(j,1);
                             that.positionL.splice(j,1);
                             that.sco++;
                 	   	    that.score.innerText=that.sco;
                 	   	     if(that.sco==that.max){
        		                let flag=confirm('是否进入下一关');
        		                if(flag){
        		                	
        		                   that.next();
        		                }else{
        		                	close();
        		                }
        	                 }
                 	   }
                 }
                      
                    
         	     }
        },
        
        
 //去重复
//     noRepeat:function(char,charArr){
//  	 for(let n=0;n<charArr.length;n++){
//  	 	  if(charArr[n].innerText == char){
//  	 	  	  return true;
//  	 	  }
//
//  	 }
//  	 	  return false;
//  	 
//  },
//   用some方法
     noRepeat:function(num){
     	let that=this;
     	  return this.charsArr.some(function(value){
     	   	     return value.innerText==that.charSheet[num][0];
     	   })
     },
        
////去重叠
//       overlap:function(lefts){
//       	  for(let m=0;m<this.charsArr.length;m++){
//       	  	  if(Math.abs(this.charsArr[m].offsetLeft - lefts)<50){
//       	  	  	  return true;
//       	  	  }
//                
//       	  }
//       	  return false;
//       }
//      overlap:function(lefts){
//   	  return this.positionL.some(function(value){
//   	   	     return Math.abs(value - lefts)<50;
//   	   })
//       },
        overlap:function(lefts){
     	  return this.positionL.some(value =>Math.abs(value - lefts)<100)
         },
       
//     进入下一关
        next:function(){
        	clearInterval(this.time);
            for(let i=0;i<this.charsArr.length;i++){
        	document.body.removeChild(this.charsArr[i]);
            	
            }
//清空     
            this.charsArr=[];
            this.positionL=[];
            this.sco=0;
            this.score.innerText=this.sco;
            this.lif=5;
            this.life.innerText=this.lif;
            this.off++;
            this.office.innerText=this.off;
            this.length+=1;
            if(this.length>=7){
            	this.speed+=10;
            	this.length+=0;
            }
//          this.max+=5;
            this.start();
            
        	
        },
        
//      重新再来
         again:function(){
         	clearInterval(this.time);
            for(let i=0;i<this.charsArr.length;i++){
        	  document.body.removeChild(this.charsArr[i]);
            	
            }
//清空     
            this.charsArr=[];
            this.positionL=[];
            this.length=5;
            this.sco=0;
            this.score.innerText=this.sco;
            this.lif=5;
            this.life.innerText=this.lif;
            this.off=1;
            this.office.innerText=this.off;
            this.speed=10;
            this.max=10;
            this.start();
         }
         
     }
