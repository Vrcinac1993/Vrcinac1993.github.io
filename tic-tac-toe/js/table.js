
var table = document.createElement("div");

table.id = "table";
table.style.visibility = "hidden";
table.style.marginLeft = "12px";
table.style.width = "95%";
table.style.height = "95%";
table.style.border = "1px solid white";



table.setAttribute("border", "1");
table.setAttribute("border-color", "white");

table.className += "myTable";

var tbody = document.createElement("div");
tbody.style.height = '100%';
var tmp = "";

for (var i = 0; i < 3; i++) {
    tmp += "<div class=\"row rows\">";
    for (var j = 0; j < 3; j++) {
        tmp += "<div class=\"col-md-4 tds text-center\" id=\"" + i + j + "\" onclick=\"writeSign()\"></div>";
    }
    tmp += "</div>";
}

tbody.innerHTML = tmp;
table.appendChild(tbody);
document.getElementById("background").appendChild(table);


