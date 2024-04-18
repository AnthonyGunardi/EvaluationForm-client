const steps = Array.from(document.querySelectorAll("form .step"));  
const nextBtn = document.querySelectorAll("form .next-btn");  
const prevBtn = document.querySelectorAll("form .previous-btn");  
const form = document.querySelector("form");  
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
  var jumlahTim = document.getElementById('jumlahTim').value;
  var container = document.getElementById('dynamicFieldsContainer');
  container.innerHTML = ''; // Clear previous fields

  for (var i = 0; i < jumlahTim; i++) {
    let div1 = document.createElement("div");
    div1.classList.add("form-control");

    let div2 = document.createElement("div");
    div2.classList.add("form-control");

      var namaInput = document.createElement('input');
      namaInput.type = 'text';
      namaInput.placeholder = 'Nama Anggota Tim ' + (i+1);

      var unitInput = document.createElement('input');
      unitInput.type = 'text';
      unitInput.placeholder = 'Unit Kerja ' + (i+1);

      div1.appendChild(namaInput);
      div2.appendChild(unitInput);
      div1.appendChild(document.createElement('br')); // Line break
      container.appendChild(div1);
      container.appendChild(div2);
  }
}