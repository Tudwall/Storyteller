function render(...elements) {
  const content = document.querySelector("#content");

  content.textContent = "";

  elements.forEach((element) => {
    content.append(element);
  });
}

export { render };
