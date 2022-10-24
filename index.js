var ball=document.getElementById("ball");
var a=1;
var b=1;
var c=1;
var d=1;
var interval1=true;
var interval2=true;
var interval4=true;
var interval5=true;
document.getElementById("btn1").addEventListener("click",()=>{
     interval2=false;
     interval4=false;
     interval5=false;
     // while(interval1==true){
     let ball2=ball.style.marginTop;
     console.log(ball2);
     let ball1=parseInt(ball2.substring(0,ball2.length-2));
     ball1-=a;
     ball.style.marginTop=ball1+"px";
     a++;
     console.log(ball1);
     // }
     //  interval1=true;
     //  interval2=true;
     //  interval4=true;
     //  interval5=true;
      
})
document.getElementById("btn2").addEventListener("click",()=>{
     interval1=false;
     interval4=false;
     interval5=false;
     // while(interval2==true){
     let ball2=ball.style.marginLeft;
     let ball1=parseInt(ball2.substring(0,ball2.length-2));
     ball1-=c;
     ball.style.marginLeft=ball1+"px";
     c++;
     console.log(ball1);
     // }
     // interval1=true;
     //  interval2=true;
     //  interval4=true;
     //  interval5=true;
})
document.getElementById("btn5").addEventListener("click",()=>{
     interval2=false;
     interval1=false;
     interval5=false;
     // while(interval4==true){
          let ball2=ball.style.marginTop;
          let ball1=parseInt(ball2.substring(0,ball2.length-2));
          ball1+=d;
          ball.style.marginTop=ball1+"px";
          d++;
          console.log(ball1);
     // }
     // interval1=true;
     //  interval2=true;
     //  interval4=true;
     //  interval5=true;
});
document.getElementById("btn4").addEventListener("click",()=>{
     interval2=false;
     interval4=false;
     interval1=false;
     // while(interval5==true){
          let ball2=ball.style.marginLeft;
          let ball1=parseInt(ball2.substring(0,ball2.length-2));
          ball1+=b;
          ball.style.marginLeft=ball1+"px";
          b++;
          console.log(ball1);
     // }
     // interval1=true;
     //  interval2=true;
     //  interval4=true;
     //  interval5=true;
});