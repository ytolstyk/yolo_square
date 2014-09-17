// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require bootstrap

$(function () {
  var $button = $(".btn-listen-to");
  $button.on("click", function (event) {
    event.preventDefault();
    var willAlert = false;
    var $alertDiv = $(".alert");
    $alertDiv.removeClass().addClass("alert").empty();
    
   $('.form-group').each(function(index, group){
      $(group).removeClass("has-error");
      if ($(group).find('.form-control').val().length === 0) {
        $(group).addClass("has-error");
        willAlert = true;
      }
    });
    
    if (willAlert) {
      $alertDiv.addClass("alert-danger");
      $alertDiv.text("ERRORRRS!");
    } else {
      $alertDiv.addClass("alert-success");
      $alertDiv.text("SUCCESEEESK!");
    }
  });
  
  $(".tooltip-image").tooltip(); 
  
  $("body").scrollspy({ target: ".navbar-scrolling" });
  
  $("li.error").each(function(index, element) {
    if element.text() === "Invalid Credentials"
  }
  
  
});