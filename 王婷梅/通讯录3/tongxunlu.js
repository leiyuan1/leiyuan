/*
   姓名       电话      pinyin
 * */
window.onload=function(){
	let data=[
		{'name':'张mm','phone':'13546287946','pinyin':'zhang'},
		{'name':'郭mm','phone':'18306890504','pinyin':'guo'},
		{'name':'李mm','phone':'13546287946','pinyin':'li'},
		{'name':'杨mm','phone':'15468154586','pinyin':'yang'},
		{'name':'刘mm','phone':'13546287946','pinyin':'liu'},
		{'name':'张mm','phone':'13546287946','pinyin':'zhang'},
		{'name':'郭mm','phone':'18306890504','pinyin':'guo'},
		{'name':'李mm','phone':'13546287946','pinyin':'li'},
		{'name':'杨mm','phone':'15468154586','pinyin':'yang'},
		{'name':'刘mm','phone':'13546287946','pinyin':'liu'},
		{'name':'张mm','phone':'13546287946','pinyin':'zhang'},
		{'name':'郭mm','phone':'18306890504','pinyin':'guo'},
		{'name':'李mm','phone':'13546287946','pinyin':'li'},
		{'name':'杨mm','phone':'15468154586','pinyin':'yang'},
		{'name':'刘mm','phone':'13546287946','pinyin':'liu'},
		{'name':'张mm','phone':'13546287946','pinyin':'zhang'},
		{'name':'郭cx','phone':'18306890504','pinyin':'guo'},
		{'name':'李zc','phone':'13546287946','pinyin':'li'},
		{'name':'杨cz','phone':'15468154586','pinyin':'yang'},
		{'name':'刘cz','phone':'13546287946','pinyin':'liu'},
		{'name':'张sd','phone':'13546287946','pinyin':'zhang'},
		{'name':'郭da','phone':'18306890504','pinyin':'guo'},
		{'name':'李ad','phone':'13546287946','pinyin':'li'},
		{'name':'杨ad','phone':'15468154586','pinyin':'yang'},
		{'name':'刘rw','phone':'13546287946','pinyin':'liu'},
		{'name':'张sd','phone':'13546287946','pinyin':'zhang'},
		{'name':'郭ad','phone':'18306890504','pinyin':'guo'},
		{'name':'李ew','phone':'13546287946','pinyin':'li'},
		{'name':'杨fs','phone':'15468154586','pinyin':'yang'},
		{'name':'刘tr','phone':'13546287946','pinyin':'liu'},
		{'name':'张wr','phone':'13546287946','pinyin':'zhang'},
		{'name':'郭wr','phone':'18306890504','pinyin':'guo'},
		{'name':'李yt','phone':'13546287946','pinyin':'li'},
		{'name':'杨re','phone':'15468154586','pinyin':'yang'},
		{'name':'刘we','phone':'13546287946','pinyin':'liu'}
	];
	localStorage.data=JSON.stringify(data);
	let arr=JSON.parse(localStorage.data);
	
	
	let slide=document.querySelector('.slide')
	//第一种方法   用forEach遍历   获取首字符
	rander(data)
	function rander(arr){
		let arrObj={};
		arr.forEach(value=>{
			let first=value.pinyin.charAt(0).toUpperCase();
			if(!arrObj[first]){
				arrObj[first]=[];
			}
			arrObj[first].push(value)
		})
	
	let keys=Object.keys(arrObj).sort();
	//对应到页面中
	let dl=document.querySelector('dl')
	dl.innerHTML = '';
	slide.innerHTML = '';
	keys.forEach(element=>{
		
		dl.innerHTML+=`
			<dt>${element}</dt>
		`;
		//slide.innerHTML+=`${element}`;
		
		arrObj[element].forEach(value=>{
			dl.innerHTML+=`
				<dd><a href="tel:${value.phone}">${value.name}</a></dd>
			`;
		})
	})		
	
	let hights=slide.offsetHeigth;
	slide.style.marginTop=`-${hights}px`;
	
	
	//第二种方法   用for循环遍历
	/*fn(arr)
	function fn(arr){
		let arrObj={};
		for(let i=0;i<arr.length;i++){
			let first=arr[i].pinyin.charAt(0).toUpperCase();
			if(!arrObj[first]){
				arrObj[first]=[];
			}
		arrObj[first].push(arr[i]);
		}
		console.log(Object.keys(arrObj).sort());
	}*/
	
	//上拉显示相应的姓首字母
	let tip=document.querySelector('.tip')
	tip.innerText=keys[0];
	let header=document.querySelector('header')
	let heights=tip.offsetHeight+header.offsetHeight;
	let dts=document.querySelectorAll('dt')
	let tops=[];
	dts.forEach(element=>{
		tops.push(element.offsetTop)
	})
	window.onscroll=function(){
		let scrolls=document.body.scrollTop;
		tops.forEach((value,index)=>{
			
			if(value+dts[0].offsetHeight<heights+scrolls){
				tip.innerText=dts[index].innerText;
			}
		})
	}
}
	let input=document.querySelector('input')
	input.onkeyup=function(){
		
		let val=this.value.trim();
		let filter= data.filter(element=>
				element.name.includes(val)
		||element.phone.includes(val)
		)
		rander(filter)
	}
	
}


