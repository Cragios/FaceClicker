function openPage(pageName, elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  //to make tabs go back to default background after clicking away
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  //to change background color of elements after clicking
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = "black";
}
//to open a tab by default
document.getElementById("defaultOpen").click();

//oofClickcount start
function oofCheck() {
  if (localStorage.getItem("oofClickcount") === null) {
    localStorage.oofClickcount = 0;
  }
  document.getElementById("oof").innerHTML = "OOF x" + localStorage.oofClickcount;
}
//call oofCheck
oofCheck()

function oof() {
  var oofAudio = new Audio("audio/oof.mp3"),
    hitmarkerAudio = new Audio("audio/hitmarker.mp3");
  hitmarkerAudio.play();
  oofAudio.play();
  if (typeof(Storage) !== "undefined") {
    localStorage.oofClickcount = Number(localStorage.oofClickcount) + 1;
    document.getElementById("oof").innerHTML = "OOF x" + localStorage.oofClickcount;
  } else {
    document.getElementById("oof").innerHTML = "Sorry, your browser does not support web storage...";
  }
}
//oofClickcount end

//ohyeahClickcount start
function ohyeahCheck() {
  if (localStorage.getItem("ohyeahClickcount") === null) {
    localStorage.ohyeahClickcount = 0;
  }
  document.getElementById("ohyeah").innerHTML = "OH YEAH x" + localStorage.ohyeahClickcount;
}
//calling ohyeahCheck
ohyeahCheck()

function ohyeah() {
  var oofAudio = new Audio("audio/ohyeah.mp3"),
    hitmarkerAudio = new Audio("audio/hitmarker.mp3");
  hitmarkerAudio.play();
  oofAudio.play();
  if (typeof(Storage) !== "undefined") {
    localStorage.ohyeahClickcount = Number(localStorage.ohyeahClickcount) + 1;
    document.getElementById("ohyeah").innerHTML = "OH YEAH x" + localStorage.ohyeahClickcount;
  } else {
    document.getElementById("ohyeah").innerHTML = "Sorry, your browser does not support web storage...";
  }
}
//ohyeahClickcount start

function showSave(){
  document.getElementById("save_div").style.display = "block";
  document.getElementById("save_btn").style.display = "none";
}

function hideSave(){
  document.getElementById("save_btn").style.display = "block";
  document.getElementById("save_div").style.display = "none";
}

function showDelete() {
  document.getElementById("delete_div").style.display = "block";
  document.getElementById("delete_btn").style.display = "none";
}

function hideDelete() {
  document.getElementById("delete_btn").style.display = "block";
  document.getElementById("delete_div").style.display = "none";
}

//export & import start
function Export() {
  var save = JSON.stringify(localStorage),
    saveArea = document.getElementById("export")
  saveArea.value = save;
  saveArea.select();
  document.execCommand("Copy");
}

function Import() {
  var save = document.getElementById("import").value;
  var data = JSON.parse(save);
  Object.keys(data).forEach(function(k) {
    localStorage.setItem(k, data[k]);
  });
  oofCheck();
  ohyeahCheck();
}
//export & import finish

//delete start
function clearAll() {
  localStorage.clear();
  oofCheck();
  ohyeahCheck();
}

function clearThis(id) {
  localStorage.removeItem(id);
  oofCheck();
  ohyeahCheck();
}
//delete end
