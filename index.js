const hamburgerBtn = document.getElementById("hamburger-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.querySelector(".nav-menu1");
const emailInput = document.getElementById("userEmail");

hamburgerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  mobileMenu.style.display = "block";
  hamburgerBtn.style.display = "none";
  closeBtn.style.display = "block";
});


/*-----hlhlkjhg---*/


const projectDetails =[

    {
        id: 1,
        name: "Dorcas Amini",
        description:
          "Dorcas is a seasoned web developer with over 8 years of experience. She has worked on a wide range",
        featuredImageUrl: "speaker.jpg",
        role: "profeseur en IT",
        
      },

      {
        id: 2,
        name: "Dorcas Amini",
        description:
          "Dorcas is a seasoned web developer with over 8 years of experience. She has worked on a wide range",
        featuredImageUrl: "speaker.jpg",
        role: "profeseur en IT",
        
      },

      {
        id: 3,
        name: "Dorcas Amini",
        description:
          "Dorcas is a seasoned web developer with over 8 years of experience. She has worked on a wide range",
        featuredImageUrl: "speaker.jpg",
        role: "profeseur en IT",
        
      },

      {
        id: 4,
        name: "Dorcas Amini",
        description:
          "Dorcas is a seasoned web developer with over 8 years of experience. She has worked on a wide range",
        featuredImageUrl: "speaker.jpg",
        role: "profeseur en IT",
        
      },

      {
        id: 5,
        name: "Dorcas Amini",
        description:
          "Dorcas is a seasoned web developer with over 8 years of experience. She has worked on a wide range",
        featuredImageUrl: "speaker.jpg",
        role: "profeseur en IT",
        
      },

      {
        id: 6,
        name: "Dorcas Amini",
        description:
          "Dorcas is a seasoned web developer with over 8 years of experience. She has worked on a wide range",
        featuredImageUrl: "speaker.jpg",
        role: "profeseur en IT",
        
      },
    ]