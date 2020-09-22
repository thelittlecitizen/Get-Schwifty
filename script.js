function generate_table() {
    var body = document.getElementsByClassName("grid")[0];
  
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    for (var i = 0; i < 3; i++) {
      var row = document.createElement("tr");
  
      for (var j = 0; j < 3 -1; j++) {

        var cell = document.createElement("td");
        var cellText = document.createTextNode(random_numbers(row, cell));
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      tblBody.appendChild(row);
    }
  
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute("border", "2");
  }
  generate_table();

function random_numbers(row, cell)
{
  var min= row;
  var max = row*cell -1
  random = Math.random() * (max - min) +min;
  return random;
  

}


  


// class Box
// {
//     constructor (gridHeigh, gridWidth)
//     {
//         this._gridHeigh=gridHeigh;
//         this._gridWidth=gridWidth;
//     }

//     CreateArrat()
//     {
//         var tiles = new Array(gridHeigh);
//         for (var i=0; i<gridHeigh; i++)
//         {
//             tiles[i] = new Array(gridWidth);

//         }


//     }

// }
// function generatrGrid()
// {
//     var divGrid = document.getElementsByClassName("grid")
//     var div1 = document.createElement("tr")
// }