var icon = document.getElementById('icon');
function icons(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        icon.src = 'images/dark theme icon/sun.png';
    }
    else{
        icon.src = 'images/dark theme icon/moon.png';
    }
}