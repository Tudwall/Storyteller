const makeDraggable = (element) => {

  element.classList.add('draggable')

  const startDrag = (event) => {

    /*  shiftX and shiftY needed so that mouse stays exactly
        on position where element was clicked at on dragStart */
    const shiftX = event.pageX - element.getBoundingClientRect().left;
    const shiftY = event.pageY - element.getBoundingClientRect().top;

    const startMove = (event) => {  
      element.style.left = `${event.pageX - shiftX}px`
      element.style.top = `${event.pageY - shiftY}px`
    }
    
    document.addEventListener('mousemove', startMove)
  
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', startMove)
    })
  }

  element.addEventListener('mousedown', startDrag)
}

export { makeDraggable }



/* ***************** How to use *****************
1. Select or create an element which you want to make draggable. 

2. Pass this element as argument into makeDraggable.

3. The element can then be dragged around and stay where the mouse goes up.
*/



/* ***************** Explanation of Code *****************
1. draggable class makes element's position absolute and changes mouse cursor
   when mouse hovers over element

3. pageX/pageY return position of left/top corner of mouse
   (Distance in px from top/left of viewport)

4. getBoundingClientRect() returns position of element
   (e.g. getBoundingClientRect().left: distance in px from left of page)
*/
