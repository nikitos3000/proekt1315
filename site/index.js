
document.getElementById("house-type").addEventListener("change", function() {
    let multifamilyQuestions = document.getElementById("multifamily-questions");
    let houseQuestions = document.getElementById("house-questions");
    
    if (this.value === "multifamily") {
      multifamilyQuestions.style.display = "block";
      houseQuestions.style.display = "none";
    } else if (this.value === "private") {
      multifamilyQuestions.style.display = "none";
      houseQuestions.style.display = "block";
    }
  });
  

  document.getElementById("calculate-button").addEventListener("click", function() {
    let location = document.getElementById("location").value;
    let houseType = document.getElementById("house-type").value;
    let price = 0;
    

    if (location === "center") {
      price += 100000;
    } else if (location === "outskirts") {
      price += 50000;
    }
    
    if (houseType === "multifamily") {
      let floors = parseInt(document.getElementById("floors").value);
      let apartmentFloor = parseInt(document.getElementById("apartment-floor").value);
      let totalArea = parseInt(document.getElementById("total-area").value);
      let rooms = document.getElementById("rooms").querySelector("button:checked").value;
      let condition = document.getElementById("condition").value;
      

      
    } else if (houseType === "private") {
      let houseFloors = parseInt(document.getElementById("house-floors").value);
      let houseRooms = document.getElementById("house-rooms").querySelector("button:checked").value;
      let houseArea = parseInt(document.getElementById("house-area").value);
      let landArea = parseInt(document.getElementById("land-area").value);
      

    }
    
    let currency = document.getElementById("currency").value;
    let priceElement = document.getElementById("price");

    priceElement.innerHTML = price + " " + currency;
    document.getElementById("result").style.display = "block";
  });
  