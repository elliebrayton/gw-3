window.addEventListener("scroll",
  function() {
    if (document.body.scrollTop > 300|| document.documentElement.scrollTop > 300) {
      document.getElementById("quotes").className = "animate__backInLeft";
  }, false
);
