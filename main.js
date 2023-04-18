var code =document.getElementById('btn')
var p1 = document.getElementById('p1')
var a =document.getElementById('body')
var quotes =[
    'A','B','C','E','F','d',1,2,3,4,5,6,7,8,9,0
]
code.addEventListener('click',change)  
function change(){
var color='#'
for(var i=0;i<6; i++){
 color+=quotes[Math.floor(Math.random()*16)]
}
p1.innerHTML=color
a.style.background=color   
}