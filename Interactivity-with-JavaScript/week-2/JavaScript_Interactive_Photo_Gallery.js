function upDate(previewPic)
{
    document.getElementById('image').innerHTML=previewPic.alt;
    document.getElementById('image').style.backgroundImage="url("+previewPic.src+")";
}
   
function unDo()
{
    document.getElementById('image').innerHTML="Hover over an image below to display here.";
    document.getElementById('image').style.backgroundImage="url('')";
}

