// -------------------------- dragging --------------------------

const makeDraggable = (element, boundary) => {
  const startDrag = (event) => {
    event.preventDefault();
    /*  shiftX and shiftY needed so that mouse stays exactly
        on position where element was clicked at on dragStart */

    // Data below needed for boundary restrictions
    const heightEl = element.getBoundingClientRect().height;
    const widthEl = element.getBoundingClientRect().width;

    const topBound = boundary.getBoundingClientRect().top;
    const bottomBound = boundary.getBoundingClientRect().bottom;
    const leftBound = boundary.getBoundingClientRect().left;
    const rightBound = boundary.getBoundingClientRect().right;

    const shiftX = event.pageX - element.getBoundingClientRect().left;
    const shiftY = event.pageY - element.getBoundingClientRect().top;

    // Lines needed because position change from grid-item to absolute
    element.style.left = `${event.pageX - shiftX -leftBound}px`;
    element.style.top = `${event.pageY - shiftY - topBound}px`;
    element.classList.add("absolute");

    const startMove = (event) => {
      // Only let Element move left/right if inside boundary
      if (
        event.pageX - shiftX > leftBound &&
        event.pageX - shiftX + widthEl < rightBound
      ) {
        element.style.left = `${event.pageX - shiftX - leftBound}px`;
      }

      // Only let Element move top/bottom if inside boundary
      if (
        event.pageY - shiftY > topBound &&
        event.pageY - shiftY + heightEl < bottomBound
      ) {
        element.style.top = `${event.pageY - shiftY - topBound}px`;
      }
    };

    document.addEventListener("mousemove", startMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", startMove);
    });
  };

  element.addEventListener("mousedown", startDrag);
};

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

const makeDroppable = (draggable, dropTarget, boundary, doOndrop) => {
  let insideContainer = false;
  let topDrop;
  let bottomDrop;
  let leftDrop;

  // Function below runs every time draggable moved a bit
  const callback = () => {
    // Get side positions of dropTarget relative to page
    topDrop = dropTarget.getBoundingClientRect().top;
    bottomDrop = dropTarget.getBoundingClientRect().bottom;
    leftDrop = dropTarget.getBoundingClientRect().left;
    // Get side positions of draggable relative to page
    const topEl = draggable.getBoundingClientRect().top;
    const bottomEl = draggable.getBoundingClientRect().bottom;
    const leftEl = draggable.getBoundingClientRect().left;

    // Get x and y position from circle center points
    const radiusCon = (bottomDrop - topDrop) / 2;
    const centerYCon = topDrop + radiusCon;
    const centerXCon = leftDrop + radiusCon;

    const radiusEl = (bottomEl - topEl) / 2;
    const centerYEl = topEl + radiusEl;
    const centerXEl = leftEl + radiusEl;

    //Calculate distance between circle center points
    const offsetY = Math.abs(centerYCon - centerYEl);
    const offsetX = Math.abs(centerXCon - centerXEl);
    const distance = Math.sqrt(offsetY ** 2 + offsetX ** 2);

    // Check if a part of draggable is inside dropTarget
    if (distance < radiusCon + radiusEl) {
      insideContainer = true;
      dropTarget.classList.add("drop-effect");
    } else {
      insideContainer = false;
      dropTarget.classList.remove("drop-effect");
    }
  };

  // Watch for changes being made to draggable
  const observer = new MutationObserver(callback);
  observer.observe(draggable, { attributes: true });

  const dropDraggable = () => {
    if (insideContainer) {
      draggable.classList.add("smooth-drop")

      // Get left and right border positions of boundary
      const boundaryLeft = boundary.getBoundingClientRect().left;
      const boundaryTop = boundary.getBoundingClientRect().top;

      // Put draggable inside dropTarget
      draggable.style.left = `${leftDrop - boundaryLeft}px`;
      draggable.style.top = `${topDrop - boundaryTop}px`;

      draggable.addEventListener("transitionend", () => doOndrop())

      document.removeEventListener("mouseup", dropDraggable);
    }
  };

  document.addEventListener("mouseup", dropDraggable);
};

/* ***************** How to use makeDroppable*****************
1. Create a draggable element with makeDraggable.

2. Create a dropTarget element.

3. Create a callback for successful dropping.

4. Pass draggable + dropTarget + callback as arguments to makeDroppable.

5. Create acss class 'drop-effect' -
   style is applied to dropTarget when draggable hovers over it

6. When draggable is over dropTarget and mouse goes up,
   draggable jumps into dropTarget and callback function is executed
*/

/* ***************** Explanation of makeDroppable Code *****************
1. getBoundingClientRect() returns side positions of draggable/dropTarget
   (e.g. getBoundingClientRect().left: distance in px from left of page)

2. insideContainer is needed to track if draggable is over dropTarget or not

3. Callback passed into Mutationobserver gets executed each
   time a change is made to draggable. With MutationObserver interface
   you can in general watch for changes made to specific elements.
*/

export { makeDraggable, makeDroppable };
