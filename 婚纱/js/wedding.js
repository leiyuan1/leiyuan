/*
* @Author: lenovo
* @Date:   2017-09-03 21:27:01
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-03 22:02:35
*/
window.onload=function(){
	let ul=document.querySelector('.imgs');
	let lis=document.querySelectorAll('.imgs>li');
	let temp=document.querySelectorAll('.temp');
	let tempTop=document.querySelectorAll('.temp-top');
	let tempBottom=document.querySelectorAll('.temp-bottom')
	let height=temp[0].offsetHeight;
	console.log(height)
	lis.forEach(function(value,index){
        value.onmouseenter=function(){
        	temp[index].style.background=`rgba(255, 255, 255, 0.5)`;
        	tempTop[index].style.transition='all ease 0.8s';
        	tempTop[index].style.top=`${0.38*height}px`;
        	tempTop[index].style.opacity=1;
        	tempBottom[index].style.transition='all ease 0.8s';
        	tempBottom[index].style.top=`${0.52*height}px`;
        	tempBottom[index].style.opacity=1;
        }
        value.onmouseleave=function(){
        	temp[index].style.background=`rgba(255, 255, 255, 0)`;
        	tempTop[index].style.transition='none';
        	tempTop[index].style.top=`-40px`;
        	tempTop[index].style.opacity=0;
        	tempBottom[index].style.transition='none';
        	tempBottom[index].style.top=`${height}px`;
        	tempBottom[index].style.opacity=0;
        }
	})
}