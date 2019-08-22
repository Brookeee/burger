// $(function() {
//   $(".devour").on("click", function(event) {
//     var id = $(this).data("id");
//     var devoured = $(this).data("devoured");

//     var newDevouredState = {
//       devoured: devoured
//     };
//     console.log(newDevouredState);

//     $.ajax("/api/burger/" + id, {
//       type: "PUT",
//       data: newDevouredState
//     }).then(function() {
//       console.log("changed to devoured" + devoured);
//       location.reload();
//     });
//   });
//   $(".post").on("click", function(event) {
//     event.preventdefault();

//     var burgerNew = {
//       burger_name: $("#burg")
//         .val()
//         .trim(),
//       devoured: 0
//     };
//     console.log(burgerNew);

//     $.ajax("/api/burger/", {
//       type: "POST",
//       data: burgerNew
//     }).then(function() {
//       console.log("new burger added");
//     });
//   });
// });

// $(document).ready(function() {
//     //Adding Burger click logic
//   $("#addin").on("submit", function(event) {
//     event.preventDefault();
//   });
// })
// // Burgers logic
// $("").on("click", function(){

// })
// // Devoured burgers logic
// $("").on("click", function(){

// })
