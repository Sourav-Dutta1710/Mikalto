const labels = ["Standard Room", "Deluxe Room", "Ultra Deluxe Room"];
const images = ["standard-room", "deluxe-room", "ultradeluxe-room"];
const bedSizes = ["Queen Size Bed", "King Size Bed", "2 * King Size Bed"];
const size = ["55 sqm", "75 sqm", "100sqm"];
const price = ["$150","$250","$500"]

let index = 0;

function roomChange(choice) {
  document.getElementById("roomImage").classList.add("room-item");
  
  if (index === 2 && choice === 1)
    index = 0;
  else if(index === 0 && choice === 0)
    index = 2;
  else if(choice === 1)
    index++;
  else
    index--;

  document.getElementById("roomHeading").innerHTML = labels[index];
  document.getElementById("roomImage").innerHTML = `
    <img src="./images/rooms-section/${images[index]}.jpg" alt="Standard Room" class="img-fluid common-images">`
  document.getElementById("bed").innerHTML = bedSizes[index];
  document.getElementById("size").innerHTML = size[index];
  document.getElementById("price").innerHTML = price[index];
  setTimeout(refreshAnimation, 2000);
}

function refreshAnimation() {
  document.getElementById("roomImage").classList.remove("room-item");
}

function googleTranslate() {
  google.translate.TranslateElement({ pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'translate');
}


