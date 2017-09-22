
//插入元素


// 1.在最上方插入元素
   HTMLElement.prototype.upperChild=function(select){
   	    let first=this.firstElementChild;
   	    if(first){
   	    	this.insertBefore(select,first);
   	    }else{
   	    	this.appendChild(select);
   	    }
   }
   
//   2.在某元素下面插入新元素   
    HTMLElement.prototype.insertAfter=function(select){
    	 let parent=this.parentNode;
    	 let next=this.nextElementSibling;
    	 if(next){
    	 	parent.insertBefore(select,next)
    	 }else{
    	 	parent.appendChild(select);
    	 }
    	 	
    }
 
//   3.把某元素插入到父元素最上面中
     HTMLElement.prototype.upperChildTO=function(element){
     	   element.upperChild(this);
     }
     
//   4.把某元素插入到一个元素的下方
     HTMLElement.prototype.insertAfterTO=function(element){
     	   element.insertAfter(this);
     }
     
//   5.把某元素插入到父元素的最下方
     HTMLElement.prototype.appendChildTO=function(element){
     	   
     	   element.appendChild(this);
     	
     }
     
//   6.把元素插入到某个元素的上方
     HTMLElement.prototype.insertBeforeTO=function(element){
     	  let parent=element.parentNode;
     	  parent.insertBefore(this,element);
     }
    
//  7.把某元素中的子元素清除
     HTMLElement.prototype.empty=function(){
     	 let chis=this.childNodes;
     	 for(let i=chis.length-1;i>=0;i--){
     	 	this.removeChild(chis[i])
     	 }
     }

//   8.自己清除自己    remove
     HTMLElement.prototype.remove=function(){
     	let parent=this.parentNode;
     	parent.removeChild(this);
     }
//   9.next()    获取下一个元素的元素节点     nextAll（）获取后面所有的兄弟节点          nextUntil（h1）获取后面某部分的兄弟节点
//  找下一个兄弟元素
    HTMLElement.prototype.next=function(){
    	   let next=this.nextElementSibling;
    	   if(next){

    	   	 return next; 
    	   }else{
    	   	 return false
    	   }
    }
//获取后面所有的兄弟节点 
    HTMLElement.prototype.nextAll=function(){
    	  let nnext=this.next();
    	  let newarr=[];
    	  if(nnext){
    	  	newarr.push(nnext)
    	  }else{
    	  	return false;
    	  }
//  	  循环    不知道循环次数,只知道条件
    	  while(nnext){
    	  	nnext=nnext.next();
    	  	newarr.push(nnext);
    	  	}
//  	  	去掉数组的最后一个元素
         newarr.pop();
         return newarr;
    	  
    }

// nextUntil（）获取后面某部分的兄弟节点
     HTMLElement.prototype.nextUntil=function(element){
    	  let nnextu=this.nextAll();
//  	  console.log(nnextu)
    	  let newarr=[];
//  	  判断nodeName
    	  
    	  for (let i=0;i<nnextu.length;i++) {
    	  let nnextName=nnextu[i].nodeName;
//  	  console.log(nnextName)
    	  let eName=element.nodeName;
//  	  console.log(eName)
    	  	 if(nnextName==eName){
    	  	   newarr.push(nnextu[i])
    	     }
    	  }
//  	  	去掉数组的最后一个元素
         return newarr;
    	  
    }  
//   10.previous    和上面相同
//  找上一个兄弟元素
    HTMLElement.prototype.previous=function(){
    	   let previou=this.previousElementSibling;
    	   if(previou){

    	   	 return previou; 
    	   }else{
    	   	 return false
    	   }
    }
    
    //获取上面所有的兄弟节点 
    HTMLElement.prototype.previousAll=function(){
    	  let pprevious=this.previous();
    	  let newarr=[];
    	  if(pprevious){
    	  	newarr.push(pprevious)
    	  }else{
    	  	return false;
    	  }
//  	  循环    不知道循环次数,只知道条件
    	  while(pprevious){
    	  	pprevious=pprevious.previous();
    	  	newarr.push(pprevious);
    	  }
    	  //  	  	去掉数组的最后一个元素
         newarr.pop();
         return newarr;
    	  
    }

// 获取前面某部分的兄弟节点
     HTMLElement.prototype.previousUntil=function(element){
    	  let previousu=this.previousAll();
//  	  console.log(nnextu)
    	  let newarr=[];
//  	  判断nodeName
    	  
    	  for (let i=0;i<previousu.length;i++) {
    	  let previousName=previousu[i].nodeName;
//  	  console.log(nnextName)
    	  let eName=element.nodeName;
//  	  console.log(eName)
    	  	 if(previousName==eName){
    	  	   newarr.push(previousu[i])
    	     }
    	  }
//  	  	去掉数组的最后一个元素
         return newarr;
    	  
    }  
//   11   closet(div)    离他最近的div
     HTMLElement.prototype.closet=function(element){
//   	后面
     	let nexts=this.nextAll();
        let jfirst=0;
        let nextsName=0;
        let close=0;
     	for (let j=0;j<nexts.length;j++) {
    	   nextsName=nexts[j].nodeName;
//  	  console.log(nnextName)
    	  let eName=element.nodeName;
//  	  console.log(eName)
          	 if(nextsName==eName){
    	  	    jfirst=j;
    	  	    close=nexts[j]
    	  	    break ;
    	     }
    	  }
//   	前面
        let pres=this.previousAll();
        let presName=0
//  	  判断nodeName
    	  let ifirst=0;
    	  let close1=0;
    	  for (let i=0;i<pres.length;i++) {
    	   presName=pres[i].nodeName;
//  	  console.log(nnextName)
    	  let eName=element.nodeName;
//  	  console.log(eName)
    	  	 if(presName==eName){
    	  	   ifirst=i;
    	  	   close1=pres[i]
    	  	   break;
    	     }
    	  }
    	  
    	  if(ifirst<jfirst){
    	  	console.log(1);
    	  	return close1;
    	  }else{
    	  		console.log(2);
    	  	return close;
    	  }
     	
     }
//   parent()    找父元素;    parents()所有的父元素;    parentsUntil()某部分的父元素
     HTMLElement.prototype.parent=function(){
     	   let parentN=this.parentNode;
     	   return parentN;
     }
     
     HTMLElement.prototype.parents=function(){
     	   let pparent=this.parent();
     	   let newarr=[];
     	   if(pparent){
     	   	   newarr.push(pparent)
     	   }else{
     	   	  return false;
     	   }
     	   while(pparent){
     	   	   pparent=pparent.parentNode;
     	   	   newarr.push(pparent)
     	   }
     	   newarr.pop();
     	   return newarr;
     }


 HTMLElement.prototype.parentsUntil=function(num){
     	   let pparents=this.parent();
     	   let newarr=[];
     	   if(pparents){
     	   	   newarr.push(pparents)
     	   }else{
     	   	  return false;
     	   }
     	   for(let i=0;i<num-1;i++){
     	   	  pparents=pparents.parentNode;
     	   	   newarr.push(pparents)
     	   }
     	   return newarr;
     }
