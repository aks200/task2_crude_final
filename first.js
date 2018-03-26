const city = [
  { name: "Ahmedabad", editable: false },
  { name: "Surat", editable: false },
  { name: "Anand", editable: false },
  { name: "Baroda", editable: false }
];

function main() {
  render();
  registerEvents();
}
//render func
const render = function() {
  let data = "";
  data += `</br>`;
  for (let i = 0; i < city.length; i++) {
    if (city[i].editable == false) {
      data += `<tr id=tr${i}>`;
      data += `<p>`;
      data += `<td>${city[i].name}</td>`;
      data += `<td><button data-action='edit' data-index=${i}>Edit</button></td>`;
      data += `<td><button data-action='delete' data-index=${i}>Delete</button></td>`;
      data += `</p>`;
      data += `</tr>`;
    } else {
      //for editing purpose
      data += `<tr id=tr${i}>`;
      data += `<td><input type="textbox" id=tx${i} value=${city[i].name}></td>`;
      data += `<td><button id='btt' data-action='save' data-index=${i}>Save</button></td>`;
      data += `<td><button data-action='cancel' data-index=${i}>Cancel</button></td>`;
      data += `</tr>`;
    }
  }

  document.getElementById("table").innerHTML = data;

  count(city.length);
};

//registerEvents

const registerEvents = function() {
  //alert("In register");
  document.getElementById("table").addEventListener("click", function() {
    if (event.target.getAttribute("data-action") == "edit") {
      //alert('In edit');
      const index = event.target.getAttribute("data-index");
      edit(index);
    } else if (event.target.getAttribute("data-action") == "delete") {
      //alert('In Delete');
      const index = event.target.getAttribute("data-index");
      del(index);
    } else if (event.target.getAttribute("data-action") == "save") {
      //alert('In save');
      const index = event.target.getAttribute("data-index");
      const val = document.getElementById(`tx${index}`).value;
      save(index, val);
    } else if (event.target.getAttribute("data-action") == "cancel") {
      //alert('In cancel');
      const index = event.target.getAttribute("data-index");
      cancel(index);
    }
  });
};

//coun
const count = function(len) {
  const data = "Number of cities are " + len;
  document.getElementById("counter").innerHTML = data;
};

//add
const add = function() {
  const name = document.getElementById("txt").value;

  if (name == "") {
    alert("Please enter name...");
  } else {
    //city.push();
    city.push({ name, editable: false });
    render();
  }
};
//editing
const edit = function(item) {
  city[item].editable = true;
  render();
};

//save func
const save = function(item, val) {
  const newname = val;
  city[item].name = newname;
  city[item].editable = false;
  alert(newname);
  render();
};
//delete
const del = function(item) {
  city.splice(item, 1);
  render();
};
//cancel
const cancel = function(item) {
  city[item].editable=false;
  render();
};

main();
