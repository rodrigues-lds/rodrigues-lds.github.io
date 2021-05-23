const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  let listItem = document.createElement("li");
  let listText = document.createElement("span");
  let deleteBtn = document.createElement("button");

  let myItem = input.value;
  input.value = "";

  if (myItem.trim() != "") {
    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(deleteBtn);
    deleteBtn.textContent = "X";
    list.appendChild(listItem);
    input.focus();
  }

  deleteBtn.addEventListener("click", function () {
    list.removeChild(listItem);
    input.focus();
  });
});
