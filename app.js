const shareBtn = document.getElementById('share-btn');
const overlay = document.getElementById('overlay');

shareBtn.addEventListener('click', toggleShowHide);

function toggleShowHide(){
  if (overlay.style.display === "none") {
    overlay.style.display = "grid";
  } else {
    overlay.style.display = "none";
  }
}