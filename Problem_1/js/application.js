$(document).ready(function() {
   $(".btn-info").on("click", function() {
      $(".btn-info").trigger("blur");
      var startTime = Date.now();
      var limit = parseInt($("#limit").text(), 10);
      var result = euler(limit);
      runTimer(0);
      var endTime = Date.now();
      var executionTime = endTime - startTime;
      console.log(result);
      console.log("Execution Time " + executionTime);
      $(".result").text(result);
      $(".time").text(executionTime + " miliseconds");
      event.preventDefault();
   });

   // Timeout function to impose 1 minute limit
   function runTimer(n) {
      var t1 = Date.now();
      var t2;
      function go(n){
         var timer = n;
         setTimeout(function() {
            timer += 1000;
            $(".progress-bar").css({"width": (timer / 60) + "%"});
            console.log(timer);
            if(timer < 6000) {
               t2 = Date.now();
               go(timer);
            }
         }, 1000);
      }
      go(n);
   }
});
