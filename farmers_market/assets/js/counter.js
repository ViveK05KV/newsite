$(document).ready(function(){
  // Set counter default to zero
  var whole_counter = 0;
  var clean_counter = 0;
  var cut_counter = 0;
  var wrate = $("#w_rate").text();
  var ccrate = $("#cc_rate").text();
  var clrate = $("#cl_rate").text();

  // Display total
  $("#whole_counter").text(whole_counter+"kg");
  $("#clean_counter").text(clean_counter+"kg");
  $("#cut_counter").text(cut_counter+"kg");

  // When button is clicked
  $("#whole_add").click(function(){
    //Add 10 to counter
    whole_counter = whole_counter + 1;
  	// Display total
  	$("#whole_counter").text(whole_counter+"kg");
    $("#w_value").text(wrate*whole_counter+"kg");
  });

  $("#clean_add").click(function(){
    //Add 10 to counter
    clean_counter = clean_counter + 1;
    // Display total
    $("#clean_counter").text(clean_counter+"kg");
    $("#cl_value").text(clrate*clean_counter+"kg");
  });

  $("#cut_add").click(function(){
    //Add 10 to counter
    cut_counter = cut_counter + 1;
    // Display total
    $("#cut_counter").text(cut_counter+"kg");
    $("#cc_value").text(ccrate*cut_counter+"kg");
  });

  //Subtract
  $("#whole_subtract").click(function(){
    if(whole_counter<=0){

    }
    else {
      whole_counter = whole_counter - 1;
      $("#whole_counter").text(whole_counter+"kg");
      $("#w_value").text(wrate*whole_counter+"kg");
    }

  });
  $("#clean_subtract").click(function(){
    if(clean_counter<=0){

    }
    else {
      clean_counter = clean_counter - 1;
      $("#clean_counter").text(clean_counter+"kg");
      $("#cl_value").text(clrate*clean_counter+"kg");
    }

  });
  $("#cut_subtract").click(function(){
    if(cut_counter<=0){

    }
    else {
      cut_counter = cut_counter - 1;
      $("#cut_counter").text(cut_counter+"kg");
      $("#cc_value").text(ccrate*cut_counter+"kg");
    }

  });


});
