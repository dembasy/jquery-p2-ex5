$('#lastName').focusin(function(){
  $(this).css('border', '1px solid green');
});
$('#firstName').focusin(function(){
  $(this).css('border', '1px solid green');
});
$('#lastName').focusout(function(){
  $(this).css('border', '1px solid red');
});
$('#firstName').focusout(function(){
  $(this).css('border', '1px solid red');
});
