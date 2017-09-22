/*
* @Author: wz
* @Date:   2017-08-28 18:59:13
* @Last Modified by:   wz
* @Last Modified time: 2017-08-30 23:13:54
*/



		

	function point(canvas,mask){
		this.mask=mask;
		this.canvas=canvas;
		this.ctx=this.canvas.getContext("2d");
		this.data=[];
		this.bianshu=''
		this.boo='bold'
		/* this.style='red'
		 this.stroke=ctx.stroke()
		 this.width=ctx.lineWidth='10'*/

			 this.strokecolor="";
			 this.fillcolor="";
			 this.style='stroke';
			 this.chexiao='cx'
       
           this.imgs=0;
	}


	point.prototype={

		item:function(){
			  
			 this.ctx.lineWidth='1'
			 this.ctx.lineCap='round'  
			
			 this.ctx[this.style]();
	         this.ctx.strokeStyle=this.strokecolor
	         this.ctx.fillStyle=this.fillcolor

		},

   // 直线

		line:function(ox,oy,cx,cy){
     
      
 	      
		 	    let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2)) 
		            
		          	
		        
		          	this.ctx.beginPath()
		            this.ctx.moveTo(ox,oy)

		            this.ctx.lineTo(cx,cy)
		            this.ctx.closePath()
		          	this.ctx.setLineDash([0,0]); 
		            // this.ctx.stroke()
		           
				
		 	

		


		 },
			

   // 虚线
		dash:function(ox,oy,cx,cy){

      
		          	this.ctx.beginPath()
		            this.ctx.moveTo(ox,oy)
                    
		            this.ctx.lineTo(cx,cy)
		            this.ctx.closePath()
		            this.ctx.setLineDash([5,10]) 
		            // this.ctx.stroke()
				
		 	


/*
		document.onkeydown=function(e){
            if(e.ctrlKey && e.keyCode==90){
            	// alert(1)
            	let img=data.pop();
            	 this.ctx.putImageData(img,0,0)

           
		}

	}*/

	},

    // 多边形
		dbx:function(ox,oy,cx,cy){
         
		 	    let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2)) 

		
				   	 let rr=(360/this.bianshu)*Math.PI/180;
				    this.ctx.beginPath()
				    this.ctx.moveTo(r+ox, oy)
				   	 this.ctx.setLineDash([0,0]) 
				    for(let i=1;i<=this.bianshu;i++){
				    
				    	this.ctx.lineTo(ox+r*Math.cos(rr*i), oy+r*Math.sin(rr*i))

				    }

		    // this.ctx.fill()
		            this.ctx.closePath();
				
		           // this.ctx.stroke()

		  



		
		 	},

		 
	


// 多角形
	  djx:function(ox,oy,cx,cy){
   
		      let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2)) 
		      let r1=r/2
		   
		         let rr=360/(this.bianshu*2)*Math.PI/180;
			        this.ctx.beginPath()
			        this.ctx.moveTo(r+ox, oy)
			         this.ctx.setLineDash([0,0]) 

		      for(let i=1;i<=this.bianshu*2;i++){

		          if(i%2){
		          this.ctx.lineTo(ox+r1*Math.cos(rr*i), oy+r1*Math.sin(rr*i))
		          }else{
		          this.ctx.lineTo(ox+r*Math.cos(rr*i), oy+r*Math.sin(rr*i))
		          }

		        }

		        // that.ctx.fill()
		        // this.ctx.stroke()

	


    
      },

     

	// 画圆
	  yuan:function(ox,oy,cx,cy){
	  
               let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2)) 
	  	   	   	this.ctx.beginPath()
	  	   	    this.ctx.moveTo(ox+r, oy)
 
                this.ctx.arc(ox, oy, r, 0, 2*Math.PI)
                this.ctx.closePath()
	  	   	   	this.ctx.setLineDash([0,0]) 
                // this.ctx.stroke()
	  	   },



// 铅笔画线
	  xian:function(){
	  	let that=this;
	  	this.mask.onmousedown=function(e){
	 	let ox=e.offsetX
	 	let oy=e.offsetY
	 	// that.ctx.lineWidth=10;
	    
	  	that.ctx.beginPath()
	    that.ctx.moveTo(ox,oy)
	 	that.mask.onmousemove=function(e){
	 		 if(that.data.length>0){
		              that.ctx.putImageData(that.data[that.data.length-1],0,0)
		           }
	 		let cx=e.offsetX
	 	    let cy=e.offsetY
	 	    let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2)) 
	 	       // ctx.setLineDash([10,10]) 
	            that.ctx.lineTo(cx,cy)

	  	that.ctx.setLineDash([0,0]) 
              	that.ctx.stroke()	
              	// that.item()	
		 	}
		 	that.mask.onmouseup=function(){
		 	that.data.push(that.ctx.getImageData(0,0,that.canvas.width,that.canvas.height))

			that.mask.onmousemove=null
			that.mask.onmouseup=null
		}
			
       }

   },

   // 矩形
         juxing:function(ox,oy,cx,cy){
       	 
               this.ctx.beginPath()
	 	       this.ctx.moveTo(ox, oy);
	 	       this.ctx.lineTo(cx, oy)
	 	       this.ctx.lineTo(cx, cy)
	 	       this.ctx.lineTo(ox, cy)
	 	       this.ctx.closePath();
	 	        this.ctx.setLineDash([0,0]) 
	 	       // this.ctx.setLineDash([0,0]) 
	 	       // this.ctx.stroke()
	 	       // this.ctx.fill()

	 	    }
         ,
    // 橡皮擦
/*       xiangpi:function(){
   	  	let that=this;
	  	this.mask.onmousedown=function(e){
	 	let ox=e.offsetX
	 	let oy=e.offsetY
	 	that.ctx.lineWidth=10;
	    that.ctx.lineCap='round'  
	  	that.ctx.beginPath()
	  	that.ctx.setLineDash([0,0]) 
	    that.ctx.moveTo(ox,oy)
	 	that.mask.onmousemove=function(e){
	 		 if(that.data.length>0){
		        that.ctx.putImageData(that.data[that.data.length-1],0,0)
		       }
	 		let cx=e.offsetX
	 	    let cy=e.offsetY
	 	    let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2)) 
	 	       // ctx.setLineDash([10,10]) 
	            that.ctx.lineTo(cx,cy)
	            that.ctx.strokeStyle="#fff"

              	that.ctx.stroke()		
		 	}
		 	that.mask.onmouseup=function(){
		 that.data.push(that.ctx.getImageData(0,0,that.mask.width,that.mask.height))

			// mask.onmousedown=null;
			that.mask.onmousemove=null
			that.mask.onmouseup=null
		}
			
       }
     },*/



// 封装函数
     draw:function(type){
         let that=this;
       	  this.mask.onmousedown=function(e){
            let ox=e.offsetX
	 	    let oy=e.offsetY
           
	 	    that.mask.onmousemove=function(e){
               let cx=e.offsetX
	 	       let cy=e.offsetY
              
 	       that.ctx.clearRect(0, 0, that.mask.offsetWidth, that.mask.offsetHeight)  
 	    	 if(that.data.length>0){
	              that.ctx.putImageData(that.data[that.data.length-1],0,0)
	           }
               
	           that[type](ox,oy,cx,cy)
	           that.item()
	           
           }

        that.mask.onmouseup=function(){
            that.data.push(that.ctx.getImageData(0,0,that.canvas.width,that.canvas.height))

			// mask.onmousedown=null;
			that.mask.onmousemove=null
			that.mask.onmouseup=null

		}
			

       	}  


       	   // let chexiao=document.querySelector('.chexiao')
       //撤销 
       	   that.chexiao.onmousedown=function(){
       	   	that.chexiao.style.background='#ff6700'
       	   	let img=that.data.pop();
            that.ctx.putImageData(img,0,0)

       	   

       	    that.chexiao.onmouseup=function(){
       	    	that.chexiao.style.background=''
       	    }
         }

       		document.onkeydown=function(e){
            if(e.ctrlKey && e.keyCode==90){
            	// alert(1)
            	let img=that.data.pop();
            	 that.ctx.putImageData(img,0,0)

            	// data.push(img)
              }
          }
       },

// 橡皮擦
       esr:function(obj){
            let that=this
       	 this.mask.onmousedown=function(e){
       	 	obj.style.display='block'
       	 	 let w=obj.offsetWidth;
             let h=obj.offsetHeight;
             e.preventDefault=null
            that.mask.onmousemove=function(e){
            	e.preventDefault=null

            	 let cx=e.offsetX;
            	 let cy=e.offsetY;
            	 let lefts=cx-w/2
            	 let tops=cy-h/2
            	 obj.style.left=lefts+'px'
            	 obj.style.top=tops+'px'
            	 if(lefts<=0){
            	 	lefts=0
            	 }
            	 if(lefts>=that.mask.offsetWidth-w){
            	 	lefts=that.mask.offsetWidth-w
            	 }
            	 if(tops<=0){
                   tops=0
            	 }if(tops>=that.mask.offsetHeight){
            	 	tops=that.mask.offsetHeight-h
            	 }
            	 that.ctx.clearRect(lefts, tops, w, h)

            }

           that.mask.onmouseup=function(){
       	 	 that.data.push(that.ctx.getImageData(0,0,that.canvas.width,that.canvas.height))
            obj.style.display='none'
          	that.mask.onmousemove=null;
          	that.mask.onmouseup=null;
          }
       	 }
       	 



	
       },

// 文本
       text:function(){
       	let that=this;
       	this.mask.ondblclick=function(e){
       		let ox=e.offsetX;
       		let oy=e.offsetY;


       	let divs=document.createElement('div');
       	divs.style.cssText=`
            width:100px;
            height:30px;
            background:#fff;
            border:1px dashed #666666;
            position: absolute;
            left:${ox}px;
            top:${oy}px;
       	`

       	divs.contentEditable=true;
       	that.mask.appendChild(divs);
        
           let left,top;
        that.mask.onmousedown=function(e){
           let cx1=e.clientX;
           let cy1=e.clientY;
         

           

           that.mask.onmousemove=function(e){
              let cx2=e.clientX;
              let cy2=e.clientY;
              left=cx2-cx1+ox;
              top=cy2-cy1+oy;
              divs.style.left=`${left}px`;
              divs.style.top=`${top}px`;

           }
              
           that.mask.onmouseup=function(){
               that.mask.onmousemove=null;
               this.onmouseup=null;
           }

        }



       	divs.onblur=function(){
       		let font=divs.innerText;
       		that.mask.removeChild(this);
       		that.ctx.font='bold 16px sans-serif';
       		that.ctx.fillText(font,left,top);
       /*		that.ctx.textAlign='center'       
            that.ctx.textBaseLine='middle'*/




       	}



       	}
       },

  // 反相
       fanxiang:function(){
       	let data1=this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)
         	console.log(data1.data)

         	for(let i=0;i<data1.data.length;i+=4){
         		data1.data[i]=255-data1.data[i]
         		data1.data[i+1]=255-data1.data[i+1]
         		data1.data[i+2]=255-data1.data[i+2]
         	}
          this.ctx.putImageData(data1,0,0)
       },

    // 裁切
    
    clip:function(caiqie){
        let that=this;
        let left;
        let top;
        let width;
        let height;
    	this.mask.onmousedown=function(e){

           let ox=e.offsetX
           let oy=e.offsetY
           that.mask.onmousemove=function(e){
           	if(that.data.length>0){
	              that.ctx.putImageData(that.data[that.data.length-1],0,0)
	           }

              let cx=e.offsetX
              let cy=e.offsetY
              width=Math.abs(cx-ox)
              height=Math.abs(cy-oy)
              left=cx>ox?ox:cx
              top=cy>oy?oy:cy
              

              caiqie.style.cssText=`
              display:block;
              left:${left}px;
              top:${top}px;
              width:${width}px;
              height:${height}px;

              `


           }

           that.mask.onmouseup=function(){
           	 that.imgs=that.ctx.getImageData(left,top,width,height);
           	 that.ctx.clearRect(left,top,width,height);
           	  that.data.push(that.ctx.getImageData(0,0,that.canvas.width,that.canvas.height))
           	 that.ctx.putImageData(that.imgs,left,top);
               
           	 that.mask.onmousemove=null;
           	 that.mask.onmouseup=null;
           	 that.drag(left,top,width,height,caiqie)




           }
    	}
    },

    drag:function(left,top,width,height,obj){
    	let that=this
        this.mask.onmousemove=function(e){
        	  let cx=e.offsetX
              let cy=e.offsetY
         if(cx>left && cx<left+width && cy>top && cy<top+height){
         	that.mask.style.cursor='move';

         }else{
         	that.mask.style.cursor='default';
         }

        }


        this.mask.onmousedown=function(e){

           let ox=e.offsetX
           let oy=e.offsetY
          that.mask.onmousemove=function(e){
              let cx=e.offsetX
              let cy=e.offsetY

              let xx=cx-ox+left;
              let yy=cy-oy+top

              obj.style.left=xx+'px'
              obj.style.top=yy+'px'
              // that.ctx.putImageData(that.imgs,xx,yy)
              
              that.ctx.clearRect(0, 0, that.canvas.offsetWidth, that.canvas.offsetHeight)  
               if(that.data.length>0){
	              that.ctx.putImageData(that.data[that.data.length-1],0,0)
	           }

                 that.ctx.putImageData(that.imgs,xx,yy)


       }

       that.mask.onmouseup=function(){
        that.data.push(that.ctx.getImageData(0,0,that.canvas.width,that.canvas.height))
       	obj.style.cssText=`
              display:none;
              left:0px;
              top:0px;
              width:0px;
              height:0px;

              `
          that.mask.style.cursor='default';    
       	that.mask.onmousemove=null
       	that.mask.onmouseup=null
       	that.mask.onmousedown=null
       }


     }



    }





  }
	



