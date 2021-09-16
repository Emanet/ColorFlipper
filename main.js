const body = document.querySelector("body");
const button = document.getElementById("change-btn");
const instantButton = document.getElementById("instant-color");
const favbtn = document.getElementById("fav-btn");
const favList = document.getElementById("fav-list");
const liste = document.getElementById("liste");
const instantColorButton = document.getElementById("instant-color");

const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

instantColorButton.addEventListener("click", copyText);
button.addEventListener("click", changeBackground);
favbtn.addEventListener("click", () => {
  addFav(instantButton.textContent);
});

function changeBackground() {
  let selectedId = "#";
  do {
    let randomColor = Math.floor(Math.random() * colors.length);
    selectedId += colors[randomColor];
  } while (selectedId.length <= 6);
  body.style.backgroundColor = selectedId;
  liste.style.backgroundColor = selectedId;
  instantButton.innerText = selectedId;
}

function addFav(hexCode) {
  let favItem = `
    <ul style = 'background-color: ${hexCode}'>
        <li>
            <span>Color Code: <span>${hexCode}</span></span>
            <span style='background-color:${hexCode}'></span>
        </li>
    </ul>
    `;
  favList.insertAdjacentHTML("beforeend", favItem);
}
function selectText() {
  var element = event.target;
  var range;
  if (document.selection) {
    // IE
    range = document.body.createTextRange();
    range.moveToElementText(element);
    range.select();
  } else if (window.getSelection) {
    range = document.createRange();
    range.selectNode(element);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
  }
}
function copyText() {
  selectText();
   alert('Color code ' + event.target.innerText + ' copied in clipboard')
  document.execCommand("copy");
}
$("#instant-color").click(function () {
  $(".alert").addClass("show");
  $(".alert").removeClass("hide");
  $(".alert").addClass("showAlert");
  setTimeout(function () {
    $(".alert").removeClass("show");
    $(".alert").addClass("hide");
  }, 5000);
});
$(".close-btn").click(function () {
  $(".alert").removeClass("show");
  $(".alert").addClass("hide");
});
