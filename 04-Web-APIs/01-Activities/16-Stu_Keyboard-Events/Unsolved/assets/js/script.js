function keydownAction(event) {
  // TODO: Complete keydown function
  event.preventDefault();
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
}
console.log(event);
function keyupAction() {
  event.preventDefault();
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event

document.addEventListener("keydown", keydownAction);
