const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

let cards = ''
const cardsEl = document.getElementById('cards-row')

for (let i = 0; i < teamMembers.length; i++) {
  const teamMember = teamMembers[i];
  const { name, role, email, img } = teamMember;
  console.log(teamMember);
  const markup = `
          <div class="col">
            <div class="card bg-black text-white mb-3">
              <div class="row  g-0">
                <div class="col">
                  <img
                    src="./assets/${img}"
                    class="img-fluid rounded-start h-100 object-fit-cover"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">
                      ${role}
                    </p>
                    <p class="card-text text-primary">
                      ${email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
 `;

  cards += markup

}
cardsEl.innerHTML = cards

