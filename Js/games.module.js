import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Games {
  constructor() {
    // console.log('أشطر سرسور');
    // Change link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        this.clickActiveLink(link);
        // call
        const category = link.dataset.category;
        this.getGames(category);
      });
    });
    this.loading = document.querySelector(".loading");
    this.details = document.getElementById("details");
    this.games = document.getElementById("games");

    // instance =>>
    this.ui = new Ui();
    this.getGames("mmorpg");
  }

  // ======================================================================================//
  // ==========>>Change and remove Active Link <<
  async clickActiveLink(link) {
    document.querySelector(".navbar-nav .active").classList.remove("active");
    link.classList.add("active");
  }

  // =========>> Get Data With api   <<
  async getGames(cato) {
    this.loading.classList.remove("d-none");

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "1777d17cfdmsh9d6298fdeb604f7p1a2268jsnf1593b1aaf6b",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    // call api
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cato}`,
      options
    );
    const response = await api.json();
    this.loading.classList.add("d-none");

    console.log(response);
    // instance
    this.ui.displayGames(response);
    // ====================================
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        this.details.classList.remove("d-none");
        this.games.classList.add("d-none");
         new Details(card.dataset.id);

      });
    });
  }
}
