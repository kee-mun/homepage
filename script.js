function changePoster(){
    document.getElementById('main').innerHTML = "<iframe src='poster.html'></iframe>";
}

function changeEmail(){
    document.getElementById('main').innerHTML = "";
    setTimeout(message,100);
    
}

function message(){
    alert('email address = 202144062@itc.ac.kr');   
}