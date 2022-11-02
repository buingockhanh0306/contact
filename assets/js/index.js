const bank = document.querySelector(".bank");
const modal = document.querySelector(".modal");
function openBank() {
  modal.style.display = "block";
  bank.classList.add("active");
}
function closeBank() {
  modal.style.display = "none";
  bank.classList.remove("active");
}
function copyClipboard() {
  const copyText = document.querySelector("#copy").textContent;
  navigator.clipboard.writeText(copyText);
}
