$(document).ready(function () {
  $('#square').click(function () {
      let ob = $(".object");
      ob.animate({
          left: "200px"
      }, 1000);
      ob.animate({
          top: "100px"
      }, 1000);
      ob.animate({
          left: "0"
      }, 1000);
      ob.animate({
          top: "0"
      }, 1000);
  });
});
$(document).ready(function () {
  $('#triangle').click(function () {
      let ob = $(".object");
      ob.animate({
          left: "200px",
          top: "0"
      }, 1000);
      ob.animate({
          left: "100px",
          top: "100px"
      }, 1000);
      ob.animate({
          left: "0",
          top: "0"
      }, 1000);
  });
  let ob = $(".object");

  $('#scale').click(function () {
      if (ob.width() === 400) {
          ob.animate({
              width: "100px",
              height: "100px",
              opacity: 1
          }, 1000);
      } else {
          ob.animate({
              width: "400px",
              height: "400px",
              opacity: 0
          }, 1000);
      }
  });
});
