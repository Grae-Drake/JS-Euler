$(document).ready(function() {
   $(".btn-info").on("click", function() {
      $(".btn-info").trigger("blur");
      $(".progress-bar").toggleClass("expandify");
      var startTime = Date.now();
      var limit = parseInt($("#limit").text(), 10);
      var result = euler(limit);
      var endTime = Date.now();
      var executionTime = endTime - startTime;
      console.log(result);
      console.log("Execution Time " + executionTime);
      $(".result").text(result);
      $(".time").text(executionTime + " miliseconds");
      event.preventDefault();
   });
});
