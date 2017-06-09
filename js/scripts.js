$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();


    var number = parseInt($("#number").val());  //turns user input to number
    var result = numberList(number);
    $("#result").text(result);
  });
});

var numberList = function(number) {
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

  array.forEach(function(item){
    //in each loop, append a line item in results
    $("#results").append("<li>" + number + "</li>");
  });
  return array;
}
