function validation(){
    var box1=document.forms["help"]["1"].value;
    var box2=document.forms["help"]["2"].value;
if(box1!=""&&box2!=""){document.getElementById("subm").style.display="block";
}else {document.getElementById("subm").style.display="none";

}
}
