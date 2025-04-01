document.addEventListener("DOMContentLoaded", function () {
  var selDiv = document.getElementById("selectedBanner");
  var storedFiles = [];
  var commentsBlock = document.querySelector(".comments");
  var commentsButton = document.getElementById("comments");
  var likeBlock = document.querySelector(".intraction-button#like svg path"); // Шлях до іконки
  var likeButton = document.getElementById("like");

  commentsButton.addEventListener("click", function () {
    var currentHeight = window.getComputedStyle(commentsBlock).height;
    if (currentHeight === "0px" || currentHeight === "auto") {
      commentsBlock.style.height = "auto";
      commentsBlock.style.overflow = "visible";
    } else {
      commentsBlock.style.height = "0px";
      commentsBlock.style.overflow = "hidden";
    }
  });

  likeButton.addEventListener("click", function () {
    var currentFill = likeBlock.getAttribute("fill");
    if (currentFill === "#00000000" || currentFill === "#5D6778") {
      likeBlock.setAttribute("fill", "#4c68d5");
      likeBlock.setAttribute("stroke", "#4c68d5");
      likeButton.style.color = "#4c68d5";
    } else {
      likeBlock.setAttribute("fill", "#00000000");
      likeBlock.setAttribute("stroke", "#5D6778");
      likeButton.style.color = "#5D6778";
    }
  });

  document.getElementById("add-media").addEventListener("change", function (e) {
    var files = e.target.files;

    Array.from(files).forEach(function (f) {
      if (!f.type.match("image.*")) {
        return;
      }
      storedFiles.push(f);

      var reader = new FileReader();
      reader.onload = function (event) {
        var img = document.createElement("img");
        img.src = event.target.result;
        img.alt = "Category Image";
        img.width = 200;
        img.height = 200;

        selDiv.appendChild(img);
      };
      reader.readAsDataURL(f);
    });
  });
});
