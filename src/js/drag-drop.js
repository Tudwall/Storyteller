// -------------------------- dragging --------------------------

const makeDraggable = (element) => {
  element.classList.add("draggable");

  const startDrag = (event) => {
    event.preventDefault();
    /*  shiftX and shiftY needed so that mouse stays exactly
        on position where element was clicked at on dragStart */
    const shiftX = event.pageX - element.getBoundingClientRect().left;
    const shiftY = event.pageY - element.getBoundingClientRect().top;

    const startMove = (event) => {
      element.style.left = `${event.pageX - shiftX}px`;
      element.style.top = `${event.pageY - shiftY}px`;
    };

    document.addEventListener("mousemove", startMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", startMove);
    });
  };

  element.addEventListener("mousedown", startDrag);
};

export { makeDraggable };

/* ***************** How to use makeDraggable *****************
1. Select or create an element which you want to make draggable. 

2. Pass this element as argument into makeDraggable.

3. The element can then be dragged around and stay where the mouse goes up.
*/

/* ***************** Explanation of makeDraggable Code *****************
1. draggable class makes element's position absolute and changes mouse cursor
   when mouse hovers over element

3. pageX/pageY return position of left/top corner of mouse
   (Distance in px from top/left of viewport)

4. getBoundingClientRect() returns position of element
   (e.g. getBoundingClientRect().left: distance in px from left of page)
*/

// -------------------------- dropping --------------------------

const makeDroppable = (draggable, container, doOndrop) => {
  let insideContainer = false;
  let topCon;
  let bottomCon;
  let leftCon;

  // Function below runs every time draggable moved a bit
  const callback = () => {
    // Get side positions of container relative to page
    topCon = container.getBoundingClientRect().top;
    bottomCon = container.getBoundingClientRect().bottom;
    leftCon = container.getBoundingClientRect().left;
    // Get side positions of draggable relative to page
    const topEl = draggable.getBoundingClientRect().top;
    const bottomEl = draggable.getBoundingClientRect().bottom;
    const leftEl = draggable.getBoundingClientRect().left;

    // Get x and y position from circle center points
    const radiusCon = (bottomCon - topCon) / 2;
    const centerYCon = topCon + radiusCon;
    const centerXCon = leftCon + radiusCon;

    const radiusEl = (bottomEl - topEl) / 2;
    const centerYEl = topEl + radiusEl;
    const centerXEl = leftEl + radiusEl;

    //Calculate distance between circle center points
    const offsetY = Math.abs(centerYCon - centerYEl);
    const offsetX = Math.abs(centerXCon - centerXEl);
    const distance = Math.sqrt(offsetY ** 2 + offsetX ** 2);

    // Check if a part of draggable is inside container
    if (distance < radiusCon + radiusEl) {
      insideContainer = true;
      container.classList.add("drop-effect");
    } else {
      insideContainer = false;
      container.classList.remove("drop-effect");
    }
  };

  // Watch for changes being made to draggable
  const observer = new MutationObserver(callback);
  observer.observe(draggable, { attributes: true });

  const dropDraggable = () => {
    if (insideContainer) {
      // Put draggable inside container
      draggable.style.left = leftCon + "px";
      draggable.style.top = topCon + "px";

      doOndrop();

      document.removeEventListener("mouseup", dropDraggable);
    }
  };

  document.addEventListener("mouseup", dropDraggable);
};

/* ***************** How to use makeDroppable*****************
1. Create a draggable element with makeDraggable.

2. Create a container element.

3. Create a callback for successful dropping.

4. Pass draggable + container + callback as arguments to makeDroppable.

5. Create acss class 'drop-effect' -
   style is applied to container when draggable hovers over it

6. When draggable is over container and mouse goes up,
   draggable jumps into container and callback function is executed
*/

/* ***************** Explanation of makeDroppable Code *****************
1. getBoundingClientRect() returns side positions of draggable/container
   (e.g. getBoundingClientRect().left: distance in px from left of page)

2. insideContainer is needed to track if draggable is over container or not

3. Callback passed into Mutationobserver gets executed each
   time a change is made to draggable. With MutationObserver interface
   you can in general watch for changes made to specific elements.
*/

export { makeDraggable, makeDroppable };
