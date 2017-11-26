function reysp() {
  var rey = document.getElementById("reysp").value;
  var reysp = document.getElementById("reysfind").innerHTML = rey;
  for (var i = 0; i < document.getElementById("tabl").getElementsByTagName('tr').length - 1; i++) {
    document.getElementById("row-" + i).style.display = "table-row";
    var reys = document.getElementById("reys" + i).innerText;

    if (reysp != reys) {
      document.getElementById("row-" + i).style.display = "none";
    }
  }

}

function vilet() {
  for (var i = 0; i < document.getElementById("tabl").getElementsByTagName('tr').length - 1; i++) {
    document.getElementById("row-" + i).style.display = "table-row";
    var reys = document.getElementById("stat" + i).innerText;
    if (reys != 2) {
      document.getElementById("row-" + i).style.display = "none";

    }
  }
}

function prilet() {
  for (var i = 0; i < document.getElementById("tabl").getElementsByTagName('tr').length - 1; i++) {
    document.getElementById("row-" + i).style.display = "table-row";
    var reys = document.getElementById("stat" + i).innerText;
    if (reys != 1) {
      document.getElementById("row-" + i).style.display = "none";

    }
  }
}

function delay() {
  for (var i = 0; i < document.getElementById("tabl").getElementsByTagName('tr').length - 1; i++) {
    document.getElementById("row-" + i).style.display = "table-row";
    var reys = document.getElementById("stat" + i).innerText;
    if (reys != 3) {
      document.getElementById("row-" + i).style.display = "none";

    }
  }
}

function vse() {
  for (var i = 0; i < document.getElementById("tabl").getElementsByTagName('tr').length - 1; i++) {
    document.getElementById("row-" + i).style.display = "table-row";
  }
}


function handleFileSelect(evt) {

  var file = evt.target.files[0];
  if (!file.type.match('text.*')) {
    return alert(file.name + " is not a valid text file.");
  }
  var reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function(e) {



    var textToArray = reader.result.split("\n").map(function(x) {
      return x.split(",")

    });
    console.log(textToArray);
    document.getElementById("tabl").style.display = "table";
    document.getElementById("stat").style.display = "none";
    for (var i = 0; i < document.getElementById("tabl").getElementsByTagName('tr').length - 1; i++) {

      document.getElementById("stat" + i).style.display = "none";
    }



    for (var j = 0; j < textToArray.length; j++) {

      for (var i = 0; i < (textToArray[0].length); i++) {
        $(".item" + j + i).html(textToArray[j][i]);

      }
    }



  };

}

window.onload = function() {

  document.getElementById('file').addEventListener('change', handleFileSelect, false);
}
document.getElementById("tabl").style.display = "none";
document.getElementById("tab").style.display = "none";