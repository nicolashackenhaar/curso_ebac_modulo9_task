$(document).ready(function(){
  $('.itens-da-lista').on('click', 'li', function(){
    $(this).css({
      'text-decoration': 'line-through',
      'color': 'green'
    });
  });


  $('form').on('submit', function(e){
    e.preventDefault();
    const tarefa = $('#descricao-tarefa').val();
    const novoItem = $('<li></li>').text(tarefa);
    
    $('.itens-da-lista').append(novoItem);
    $('#descricao-tarefa').val('');
  });
});
