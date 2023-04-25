import familyMembers from "./data.js";
import Fam from "./Fam.js";

const likeBtn = document.getElementById("heart-btn");
const disLikeBtn = document.getElementById("cross-btn");
let imageFanContainer = document.getElementById("image-fam-container");
likeBtn.addEventListener("click", handleLikeBtnClick);
disLikeBtn.addEventListener("click", handleDisLikeBtnClick);
let isWaiting = false;
let isWaitLikedBtnClicked = false;
let isWaitDislikedBtnClicked = false;

let famIndex = 0;

let familyMembersList = new Fam(familyMembers[famIndex]);

function handleLikeBtnClick() {
  if (!isWaitLikedBtnClicked) {
    familyMembersList.hasBeenLiked = true;
    familyMembersList.hasBeenSwiped = false;
    isWaitLikedBtnClicked = true;
    isWaitDislikedBtnClicked = true;
    isWaiting = true;
    render();
    getNewFamProfile();
  }
}

function handleDisLikeBtnClick() {
  if (!isWaitDislikedBtnClicked) {
    familyMembersList.hasBeenLiked = false;
    familyMembersList.hasBeenSwiped = true;
    isWaitLikedBtnClicked = true;
    isWaitDislikedBtnClicked = true;
    isWaiting = true;
    render();
    getNewFamProfile();
  }
}

function getNewFamProfile() {
  if (isWaiting) {
    setTimeout(function () {
      if (famIndex < familyMembers.length - 1) {
        famIndex += 1;
      } else {
        return (imageFanContainer.innerHTML = `
        <div class= "fam-card" id="fam-card"> 
          <img class="fam-images" src="images/Jocie-Jackie.jpg" >
          <h2 class="title">Thank you!</h2>
        </div>
        `);
      }

      familyMembersList = new Fam(familyMembers[famIndex]);
      familyMembersList.hasBeenLiked = false;
      familyMembersList.hasBeenSwiped = false;
      isWaitLikedBtnClicked = false;
      isWaitDislikedBtnClicked = false;
      isWaiting = false;
      render();
    }, 1000);
  }
}

function render() {
  imageFanContainer.innerHTML = familyMembersList.setFamilyCardHtml();
}

render();
