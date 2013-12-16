$(document).ready(function() {

   // Let's play with a web worker!
   // Failing with error: "Uncaught SecurityError: Failed to create a worker: script
   // at [path to problem1.js] cannot be accessed from origin 'null'".
   // Chrome may be blocking files from "file://".
   var worker = new Worker("problem1.js");
   worker.postMessage();

   // Event handler for Run button.
   $("#run").on("click", function() {
      $("#run").trigger("blur");
      $(".progress-bar").toggleClass("expandify collapsed");
      var startTime = Date.now();
      var limit = parseInt($("#limit").text(), 10);
      var result = euler(limit);
      var endTime = Date.now();
      var executionTime = endTime - startTime;
      $(".result").text(result);
      $(".time").text(executionTime + " miliseconds");
      event.preventDefault();
   });

   // Event handler for Reset button.
   $("#reset").on("click", function() {
      $("#reset").trigger("blur");
      $("#limit").text("1000");
      $(".result").text("");
      $(".time").text("");
      $(".progress-bar").removeClass("expandify");
   });

   // Event handler for hitting enter while editing the limit.
   $("#limit").on("keypress", function(e) {
      var code = e.keyCode || e.which;
      if(code == 13) { //Enter keycode
         $("#run").trigger("focus");
         }
   });
});
