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


let compteur = 100;

const createrId = () => {
  const id = `ch_${compteur}`;
  compteur++;
  return id;
};

const searchChallengeName = document.getElementById("searchChalinput");
const searchChallengeBtn = document.getElementById("searchChalBtn");
const spanNotfound = document.getElementById("searchnotfound");


searchChallengeBtn.addEventListener("click", function (e) {
  let searchValue = searchChallengeName.value;
  let chalengesearched = challenges.filter(chal => chal.title == searchValue);

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
            <button class="btn btn-primary updatechallenge">Edit</button>
            <button class="btn btn-primary" deletechallenge">Delete</button>

          </div>
        </div> 
        </article>`
  }
});




const challenge_articles = document.querySelector("#challengsection");

challenges.forEach((idchal) => {
  challenge_articles.innerHTML += ` 
<article class="activity-card">
          <div class="card-img-container">
          <img src="${idchal.imageUrl}" alt="${idchal.title}" class="card-img">
        </div>
        <div class="card-body"> 
          <h3 class="activity-title">${idchal.title}</h3>
          <div class="activity-subtitle">${idchal.description}</div>
          <div class="activity-subtitle">Deadline : ${idchal.deadline}</div>
          <div class="progress-container">
            <div class="progress-info">
              <span> • ${idchal.status}</span>
            </div>
          </div>
          <div class="card-actions">
            <button class="btn btn-primary challengeupdate" data-id="${idchal.id}" >Edit</button>
            <button class="btn btn-primary challengedelete" data-id="${idchal.id}" >Delete</button>
          </div>
        </div> 
        </article>`
});




const challengecreatebtn = document.getElementById("challengecreate");
const createform = document.getElementById("createchallenge");

challengecreatebtn.addEventListener("click", () => {
  createform.style.display = "flex";
  createform.innerHTML = `
   <div class="modal-div">
            <span class="fermer-btn" id="createclosebtn">&times;</span>
            <form action="">
              <span id="createchallengespan"></span>
              <label for="challenge_name">Challenge name *</label>
              <input type="text" required name="challenge_name"  id="createchallengetitle" >
              <label for="Description">Description</label>
              <input type="text" name="Description" id="createchallengedescription" required>
              <label for="sport">Sport*</label>
              <input type="text" name="sport" id="createchallengesport" required>
              <label for="" >Status</label>
              <select id="createchallengestatus" required>
                <option value="Active">Active</option>
                <option value="Completed" selected>Completed</option>
              </select>
              <label for="Objectif">Objectif*</label>
              <input type="number" name="Objectif" id="createchallengeobjectif" required>
              <label for="Deadline">Deadline</label>
              <input type="date" name="Deadline" id="createchallengedate" required>
              <button type="submit" id="createchallengebtn" class="btn btn-primary">Create challenge</button>
            </form>
          </div>
  `
  const createcloseBtn = document.getElementById("createclosebtn");
  createcloseBtn.addEventListener("click", () => {
    createform.style.display = "none";
  });


  const createchallengetitle = document.getElementById("createchallengetitle");
  const createchallengesport = document.getElementById("createchallengesport");
  const createchallengedescription = document.getElementById("createchallengedescription");
  const createchallengeobjectif = document.getElementById("createchallengeobjectif");
  const createchallengedate = document.getElementById("createchallengedate");
  const createchallengestatus = document.getElementById("createchallengestatus");

  const createchallengebtn = document.getElementById("createchallengebtn");

  createchallengebtn.addEventListener("click", function (e) {
    let msgs = document.getElementById("createchallengespan")
    e.preventDefault()

    challenges.push({
      id: createrId(),
      "title": createchallengetitle.value,
      "sport": createchallengesport.value,
      "description": createchallengedescription.value,
      "goalValue": createchallengeobjectif.value,
      "deadline": createchallengedate.value,
      "status": createchallengestatus.value,
    })
    msgs.textContent = "Challenge created successfully";
  });
});




challenge_articles.addEventListener("click", (e) => {
  const challengeId = e.target.getAttribute("data-id");
  const challengeedittarget = challenges.find((ch) => ch.id == challengeId);
  
  if (e.target.classList.contains("challengeupdate")) {
    if (challengeedittarget) {
      createform.innerHTML = `
   <div class="modal-div">
            <span class="fermer-btn" id="createclosebtn">&times;</span>
            <form action="">
              <span id="createchallengespan"></span>
              <label for="challenge_name">Challenge name *</label>
              <input type="text" name="challenge_name"  id="createchallengetitle" required>
              <label for="Description">Description</label>
              <input type="text" name="Description" id="createchallengedescription" required>
              <label for="sport">Sport*</label>
              <input type="text" name="sport" id="createchallengesport" required>
              <label for="" >Status</label>
              <select id="createchallengestatus" required>
                <option value="Active">Active</option>
                <option value="Completed" selected>Completed</option>
              </select>
              <label for="Objectif">Objectif*</label>
              <input type="number" name="Objectif" id="createchallengeobjectif" required>
              <label for="Deadline">Deadline</label>
              <input type="date" name="Deadline" id="createchallengedate" required>
              <button type="submit" id="updatechallengebtn" class="btn btn-primary">Update Challenge</button>
            </form>
          </div>
  `
      const createcloseBtn = document.getElementById("createclosebtn");
      createcloseBtn.addEventListener("click", () => {
        createform.style.display = "none";
      });

      createchallengetitle.value = challengeedittarget.title;
      createchallengesport.value = challengeedittarget.sport;
      createchallengedescription.value = challengeedittarget.description;
      createchallengeobjectif.value = challengeedittarget.goalValue;
      createchallengedate.value = challengeedittarget.deadline;
      createchallengestatus.value = challengeedittarget.status;

      createform.style.display = "flex";
    }
  }


  const updatechallengebtn = document.getElementById("updatechallengebtn");

  updatechallengebtn.addEventListener("click", (e) => {
    const challengeedittarget = challenges.find((challenge) => challenge.id == challengeId);
    const challengetargetid = challenges.findIndex(challenge => challenge.id == challengeId);
    let msgs = document.getElementById("createchallengespan")
    e.preventDefault()
    if (challengeedittarget) {
      challenges[challengetargetid] =
      {
        "id": challengeedittarget.id,
        "title": createchallengetitle.value,
        "sport": createchallengesport.value,
        "description": createchallengedescription.value,
        "goalValue": createchallengeobjectif.value,
        "deadline": createchallengedate.value,
        "status": createchallengestatus.value
      }
      msgs.textContent = "Challenge updated successfully";

    }
  });


  // const deletechallengebtn = document.querySelector(".challengedelete")

  // deletechallengebtn.addEventListener("click", (e) => {
  //  const deletedchallengeindex = challenges.findIndex(challenge => challenge.id == challengeId)

  //   console.log(deletedchallengeindex)

  //   if (deletedchallengeindex != -1) {
  //     challenges.splice(challengetargetid, 1);
  //   }
  // });

});


// challenge_articles.addEventListener("click", (e) => {

//   const selectedchallengeid = e.target.getAttribute("data-id");
//   const deletedchallengeid = challenges.find(challenge => selectedchallengeid == challenge.id)
//   const deletedchallengeindex = challenges.findIndex(challenge => challenge.id == deletedchallengeid)

//   const deletechallengebtn = document.querySelector(".challengedelete")

//   deletechallengebtn.addEventListener("click", (e) => {
//       console.log(selectedchallengeid)
//       console.log("deletedchallengeindex")

//       if (deletedchallengeindex != -1) {
//         challenges.splice(deletedchallengeindex, 1);
//       }
//   });

// });










