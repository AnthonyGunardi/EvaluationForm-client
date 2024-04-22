const steps = Array.from(document.querySelectorAll("form .step"));  
const nextBtn = document.querySelectorAll("form .next-btn");  
const prevBtn = document.querySelectorAll("form .previous-btn");  
const form = document.querySelector("form"); 
const teamCount = document.querySelector("form #jumlahTim"); 

teamCount.addEventListener("input", () => {  
  generateFields() 
 }); 

nextBtn.forEach((button) => {  
 button.addEventListener("click", () => {  
  changeStep("next");  
 });  
});

prevBtn.forEach((button) => {  
 button.addEventListener("click", () => {  
  changeStep("prev");  
 });  
});

form.addEventListener("submit", (e) => {  
 e.preventDefault();  
 const inputs = [];  
 form.querySelectorAll("input").forEach((input) => {  
  const { name, value } = input;  
  inputs.push({ name, value });  
 });  
 console.log(inputs);  
 form.reset();  
});

function changeStep(btn) {  
 let index = 0;  
 const active = document.querySelector(".active");  
 index = steps.indexOf(active);  
 steps[index].classList.remove("active");  
 if (btn === "next") {  
  index++;  
 } else if (btn === "prev") {  
  index--;  
 }  
 steps[index].classList.add("active");  
}

function generateFields() {
  let jumlahTim = document.getElementById('jumlahTim').value;
  let container = document.getElementById('dynamicFieldsContainer');
  container.innerHTML = ''; // Clear previous fields

  for (let i = 1; i < jumlahTim; i++) {
    // div 'Nama Anggota Tim'
    let nameDiv = document.createElement("div");
    let nameLabel = document.createElement('label');
    let nameInput = document.createElement('input');
    nameDiv.classList.add("form-control");
    nameLabel.innerHTML = 'Nama Anggota Tim ' + (i+1);
    nameInput.type = 'text';
    nameInput.placeholder = 'Nama Anggota Tim ' + (i+1);
    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameInput);
    nameDiv.appendChild(document.createElement('br'));
    container.appendChild(nameDiv);

    // div 'Unit Kerja'
    let unitDiv = document.createElement("div");
    let unitLabel = document.createElement('label');
    let unitInput = document.createElement('input');
    unitDiv.classList.add("form-control");
    unitLabel.innerHTML = 'Unit Kerja';
    unitInput.type = 'text';
    unitInput.placeholder = 'Unit Kerja';
    unitDiv.appendChild(unitLabel);
    unitDiv.appendChild(unitInput);
    unitDiv.appendChild(document.createElement('br'));
    container.appendChild(unitDiv);

    // div 'Jobdesk Saat Project'
    let jobDiv = document.createElement("div");
    let jobLabel = document.createElement('label');
    let jobInput = document.createElement('input');
    jobDiv.classList.add("form-control");
    jobLabel.innerHTML = 'Jobdesk Saat Project';
    jobInput.type = 'text';
    jobInput.placeholder = 'Jobdesk Saat Project';
    jobDiv.appendChild(jobLabel);
    jobDiv.appendChild(jobInput);
    jobDiv.appendChild(document.createElement('br'));
    container.appendChild(jobDiv);

    // div 'Ketepatan Waktu'
    let ketepatanDiv = document.createElement("div");
    ketepatanDiv.classList.add("form-control");
    let ketepatanLabel = document.createElement('label');
    ketepatanLabel.innerHTML = 
    'Ketepatan Waktu<br>1: Sering terlambat dalam memenuhi tenggat waktu.<br>2: Kadang-kadang terlambat dalam menyelesaikan tugas.<br>3: Pemenuhan tenggat waktu yang cukup konsisten.<br>4: Selalu tepat waktu dalam menyelesaikan tugas.<br>5: Mengungguli harapan, selalu lebih cepat dari tenggat waktu.<br>';

    let ketepatanTable = document.createElement('table');
    let headerRow = document.createElement('tr');
    headerRow.style.backgroundColor = 'rgb(255, 255, 255)';

    let thEmpty = document.createElement('th');
    thEmpty.id = 'empty';
    headerRow.appendChild(thEmpty);

    let tdPoor = document.createElement('td');
    tdPoor.id = 'poor';
    tdPoor.textContent = '1';
    headerRow.appendChild(tdPoor);

    let tdFair = document.createElement('td');
    tdFair.id = 'fair';
    tdFair.textContent = '2';
    headerRow.appendChild(tdFair);

    let tdAverage = document.createElement('td');
    tdAverage.id = 'average';
    tdAverage.textContent = '3';
    headerRow.appendChild(tdAverage);

    let tdVeryGood = document.createElement('td');
    tdVeryGood.id = 'very good';
    tdVeryGood.textContent = '4';
    headerRow.appendChild(tdVeryGood);

    let tdExcellent = document.createElement('td');
    tdExcellent.id = 'excellent';
    tdExcellent.textContent = '5';

    headerRow.appendChild(tdExcellent);
    ketepatanTable.appendChild(headerRow);

    let row = document.createElement('tr');
    let thTitle = document.createElement('th');
    thTitle.id = 'title';
    let ketepatanTableLabel = document.createElement('label');
    ketepatanTableLabel.textContent = 'Ketepatan Waktu';
    thTitle.appendChild(ketepatanTableLabel);
    row.appendChild(thTitle);

    let values = ['poor', 'fair', 'average', 'very-good', 'excellent'];
    values.forEach(function(value) {
        let td = document.createElement('td');
        let label = document.createElement('label');
        let input = document.createElement('input');
        input.type = 'radio';
        input.name = '16_option-{{$index}}';
        input.value = value;
        input.setAttribute('ng-model', 'model[item]');
        label.appendChild(input);
        td.appendChild(label);
        row.appendChild(td);
    });

    ketepatanTable.appendChild(row);
    ketepatanDiv.appendChild(ketepatanLabel);
    ketepatanDiv.appendChild(ketepatanTable);
    container.appendChild(ketepatanDiv);
  }
}
