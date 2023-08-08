(function () {
  const headerElement = $("#header-page");
  const urlCurrent = window.location.pathname;
  // set title
  const routeContent = routes
    .map((route) => {
      if (urlCurrent.includes(route.path)) {
        document.title = route.content + "- Admin Page";
      }

      return `<li ${
        urlCurrent == route.path ||
        ((urlCurrent == "/index.html" || urlCurrent == "") && route.path == "/")
          ? 'class="active"'
          : ""
      }><a href="${route.path}">${route.icon}<span> ${
        route.content
      }</span></a></li>`;
    })
    .join("");

  const infoContent = `<div class="avatar">
    <img src="./images/hinh-anh-avatar-dep.jpg" alt="" />
    <p>Role: Admin</p>
    <p>Nguyễn Văn A</p>
    <button class="btn btn--primary">Edit</button>
  </div>`;
  const headerContent = `${infoContent}<nav class="navbar-main"><ul>${routeContent}</ul></nav>`;
  headerElement.innerHTML = headerContent;
})();
