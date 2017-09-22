/*
* @Author: lenovo
* @Date:   2017-08-28 19:17:48
* @Last Modified by:   lenovo
* @Last Modified time: 2017-08-30 23:13:53
*/
function palette(canvas,mask){

    // 属性
    this.canvas=canvas;
    this.mask=mask;
    this.can=this.canvas.getContext('2d');
    this.lineWidth=1;
    this.fillStyle='blue';
    this.strokeStyle='greenyellow';
    // 历史记录
    this.history=[];
    // 定义角的个数
    this.polyNum=5;
    // 定义边的个数
    this.polygonNum=5;
    // 定义填充或者描边
    this.style='stroke';
    // 裁剪画布
    this.temp=0;
}

palette.prototype={


	// 初始数据
	begin:function(){
           this.lineWidth=1;
           this.can.fillStyle=this.fillStyle;
          this.can.strokeStyle=this.strokeStyle;
            this.can.setLineDash([0,0])
	},
	// 直线

     line:function(ox,oy,mx,my){
                    this.can.beginPath();
	                this.can.moveTo(ox,oy)
			        this.can.lineTo(mx,my);
			        this.can.closePath();
			        this.can.strokeStyle=this.strokeStyle;
			        this.can.strokeStyle=this.strokeStyle;
			        this.can[this.style]();
     },


    // 撤销
    repeal:function(){
    	
                 let img=[];
           if(this.history.length>=1){
                 img.push(...this.history.splice(0,this.history.length-1))
                  this.history=[];
                  this.history.push(...img)
                
           }
            if(this.history.length==0){
                 this.can.clearRect(0,0,this.canvas.width,this.canvas.height);
                 this.img=[];
                  this.history=[];
                return;
                
           }
                this.can.putImageData(img[img.length-1],0,0)
   	    
      },
      // 画虚线
      xuxian:function(ox,oy,mx,my){
      	                this.can.beginPath();
                       this.can.moveTo(ox,oy)
				        this.can.lineTo(mx,my);
				        this.can.closePath();
                this.begin();
                this.can.setLineDash([10,10])
				        
				        this.can[this.style]();
      },
     // 铅笔
      qianbi:function(){
      	   let that=this;
	    	this.mask.onmousedown=function(e){
	    	 let ox=e.offsetX, oy=e.offsetY;
	    	  that.can.beginPath();
		      that.can.moveTo(ox,oy)
		    	that.mask.onmousemove=function(e){
            if(that.history.length>0){
                      that.can.putImageData(that.history[that.history.length-1],0,0)
                    }
		         	  let mx=e.offsetX, my=e.offsetY;
					        that.can.lineTo(mx,my);
                  that.begin();
					        that.can.stroke();

          

		         }

	           that.mask.onmouseup=function(){
		         that.history.push(that.can.getImageData(0,0,that.canvas.width,that.canvas.height));
				    	that.mask.onmousemove=null;
				    	that.mask.onmouseup=null;
	             }
	      }
      },

     // 多边形  填充
     polygon:function(ox,oy,mx,my){
           
	        let r=Math.sqrt(Math.pow((mx-ox),2)+Math.pow((my-oy),2))
          	 let ang=360/this.polygonNum*Math.PI/180;
		    this.can.beginPath();
		     this.can.moveTo(ox+r,oy)
		     for(let i=1;i<this.polygonNum;i++){
		     	this.can.lineTo(ox+r*Math.cos(ang*i),oy+r*Math.sin(ang*i));
		     }
		    this.can.closePath();  
		     this.can[this.style]();

     },

    //  // 画圆     填充
    // circle:function(ox,oy,mx,my){
	   //              let r=Math.sqrt(Math.pow((mx-ox),2)+Math.pow((my-oy),2))
	   //               this.can.beginPath();
	   //              this.can.moveTo(ox+r,oy)
    //                this.can.arc(`${ox}`,`${oy}`,`${r}`,0,2*Math.PI,false);
    //                  this.can.closePath();
    //                 this.can.fillStyle=this.fillStyle;
    //                 this.can.fill(); 
	       
    //  },

      // 矩形
      rect:function(ox,oy,mx,my){
            this.can.beginPath();
           this.can.rect(ox,oy,mx-ox,my-oy);
           this.can.closePath();
           this.can[this.style]();

      },


      // 文字
      Text:function(){
          let that=this;
       
           
                  
           this.mask.onmousedown=function(e){
             that.can.clearRect(0,0,that.canvas.width,that.canvas.height)
              if(that.history.length>0){
                that.can.putImageData(that.history[that.history.length-1],0,0)
              }
                  // 创建编辑区域div
                  let ox=e.offsetX,oy=e.offsetY;
                  console.log(ox,oy)
                     let lefts,tops;
            let divs=document.createElement('div');
            console.log(divs)
            divs.style.cssText=`
                        width:200px;height:50px;
                        border:1px dashed #dfdfdf;
                        font-size:20px;
                        color:#000;
                        background:#ff6700;
                        position:absolute;
                        top:${oy}px;
                        left:${ox}px;
                        `;
            divs.contentEditable=true;
            // 放进mask中
            this.mask.appendChild(divs)
           

            // 拖拽
           divs.onmousedown=function(e){
               let cleft=divs.offsetLeft;
               let ctop=divs.offsetTop;
                let dx=e.clientX,dy=e.clientY;

                that.mask.onmousemove=function(e){
                  // 获取移动的位置
                  let mx=e.clientX,my=e.clientY;
                  let moveX=mx-dx;
                  let moveY=my-dy;
                  lefts=moveX+cleft;
                  tops=moveY+ctop;
                  console.log(lefts,tops)
                  if(lefts<=0){
                       lefts=0;
                  }
                  if(lefts>=that.canvas.width-divs.offsetWidth){
                       lefts=that.canvas.width-divs.offsetWidth;
                  }
                   if(tops<=0){
                       tops=0;
                  }
                  if(tops>=that.canvas.height-divs.offsetHeight){
                       tops=that.canvas.height-divs.offsetHeight;
                  }
                  divs.style.left=`${lefts}px`;
                  divs.style.top=`${tops}px`;
               }

               that.mask.onmouseup=function(){
                    that.mask.onmousemove=null;
                    that.mask.onmouseup=null;
               }
           }
            this.mask.onmousedown=null;
              

               divs.onblur=function(){
                console.log(1)
                   let value=divs.innerText;
                   // 消除divs
                   let left=divs.offsetLeft;
                   // console.log(left)
                   let top=divs.offsetTop;
                   that.mask.removeChild(divs);
                   that.can.font='bold 50px 微软雅黑'
                   that.can.textAlign='center';
                   that.can.textBaseLine='middle'
                   // console.log(value)
                   that.can.fillText(value,left,top)
                  
                    that.history.push(that.can.getImageData(0,0,that.canvas.width,that.canvas.height));
              }
               
             
           }.bind(this);

            
      },
      // 画圆 
     circleX:function(ox,oy,mx,my){
	                let r=Math.sqrt(Math.pow((mx-ox),2)+Math.pow((my-oy),2))
	                    this.can.beginPath();
						this.can.strokeStyle=this.can.strokeStyle;
						 this.can.arc(ox,oy,r,0,2*Math.PI,false);
						this.can.closePath();
					this.can[this.style]();
               
     },


    
     // 橡皮擦
     rubber:function(obj){
     	  let that=this;
     	 
          this.mask.onmousedown=function(e){
             obj.style.display='block'
              let w=obj.offsetWidth;
              // console.log(w)
              let h=obj.offsetHeight;
          	let cx=e.offsetX,cy=e.offsetY;
               that.mask.onmousemove=function(e){
                	let ox=e.offsetX,oy=e.offsetY;
                	//  that.can.clearRect(0,0,that.canvas.width,that.canvas.height)
	                // if(that.history.length>0){
	                // 	that.can.putImageData(that.history[that.history.length-1],0,0)
	                // }
                	let lefts=ox;
                	let tops=oy;
                	if(lefts<0){
                        lefts=0;
                	}
                	if(lefts>that.mask.offsetWidth-w){
                        lefts=that.mask.offsetWidth-w;
                	}
                	if(tops<0){
                        tops=0;
                	}
                	if(tops>that.mask.offsetHeight-h){
                        tops=that.mask.offsetHeight-h;
                	}
                	obj.style.left=`${lefts}px`;
                	obj.style.top=`${tops}px`;
                	that.can.clearRect(lefts, tops, w, h);
                	
                }

               that.mask.onmouseup=function(){
                	obj.style.display='none'
                	that.history.push(that.can.getImageData(0,0,that.canvas.width,that.canvas.height));
                	that.mask.onmousemove=null;
                	that.mask.onmouseup=null;
                }
          }
     },

     // 反像
     fan:function(){
         let fans=this.can.getImageData(0,0,this.canvas.width,this.canvas.height);
         // console.log(fans.data)
            for(let i=0;i<fans.data.length;i+=4){
                  fans.data[i]=255-fans.data[i];
                  fans.data[i+1]=255-fans.data[i+1];
                  fans.data[i+2]=255-fans.data[i+2];
             }

            this.can.putImageData(fans,0,0)
     },
     
    // 裁剪
    tailor:function(taiObj){
      let that=this;
          let lefts,tops,w,h;
           this.mask.onmousedown=function(e){
                 let ox=e.offsetX,oy=e.offsetY;
                 that.mask.onmousemove=function(e){
                      let mx=e.offsetX,my=e.offsetY;
                      w=Math.abs(mx-ox);
                      h=Math.abs(my-oy);
                      lefts=mx>ox?ox:mx;
                      tops=my>oy?oy:my;
                      taiObj.style.cssText=`
                                  display:block;
                                  width:${w}px;
                                  height:${h}px;
                                  left:${lefts}px;
                                  top:${tops}px;
                                  border:1px dashed #dfdfdf;

                                      `
                 }

                 that.mask.onmouseup=function(){
                      that.temp=that.can.getImageData(lefts,tops,w,h);
                      that.can.clearRect(lefts,tops,w,h);
                       that.history.push(that.can.getImageData(0,0,that.canvas.width,that.canvas.height));
                      that.can.putImageData(that.temp,lefts,tops)
                      that.mask.onmousemove=null;
                      that.mask.onmouseup=null;
                      that.draw(lefts,tops,w,h,taiObj);
                 }

           }
    },
    // 拖动
    draw:function(lefts,tops,w,h,obj){
          let that=this;
          // 判断选区框
          this.mask.onmousemove=function(e){
               let ox=e.offsetX,oy=e.offsetY;
               if(ox>lefts && ox<lefts+w && oy>tops && oy<tops+h){
                     // 显示图标
                     that.mask.style.cursor='move'
               }else{
                     that.mask.style.cursor='default'
               }
          }
             let Tleft,Ttop;
          // 进行拖动
          this.mask.onmousedown=function(e){
                  let ox=e.offsetX,oy=e.offsetY;
                  that.mask.onmousemove=function(e){
                      let mx=e.offsetX,my=e.offsetY;
                      Tleft=lefts+(mx-ox);
                      Ttop=tops+(my-oy);
                      obj.style.left=`${Tleft}px`;
                      obj.style.top=`${Ttop}px`;
                      
                      that.can.clearRect(0,0,that.canvas.width,that.canvas.height)
                      if(that.history.length>0){
                           that.can.putImageData(that.history[that.history.length-1],0,0)
                       }
                      that.can.putImageData(that.temp,Tleft,Ttop);
                  }

                  that.mask.onmouseup=function(){
                        that.history.push(that.can.getImageData(0,0,that.canvas.width,that.canvas.height));
                       obj.style.cssText=`
                                  display:none;
                                  width:0px;
                                  height:0px;
                                  left:0px;
                                  top:$0px;
                                  border:none;

                                      `
                        that.mask.style.cursor='default'
                       that.mask.onmousemove=null;
                       that.mask.onmouseup=null;
                       that.mask.onmousedown=null;
                  }
          }
    },

         // 多角形
    poly:function(ox,oy,mx,my){
	                let r=Math.sqrt(Math.pow((mx-ox),2)+Math.pow((my-oy),2))
					 	let ang=360/(2*this.polyNum)*Math.PI/180;
					     this.can.beginPath();
					     this.can.moveTo(ox+r,oy)
					     for(let i=1;i<2* this.polyNum;i++){
					     	 if(i%2 != 0){
					             this.can.lineTo(ox+r/2*Math.cos(ang*i),oy+r/2*Math.sin(ang*i));
					     	 }else if(i%2==0){
					     	 	this.can.lineTo(ox+r*Math.cos(ang*i),oy+r*Math.sin(ang*i));
					     	 }
					     	
					     }
						    this.can.closePath();
						   this.can[this.style]();
						    
      
 },
  // 整体
  overall:function(type){
  	   let that=this;
  	   this.mask.onmousedown=function(e){
    	 let ox=e.offsetX, oy=e.offsetY;
	    	that.mask.onmousemove=function(e){
	         	  let mx=e.offsetX, my=e.offsetY;
                  that.begin();
	                that.can.clearRect(0,0,that.canvas.width,that.canvas.height)
                  
	                if(that.history.length>0){
	                	that.can.putImageData(that.history[that.history.length-1],0,0)
	                }
                  
	               that[type](ox,oy,mx,my);
                  
	         }
           that.mask.onmouseup=function(){
	         	   that.history.push(that.can.getImageData(0,0,that.canvas.width,that.canvas.height));
			        	that.mask.onmousemove=null;
			        	that.mask.onmouseup=null;
             }
      }
  }

}


