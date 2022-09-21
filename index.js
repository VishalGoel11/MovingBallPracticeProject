var ball=document.getElementById("ball");
ball.style.marginTop="2px";
ball.style.marginLeft="500px";
// ball.style.marginRight="px";
// ball.style.marginBottom="342px";
var a=2;
var b=2;
var c=2;
var d=2;
var interval1;
var interval2;
var interval4;
var interval5;
document.getElementById("btn1").addEventListener("click",()=>{
interval1=setInterval(function(){
     let ball2=ball.style.marginTop;
     let ball1=parseInt(ball2.substring(0,ball2.length-2));
     ball1-=a;
     ball.style.marginTop=ball1+"px";
     a++;
},200);})
document.getElementById("btn2").addEventListener("click",()=>{
 interval2=setInterval(function(){
     let ball2=ball.style.marginLeft;
     let ball1=parseInt(ball2.substring(0,ball2.length-2));
     ball1-=b;
     ball.style.marginLeft=ball1+"px";
     b++;
},200);
})
document.getElementById("btn5").addEventListener("click",()=>{
     interval5= setInterval(function(){
          let ball2=ball.style.marginTop;
          let ball1=parseInt(ball2.substring(0,ball2.length-2));
          ball1+=a;
          ball.style.marginTop=ball1+"px";
          a++;
     },200);
});
document.getElementById("btn4").addEventListener("click",()=>{
       interval4=setInterval(function(){
          let ball2=ball.style.marginLeft;
          let ball1=parseInt(ball2.substring(0,ball2.length-2));
          ball1+=b;
          ball.style.marginLeft=ball1+"px";
          a++;
     },200);
});
document.getElementById("btn3").addEventListener("click",()=>{
     clearInterval(interval1);
     clearInterval(interval2);
     clearInterval(interval4);
     clearInterval(interval5);
});