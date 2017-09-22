/*
* @Author: wz
* @Date:   2017-08-23 09:05:34
* @Last Modified by:   wz
* @Last Modified time: 2017-08-24 00:07:33
*/


/*属性
  哪些字符
  个数
  速度
  得分
  关卡
  生命
  减分 


方法
  开始
  消除
  产生字符
      个数
      哪些
  下一关
  重新开始*/

window.onload=function(){
	function Game(){
	   this.charsheet=[
  ['A','img/0A.gif'],
  ['B','img/0B.gif'],
  ['C','img/0C.gif'],
  ['D','img/0D.gif'],
  ['E','img/0E.gif'],
  ['F','img/0F.gif'],
  ['G','img/0G.gif'],
  ['H','img/0H.gif'],
  ['I','img/0I.gif'],
  ['J','img/0J.gif'],  
  ['K','img/0K.gif'],
  ['L','img/0L.gif'],
  ['M','img/0M.gif'],
  ['N','img/0N.gif'],
  ['O','img/0O.gif'],
  ['P','img/0P.gif'],
  ['Q','img/0Q.gif'],
  ['R','img/0R.gif'],
  ['S','img/0S.gif'],
  ['T','img/0T.gif'],
  ['U','img/0U.gif'],
  ['V','img/0V.gif'],
  ['W','img/0W.gif'],
  ['X','img/0X.gif'],
  ['Y','img/0Y.gif'],
  ['Z','img/0Z.gif']
  ];
	   this.length=5;
	   this.arr=[];
	   this.speed=10;
     this.gk=10;
	   this.fs=0;
     this.hp=10;
     this.arr1=[];
	}

	Game.prototype={
		stare:function(){
          this.char1(this.length)
          this.drop()
          this.key()
		},
		char1:function(length){
          for(let i=0;i<length;i++){

          	this.char()
          	
          }
		},
     chackRpeat:function(c1){
      return this.arr.some(value=>(value.innerText==this.charsheet[c1][0]))
    },
    chackPosition:function(lefts){
      return this.arr1.some(value=>(Math.abs(value-lefts)<50))
    },


		char:function(){
           let c1=Math.floor(Math.random()*this.charsheet.length)
              
          	let div=document.createElement('div')
          	div.classList.add('char')
          	document.body.appendChild(div);
          	let lefts=Math.floor(Math.random()*(window.innerWidth-400)+200)
            do{
                c1=Math.floor(Math.random()*this.charsheet.length)
            }while(this.chackRpeat(c1))

            do{
               lefts=Math.floor(Math.random()*(window.innerWidth-400)+200)

            }while(this.chackPosition(lefts))

            div.innerText=this.charsheet[c1][0]
            let tops=Math.random()*100+50;

          	div.style.left=lefts+'px';
          	div.style.top=tops+'px';

            div.style.backgroundImage=`url(${this.charsheet[c1][1]})`;
          	this.arr.push(div);
            this.arr1.push(lefts);

		},
   

		drop:function(){
           let that=this;
           this.t=setInterval(function(){
           	for(let i=0;i<that.arr.length;i++){

           		let tops=that.arr[i].offsetTop;
           		that.arr[i].style.top=tops+that.speed+'px'
           		if(tops>600){

                let hp1=that.hp--;
                let hps=document.querySelector('div.hp>span')
                hps.innerText=hp1;
                if(hp1==0){
                  let hpp=confirm('很遗憾，再玩一次吧？')
                  if(hpp){

                    that.agin()
                    
                  }else{
                    close()
                  }
                }
             
           			document.body.removeChild(that.arr[i]);
                that.arr.splice(i,1)
           			that.arr1.splice(i,1)

           		}

           	}

           	if(that.arr.length<that.length){
           		that.char();
           	}


           },200)
		},

		key:function(){
// toLowerCase   转化为小写
			let that=this
			document.onkeydown=function(e){

				let zifu=String.fromCharCode(e.keyCode)

				for(let i=0;i<that.arr.length;i++){
					if(zifu==that.arr[i].innerText){
						let fsp=document.querySelector('div.fs>span')
						let fs1=that.fs++
             fsp.innerText=fs1

						if(fs1>=that.gk){
							var n1 = confirm('太棒啦，进入下一关吧？')
							if(n1){

                 if(that.length>=10){
                    that.next1()
                }
							  that.next()
							}else{
								close()
							}
                        
						}


						document.body.removeChild(that.arr[i])
            that.arr.splice(i,1)
						that.arr1.splice(i,1)
					}
				}
                
			}
		},
    agin:function(){
       clearInterval(this.t)
       
       for(let i=0;i<this.arr.length;i++){
          document.body.removeChild(this.arr[i])
      }

      this.arr=[]
      this.arr1=[]

      this.hp=10;
       this.fs=0;
       let fsp1=document.querySelector('div.fs>span')
       fsp1.innerText=0
       let hpp1=document.querySelector('div.hp>span')
       hpp1.innerText=10
       this.stare()
    },

		next:function(){
      clearInterval(this.t)
      for(let i=0;i<this.arr.length;i++){
          document.body.removeChild(this.arr[i])
      }

      this.arr=[]
			this.arr1=[]
      this.gk+=10
      this.hp=10;
      let hpp2=document.querySelector('div.hp>span')
       hpp2.innerText=10
			this.length++;
			this.stare();



		},

    next1:function(){
      clearInterval(this.t)
      for(let i=0;i<this.arr.length;i++){
          document.body.removeChild(this.arr[i])
      }

      this.arr=[]
      this.arr1=[]
      this.gk+=10
      this.speed+=5;
      // this.length++;
      this.stare();


    }


	}

	let game=new Game()
	game.stare()
}