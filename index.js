let namee = document.getElementById("name");
let site = document.getElementById("url");
let submit = document.getElementById("submit");
let ubdate=document.getElementById("ubdate");
let visit = document.getElementById("visit");
let tbody = document.getElementById("tbody");
let parent = document.getElementById("parent");
let son = document.getElementById("son");
let icona=document.getElementById("icona");
//validation url
function isValidUrl(str) {
  const pattern = new RegExp(
    '^([a-zA-Z]+:\\/\\/)?' + 
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + 
      '((\\d{1,3}\\.){3}\\d{1,3}))' + 
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + 
      '(\\?[;&a-z\\d%_.~+=-]*)?' + 
      '(\\#[-a-z\\d_]*)?$', 
    'i'
  );
  return pattern.test(str);
}
function valedName(str) {
  let x = /^[a-zA-Z1-9 ]{3,50}$/;
  return x.test(str);
}
function plure(el) {
   el.style.cssText = `border-color: none;
    box-shadow: none;`;
}
namee.addEventListener("input", function () {
  if (valedName(namee.value)) {
    namee.style.cssText = `border-color: #198754;
    box-shadow: 0 0 0 0.25rem rgba(25,135,84,.25);`;
    namee.classList.remove("is-invalid")
    namee.classList.add("is-valid");
  }
  else {
    namee.style.cssText = `    border-color: #dc3545;
    box-shadow: 0 0 0 0.25rem rgba(220,53,69,.25);`;
    namee.classList.add("is-invalid");
    namee.classList.remove("is-valid");
  }
});
namee.addEventListener("focus", function () {
  if (namee.value) {
    if (valedName(namee.value)) {
    namee.style.cssText = `border-color: #198754;
    box-shadow: 0 0 0 0.25rem rgba(25,135,84,.25);`;
    namee.classList.remove("is-invalid")
    namee.classList.add("is-valid");
  }
  else {
    namee.style.cssText = `    border-color: #dc3545;
    box-shadow: 0 0 0 0.25rem rgba(220,53,69,.25);`;
    namee.classList.add("is-invalid");
    namee.classList.remove("is-valid");
  }
  }
});
site.addEventListener('input', function () {
  if (isValidUrl(site.value)) {
    site.style.cssText = `border-color: #198754;
    box-shadow: 0 0 0 0.25rem rgba(25,135,84,.25);`;
    site.classList.remove("is-invalid")
    site.classList.add("is-valid");
  }
  else {
    site.style.cssText = `    border-color: #dc3545;
    box-shadow: 0 0 0 0.25rem rgba(220,53,69,.25);`;
     site.classList.add("is-invalid");
    site.classList.remove("is-valid");
  }
}); 
site.addEventListener('focus', function () {
  if (site.value) {
    if (isValidUrl(site.value)) {
    site.style.cssText = `border-color: #198754;
    box-shadow: 0 0 0 0.25rem rgba(25,135,84,.25);`;
    site.classList.remove("is-invalid")
    site.classList.add("is-valid");
  }
  else {
    site.style.cssText = `    border-color: #dc3545;
    box-shadow: 0 0 0 0.25rem rgba(220,53,69,.25);`;
     site.classList.add("is-invalid");
    site.classList.remove("is-valid");
  }
 }
}); 
let arr = [];
if (localStorage.getItem('name')) {
  arr = JSON.parse(localStorage.getItem('name'));
  display(arr);
}
function display(arr) {
  let cartona = "";
  for (let i = 0; i < arr.length; i++) {
    cartona += `
    <tr>
    <td>${i}</td>
    <td>${arr[i].name}</td>
    <td><a class="btn btn-success" id="visit" href="${arr[i].url}" target="_blank"><i class="fa-solid fa-eye pe-2"></i>Visit</a></td>
    <td><button class="btn btn-danger cuut" onclick="deleteItem(${i})"><i class="pe-2 fa-solid fa-trash-can"></i>Delete</button></td>
    <td><button class="btn btn-warning cuut" onclick="abdateItem(${i})"><i class="pe-2 fa-solid fa-pen-to-square "></i>ubdate</button></td>
    </tr>
    `
  }
  tbody.innerHTML = cartona;
}
submit.addEventListener('click', function () {
  if (valedName(namee.value) && isValidUrl(site.value)) {
    let obj = {
      name: namee.value,
      url: site.value
    }
    arr.push(obj);
    display(arr);
    localStorage.setItem('name', JSON.stringify(arr));
    deletInbut();
namee.style.cssText = `border-color: none;
    box-shadow: none;`;
    site.style.cssText = `border-color: none;
    box-shadow: none;`;
    site.classList.remove("is-valid");
    namee.classList.remove("is-valid");
  }
  else {
   Swal.fire({
  title: "Site Name or Url is not valid, Please follow the rules below :",
  html: `
    <p class="d-flex justify-content-statr align-items-center"><i class="fa-regular fa-circle-right pe-2 text-danger"></i>Site name must contain at least 3 characters</p>
    <p class="d-flex justify-content-statr align-items-center"><i class="fa-regular fa-circle-right pe-2 text-danger"></i>Site URL must be a valid one</p>
  `,
  icon: "error"
});
  }
  
});
function deletInbut() {
  site.value = "";
    namee.value = "";
}
function deleteItem(idx) {
  arr.splice(idx, 1);
  display(arr);
  localStorage.setItem('name', JSON.stringify(arr));
}
let index;
function abdateItem(idx) {
   index = idx;
  namee.value = arr[idx].name;
  site.value = arr[idx].url;
  ubdate.classList.remove("d-none");
  submit.classList.add("d-none");
}
function btnUpdate() {
  let objc = {
    name: namee.value,
    url: site.value
  };
  arr.splice(index, 1, objc);
  display(arr);
  localStorage.setItem('name', JSON.stringify(arr));
  ubdate.classList.add("d-none");
  submit.classList.remove("d-none");
  deletInbut();
  namee.style.cssText = `border-color: none;
    box-shadow: none;`;
    site.style.cssText = `border-color: none;
    box-shadow: none;`;
    site.classList.remove("is-valid");
    namee.classList.remove("is-valid");
}
//search
son.addEventListener("focus", function () {
  parent.style.cssText = `
  transition:0.3s;
  color: #212529;
    background-color: #fff;
    border-color: #d99c39;
    box-shadow: 0 0 0 0.25rem #0564fb47;
  `
});
son.addEventListener("blur", function () {
  parent.style.cssText = `
  transition:0.3s;
  color: none;
    background-color: none;
    border-color: none;
    box-shadow:none;
  `;
});
son.addEventListener("input", function () {
  let cartona = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.toLowerCase().includes(this.value.toLowerCase())){
       cartona += `
    <tr>
    <td>${i}</td>
    <td>${arr[i].name}</td>
    <td><a class="btn btn-success" id="visit" href="${arr[i].url}" target="_blank"><i class="fa-solid fa-eye pe-2"></i>Visit</a></td>
    <td><button class="btn btn-danger cuut" onclick="deleteItem(${i})"><i class="pe-2 fa-solid fa-trash-can"></i>Delete</button></td>
    <td><button class="btn btn-warning cuut" onclick="abdateItem(${i})"><i class="pe-2 fa-solid fa-pen-to-square "></i>ubdate</button></td>
    </tr>
    `
    }
  }
  tbody.innerHTML = cartona;
});
//clear All
function clearAll() {
  arr=[];
  localStorage.removeItem('name');
  display(arr);
}

//حركة كدا في السيرشاية
son.style.cssText = `
max-width:0;
transition: 0.3s;
`;
icona.style.cursor = "pointer";
icona.addEventListener("click", function () {
  son.style.maxWidth = "150px";
  son.focus();
});
son.addEventListener("blur", function () {
    this.style.maxWidth = "0";
 })

