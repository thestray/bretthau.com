$(document).ready(function() {

  var pages = $(".page").length,
      scrolling = false,
      curPage = 1;
  if(curPage == 1){
    setInterval('cursorAnimation()', 600);
  }
  // Main function to change page
  function pagination(page, movingUp) {
    scrolling = true;
    var diff = curPage - page,
        oldPage = curPage;
    curPage = page;
    $(".page").removeClass("active small previous");
    $(".page-" + page).addClass("active");
    $(".nav-btn").removeClass("active");
    $(".nav-page" + page).addClass("active");
    if (page > 1) {
      $(".page-" + (page - 1)).addClass("previous");
      if (movingUp) {
        $(".page-" + (page - 1)).hide();
        var hackPage = page;
        setTimeout(function() {
          $(".page-" + (hackPage - 1)).show();
        }, 600);
      }
      while (--page) {
        $(".page-" + page).addClass("small");
      }
    }
    console.log(diff)
    if (diff > 1) {
      for (var j = page + 1; j < oldPage; j++) {
        $(".page-" + j + " .half").css("transition", "transform .7s ease-out");
      }
    }
    setTimeout(function() {
      scrolling = false;
      $(".page .half").attr("style", "");
      $(".page")
    }, 700);
  }

  //Change page up
  function navigateUp() {
    if (curPage > 1) {
      curPage--;
      pagination(curPage, true);
    }
  }

  //Change page down
  function navigateDown() {
    if (curPage < pages) {
      curPage++;
      pagination(curPage);
    }
  }



  //Change page on mouse scroll
  $(document).on("mousewheel DOMMouseScroll", function(e) {
    if (!scrolling) {
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        navigateUp();
      } else {
        navigateDown();
      }
    }
  });

  //Change page on up or down key
  $(document).on("keydown", function(e) {
    if (scrolling) return;
    if (e.which === 38) {
      navigateUp();
    } else if (e.which === 40) {
      navigateDown();
    }
  });

  // Change page on menu click
  $(document).on("click", ".nav-btn:not(.active)", function() {
    if (scrolling) return;
    pagination(+$(this).attr("data-target"));
  });



});

function cursorAnimation() {
  $('#cursor').animate({
    opacity: 0
  }, 'fast', 'swing').animate({
    opacity: 1
  }, 'fast', 'swing');
}

