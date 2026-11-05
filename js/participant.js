
let  compteur = 100 ;    
const createparticipantid = () => {
   let id = `pa_${compteur} `;
   compteur++
   return id ;

}

    const participantdiv = document.getElementById("participantdiv");


    participants.forEach(idpar => {
      // console.log(participants[0])
      const challengesParParticipant = []

      if (Array.isArray(idpar.challengeIds)) {
        idpar.challengeIds.forEach(id => {
          let challenge = challenges.find( (challenge) =>  challenge.id == id)
          if (challenge)
            challengesParParticipant.push(challenge)
        })

      } else {
          let challenge = challenges.find( (challenge) =>  challenge.id === idpar.challengeIds)
          if (challenge)
            challengesParParticipant.push(challenge)   
      }
      participantdiv.innerHTML += `<div class = "card1 row g-0 align-items-center">
      <div class="col-12 col-md-3">
          <div class="card1name">${idpar.name}</div>
          <div class="card1pp">${idpar.pseudo}</div>
        </div>
        <div class="col-12 col-md-4">
        ${afficherLesChallenges(challengesParParticipant)}
        </div>
         <div class="col-12 col-md-3">
          <div class=""></div>
          <div class="">
            <div class="dd"> </div>
          </div>
        </div>
        <div class="col-12 col-md-2 d-flex gap-2 justify-content-md-end">
          <button class="btn btn-outline-fl btn-update" data-id = ${idpar.id}><i class="bi bi-plus"></i> Update</button>
          <button class="btn btn-outline-fl btn-remove" data-id = ${idpar.id}><i class="bi bi-pencil"></i> remove</button>
        </div>`

        document.addEventListener("click", (event) =>{

          const button = event.target.closest(".btn-remove");
          const button_update = event.target.closest(".btn-update");
          if(button)
        {
          let id = button.dataset.id;
          // console.log(id);
          button.closest(".card1").remove(id);
        }
        else if(button_update)
        {
        //     let upid = button_update.dataset.id;
        //     // console.log(upid);
        //     let parti = participants.find((participante) => participante.id === upid);
            console.log("click button");

        }

        })

       

    });

function afficherLesChallenges(challenges) {
  // console.log(challenges)
  let challengesHTML = ''
  if (challenges.length == 0) return ''

  challenges.forEach(challenge => {
    challengesHTML += `
    
          <span class="enrolled"> ${challenge.title} </span>
          <span class="active">${challenge.status} </span>
        `
  })
  // console.log(challengesHTML)
  return challengesHTML
}
function remove(id)
{
  let rpartcipant = participants.findIndex((participant) => participant.id === id);

  participants.splice(rpartcipant,1);

}


// participantdiv.addEventListener("click", (e) => {
//   const participantId = e.target.dataset.id;
//   console.log(participantId);
  


// });