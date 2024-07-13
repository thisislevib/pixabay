document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("search-button");
  const searchInput = document.getElementById("search-input");
  const imagesContainer = document.getElementById("images-container");
  const buttonsContainer = document.querySelector(".buttons-container");

  const predefinedItems = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const createButtons = () => {
    predefinedItems.forEach((item) => {
      const button = document.createElement("button");
      button.textContent = item;
      button.className = "btn btn-success";
      button.addEventListener("click", () => searchImages(item));
      buttonsContainer.appendChild(button);
    });
  };

  const searchImages = (query) => {
    imagesContainer.innerHTML = ""; // Clear previous images
    fetch(
      `https://pixabay.com/api/?key=44413669-86e2e57f1672357b57a84fe9c&q=${encodeURIComponent(
        query
      )}&image_type=photo`
    )
      .then((response) => response.json())
      .then((data) => {
        data.hits.forEach((image) => {
          const img = document.createElement("img");
          img.src = image.webformatURL;
          imagesContainer.appendChild(img);
        });
      })
      .catch((error) => console.error("Error fetching images:", error));
  };

  searchButton.addEventListener("click", () => {
    const query = searchInput.value;
    if (query) {
      searchImages(query);
    }
  });

  createButtons();
});
