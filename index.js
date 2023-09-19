function colorflipper(){
    let red = Math.floor(Math.random() *256)
    let green =  Math.floor(Math.random() *256)
    let blue = Math.floor(Math.random() *256)

    let color = "rgb("+red+","+green+","+blue+")";
    document.getElementById("con").style.backgroundColor = color;
    document.getElementById("spancolor").textContent = color;
    localStorage.setItem('key', color)
}

function initialcolor(){
    let storedItem = localStorage.getItem('key');
    document.getElementById('con').style.backgroundColor = storedItem;
}

initialcolor(); 


