// let totalchaltxt = document.querySelector(".stat-number");
// let totalchallenge = challenges.length;
// totalchaltxt.textContent = totalchallenge;


// let totalsportxt = document.querySelector(".stat-footer");
// let sportnumber = new Set(challenges.map(challenge => challenge.sport)).size;
// totalsportxt.textContent = `Across ${sportnumber} sports`;


// let parnumber = document.getElementById("partnumber");
// let totalpartic = participants.length;
// parnumber.textContent = totalpartic;


// let activchal = document.getElementById("activechal");
// let activechalenge = new Set(challenges.filter(challenge => challenge.status == "actif")).size;
// activchal.textContent = activechalenge;

// let completedchaltxt = document.getElementById("cpmletedchal");
// let completedchalenge = new Set(challenges.filter(challenge => challenge.status == "inactif")).size;
// completedchaltxt.textContent = ` ${completedchalenge} Completed`;



// const challengearticles = document.querySelector("#challengearticle");
// for (let i = 5; i < 8; i++) {
//    challengearticles.innerHTML+= `
//     <article class="activity-card">
//           <div class="card-img-container">
//           <img src="${challenges[i].imageUrl}" alt="${challenges[i].title}" class="card-img">
//         </div>
//         <div class="card-body">
//           <h3 class="activity-title">${challenges[i].title}</h3>
//           <div class="activity-subtitle">${challenges[i].description}</div>
//           <div class="progress-container">
//             <div class="progress-info">
//               <span> • ${challenges[i].status}</span>
//             </div>
//           </div>
//           <div class="card-actions">
//             <button class="btn btn-primary">View challenge</button>
//             <button class="btn btn-secondary"> Edit</button>
//           </div>
//         </div>
//         </article>`
//  }



const challenge_articles = document.querySelector("#challengsection");

challenges.forEach((idchal) => {
  challenge_articles.innerHTML += ` 
<article class="activity-card">
          <div class="card-img-container">
          <img src="${idchal.imageUrl}" alt="${idchal.title}" class="card-img">
        </div>
        <div class="card-body"> 
        <h3 class="activity-subtitle">Challenge Id : ${idchal.id}</h3>
          <h3 class="activity-title">${idchal.title}</h3>
          <div class="activity-subtitle">${idchal.description}</div>
          <div class="activity-subtitle">Deadline : ${idchal.deadline}</div>
          <div class="progress-container">
            <div class="progress-info">
              <span> • ${idchal.status}</span>
            </div>
          </div>
          <div class="card-actions">
            <button class="btn btn-primary challengeupdate" id="" >Edit</button>
            <button class="btn btn-primary challengedelete" id="" >Delete</button>
          </div>
        </div> 
        </article>`
});




const searchChallengeName = document.getElementById("searchChalinput");
const searchChallengeBtn = document.getElementById("searchChalBtn");
const spanNotfound = document.getElementById("searchnotfound");


searchChallengeBtn.addEventListener("click", function (e) {
  let searchValue = searchChallengeName.value;
  let chalengesearched = challenges.filter(chal => chal.id == searchValue);

  challengsection.innerHTML = "";

  if (chalengesearched.length === 0) {
    spanNotfound.textContent = "No challenge found";
    return;
  }

  for (i = 0; i < chalengesearched.length; i++) {
    challenge_articles.innerHTML += ` 
        <article class="activity-card">
          <div class="card-img-container">
          <img src="${chalengesearched[i].imageUrl}" alt="${chalengesearched[i].title}" class="card-img">
        </div>
        <div class="card-body"> 
        <h3 class="activity-subtitle">Challenge Id : ${chalengesearched[i].id}</h3>
          <h3 class="activity-title">${chalengesearched[i].title}</h3>
          <div class="activity-subtitle">${chalengesearched[i].description}</div>
          <div class="activity-subtitle">Deadline : ${chalengesearched[i].deadline}</div>
          <div class="progress-container">
            <div class="progress-info">
              <span> • ${chalengesearched[i].status}</span>
            </div>
          </div>
          <div class="card-actions">
            <button class="btn btn-primary">Edit</button>
            <button class="btn btn-primary">Delete</button>

          </div>
        </div> 
        </article>`
  }
});





const challengecreatebtn = document.getElementById("challengecreate");
const createform = document.getElementById("createchallenge");
const challengeupdatebtn = document.querySelectorAll(".challengeupdate");
const updateform = document.getElementById("updatechallenge");
const challengedeletebtn = document.querySelectorAll(".challengedelete");
const deleteform = document.getElementById("deletechallenge");

const createcloseBtn = document.getElementById("createclosebtn");
const updatecloseBtn = document.getElementById("updateclosebtn");
const deletecloseBtn = document.getElementById("deleteclosebtn");

challengecreatebtn.addEventListener("click", () => {
  createform.style.display = "flex";
});
createcloseBtn.addEventListener("click", () => {
  createform.style.display = "none";
});


challengeupdatebtn.forEach((el) => {

  el.addEventListener("click", () => {
    updateform.style.display = "flex";
  });
  updatecloseBtn.addEventListener("click", () => {
    updateform.style.display = "none";
  });
})



challengedeletebtn.forEach((ch) => {
  ch.addEventListener("click", () => {
    deleteform.style.display = "flex";
  });
  deletecloseBtn.addEventListener("click", () => {
    deleteform.style.display = "none";
  });
});



const createchallengeid = document.getElementById("createchallengeid");
const createchallengetitle = document.getElementById("createchallengetitle");
const createchallengesport = document.getElementById("createchallengesport");
const createchallengedescription = document.getElementById("createchallengedescription");
const createchallengeobjectif = document.getElementById("createchallengeobjectif");
const createchallengedate = document.getElementById("createchallengedate");
const createchallengestatus = document.getElementById("createchallengestatus");



const createchallengebtn = document.getElementById("createchallengebtn");


createchallengebtn.addEventListener("click", function (e) {
  let msgs = document.getElementById("createchallengespan")
  let chall = challenges.filter(chall => chall.id == createchallengeid);
  // let test = [];

  e.preventDefault();

  if (chall != 0) {

    challenges.push({
      "id": createchallengeid.value,
      "title": createchallengetitle.value,
      "sport": createchallengesport.value,
      "description": createchallengedescription.value,
      "goalValue": createchallengeobjectif.value,
      "deadline": createchallengedate.value,
      "status": createchallengestatus.value,
      "imageUrl": "Assets/images/running.png"
    })
  }
  else {
    msgs.textContent = "Id Already Token";
  }


});



