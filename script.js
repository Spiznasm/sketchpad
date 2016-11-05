$(document).ready(function(){
  drawGrid(16)


});

function drawGrid(num_cells){
  for(var i = 1;i <= num_cells*num_cells;i++) {
    $('.container').append('<div class="cell"></div>')
  };

  var cell_size = (800/num_cells)+'px';
  $('.cell').height(cell_size).width(cell_size);
  $('.cell').mouseenter(function(){
    $(this).addClass('touched');
  });
};
