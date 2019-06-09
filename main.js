
function set(){
    var o=document.getElementsByTagName('p');
    for (let i = 0; i < o.length; i++) {
        o[i].setAttribute('onclick','shift(this)');
        o[i].index=i;
    }
}
function shift(elem){
    elem.style.width='100px';
    elem.style.height='100px';
    elem.style.background='green';
    elem.style.position='absolute';
    var n=elem.index*100;
    elem.style.top=n+'px';
    elem.style.left=n+'px';
}
