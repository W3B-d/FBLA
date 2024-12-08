const administratorData = 

document.addEventListener("DOMContentLoaded", () => {
    const logoContainer = document.querySelector(".logo-container");
    const infoBox = document.getElementById("infoBox");

    logoContainer.addEventListener("click", (e) => {
        if (infoBox.style.display === "block") {
            infoBox.style.opacity = "0";
            infoBox.style.transform = "translateY(10px)";
            setTimeout(() => {
                infoBox.style.display = "none";
            }, 300);
        } else {
            infoBox.style.display = "block";
            setTimeout(() => {
                infoBox.style.opacity = "1";
                infoBox.style.transform = "translateY(0)";
            }, 0);
        }
    });

    document.addEventListener("click", (e) => {
        if (!logoContainer.contains(e.target) && !infoBox.contains(e.target)) {
            infoBox.style.opacity = "0";
            infoBox.style.transform = "translateY(10px)";
            setTimeout(() => {
                infoBox.style.display = "none";
            }, 300);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById("cardContainer");
    const sidebarProjectButton = document.querySelector('li a[href="#"]');
    let specialCardCreated = false; // To track if the card is already created

    const contentData = [
        {
            title: "Student Resources",
            description: "Text is to be decided.",
            image: "../Images/CEHS_SCHOOL.jpg"
        },
        {
            title: "Careers",
            description: "Text is to be decided.",
            image: "../Images/DAC.jpg"
        },
        {
            title: "About Us",
            description: "Text is to be decided.",
            image: "../Images/PHS.jpg"
        }
    ];

    function renderCards() {
        cardContainer.innerHTML = ""; // Clear the current cards
        contentData.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.backgroundImage = `url(${item.image})`;
            card.setAttribute('data-index', index);
            card.innerHTML = `<div class="card-text">${item.title}</div>`;
            card.addEventListener('click', () => openModal(index));
            cardContainer.appendChild(card);
        });
    }

    function openModal(index) {
        const modal = document.getElementById('infoModal');
        const title = document.getElementById('modalTitle');
        const description = document.getElementById('modalDescription');

        title.innerText = contentData[index].title;
        description.innerText = contentData[index].description;

        modal.style.display = 'block';
    }

    function closeModal() {
        const modal = document.getElementById('infoModal');
        modal.style.display = 'none';
    }

    function createSpecialCard() {
        if (specialCardCreated) return; // Prevent duplicates
        specialCardCreated = true;

        const specialCard = document.createElement("div");
        specialCard.className = "card";
        specialCard.style.backgroundImage = "url('../Images/SPECIAL_PROJECT.jpg')"; // Replace with your image
        specialCard.setAttribute("data-special", true);
        specialCard.innerHTML = `<div class="card-text">The Project</div>`;

        specialCard.addEventListener("click", () => openSpecialModal());

        cardContainer.appendChild(specialCard);
    }

    function openSpecialModal() {
        const modal = document.getElementById("infoModal");
        const title = document.getElementById("modalTitle");
        const description = document.getElementById("modalDescription");

        title.innerText = "The Project";
        description.innerText = "This is a special project card unlocked through interaction.";

        modal.style.display = "block";
    }

    sidebarProjectButton.addEventListener("click", (e) => {
        createSpecialCard();
    });

    document.querySelector('.close').addEventListener("click", closeModal);

    // Render initial cards
    renderCards();
});

const hamburgerMenu = document.querySelector(".hamburger-menu");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".sidebar-close");

hamburgerMenu.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
        sidebar.style.height = "auto";
        sidebar.style.width = "auto";
    }
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

