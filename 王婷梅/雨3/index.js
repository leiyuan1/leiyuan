/*
* @Author: wz
* @Date:   2017-08-16 11:15:24
* @Last Modified by:   wz
* @Last Modified time: 2017-08-16 14:32:33
*/

window.onload=function(){





    let cw=innerWidth;
    let ch=innerHeight;
	for(let i=0;i<200;i++){


	let divs=document.createElement('div')
	divs.classList.add('yu')
	document.body.appendChild(divs)
	let lefts=Math.random()*(cw-200)+100
	let tops=Math.random()*200
	divs.style.left=`${lefts}px`
	divs.style.top=`${tops}px`
	console.log(divs)
	// setTimeout(()=>{
	
 //    divs.style.transitionDelay=`100ms`
	// divs.style.left=`${lefts}px`
	// divs.style.top=`${tops}px`
	// }, 100)
	// 
  }
   document.body.onclick=function(){
  		let yus=document.querySelectorAll('.yu')
  		console.log(yus)
		yus.forEach((element)=>{
	    element.style.transitionDelay=`${Math.random()}s`
		// divs.style.left=`${lefts}px`
		// element.style.transation=`all 1s`
		element.style.top=`${ch}px`

	    element.addEventListener('webkitTransitionEnd',function(){
		  	element.style.transition=`none`
		     element.style.top=`-50px`
     	  setTimeout(()=>{
				    element.style.transition = `all ease 1s ${Math.random()}s`;
					element.style.top=`${ch}px`
					element.style.transition = `all ease 1s ${Math.random()}s`;	
					}, 1)

  	       },1)

		})	
	}
  
// console.log(yus)

  	
  

}

