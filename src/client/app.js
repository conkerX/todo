// check off specific todos by clicking
$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed');
});

// delete a todo
$('ul').on('click', 'span', function(e) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });

  e.stopPropagation();
});

$('input[type="text"]').keypress(function(e) {
  if (e.which === 13) {
    let newTodo = $('input').val();

    $('ul').append(`<li><span><i class="fa fa-trash"></i></span> ${newTodo}</li>`);

    $('input').val('');
  }
});

$('.fa-plus').click(function() {
  $('input[type="text"]').fadeToggle();
});
