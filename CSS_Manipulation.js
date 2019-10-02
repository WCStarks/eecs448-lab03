function color() {
    let back_red = document.getElementById("background-red").value;
    let back_green = document.getElementById("background-green").value;
    let back_blue = document.getElementById("background-blue").value;

    let bord_red = document.getElementById("border-red").value;
    let bord_green = document.getElementById("border-green").value;
    let bord_blue = document.getElementById("border-blue").value;
    let bord_width = document.getElementById("width").value;

    let par = document.getElementById("text");
    par.style.backgroundColor = `rgb(${back_red}, ${back_green}, ${back_blue})`;
    par.style.border = `${bord_width}px solid rgb(${bord_red}, ${bord_green}, ${bord_blue})`;
}
