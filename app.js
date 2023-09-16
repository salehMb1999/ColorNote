const $ = document;
let input = $.querySelector(".theInput");
let notesWrapper = $.querySelector(".notesWrapper");
input.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    addNewNote();
  }
});
let addNewNote = () => {
  let newP = $.createElement("p");
  newP.classList.add("note");
  newP.innerHTML = input.value;
  notesWrapper.append(newP);
  input.value = "";
};
let selectColor = () => {
    
}