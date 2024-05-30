const dis=document.getElementById("display");
function display(input){
    dis.value+=input;
}
function cleardisplay(){
dis.value="";
}
function deleteLast() {
    dis.value = dis.value.slice(0, -1);
}
function calculate(){
    try{
      
    dis.value=eval(dis.value);
}
catch(error){
    dis.value="Error";
}
}