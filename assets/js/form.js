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

    let ketepatanRow = document.createElement('tr');
    let ketepatanThTitle = document.createElement('th');
    ketepatanThTitle.id = 'title';
    let ketepatanTableLabel = document.createElement('label');
    ketepatanTableLabel.textContent = 'Ketepatan Waktu';
    ketepatanThTitle.appendChild(ketepatanTableLabel);
    ketepatanRow.appendChild(ketepatanThTitle);

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
        ketepatanRow.appendChild(td);
    });

    ketepatanTable.appendChild(ketepatanRow);
    ketepatanDiv.appendChild(ketepatanLabel);
    ketepatanDiv.appendChild(ketepatanTable);
    container.appendChild(ketepatanDiv);

    // div 'Komunikasi Internal'
    let komunikasiDiv = document.createElement("div");
    komunikasiDiv.classList.add("form-control");
    let komunikasiLabel = document.createElement('label');
    komunikasiLabel.innerHTML = 
    'Komunikasi Internal<br>1: Komunikasi internal seringkali tidak jelas atau kurang efektif.<br>2: Beberapa ketidakjelasan dalam komunikasi internal.<br>3: Komunikasi internal yang cukup jelas dan efektif.<br>4: Komunikasi internal sangat baik, minimal ketidakjelasan.<br>5: Komunikasi internal luar biasa, memastikan semua anggota panitia terinformasi dengan baik.<br>';

    let komunikasiTable = document.createElement('table');
    let komunikasiHeaderRow = document.createElement('tr');
    komunikasiHeaderRow.style.backgroundColor = 'rgb(255, 255, 255)';

    let komunikasiThEmpty = document.createElement('th');
    komunikasiThEmpty.id = 'empty';
    komunikasiHeaderRow.appendChild(komunikasiThEmpty);

    let komunikasiTdPoor = document.createElement('td');
    komunikasiTdPoor.id = 'poor';
    komunikasiTdPoor.textContent = '1';
    komunikasiHeaderRow.appendChild(komunikasiTdPoor);

    let komunikasiTdFair = document.createElement('td');
    komunikasiTdFair.id = 'fair';
    komunikasiTdFair.textContent = '2';
    komunikasiHeaderRow.appendChild(komunikasiTdFair);

    let komunikasiTdAverage = document.createElement('td');
    komunikasiTdAverage.id = 'average';
    komunikasiTdAverage.textContent = '3';
    komunikasiHeaderRow.appendChild(komunikasiTdAverage);

    let komunikasiTdVeryGood = document.createElement('td');
    komunikasiTdVeryGood.id = 'very good';
    komunikasiTdVeryGood.textContent = '4';
    komunikasiHeaderRow.appendChild(komunikasiTdVeryGood);

    let komunikasiTdExcellent = document.createElement('td');
    komunikasiTdExcellent.id = 'excellent';
    komunikasiTdExcellent.textContent = '5';

    komunikasiHeaderRow.appendChild(komunikasiTdExcellent);
    komunikasiTable.appendChild(komunikasiHeaderRow);

    let komunikasiRow = document.createElement('tr');
    let komunikasiThTitle = document.createElement('th');
    komunikasiThTitle.id = 'title';
    let komunikasiTableLabel = document.createElement('label');
    komunikasiTableLabel.textContent = 'Komunikasi Internal';
    komunikasiThTitle.appendChild(komunikasiTableLabel);
    komunikasiRow.appendChild(komunikasiThTitle);

    let komunikasiValues = ['poor', 'fair', 'average', 'very-good', 'excellent'];
    komunikasiValues.forEach(function(value) {
        let td = document.createElement('td');
        let label = document.createElement('label');
        let input = document.createElement('input');
        input.type = 'radio';
        input.name = '16_option-{{$index}}';
        input.value = value;
        input.setAttribute('ng-model', 'model[item]');
        label.appendChild(input);
        td.appendChild(label);
        komunikasiRow.appendChild(td);
    });

    komunikasiTable.appendChild(komunikasiRow);
    komunikasiDiv.appendChild(komunikasiLabel);
    komunikasiDiv.appendChild(komunikasiTable);
    container.appendChild(komunikasiDiv);

    // div 'Kerjasama Tim'
    let kerjasamaDiv = document.createElement("div");
    kerjasamaDiv.classList.add("form-control");
    let kerjasamaLabel = document.createElement('label');
    kerjasamaLabel.innerHTML = 
    'Kerjasama Tim<br>1: Tidak ada kerjasama, banyak konflik di antara anggota panitia.<br>2: Kerjasama terbatas, perlu ditingkatkan.<br>3: Kerjasama cukup, tetapi masih ada beberapa ketidakcocokan.<br>4: Kerjasama baik, anggota panitia mendukung satu sama lain.<br>5: Kerjasama sangat baik, panitia bekerja bersama harmonis.<br>';

    let kerjasamaTable = document.createElement('table');
    let kerjasamaHeaderRow = document.createElement('tr');
    kerjasamaHeaderRow.style.backgroundColor = 'rgb(255, 255, 255)';

    let kerjasamaThEmpty = document.createElement('th');
    kerjasamaThEmpty.id = 'empty';
    kerjasamaHeaderRow.appendChild(kerjasamaThEmpty);

    let kerjasamaTdPoor = document.createElement('td');
    kerjasamaTdPoor.id = 'poor';
    kerjasamaTdPoor.textContent = '1';
    kerjasamaHeaderRow.appendChild(kerjasamaTdPoor);

    let kerjasamaTdFair = document.createElement('td');
    kerjasamaTdFair.id = 'fair';
    kerjasamaTdFair.textContent = '2';
    kerjasamaHeaderRow.appendChild(kerjasamaTdFair);

    let kerjasamaTdAverage = document.createElement('td');
    kerjasamaTdAverage.id = 'average';
    kerjasamaTdAverage.textContent = '3';
    kerjasamaHeaderRow.appendChild(kerjasamaTdAverage);

    let kerjasamaTdVeryGood = document.createElement('td');
    kerjasamaTdVeryGood.id = 'very good';
    kerjasamaTdVeryGood.textContent = '4';
    kerjasamaHeaderRow.appendChild(kerjasamaTdVeryGood);

    let kerjasamaTdExcellent = document.createElement('td');
    kerjasamaTdExcellent.id = 'excellent';
    kerjasamaTdExcellent.textContent = '5';
    kerjasamaHeaderRow.appendChild(kerjasamaTdExcellent);
    kerjasamaTable.appendChild(kerjasamaHeaderRow);

    let kerjasamaRow = document.createElement('tr');
    let kerjasamaThTitle = document.createElement('th');
    kerjasamaThTitle.id = 'title';
    let kerjasamaTableLabel = document.createElement('label');
    kerjasamaTableLabel.textContent = 'Kerjasama Tim';
    kerjasamaThTitle.appendChild(kerjasamaTableLabel);
    kerjasamaRow.appendChild(kerjasamaThTitle);

    let kerjasamaValues = ['poor', 'fair', 'average', 'very-good', 'excellent'];
    kerjasamaValues.forEach(function(value) {
        let td = document.createElement('td');
        let label = document.createElement('label');
        let input = document.createElement('input');
        input.type = 'radio';
        input.name = '16_option-{{$index}}';
        input.value = value;
        input.setAttribute('ng-model', 'model[item]');
        label.appendChild(input);
        td.appendChild(label);
        kerjasamaRow.appendChild(td);
    });

    kerjasamaTable.appendChild(kerjasamaRow);
    kerjasamaDiv.appendChild(kerjasamaLabel);
    kerjasamaDiv.appendChild(kerjasamaTable);
    container.appendChild(kerjasamaDiv);

    // div 'Inisiatif'
    let inisiatifDiv = document.createElement("div");
    inisiatifDiv.classList.add("form-control");
    let inisiatifLabel = document.createElement('label');
    inisiatifLabel.innerHTML = 
    'Inisiatif<br>1: Kurangnya inisiatif dalam mengambil tindakan atau solusi.<br>2: Inisiatif terbatas, perlu ditingkatkan.<br>3: Memiliki inisiatif yang cukup untuk menyelesaikan tugas.<br>4: Memperlihatkan inisiatif yang baik, mampu melihat dan menyelesaikan masalah.<br>5: Inisiatif yang luar biasa, proaktif dalam mengatasi kendala.<br>';

    let inisiatifTable = document.createElement('table');
    let inisiatifHeaderRow = document.createElement('tr');
    inisiatifHeaderRow.style.backgroundColor = 'rgb(255, 255, 255)';

    let inisiatifThEmpty = document.createElement('th');
    inisiatifThEmpty.id = 'empty';
    inisiatifHeaderRow.appendChild(inisiatifThEmpty);

    let inisiatifTdPoor = document.createElement('td');
    inisiatifTdPoor.id = 'poor';
    inisiatifTdPoor.textContent = '1';
    inisiatifHeaderRow.appendChild(inisiatifTdPoor);

    let inisiatifTdFair = document.createElement('td');
    inisiatifTdFair.id = 'fair';
    inisiatifTdFair.textContent = '2';
    inisiatifHeaderRow.appendChild(inisiatifTdFair);

    let inisiatifTdAverage = document.createElement('td');
    inisiatifTdAverage.id = 'average';
    inisiatifTdAverage.textContent = '3';
    inisiatifHeaderRow.appendChild(inisiatifTdAverage);

    let inisiatifTdVeryGood = document.createElement('td');
    inisiatifTdVeryGood.id = 'very good';
    inisiatifTdVeryGood.textContent = '4';
    inisiatifHeaderRow.appendChild(inisiatifTdVeryGood);

    let inisiatifTdExcellent = document.createElement('td');
    inisiatifTdExcellent.id = 'excellent';
    inisiatifTdExcellent.textContent = '5';
    inisiatifHeaderRow.appendChild(inisiatifTdExcellent);
    inisiatifTable.appendChild(inisiatifHeaderRow);

    let inisiatifRow = document.createElement('tr');
    let inisiatifThTitle = document.createElement('th');
    inisiatifThTitle.id = 'title';
    let inisiatifTableLabel = document.createElement('label');
    inisiatifTableLabel.textContent = 'Inisiatif';
    inisiatifThTitle.appendChild(inisiatifTableLabel);
    inisiatifRow.appendChild(inisiatifThTitle);

    let inisiatifValues = ['poor', 'fair', 'average', 'very-good', 'excellent'];
    inisiatifValues.forEach(function(value) {
        let td = document.createElement('td');
        let label = document.createElement('label');
        let input = document.createElement('input');
        input.type = 'radio';
        input.name = '16_option-{{$index}}';
        input.value = value;
        input.setAttribute('ng-model', 'model[item]');
        label.appendChild(input);
        td.appendChild(label);
        inisiatifRow.appendChild(td);
    });

    inisiatifTable.appendChild(inisiatifRow);
    inisiatifDiv.appendChild(inisiatifLabel);
    inisiatifDiv.appendChild(inisiatifTable);
    container.appendChild(inisiatifDiv);

    // div 'Kreativitas Dalam Pemecahan Masalah'
    let kreativitasDiv = document.createElement("div");
    kreativitasDiv.classList.add("form-control");
    let kreativitasLabel = document.createElement('label');
    kreativitasLabel.innerHTML = 
    'Kreativitas Dalam Pemecahan Masalah<br>1: Kurangnya kreativitas dalam mencari solusi masalah.<br>2: Kreativitas terbatas, perlu ditingkatkan.<br>3: Memiliki kreativitas yang cukup dalam menemukan solusi.<br>4: Kreativitas yang baik, menciptakan solusi yang efektif.<br>5: Kreativitas luar biasa, mampu menemukan solusi inovatif.<br>';

    let kreativitasTable = document.createElement('table');
    let kreativitasHeaderRow = document.createElement('tr');
    kreativitasHeaderRow.style.backgroundColor = 'rgb(255, 255, 255)';

    let kreativitasThEmpty = document.createElement('th');
    kreativitasThEmpty.id = 'empty';
    kreativitasHeaderRow.appendChild(kreativitasThEmpty);

    let kreativitasTdPoor = document.createElement('td');
    kreativitasTdPoor.id = 'poor';
    kreativitasTdPoor.textContent = '1';
    kreativitasHeaderRow.appendChild(kreativitasTdPoor);

    let kreativitasTdFair = document.createElement('td');
    kreativitasTdFair.id = 'fair';
    kreativitasTdFair.textContent = '2';
    kreativitasHeaderRow.appendChild(kreativitasTdFair);

    let kreativitasTdAverage = document.createElement('td');
    kreativitasTdAverage.id = 'average';
    kreativitasTdAverage.textContent = '3';
    kreativitasHeaderRow.appendChild(kreativitasTdAverage);

    let kreativitasTdVeryGood = document.createElement('td');
    kreativitasTdVeryGood.id = 'very good';
    kreativitasTdVeryGood.textContent = '4';
    kreativitasHeaderRow.appendChild(kreativitasTdVeryGood);

    let kreativitasTdExcellent = document.createElement('td');
    kreativitasTdExcellent.id = 'excellent';
    kreativitasTdExcellent.textContent = '5';
    kreativitasHeaderRow.appendChild(kreativitasTdExcellent);
    kreativitasTable.appendChild(kreativitasHeaderRow);

    let kreativitasRow = document.createElement('tr');
    let kreativitasThTitle = document.createElement('th');
    kreativitasThTitle.id = 'title';
    let kreativitasTableLabel = document.createElement('label');
    kreativitasTableLabel.textContent = 'Kreativitas Dalam Pemecahan Masalah';
    kreativitasThTitle.appendChild(kreativitasTableLabel);
    kreativitasRow.appendChild(kreativitasThTitle);

    let kreativitasValues = ['poor', 'fair', 'average', 'very-good', 'excellent'];
    kreativitasValues.forEach(function(value) {
        let td = document.createElement('td');
        let label = document.createElement('label');
        let input = document.createElement('input');
        input.type = 'radio';
        input.name = '16_option-{{$index}}';
        input.value = value;
        input.setAttribute('ng-model', 'model[item]');
        label.appendChild(input);
        td.appendChild(label);
        kreativitasRow.appendChild(td);
    });

    kreativitasTable.appendChild(kreativitasRow);
    kreativitasDiv.appendChild(kreativitasLabel);
    kreativitasDiv.appendChild(kreativitasTable);
    container.appendChild(kreativitasDiv);
  }
}
