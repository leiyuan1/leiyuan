///^[a-zA-Z][a-zA-Z1-6]{0,8}$/ .test(selector)   正则表达式;
//window.onload=function(){
function $(select,ragber){
	if(typeof select == 'string'){
		if(ragber == undefined){
			ragber = document;
		}
		console.log(ragber)
//		1.去空
       let selector=select.trim();
//     2.获取首字符
        let selectfir=selector.charAt(0);
        console.log(selectfir)
		 if(selectfir=='#'){
//		 	获取截取除首元素的参数
//         console.log(1)
//         console.log(selector.slice(1))
           console.log(ragber.getElementById(selector.slice(1)))
		 return	 ragber.getElementById(selector.slice(1));
		 
		 	
		 	
		 }else if(selectfir=='.'){
//		 	console.log(1)
		  return ragber.getElementsByClassName(selector.slice(1));
		 }else if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)){
		 	return document.getElementsByTagName(selector)
		 }
		
	}else if(typeof select == 'function'){
		
		window.onload=function(){
			select();
		}
	}
	
}

function html(element,content){
	if(arguments.length == 2){
		console.log(element);
		console.log(content)
		element.innerHTML=content;
	}else if(arguments.length==1){
		$(element)
	}
}

function on(cleection,type,fn){
	  for (let i=0;i<cleection.length;i++) {
	  	   cleection[i][type]=fn;
	  }
}

//动画

function animate(element,styleObj,speed,fn){
	let t=setInterval(function(){
//		获取属性
        for (let i in styleObj) {
        	let first=parseInt(getComputedStyle(element,null)[i]);
//      	console.log(i);
//      	console.log(styleObj[i])
//      	判断终止条件
             if(first == styleObj[i]){
             	clearInterval(t);
             	if(fn){
//           		暂时继承
//                  this.fn.call(element);
                       fn()
             	}
             }
        	element.style[i]=`${first+speed}px`;
        }
	},500)


}
