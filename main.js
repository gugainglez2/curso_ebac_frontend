$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        const novaTarefa = $('input').val();
        const novoItem = $(`<li>${novaTarefa}</li>`);

        $(novoItem).appendTo('ol');
        $('input').val('');
    });

    $('ol').on('click', 'li', function(){
        $(this).css('text-decoration', 'line-through');
    });
});