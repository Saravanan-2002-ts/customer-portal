window.onload = function () {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    // const searchBtn = document.querySelector(".bx-search");

    closeBtn.addEventListener("click", function () {
      sidebar.classList.toggle("open");
      menuBtnChange();
    });

    // searchBtn.addEventListener("click", function () {
    //   sidebar.classList.toggle("open");
    //   menuBtnChange();
    // });

    function menuBtnChange() {
      if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    }

    let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", function (e) {
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");

        // If the clicked item has a sub-menu, toggle its visibility
        let subMenu = arrowParent.querySelector(".sub-menu");
        if (subMenu) {
          subMenu.classList.toggle("show");
        }
      });
    }
  };

  // document.querySelectorAll('.link-item').forEach(function (linkItem) {
  //   linkItem.addEventListener('click', function () {
  //     const iframeSrc = linkItem.getAttribute('data-iframe');
  //     const newIframe = document.createElement('iframe');
  //     newIframe.src = iframeSrc;
  //     newIframe.frameBorder = '0';
  
  //     iframeContainer.innerHTML = ''; // Remove any existing iframes
  //     iframeContainer.appendChild(newIframe); // Append the new iframe
  //   });
  // });

  // function changeColor() {
  //   var colorInput = document.getElementById('color-input').value;
  //   var menuBar = document.getElementById('menu-bar');

  //   if (/^#[0-9A-Fa-f]{6}$/.test(colorInput)) {
  //     menuBar.style.backgroundColor = colorInput;
  //   } else {
  //     alert('Please enter a valid hex color code.');
  //   }
  // }
