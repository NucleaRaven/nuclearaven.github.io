function validation(){
    var box1=document.forms["help"]["b1"].value;
    var box2=document.forms["help"]["b2"].value;
if(box1!=""&&box2!=""){
    document.getElementById("submit").style.display="block";
}else {
    document.getElementById("submit").style.display="none";
}
}
/*this took too long to learn but i got there*/
