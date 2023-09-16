const $ = document;
let input = $.querySelector(".theInput");
let notesWrapper = $.querySelector(".notesWrapper");
let inputWrapper = $.querySelector(".input");
let colors = $.querySelectorAll(".color");
let plus = $.querySelector(".plusWrapper");
let erase = $.querySelector(".eraseWrapper");
let addNewNote = () => {
  let newP = $.createElement("p");
  newP.classList.add("note");
  newP.innerHTML = input.value;
  newP.style.backgroundColor = input.style.backgroundColor;
  notesWrapper.append(newP);
  input.value = "";
  input.style.backgroundColor = "";
  let notes = $.querySelectorAll(".note");
  notes.forEach((note) => {
    note.addEventListener("click", (event) => {
      event.target.remove();
    });
  });
};
erase.addEventListener("click", () => {
  input.value = "";
  input.style.backgroundColor = "";
});
input.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    addNewNote();
  }
});
plus.addEventListener("click", addNewNote);

colors.forEach((color) => {
  let theColor = color.style.backgroundColor;
  color.addEventListener("click", () => {
    input.style.backgroundColor = theColor;
  });
});
