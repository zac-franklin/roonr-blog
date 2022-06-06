const comic_texts = document.getElementsByClassName('comic');

for(var i = 0; i < comic_texts.length; i++)
{
	comic_texts[i].setAttribute("text", comic_texts[i].innerText);
}
