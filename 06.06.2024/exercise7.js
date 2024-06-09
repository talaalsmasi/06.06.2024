var j = document.getElementById("j");
var g = document.getElementById("g");
var p = document.getElementById("p");
var n = document.getElementById("n");
function flag(e) {
  var c = document.getElementById("country").value;
  if (c == "norway") {
    n.style.display = "inline-block";
    g.style.display = "none";
    p.style.display = "none";
    j.style.display = "none";
  } else if (c == "greece") {
    n.style.display = "none";
    p.style.display = "none";
    j.style.display = "none";
    g.style.display = "inline-block";
  } else if (c == "jordan") {
    j.style.display = "inline-block";
    g.style.display = "none";
    p.style.display = "none";
    n.style.display = "none";
  } else if (c == "palestine") {
    p.style.display = "inline-block";
    g.style.display = "none";
    n.style.display = "none";
    j.style.display = "none";
  }
}
