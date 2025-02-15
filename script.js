const usercolor= document.getElementById('color');
const usersize= document.getElementById('size');
const userfont= document.getElementById('font');
const paragraph = document.getElementById('test');
usercolor.addEventListener('input',function(){
    paragraph.style.color=usercolor.value;
});
usersize.addEventListener('input',function(){
    paragraph.style.fontSize=usersize.value+'px';
});
userfont.addEventListener('change',function(){
    paragraph.style.fontFamily=userfont.value;
});