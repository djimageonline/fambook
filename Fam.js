import familyMembers from "./data.js";

class Fam {
  constructor(data) {
    Object.assign(this, data);
  }

  setFamilyCardHtml() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;

    return `
    <div class= "fam-card" id="fam-card"> 
    <img class="fam-images" src="${avatar}" >
      <h2 class="title">${name}, ${age}</h2>
      <p class="bio">${bio}</p>
      ${hasBeenLiked ? this.setLikedLogo() : hasBeenSwiped ? this.setDisLikedLogo() : ""}
    </div>
    `;
  }

  setLikedLogo() {
    return `
    <div class="badge-like"><img src="images/badge-like.png"></div>`;
  }

  setDisLikedLogo() {
    return `
    <div class="badge-disliked"><img src="images/badge-nope.png"></div>`;
  }
}

export default Fam;
