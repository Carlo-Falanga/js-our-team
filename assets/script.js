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

const formEl = document.querySelector("form");
const nameField = document.getElementById("name");
const professionField = document.getElementById("profession");
const emailField = document.getElementById("mail");
const imageField = document.getElementById("image");

const cardsEl = document.getElementById("cards-row");

renderTeam(teamMembers);

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameValue = nameField.value;
  const professionValue = professionField.value;
  const imageValue = imageField.value;
  const emailValue = emailField.value;

  const newMember = {
    name: nameValue,
    role: professionValue,
    email: emailValue,
    img: imageValue,
  };

  teamMembers.push(newMember);
  renderTeam(teamMembers);
  formEl.reset();
});
