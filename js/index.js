    let totalchaltxt = document.querySelector(".stat-number");
    let totalchallenge = challenges.length;
    totalchaltxt.textContent = totalchallenge;


    let totalsportxt = document.querySelector(".stat-footer");
    let sportnumber = new Set(challenges.map(challenge => challenge.sport)).size;
    totalsportxt.textContent = `Across ${sportnumber} sports`;


    let parnumber = document.getElementById("partnumber");
    let totalpartic = participants.length;
    parnumber.textContent = totalpartic;


    let activchal = document.getElementById("activechal");
    let activechalenge = new Set(challenges.filter(challenge => challenge.status == "Active")).size;
    activchal.textContent = activechalenge;

    let completedchaltxt = document.getElementById("cpmletedchal");
    let completedchalenge = new Set(challenges.filter(challenge => challenge.status == "Completed")).size;
    completedchaltxt.textContent = ` ${completedchalenge} Completed`;

    
const challengearticles = document.querySelector("#challengearticle");
for (let i =1; i <4; i++) {
   challengearticles.innerHTML+= ` 
    <article class="activity-card">
          <div class="card-img-container">
          <img src="${challenges[i].imageUrl}" alt="${challenges[i].title}" class="card-img">
        </div>
        <div class="card-body">
          <h3 class="activity-title">${challenges[i].title}</h3>
          <div class="activity-subtitle">${challenges[i].description}</div>
          <div class="activity-subtitle">Deadline : ${challenges[i].deadline}</div>
          <div class="progress-container">
            <div class="progress-info">
              <span> • ${challenges[i].status}</span>
            </div>
          </div>
          <div class="card-actions">
          </div>
        </div> 
        </article>`
 }