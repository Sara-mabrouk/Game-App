import { Ui } from "./ui.module.js";
export class Details {
  constructor(id) {
    document.getElementById("btnClose").addEventListener("click", () => {
      document.getElementById("details").classList.add("d-none");
      document.getElementById("games").classList.remove("d-none");
    });
    this.ui = new Ui();
    this.getDetails(id);
  }

  async getDetails(id) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "1777d17cfdmsh9d6298fdeb604f7p1a2268jsnf1593b1aaf6b",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    const response = await api.json();
    console.log(response);
    new Ui().displayDetails(response);
  }
}

