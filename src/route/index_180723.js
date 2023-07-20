// Підключаємо технологію express для back-end сервера
const express = require("express");
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router();

// ================================================================

//var address = "Ukraine, Kryvyy Ryh";
var header = {
  name: {
    firstname: "Ivan",
    lastname: "Ivanov",
  },
  position: "Junior Fullstack JS Developer",
  salary: "600$ в місяц",
  address: "Ukraine, Kryvyy Ryh",
};

var footer = {
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
};

//var big = true;
var big = false;

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
      title: "Resume | Summary",
    },

    header,

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
    footer,
  });
});

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get("/skills", function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render("skills", {
    // ↙ сюди вводимо JSON дані

    page: {
      title: "Resume| Skills",
    },

    header,

    main: {
      skills: [
        {
          name: "HTML",
          point: 10,
          isTop: true,
        },
        {
          name: "Handbar",
          point: 10,
          isTop: true,
        },
        {
          name: "VS Code",
          point: 10,
          isTop: false,
        },
        {
          name: "Terminal",
          point: 10,
          isTop: true,
        },
        {
          name: "Git",
          point: 9,
        },
        {
          name: "NPM",
          point: 0,
        },
        {
          name: "PHP",
          point: null,
        },
      ],
      hobbies: [
        {
          name: "Їсти Снікерси",
          isMain: true,
        },
        {
          name: "Їсти Марси",
          isMain: true,
        },
        {
          name: "Їсти БаунтІ",
          isMain: false,
        },
      ],
    },

    footer,
  });
});

// ================================================================

router.get("/education", function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render("education", {
    // ↙ сюди вводимо JSON дані

    page: {
      title: "Resume | Education",
    },

    header,

    main: {
      education: [
        {
          name: "ВНЗ -1",
          isEnd: true,
        },
        {
          name: "ВНЗ -2",
          isEnd: true,
        },
        {
          name: "ВНЗ -3",
          isEnd: false,
        },
        {
          name: "ВНЗ -4",
          isEnd: true,
        },
      ],

      certificates: [
        {
          name: "certificat-1",
          id: 1,
        },
        {
          name: "certificat-2",
          id: 2,
        },
        {
          name: "certificat-3",
          id: 3,
        },
        {
          name: "certificat-4",
          id: 4,
        },
      ],
    },

    footer,
  });
});

// Підключаємо роутер до бек-енду
module.exports = router;
