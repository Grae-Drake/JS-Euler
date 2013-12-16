$(document).ready(function() {
   
   // Event handler for Run button
   $("#run").on("click", function() {
      $("#run").trigger("blur");
      $(".progress-bar").toggleClass("expandify");
      var startTime = Date.now();
      var limit = parseInt($("#limit").text(), 10);
      var result = euler(limit);
      var endTime = Date.now();
      var executionTime = endTime - startTime;
      $(".result").text(result);
      $(".time").text(executionTime + " miliseconds");
      event.preventDefault();
   });

   // Event handler for Reset button
   $("#reset").on("click", function() {
      $("#reset").trigger("blur");
      $("#limit").text("1000");
      $(".result").text("");
      $(".time").text("");
      $(".progress-bar").removeClass("expandify");
   });
});
