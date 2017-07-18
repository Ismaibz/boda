$('#rsvp-form-submit').on('click',function(){
  if($("#rsvpForm").valid())
  {
    var name = $("input#guestName").val();
    var email = $("input#guestEmail").val();
    var message = $("textarea#guestMessage").val();
    var firstName = name;

    if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
    }
    $.ajax({
        url: "./mail/contact_me.php",
        type: "POST",
        data: {
            name: name,
            email: email,
            message: message
        },
        success: function(response){
            console.log(response);
          if(response == 'success')
          {
            $('#submitMessage').html("<div class='alert alert-success'>");
            $('#submitMessage > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
            $('#submitMessage > .alert-success')
                .append("<strong>Your message has been sent. </strong>");
            $('#submitMessage > .alert-success')
                .append('</div>');
            $('#submitMessage').delay(3000).fadeOut();
            //clear all fields
            $('#rsvpForm').trigger("reset");
          }
          else{
            $('#submitMessage').html("<div class='alert alert-danger'>");
            $('#submitMessage > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
            $('#submitMessage > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
            $('#submitMessage > .alert-danger').append('</div>');
            $('#submitMessage').delay(3000).fadeOut();
            //clear all fields
            $('#rsvpForm').trigger("reset");
          }
        }
    })
  }
});