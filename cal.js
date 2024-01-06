function Reset(){
    var a=document.getElementById("a").value=null;
    var b=document.getElementById("b").value=null;
    var kq=document.getElementById("kq").value=null;
    var a=document.getElementById("log").innerText="";
}
function Sum(){
    checkempty(a,b)
    empty(a,b);
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;
    var r=parseFloat(a)+parseFloat(b);
    
    check(a,b,r);
    
}
function Minus(){
    checkempty(a,b)
    empty(a,b);
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;
    var r=parseFloat(a)-parseFloat(b);
    check(a,b,r);
 
}

function Multi(){
    checkempty(a,b)
    empty(a,b);
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;
    var r=parseFloat(a)*parseFloat(b);
    check(a,b,r);
    
}
function Devide(){
 checkempty(a,b)
 empty(a,b);
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;
    if (b==0 && b!=""){
        document.getElementById("log").innerText="Vui lòng nhập giá trị b khác 0!";
        var b=document.getElementById("b").value=null;
        var kq=document.getElementById("kq").value=null;
    }
    else{
        if(b!=0)
         var r=parseFloat(a)/parseFloat(b);
         check(a,b,r);
    }
   
}
function check(a,b,c){
    if(isNaN(c)==false){
        document.getElementById("kq").value=c;
        document.getElementById("log").innerText="";
    }
    else
        if(isNaN(a)==true && isNaN(b)==true) {
           document.getElementById("log").innerText="Vui lòng nhập giá trị a và b là số!";
           document.getElementById("a").value=null;
           document.getElementById("b").value=null;
           document.getElementById("kq").value=null;
    }
    else
        if(isNaN(a)==true) {
            document.getElementById("log").innerText="Vui lòng nhập giá trị a là số!";
            document.getElementById("a").value=null;
            document.getElementById("b").value=null;
            document.getElementById("kq").value=null;
    }
    else{
        if(isNaN(b)==true)
           document.getElementById("log").innerText="Vui lòng nhập giá trị b là số!";
           document.getElementById("a").value=null;
           document.getElementById("b").value=null;
           document.getElementById("kq").value=null;}
}
function empty(a,b){
   var a=document.getElementById("a").value;
   var b=document.getElementById("b").value;
   if(document.getElementById("a").value=="" && document.getElementById("b").value==""){
    document.getElementById("log").innerText="Vui lòng nhập số để tính!";

   }
}
function checkempty(a,b){
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;  
    if(document.getElementById("a").value!="" && document.getElementById("b").value==""){
        document.getElementById("log").innerText="Vui lòng nhập số B để tính!";  
    }
    else{
        if(document.getElementById("a").value=="" && document.getElementById("b").value!=""){
            document.getElementById("log").innerText="Vui lòng nhập số A để tính!";    
        }
    }
}