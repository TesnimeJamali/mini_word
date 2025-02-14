const usercolor= document.getElementById('color');
const usersize= document.getElementById('size');
const userfont= document.getElementById('font');
const paragraph = document.getElementById('p');
usercolor.addEventListener('change',function(){
    paragraph.style.color=usercolor.value;
});
usersize.addEventListener('change',function(){
    paragraph.style.fontSize=usersize.value+'px';
});
userfont.addEventListener('change',function(){
    paragraph.style.fontFamily=userfont.value;
});