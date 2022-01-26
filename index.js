var c=0;

a=document.getElementById("count").innerText;
a.innerText=c;

function inc(){
    c=c+1;
    document.getElementById("count").innerText=c;
}

function dec(){
    c=c-1;
    document.getElementById("count").innerText=c;
}