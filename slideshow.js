let slides = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg",
              "images/image4.jpg", "images/image5.jpg"];
let index = 0;

function prev()
{
    if (index == 0) {
        index = slides.length - 1;
    }
    else
    {
        index--;
    }
    document.getElementById("slide").src = slides[index];
}

function next()
{
    if (index == slides.length - 1)
    {
        index = 0;
    }
    else
    {
        index++;
    } 
    document.getElementById("slide").src = slides[index];
}
