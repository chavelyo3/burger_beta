$(function () {
  $(".burger-eaten").on("click", function (event) {
    let id = $(this).data("id");
    let newOrder = $(this).data("newOrder");

    let newOrderState = {
      devoured: newOrder
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newOrderState,
    }).then(function () {
      console.log("changed burger to", newOrder);

      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    let newBurger = {
      burger_name: $("#nb").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("new burger added");

      location.reload();
      
    });
  });

  $(".delete-burger").on("click", function (event) {
    let id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted burger", id);

      location.reload();
    });
  });
});
