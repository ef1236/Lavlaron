

function updateText(boxNumber,otherInput=false) {

  if(otherInput){    
    var text = document.getElementById('otherinput' + boxNumber).value;
}
  else{
    var text = document.getElementById('text' + boxNumber).value;

  }


  if(boxNumber==1){
    textbox = document.getElementById("textOverlay1")
    textbox.style.color="white";
    vmark = document.getElementById("Vmark1")
    switch(text){
      case "מחנה קיץ":
        vmark.style.top = "150px";
        vmark.style.left = "505px";
        vmark.style.color = "black";
        break;
      case "קורס":
        vmark.style.top = "150px";
        vmark.style.left = "450px";
        vmark.style.color = "black";
        break;
      case "טיול שבטי":
        vmark.style.top = "150px";
        vmark.style.left = "400px";
        vmark.style.color = "black";
        break;
      case "טיול הנהגתי":
        vmark.style.top = "150px";
        vmark.style.left = "345px";
        vmark.style.color = "black";
        break; 
      case "יום שבט":
        vmark.style.top = "150px";
        vmark.style.left = "290px";
        vmark.style.color = "black";
        break; 
      case "פעילות ימית":
        vmark.style.top = "150px";
        vmark.style.left = "240px";
        vmark.style.color = "black";
        break;
      default:
        vmark.style.top = "0x";
        vmark.style.left = "0px";
        vmark.style.color = "white";
        textbox.style.color = "black";
        break; 
    }
  }

  if(boxNumber==14)
  {
    vmark = document.getElementById("Vmark14")
    switch(text)
    {
      case "":
        vmark.style.color = "white"; 

        break;
      case "לא":
        vmark.style.top = "332px";
        vmark.style.left = "508px";
        vmark.style.color = "black"; 
        break;

      default:
        vmark.style.top = "347px";
        vmark.style.left = "508px";
        vmark.style.color = "black"; 
        break;

    }

  }



    var textOverlay = document.getElementById('textOverlay' + boxNumber);
    textOverlay.innerText = text;
    //positionTextOverlay();


}





if(false)
  {var container = document.getElementById('photoContainer');
  container.addEventListener('mousemove', function(event) {
    var markerX = event.offsetX;
    var markerY = event.offsetY;

    console.log('Marker position relative to container:', markerX, markerY);
  });
}

function positionTextOverlay() {
    var textOverlays = document.getElementsByClassName('text-overlay');
    var photoContainer = document.getElementById('photoContainer');
    var photo = photoContainer.querySelector('img');
    var photoWidth = photo.clientWidth;
    var photoHeight = photo.clientHeight;

    for (var i = 0; i < textOverlays.length; i++) {
        var textOverlay = textOverlays[i];
        var textOverlayWidth = textOverlay.offsetWidth;
        var textOverlayHeight = textOverlay.offsetHeight;

        var leftPosition = (photoWidth - textOverlayWidth) / 2;
        var topPosition = (photoHeight - textOverlayHeight) / 2;

        textOverlay.style.left += leftPosition + 'px';
        textOverlay.style.top += topPosition + 'px';
    }
}
function captureScreenshot() {
    setTimeout(function() {
      html2canvas(document.body).then(function(canvas) {
        var screenshot = canvas.toDataURL("image/png");
        var link = document.createElement('a');
        link.href = screenshot;
        link.download = 'screenshot.png';
        link.click();
      });
    }, 1000); // Adjust the delay (in milliseconds) as needed
  }
  
  
function handleSelectChange(boxNumber) {
  var selectElement = document.getElementById("text"+boxNumber);
  var otherInput = document.getElementById("otherinput"+boxNumber);

  if(boxNumber==1){
    var otherInput = document.getElementById("otherinput1");

    if (selectElement.value == "אחר") {
      otherInput.style.display = "block";
    } else {
      otherInput.style.display = "none";
    }
  }
  else if(boxNumber==14)
  {


    if (selectElement.value == "כן") {
      for(i=1 ; i<=12 ; i++){
        var otherInput = document.getElementById("inputOverlay"+i);

        otherInput.style.display = "block";
      }
      
    }

    else {
      for(i=1 ; i<=12 ; i++){
        var otherInput = document.getElementById("inputOverlay"+i);

        otherInput.style.display = "none ";
      }
    }
    
  }
}
