// Підключаємо технологію express для back-end сервера
const express = require("express");
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router();

// ================================================================

var address = "Ukraine, Kryvyy Ryh";

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get("/", function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render("index", {});
  //                  ↑↑ сюди вводимо JSON дані
});

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get("/summary", function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render("summary", {
    // ↙ сюди вводимо JSON дані

    page: {
      title: "Resume",
    },

    header: {
      name: {
        firstname: "Ivan",
        lastname: "Ivanov",
      },
      position: "Junior Fullstack JS Developer",

      salary: "600$ в місяц",
    },

    main: {
      summary: {
        title: "Summary",
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },
      experience: {
        title: "Other experience",
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
    address: "ось така адреса:",

    footer: {
      social: {
        email: {
          text: "dmytro@mail.com",
          href: "mailto:dmytro@mail.com",
        },
        phone: {
          text: "+380670000123",
          href: "tel:+380670000123",
        },
        linkedin: {
          text: "LinkedIn",
          href: "https://www.linkedin.com/in/dmytro-test",
        },
      },
    },
  });
});

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get("/skills", function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render("skills", {
    // ↙ сюди вводимо JSON дані

    page: {
      title: "Resume",
    },

    header: {
      name: {
        firstname: "Ivan",
        lastname: "Ivanov",
      },
      position: "Junior Fullstack JS Developer",

      salary: "600$ в місяц",
    },

    main: {
      skils: ["HTML", "Handbars", "VS Code", "Terminal", "NPM"],
    },
    address: "ось така адреса:",

    footer: {
      social: {
        email: {
          text: "dmytro@mail.com",
          href: "mailto:dmytro@mail.com",
        },
        phone: {
          text: "+380670000123",
          href: "tel:+380670000123",
        },
        linkedin: {
          text: "LinkedIn",
          href: "https://www.linkedin.com/in/dmytro-test",
        },
      },
    },
  });
});

// ================================================================

router.get("/education", function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render("education", {
    // ↙ сюди вводимо JSON дані

    page: {
      title: "Resume",
    },

    header: {
      name: {
        firstname: "Ivan",
        lastname: "Ivanov",
      },
      position: "Junior Fullstack JS Developer",

      salary: "600$ в місяц",
    },

    main: {
      education: ["ВНЗ -1", "ВНЗ -2", "ВНЗ -3", "ВНЗ -4"],
    },
    address: "ось така адреса:",
    footer: {
      social: {
        email: {
          text: "dmytro@mail.com",
          href: "mailto:dmytro@mail.com",
        },
        phone: {
          text: "+380670000123",
          href: "tel:+380670000123",
        },
        linkedin: {
          text: "LinkedIn",
          href: "https://www.linkedin.com/in/dmytro-test",
        },
      },
    },
  });
});

// Підключаємо роутер до бек-енду
module.exports = router;
