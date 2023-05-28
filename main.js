window.addEventListener("load", function () {
  const theme = window.localStorage.getItem("applied-theme");

  const t = JSON.parse(theme);

  document.documentElement.classList.add(t.theme);
});

function toggleMode() {
  const html = document.documentElement;

  if (html.classList.contains("light")) {
    html.classList.remove("light");
    window.localStorage.setItem(
      "applied-theme",
      JSON.stringify({ theme: "dark" })
    );
  } else {
    html.classList.add("light");
    window.localStorage.setItem(
      "applied-theme",
      JSON.stringify({ theme: "light" })
    );
  }
}
