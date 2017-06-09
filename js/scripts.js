$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#number").val());  //turns user input to num

    //debugger;
    var result = numberList(number);
    $("#result").text(result);
  });
});

var numberList = function(number) {    //1
  var array = [];
  for (var counter = 1; counter <= number; counter++) {
    if (counter % 5 === 0) {
    	if (counter % 3 === 0) {
    		//print "ping-pong"
        array.push("ping-pong");
    	} else {
    		//print "pong"
        array.push("pong");
      }
    }else if (counter % 3 === 0) {
    	//print "ping"
      array.push("ping");
    } else {
      array.push(counter);
    }
  }
  return array;
}
