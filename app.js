document.addEventListener("DOMContentLoaded", () => {
  const container2 = document.querySelector(".container2");

  const API_URL = "https://67f899bc2466325443ed1ecc.mockapi.io/travellers";

  function fetchData() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((photo) => {
          const card = document.createElement("div");
          card.className = "card";
          card.style.backgroundImage = `url(${photo.image})`;

          const cardContent = document.createElement("p");
          cardContent.className = "card-content";
          cardContent.innerText = photo.summary;

          const cardTitle = document.createElement("h3");
          cardTitle.className = "card-title";
          cardTitle.innerText = photo.title;

          const btn = document.createElement("button");
          btn.className = "card-btn";
          btn.innerHTML = "Read More";

          container2.appendChild(card);
          card.appendChild(cardTitle);
          card.appendChild(cardContent);
          card.appendChild(btn);
        });
      })
      .catch((err) => console.log(err));
  }

  fetchData();
});

// const
