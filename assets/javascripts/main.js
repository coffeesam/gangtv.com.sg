(function() {
  var access = "aHR0cHM6Ly9mb3Jtc3ByZWUuaW8vaGVsbG9AZ2FuZ3R2LmNvbS5zZw==";
  var key    = atob(access);

  $(document).ready(function() {
    initHeadroom();
    bindNavbarEvents();
    bindContactFormSubmitButton();
    bindContactFormNameChange();
    bindModalEvents();
  });

  function initHeadroom() {
    var navbar = document.querySelector(".navbar");
    var headroom  = new Headroom(navbar);
    headroom.init();
  }

  function formValid() {
    return $('form:valid').length > 0;
  }

  function resetForm() {
    $('form')[0].reset();
  }

  function serializeFormData() {
    return $('form').serializeArray().reduce(function(a, x) { a[x.name] = x.value; return a; }, {});
  }

  function hideForm() {
    $('.contactModal').modal('hide');
  }

  function showForm() {
    $('.contactModal').modal('show');
  }

  function formSuccess() {
    swal({
      type: 'success',
      title: 'Inquiry Sent!',
      showConfirmButton: true,
      timer: 2500,
      text: 'Thank you for sending in your inquiry, I will get back to you as soon as possible.',
    });
    unanimateSubmitButton();
    hideForm();
    resetForm();
  }

  function formError() {
    swal({
      type: 'error',
      title: 'Ops!',
      showConfirmButton: true,
      timer: 5000,
      html: 'We are having trouble receiving your inquiry.<br>Please try again later.',
    });
    unanimateSubmitButton();
  }

  function formPerformAjax(formData) {
    $.ajax({
      url: key,
      method: "POST",
      data: formData,
      dataType: "json",
      timeout: 5000,
    }).done(function() {
      formSuccess();
    }).fail(function() {
      formError();
    });
  }

  function animateSubmitButton(){
    $('form.contact-form input[type="submit"]').addClass('progress-bar progress-bar-striped progress-bar-animated');
  }

  function unanimateSubmitButton() {
    $('form.contact-form input[type="submit"]').removeClass('progress-bar progress-bar-striped progress-bar-animated');
  }

  function bindContactFormSubmitButton() {
    $('form.contact-form input[type="submit"]').on('click', function(e) {
      if(formValid()) {
        e.preventDefault();
        animateSubmitButton();
        var data = serializeFormData();
        formPerformAjax(data);
      }
    });
  }

  function bindContactFormNameChange() {
    $('form.contact-form input[name="name"]').on('change', function(e) {
      var name = $('form.contact-form input[name="name"]').val();
      if(name.length > 0) {
        $('form.contact-form input[name="_subject"]').val("New inquiry from " + name);
      }
    });
  }

  function bindNavbarEvents() {
    $('#navbarSupportedContent').on('show.bs.collapse', function() {
      $('.navbar').addClass('navbar-dark--open');
    });
    $('#navbarSupportedContent').on('hide.bs.collapse', function() {
      $('.navbar').removeClass('navbar-dark--open');
    });
  }

  function bindModalEvents() {
    $('.modal').on('show.bs.modal', function() {
      if(window.innerWidth < 576) {
        $('body').addClass('position-fixed');
        $('#navbarSupportedContent').collapse('hide');
      }
    });

    $('.modal').on('hide.bs.modal', function() {
      $('body').removeClass('position-fixed');
    })
  }
})();
