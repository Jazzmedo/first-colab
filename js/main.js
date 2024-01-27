const inputs = document.querySelectorAll(".input");

function focusFunx() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}
inputs.forEach((input) => {
  input.addEventListener("focus", focusFunx);
});
// const div = document.querySelector(".pro");
// const THRESHOLD = 15; // The maximum degree the div can tilt
// div.addEventListener("mousemove", handleHover);
// div.addEventListener("mouseleave", resetStyles);
// function handleHover(e) {
//   const { clientX, clientY, currentTarget } = e;
//   const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
  
//   // Calculate the rotation angles
//   const xRotationAngle = ((clientY - offsetTop) / clientHeight) * THRESHOLD;
//   const yRotationAngle = ((clientX - offsetLeft) / clientWidth) * THRESHOLD;
  
//   // Apply the rotation angles
//   div.style.transform = `rotateX(${xRotationAngle}deg) rotateY(${yRotationAngle}deg)`;
// }

// function resetStyles(e) {
//   div.style.transform = "";
// }
