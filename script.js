function showDetails(name, status, location, date) {

    document.getElementById("modalTitle").textContent = name;
    document.getElementById("modalStatus").textContent = status;
    document.getElementById("modalLocation").textContent = location;
    document.getElementById("modalDate").textContent = date;

    document.getElementById("detailsModal").style.display = "block";
}

function closeDetails() {

    document.getElementById("detailsModal").style.display = "none";
}

  
function openLostForm() {
    document.getElementById("lostForm").style.display = "block";
}

   function submitLostReport() {

    let itemName = document.getElementById("lostItemName").value;
    let location = document.getElementById("lostLocation").value;
    let date = document.getElementById("lostDate").value;
    let description = document.getElementById("lostDescription").value;
    let contact = document.getElementById("lostContact").value;

    let imageFile = document.getElementById("lostImage").files[0];

    if (!imageFile) {
        alert("Please select an item image!");
        return;
    }

    let reader = new FileReader();

    reader.onload = function () {

        let lostReport = {
            itemName: itemName,
            location: location,
            date: date,
            description: description,
            contact: contact,
            image: reader.result
        };

        let lostReports = JSON.parse(localStorage.getItem("lostReports")) || [];

        lostReports.push(lostReport);

        localStorage.setItem("lostReports", JSON.stringify(lostReports));

        alert("Lost item report saved successfully!");

    };

    reader.readAsDataURL(imageFile);
}
 function displayLostReport() {

    let savedReports = JSON.parse(localStorage.getItem("lostReports")) || [];

    let container = document.getElementById("reportedLostItems");

    container.innerHTML = "";

    savedReports.forEach(function(report) {

        container.innerHTML += `
            <div class="item-card">

                <div class="item-info">

                    <span class="status lost">LOST</span>

                    <img src="${report.image}" 
                         alt="${report.itemName}" 
                         class="reported-item-image">

                    <h3>${report.itemName}</h3>

                    <p>📍 ${report.location}</p>

                    <p>📅 ${report.date}</p>

                    <p>${report.description}</p>

                    <p>📞 ${report.contact}</p>

                </div>

            </div>
        `;

    });
}

displayLostReport();

displayLostReport();
function openFoundForm() {

    document.getElementById("foundForm").style.display = "block";

}
  function submitFoundReport() {

    let itemName = document.getElementById("foundItemName").value;
    let location = document.getElementById("foundLocation").value;
    let date = document.getElementById("foundDate").value;
    let description = document.getElementById("foundDescription").value;
    let contact = document.getElementById("foundContact").value;

    let imageFile = document.getElementById("foundImage").files[0];

    if (!imageFile) {
        alert("Please select an item image!");
        return;
    }

    let reader = new FileReader();

    reader.onload = function () {

        let foundReport = {
            itemName: itemName,
            location: location,
            date: date,
            description: description,
            contact: contact,
            image: reader.result
        };

        let foundReports = JSON.parse(localStorage.getItem("foundReports")) || [];

        foundReports.push(foundReport);

        localStorage.setItem("foundReports", JSON.stringify(foundReports));

        alert("Found item report saved successfully!");

    };

    reader.readAsDataURL(imageFile);
}
 function displayFoundReport() {

    let savedReports = JSON.parse(localStorage.getItem("foundReports")) || [];

    let container = document.getElementById("reportedFoundItems");

    container.innerHTML = "";

    savedReports.forEach(function(report) {

        container.innerHTML += `
            <div class="item-card">

                <div class="item-info">

                    <span class="status found">FOUND</span>

                    <img src="${report.image}"
                         alt="${report.itemName}"
                         class="reported-item-image">

                    <h3>${report.itemName}</h3>

                    <p>📍 ${report.location}</p>

                    <p>📅 ${report.date}</p>

                    <p>${report.description}</p>

                    <p>📞 ${report.contact}</p>

                </div>

            </div>
        `;

    });
}

 

displayFoundReport();
function goToLostItems() {
    document.getElementById("lost-items").scrollIntoView({
        behavior: "smooth"
    });
}

function goToFoundItems() {
    document.getElementById("found-items").scrollIntoView({
        behavior: "smooth"
    });
}
