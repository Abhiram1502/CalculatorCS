var buttons = document.getElementsByClassName("button");
var screen = document.getElementById("screen");
var equal = document.getElementById("equal");

for(let button of buttons){
    button.addEventListener('click',function(){
        const value=this.value;
        if(value==="AC"){
            screen.value="";
        }else if(value==="DEL"){
            screen.value=screen.value.slice(0,-1);
        }else{
            screen.value+=value;
        }
    });
}

equal.addEventListener('click',function(){
    screen.value=eval(screen.value).toFixed(5);
});