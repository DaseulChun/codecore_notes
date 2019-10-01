// Lab 1

// When your mouse enters a shape, toggle the highlight class.
$(document).ready(() => {
  $('.shape').on('mouseenter', event => {
    $(event.target).toggleClass('highlight');
  })

  $('.shape').on('click', e => {
    // If the shape has the small class, hide it.
    if ($(e.target).hasClass('small')) {
      $(e.target).hide();

    // If it has the medium class, remove the medium class and add the small class.
    } else if ($(e.target).hasClass('medium')) {
      $(e.target).removeClass('medium').addClass('small');

    // If it has the large class, remove the large class and add the medium class.
    } else if ($(e.target).hasClass('large')) {
      $(e.target).removeClass('large').addClass('medium');
    }
  })

// Lab 2

  // Prepend a row to the table with the columns 0 and -
  $("tbody").prepend($("<tr><td>0</td><td>-</td></tr>"));

  // When the form's submit button is clicked, append the text input's current value to the form message.

  // $('#form-1').on('submit', e => {
  //   $('#form-message').html($('input').first().val());
  // })

  // or
  $('#form-1').on('submit', e => {
    $('#form-message').html($('input[type=text]').val());
  })

  // When Button 1 is clicked, toggle the green container.
  $('#button-1').on('click', () => {
    $('#green-container').toggle();
  })

  // When Button 2 is clicked, fade the Button Message out
  $('#button-2').on('click', () => {
    $('#button-message').fadeOut();
  })

  // When Button 3 is clicked, fade the Button Message back in.
  $('#button-3').on('click', () => {
    $('#button-message').fadeIn();
  })

  // When Button 4 is clicked, slide the green container up.
  $('#button-4').on('click', () => {
    $('#green-container').slideUp();
  })

// Lab 3

  // When the g key is pressed, toggle all gray shapes.
  $('body').on('keydown', e => {
    const key = e.key;
    if (key === 'g') {
      $('.shape.grey').toggle();
  // When the spacebar key is pressed, append a small blue circle to the green container.
    } else if (key === " ") {
      $('#green-container').append($('<div class="small blue circle"></div>'));
    }
  })

  // Make the Form Message show the number of characters remaining (14 characters maximum) as you type in the text input. (e.g. "3 characters remaining").
  $('#form-1 > input[type=text]').on('input', function(e) {
    let remaining = 14 - $(this).val().length;
    $('#form-message').text(`${remaining} characters remaining`);
  });

  // actually add the form validation, if you wish
  $('#form-1 > input[type=text]').attr('maxlength', 14);

// Lab 4

  // When a user submits the form, use the value in the input field as the color for the following:
  $('#form-1').on('submit', function(event)  {
    const color = $('#form-1 > input[type=text]').val();

    // If they enter an invalid color show them an alert message telling them, "Entered color is not a valid option!"
    const validColors = ['red', 'blue', 'black', 'grey'];

    if (!validColors.includes(color)) {
      alert(`Entered colour, "${color}", is not a valid option!`);
    } else {
      // All shapes matching the given color should be removed.
      $(`.shape.${color}`).remove();
    }

    // Clear the input field.
    $('#form-1 > input[type=text]').val('');
  })

// Lab 5
  // As you type in the text input, change the Form Message to be the same as what you type.
  // $('#form-1 > input[type=text]').on('input', function(event) {
  //   $('#form-message').text($(this).val());
  // })
  
  // As you type in the text input, change the Form Message to be the REVERSE of what you type.
  $('#form-1 > input[type=text]').on('input', function(event) {
    $('#form-message').text(reverse($(this).val()));
  })

  // Reverses a string
  function reverse(string) {
    return string.split('').reverse().join('');
  }

  // Set a delegated click handler on the orange container so that red shapes are removed when you click them.
});