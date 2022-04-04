/* $(document).ready(function () {
 
});
 */


/* function openEntry(entryName) {
  var i;
  var x = document.getElementsByClassName("tabcontent");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(entryName).style.display = "block";
} */

// New tabs
function openEntry(evt, entryName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(entryName).style.display = "block";
  evt.currentTarget.className += " active";
}

//scrollSpy function
//scrollSpy_mark corresponde a cuando llamo a la funcion scrollSpy
/* function scrollSpy(scrollSpy_mark) {
  var sections = ["asistente", "controles-universales", "sensores"];
  var current;

  for (var i = 0; i < sections.length; i++) {
    // if ($('#' + sections[i]).offset().top  <= $(window).scrollTop()) {

    if ($(window).width() >= 768) {
      if ($("#" + sections[i]).offset().top - 180 <= $(window).scrollTop()) {
        current = sections[i];
      }
    } else {
      if ($("#" + sections[i]).offset().top - 120 <= $(window).scrollTop()) {
        current = sections[i];
      }
    }

    // si scrollSpy_mark es falso y la url temina con el mismo current, posiciona en top current
    if (!scrollSpy_mark && window.location.href.endsWith(sections[i])) {
      if ($(window).width() >= 768) {
        $("html, body").animate(
          { scrollTop: $("#" + current).offset().top - 120 },
          800
        );
      } else {
        $("html, body").animate(
          { scrollTop: $("#" + current).offset().top - 100 },
          800
        );
      }
    }
  }

  $(".interno a[href='#" + current + "']").addClass("active");
  $(".interno a")
    .not("a[href='#" + current + "']")
    .removeClass("active");

  // $(".interno a[href='#" + current + "']").parents('.bp').addClass("visitado");
}
 */
/* $(document).ready(function () {
  // smooth scrolling navigation
  $(".interno a").click(function () {
    var target = $(this).attr("href");
    if ($(window).width() >= 768) {
      $("body, html").animate({ scrollTop: $(target).offset().top - 120 }, 800);
    } else {
      $("body, html").animate({ scrollTop: $(target).offset().top - 100 }, 800);
    }
    return false;
  });

  //scrollSpy call
  scrollSpy(false);
});

$(window).scroll(function () {
  scrollSpy(true);
}); */
