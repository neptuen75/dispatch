const API = "여기에_앱스크립트_URL";

document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();

  const data = {
    date: document.getElementById("date").value,
    manager: document.getElementById("manager").value,
    site: document.getElementById("site").value,
    location: document.getElementById("location").value,
    vehicleType: document.getElementById("vehicleType").value,
    pallet: document.getElementById("pallet").value,
    vehicleCount: document.getElementById("vehicleCount").value,
    note: document.getElementById("note").value
  };

  fetch(API, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(() => {
    alert("저장 완료");
    loadData();
  });
});

function loadData(){
  fetch(API)
    .then(res => res.json())
    .then(data => {
      const tbody = document.querySelector("tbody");
      tbody.innerHTML = "";

      data.slice(1).forEach(row => {
        const tr = document.createElement("tr");
        row.forEach(cell => {
          const td = document.createElement("td");
          td.innerText = cell;
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });
    });
}

loadData();
