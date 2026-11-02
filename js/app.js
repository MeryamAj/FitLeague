// let totalchaltxt = document.getElementById("stat-number");
// console.log(totalchaltxt);
// totalchaltxt?.innerHTML = challenges.length;


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

// const challenge_3articles = document.querySelector("#challengearticle");
// for (let i = 5; i < 8; i++) {
//    challenge_3articles.innerHTML+= ` 
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

 
const challengearticles = document.getElementById("challengsection");
challenges.forEach((idchal) => {
challengearticles.innerHTML+= ` 
<article class="activity-card">
          <div class="card-img-container">
          <img src="${idchal.imageUrl}" alt="${idchal.title}" class="card-img">
        </div>
        <div class="card-body">
          <h3 class="activity-title">${idchal.title}</h3>
          <div class="activity-subtitle">${idchal.description}</div>
          <div class="progress-container">
            <div class="progress-info">
              <span> • ${idchal.status}</span>
            </div>
          </div>
          <div class="card-actions">
            <button class="btn btn-primary">View challenge</button>
            <button class="btn btn-secondary"> Edit</button>
          </div>
        </div> 
        </article>`
});