var canvas = document.getElementById('text22');
var context = canvas.getContext('2d');
var isDrawing = false;

// Mouse events
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseleave', stopDrawing);

// Touch events
canvas.addEventListener('touchstart', startDrawing);
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', stopDrawing);

bools_array = []
for(i = 1;i<=23;i++){
  bools_array.push(false)
}
bools_array[0] = true
bools_array[18] = true






function startDrawing(event) {
  updateText(22)
  event.preventDefault();

  if (event.type === 'mousedown') {
    isDrawing = true;
  } else if (event.type === 'touchstart') {
    isDrawing = true;
    event = event.touches[0];
  }

  draw(event);
}

function draw(event) {
  if (!isDrawing) return;
  context.lineWidth = 2;
  context.lineCap = 'round';
  context.strokeStyle = '#000';
    

  var rect = canvas.getBoundingClientRect();

  var x, y;


  if (event.type.includes('mouse')) {
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;
  } else if (event.type.includes('touch')) {
    x = event.touches[0].clientX - rect.left;
    y = event.touches[0].clientY - rect.top;
  }
  x *=1/2
  y*=1/2

  context.lineTo(x, y);
  context.stroke();
  context.beginPath();
  context.moveTo(x, y);

  // Store signature data in a hidden input field
  document.getElementById('signatureInput').value = canvas.toDataURL();
}

function stopDrawing() {
  isDrawing = false;
  takeScreenshot()
  context.beginPath();
}

function clearSignature() {
  bools_array[22] = false
  missing = document.getElementById("missing22")
  missing.style.display = "block"
  context.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById('signatureInput').value = '';
}






function updateText(boxNumber,otherInput=false, firsttime = false) {
  
  if(boxNumber!=18 && !firsttime){
    
    missing = document.getElementById("missing" + boxNumber)
    missing.style.display = "none"
  }
  
  if(!firsttime){
    text = document.getElementById("text"+boxNumber).value
    console.log(text)
    if(text==""){
      missing = document.getElementById("missing" + boxNumber)
      missing.style.display = "block"
      alldone = document.getElementById("missingdone")
      alldone.style.display = "none"
      bools_array[boxNumber] = true
    }
    else
      {bools_array[boxNumber] = true}

    if(bools_array.every((element) => element===true)){
      console.log(bools_array)
      alldone = document.getElementById("missingdone")
      alldone.style.display = "block"
    }

  }

  if(otherInput){    
    console.log(boxNumber)
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
        vmark.style.top = "0px";
        vmark.style.left = "0px";
        vmark.style.color = "white";
        textbox.style.color = "black";
        break; 
    }
    var textOverlay = document.getElementById('textOverlay' + boxNumber);
   textOverlay.innerText = text;
    //positionTextOverlay();
  }

  else if(boxNumber==14)
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
    //var textOverlay = document.getElementById('textOverlay' + boxNumber);
    //textOverlay.innerText = text;
    //positionTextOverlay();
  }

  else if(boxNumber>=15 && boxNumber<=17){
    var checkbox = document.getElementById("text"+boxNumber)
    var vmark = document.getElementById("Vmark"+boxNumber)
    
    if(checkbox.checked)
    {
      vmark.style.color = "black"
      switch(boxNumber)
      {
        case 15:
          vmark.style.top = "619px";
          vmark.style.left = "510px";
          break;
        case 16:
          vmark.style.top = "646px";
          vmark.style.left = "436px";
          break;
        case 17:
          vmark.style.top = "670px";
          vmark.style.left = "466px";
          break;
      }

    }
    else
    {
      vmark.style.color = "black"
      switch(boxNumber)
      {
        case 15:
          vmark.style.color = "white"
          break;
        case 16:
          vmark.style.top = "646px";
          vmark.style.left = "381px";
          break;
        case 17:
          vmark.style.top = "670px";
          vmark.style.left = "399px";
          break;
      }
    }
  }
  
  else if(boxNumber==22){

  }
  else
  {
    var textOverlay = document.getElementById('textOverlay' + boxNumber);
    textOverlay.innerText = text;
    //positionTextOverlay();
  }

}





if(false)
  {var container = document.getElementById('photoContainer');
  container.addEventListener('mousemove', function(event) {
    var markerX = event.offsetX;
    var markerY = event.offsetY;

    console.log('Marker position relative to container:', markerY, markerX);
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
      html2canvas(document.body.photoContainer).then(function(canvas) {
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
      var otherInput = document.getElementById("otherinput14")
      otherInput.style.display = "block";

      for(i=1 ; i<=12 ; i++){

        var otherInput = document.getElementById("inputOverlay"+i);

        otherInput.style.display = "block";
      }
      
    }

    else {
      var otherInput = document.getElementById("otherinput14")
      otherInput.style.display = "none";
      for(i=1 ; i<=12 ; i++){
        var otherInput = document.getElementById("inputOverlay"+i);

        otherInput.style.display = "none ";
      }
    }
    
  }
}

function takeScreenshot() {
  // Get the source element
  const sourceElement = document.getElementById('text22');
  
  // Create a canvas element
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  
  // Set the canvas size to match the source element
  canvas.width = sourceElement.offsetWidth;
  canvas.height = sourceElement.offsetHeight;
  
  // Draw the source element onto the canvas
  context.drawImage(sourceElement, 0, 0);
  
  // Get the data URL of the canvas
  const dataURL = canvas.toDataURL();
  
  // Create an image element for displaying the screenshot
  const screenshotImage = document.createElement('img');
  screenshotImage.src = dataURL;
  
  // Get the destination element
  const destinationElement = document.getElementById('textOverlay22');
  
  // Clear the destination element and append the screenshot image
  destinationElement.innerHTML = '';
  destinationElement.appendChild(screenshotImage);
}
function captureSection() {
  // Get the section element to be captured
  const sectionElement = document.getElementById('photoContainer');
  
  // Use html2canvas to capture the section element as an image
  html2canvas(sectionElement)
    .then(function(canvas) {
      // Create a temporary link element
      const link = document.createElement('a');
      
      // Set the href attribute to the data URL of the canvas
      link.href = canvas.toDataURL();
      
      // Set the download attribute with the desired file name
      link.download = 'screenshot.png';
      
      // Programmatically trigger the download
      link.click();
    });
  }
