const labels = ["Standard Room","Deluxe Room"];
const images = ["standard-room","deluxe-room"];
let deluxeRoom = 0;

function roomChange(){
    document.getElementById("roomImage").classList.add("room-item");   
    if(deluxeRoom === 0)
      deluxeRoom++;
    else
      deluxeRoom--;
    document.getElementById("roomHeading").innerHTML = labels[deluxeRoom];
    document.getElementById("roomImage").innerHTML =`
    <img src="./images/rooms-section/${images[deluxeRoom]}.jpg" alt="Standard Room" class="img-fluid common-images">`
    setTimeout(refreshAnimation, 2000);
}

function refreshAnimation(){
    document.getElementById("roomImage").classList.remove("room-item");   
}

function googleTranslate() {
  google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE},'translate');
}
