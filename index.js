let loader;

const showText = () => {
  document.getElementById("loading").style.display = "none";
  document.getElementById("textContainer").style.display = "block";
};

const loading = () => {
  loader = setTimeout(showText, 3000);
};
