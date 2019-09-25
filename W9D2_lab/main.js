$(document).ready(() => {
  console.log('The Page is ready');
  $('.blue.circle').on('mouseenter', (event) => {
    console.log('Blue Circle: Go Away!');
  });

  $('.blue.circle').on('mouseleave', (event) => {
    console.log('Blue Circle: Goodbye');
  })

  $('#button-1').on('click', () => {
    $('.shape').remove();
  })

  $('#button-2').on('click', (event) => {
    $(event.currentTarget).attr('disabled', 'true');
  })

  $('#button-3').on('click', () => {
    $('#button-message').html('Button 3 was clicked');
  })

  $('tr').on('mouseenter', (event) => {
    $(event.currentTarget).attr('class', 'highlight');
  })

  $('tr').on('mouseleave', (event) => {
    $(event.currentTarget).removeClass('highlight');
  })
})



