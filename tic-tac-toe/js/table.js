
var table = document.createElement("table");

table.id = "table";
table.style.visibility = "hidden";
table.style.marginLeft = "12px";
table.style.width = "95%";
table.style.height = "95%";
table.style.border = "1px solid white";
table.style.tableLayout = "fixed";


table.setAttribute("border", "1");
table.setAttribute("border-color", "white");

table.className += "table-condensed";
table.classname += "myTable";

var tbody = document.createElement("tbody");
var tmp = "";

for (var i = 0; i < 3; i++) {
    tmp += "<tr>";
    for (var j = 0; j < 3; j++) {
        tmp += "<td class=\"tds text-center\" id=\"" + i + j + "\" onclick=\"writeSign()\"></td>";
    }
    tmp += "</tr>";
}

tbody.innerHTML = tmp;
table.appendChild(tbody);
document.getElementById("background").appendChild(table);


