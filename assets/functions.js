function renderTeam(members) {
  let cards = "";
  for (let i = 0; i < members.length; i++) {
    const teamMember = members[i];
    const { name, role, email, img } = teamMember;
    const markup = `
          <div class="col">
            <div class="card bg-black text-white mb-3">
              <div class="row  g-0">
                <div class="col-12 col-md-4">
                  <img
                    src="./assets/${img}"
                    class="img-fluid rounded-start h-100 w-100 object-fit-cover"
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
    cards += markup;
  }
  cardsEl.innerHTML = cards;
}
