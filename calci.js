let output=document.getElementById('output');

function get(num){
    output.value += num;
}

function calculate(){
    try{
        output.value = eval(output.value);
    }catch(err){
        alert("Invalid.");
    }
}

function Clear(){
    output.value = "";
}

function del(){
    output.value= output.value.slice(0,-1);
}