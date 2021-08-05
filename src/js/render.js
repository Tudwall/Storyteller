//Helper function, that enables render to take as first argument single node or array of nodes.
function appendElements(parentNode, childrenNodes) {
  if (Array.isArray(childrenNodes)) {
    childrenNodes.forEach((element) => {
      parentNode.append(element);
    });
  } else {
    parentNode.append(childrenNodes);
  }
}

function render(elements, clearContent = true) {
  const content = document.querySelector("#content");

  if (clearContent === true) {
    content.textContent = "";
  }

  appendElements(content, elements);
}

export { render };
