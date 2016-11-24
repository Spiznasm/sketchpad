$(document).ready(function(){
  drawGrid(16);
  $('button').click(function(){
    eraseDrawing();

  });

});



function drawGrid(num_cells){
  for(var i = 1;i <= num_cells*num_cells;i++) {
    $('.container').append('<div class="cell"></div>')
  };

  var cell_size = (600/num_cells)+'px';
  $('.cell').height(cell_size).width(cell_size);
  $('.cell').mouseenter(function(){
    //changeColor(this)
    if ($(this).hasClass('touched')){
      $(this).css('opacity','+=.1');
    }
    else {
      $(this).addClass('touched');
    }

  });
};

function eraseDrawing(){
  $('.cell').remove();
  var grid_size = prompt('Choose a grid size from 16 to 64',16);
  if (isNaN(grid_size)){
      alert("You must choose a number between 16 and 64");
      eraseDrawing();

  }
  else if (grid_size > 64){
    alert("That grid is too large");
    eraseDrawing();
  }
  else if (grid_size < 16){
    alert("That grid is too small");
    eraseDrawing();
  }
  else {
    drawGrid(grid_size);
  }
};
