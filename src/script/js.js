igra.onclick = function () {
    alert("Работает!");
};

numselect.onchange = function () {
    let select = document.getElementById("numselect");
    let x = select.options[select.selectedIndex].value;
    let div = document.getElementById("demo1");
    div.innerHTML = "";
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    div.appendChild(table);
    table.appendChild(tbody);

    let row = new Array(x);
    let cell = new Array(x);

    for (let i = 0; i < x; i++) {
        row[i] = tbody.insertRow(i);
        for (let j = 0; j < x; j++) {
            cell[j] = row[i].insertCell(j);
            cell[j].innerHTML = "CELL1";
        }
    }

    // var table1 = document.getElementsByTagName("table");// наша таблица
    // console.log('Результат ' + typeof table1);
    // var tbody1 = table1.getElementsByTagName("tbody")[0]; // тело таблицы
};

//table.onclick = function(event) {
// event.target.style.backgroundColor = 'yellow';
// let table1 = document.getElementsByTagName("table");
// let tbody1 = document.getElementsByTagName("tbody")[0];
//let x= event.target;
//console.log(x);

//}

// document.table.onclick = function() {
//     alert("Работает!");
//
// }

// function  f2() {
//     alert("Начало");
//     let table = document.getElementsByTagName("TABLE"); // наша таблица
//     // let tbody = table.getElementsByTagName("tbody")[0]; // тело таблицы
//     alert("Продолжение1");
//     table.onclick = function(e) {
//        alert("Продолжение2");
//
//     }
//
//
// }

// let div = document.getElementById("demo1");
// let table = document.createElement("TABLE");
// div.appendChild(z);
// z.border="1";

// let row = table.insertRow(0);
// let cell1 = row.insertCell(0);
// let cell2 = row.insertCell(1);
// cell1.innerHTML = "NEW CELL1";
// cell2.innerHTML = "NEW CELL2";
