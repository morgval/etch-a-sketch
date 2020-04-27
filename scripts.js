const container = document.getElementById ("container");
function makeGrid (dim) {
  container.style.setProperty('--dim', dim);
  for (i = 0; i < (dim * dim); i++) {
//    let row = document.createElement('div');
//    container.appendChild(row).className = "grid-row";
//      for (j = 0; j < (dim); j++) {
        let item = document.createElement('div');
        container.appendChild(item).className = "grid-item";
//      }
  };
};

  var dim = 6; //testing variable
  makeGrid(dim);
