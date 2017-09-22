window.onload=function(){
	let section=document.querySelector('section');
//	获取侧导航
    let aside=document.querySelector('.aside');
//  console.log(aside)
let arr1=[
	         {'name':'李巧兰','phone':'18734969043','zimu':'liqiaolan'},
	         {'name':'杨超','phone':'15935500096','zimu':'yangchao'},
	         {'name':'雷媛','phone':'18435840249','zimu':'leiyuan'},
	         {'name':'聂富红','phone':'18435841185','zimu':'niefuhong'},
	         {'name':'史佳美姊','phone':'18910142917','zimu':'shijiameizi'},
	         {'name':'王琪','phone':'18435840227','zimu':'wangqi'},
	         {'name':'康鹏云','phone':'18739087527','zimu':'kangpengyun'},
	         {'name':'屈志伟','phone':'18381042007','zimu':'quzhiwei'},
	         {'name':'王婷梅','phone':'13111183022','zimu':'wangtingmei'},
	         {'name':'魏凡','phone':'15291733643','zimu':'weifan'},
	         {'name':'肖露','phone':'13468761098','zimu':'xiaolu'},
	         {'name':'赵天娇','phone':'15808844211','zimu':'zhaotianjiao'}
 
	        ]
	
//	console.log(arr)

//第一种   直接
//	localStorage.contact=JSON.stringify(arr);
////	console.log(localStorage.contact)
//	let tage=JSON.parse(localStorage.contact);
////	console.log(tage)
//第二种
     let tage=contact()
     console.log(tage)
     function contact(){
//   	 获取
          let tage= localStorage.getItem('arr1')? JSON.parse(localStorage.getItem('arr1')):false;
          if(!tage){
          	localStorage.setItem('arr1',JSON.stringify(arr1));
          	tage=JSON.parse(localStorage.getItem('arr1'));
             
          	
          }
//        console.log(tage)
//        return tage;
          //console.log(tage)
          return tage;
     }
     
     
     //	搜索栏
	//获取搜索栏
    let sousuo=document.querySelector('input');
    console.log(sousuo)
    let split=document.querySelector('.split');
    let hs=sousuo.offsetHeight+split.offsetHeight;

 
   sousuo.onkeyup=function(){
       let cont=sousuo.value.trim();
       let arr1=[];
     tage.forEach(function(element){

             if(element.name.includes(cont) || element.phone.includes(cont) || element.zimu.includes(cont)){
          	    arr1.push(element)
             }
           	   big(arr1)
         })  
          
     
     }
   
   
   
   

   function big(tage){
   	
   	   //  声明对象
    let obj={};
	for(let i=0;i<tage.length;i++){
		let first=tage[i].zimu.charAt(0).toUpperCase();
//	console.log(first)
//判断是否存在此字母
         if(!obj[first]){
         	 obj[first]=[];
         }
         obj[first].push(tage[i])
//       console.log(obj[first])
        }
//	console.log(obj)
	let rank=Object.keys(obj).sort();
//	console.log(rank)
	section.innerHTML='';
	
	rank.forEach(function(value){
		section.innerHTML+=`
		                    <dl>${value}</dl>
                            
		                  `;

		  obj[value].forEach(element=>{
		  	   section.innerHTML+=`
		                    <dd><a href="tel:${element.phone}">${element.name}</a></dd>
		                  `;
		  })
	})
	rank.forEach(function(value){
        
		aside.innerHTML +=`
	                 <li>${value}</li>
	                 `
	})
//	侧导航
	let lis=document.querySelector('li');
		let aTop=lis.offsetHeight*rank.length
		aside.style.marginTop=-(aTop/2)+'px';
   
// 滑动
    let dls=document.querySelectorAll('dl');
//  console.log(dls)
//  dls距离文档的高度
    let darr=[];
    dls.forEach(value=>{
    	let vTop=value.offsetTop
    	darr.push(vTop);
    })
     // console.log(darr);
    window.onscroll=function(){
    	   let sTop=document.body.scrollTop ||document.documentElement.scrollTop;
 	   console.log(sTop);
//        判断
          darr.forEach((value,index)=>{
            // console.log(rank[index])
          	    if(value <= sTop+hs){
                  // console.log(value)
                  // console.log(rank[index])
          	        split.innerHTML=`${rank[index]}`
                }
          })
    }
   
}
    let bigs=big(tage);

          
      
    
    
}
