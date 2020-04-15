let it = document.getElementById("it");
let media = document.getElementById("media");
let games = document.getElementById("games");
let movies = document.getElementById("movies");
let music = document.getElementById("music");
let sport = document.getElementById("sport");


let categories = {
  it: [
    {
      img: "web.jpg",
      name: "Web Development",
      name_ru: "Веб-разработка",
      link: "https://t.me/joinchat/JpavNBk3ocp-HxIka-iATw"
    },
    {
      img: "robotics.png",
      name: "Robotics",
      name_ru: "Робототехника",
      link: "https://t.me/joinchat/JpavNBPNG6mQl8MIPsq-bQ"
    },
    {
      img: "c++.jpg",
      name: "Sports programming",
      name_ru: "Алгоритмы",
      link: "https://t.me/joinchat/JpavNBqV0vqrNLUzbEXJ0Q"
    },
    {
      img: "machine.jpeg",
      name: "Machine learning",
      name_ru: "Машинное обучение",
      link: "https://t.me/joinchat/JpavNBvcGF-YatrG7St_gw"
    }
  ],
  music: [
    {
      img: "guitar.png",
      name: "Guitar",
      name_ru: "Гитара",
      link: "https://t.me/joinchat/JpavNByYGnBHHkSi7fWLiQ"
    },
    {
      img: "piano.png",
      name: "Piano",
      name_ru: "Пиано",
      link: "https://t.me/joinchat/JpavNBwMPMEx0HOqrudfwA"
    },
    {
      img: "violin.jpeg",
      name: "Violin",
      name_ru: "Скрипка",
      link: "https://t.me/joinchat/JpavNBg4z2d8DqGZUZg_XA"
    },
    {
      img: "dombra.png",
      name: "Dombra",
      name_ru: "Домбра",
      link: "https://t.me/joinchat/JpavNBxc_egMvKGtUr0jpg"
    }
  ],
  movies: [
    {
      img: "anime.png",
      name: "Anime",
      name_ru: "Аниме",
      link: "https://t.me/joinchat/JpavNBlV7s2CVAvVdTZ5jA"
    },
    {
      img: "marvel.png",
      name: "Marvel/DC",
      name_ru: "Marvel/DC",
      link: "https://t.me/joinchat/JpavNBrAimiH_NZtwkrmew"
    },
    {
      img: "dorama.png",
      name: "Dorama",
      name_ru: "Дорама",
      link: "https://t.me/joinchat/JpavNBtVFArjBm5lhqD6Yw"
    },
    {
      img: "netflix.jpg",
      name: "Netflix",
      name_ru: "Netflix",
      link: "https://t.me/joinchat/JpavNBhPBsiBzdX2ZXgm-g"
    },
  ],
  media: [
    {
      img: "photo.png",
      name: "Photo",
      name_ru: "Фото",
      link: "https://t.me/joinchat/JpavNBjynHczbc5Nyfz7Ag"
    },
    {
      img: "video.png",
      name: "Video",
      name_ru: "Видео",
      link: "https://t.me/joinchat/JpavNBxm6owt4v7YDBKY1A"
    },
    {
      img: "smm.png",
      name: "SMM",
      name_ru: "SMM",
      link: "https://t.me/joinchat/LoEqRxvMMbdHrdOtzUT4tQ"
    },
    {
      img: "mobilography.jpg",
      name: "Mobilography",
      name_ru: "Мобилография",
      link: "https://t.me/joinchat/JpavNBhlpae1xgr6f7cCwQ"
    },
  ],
  sport: [
    {
      img: "football.png",
      name: "Football",
      name_ru: "Футбол",
      link: "https://t.me/joinchat/JpavNBt-K2ohasIQbwLd-A"
    },
    {
      img: "basketball.png",
      name: "Basketball",
      name_ru: "Баскетбол",
      link: "https://t.me/joinchat/JpavNBs4GTl-VOUjBxZ6jg"
    },
    {
      img: "boxing.jpg",
      name: "Boxing",
      name_ru: "Бокс",
      link: "https://t.me/joinchat/JpavNBpXJWfHPm2HuKsOHA"
    },
    {
      img: "ufc.png",
      name: "UFC",
      name_ru: "UFC",
      link: "https://t.me/joinchat/JpavNBOKqC6X-JOB4xMkag"
    },
  ],
  games: [
    {
      img: "dota2.jpeg",
      name: "Dota2",
      name_ru: "Dota2",
      link: "https://t.me/joinchat/JpavNBoeJ5pYm1cO7NWLwA"
    },
    {
      img: "fifa20.png",
      name: "FIFA 20",
      name_ru: "FIFA 20",
      link: "https://t.me/joinchat/JpavNB2ZU4FRduuZxAwJIw"
    },
    {
      img: "cs.png",
      name: "CS:GO",
      name_ru: "CS:GO",
      link: "https://t.me/joinchat/JpavNBLJtLYtjA01Y6bXGw"
    },
    // {
    //   img: "fortnite.jpg",
    //   name: "Fortnite",
    //   link: "https://t.me/joinchat/JpavNBmc1c5lWzbTLzkFsw"
    // },
    {
      img: "pubg.png",
      name: "PUBG",
      name_ru: "PUBG",
      link: "https://t.me/joinchat/JpavNBo3N7sADkIdZbNQ3w"
    },
  ]
}

it.classList.add("select_active")
showItems("it");

it.onclick = function () {
  def()
  it.classList.add("select_active")
  showItems("it");
}
media.onclick = function () {
  def()
  media.classList.add("select_active")
  showItems("media");
}

movies.onclick = function () {
  def()
  movies.classList.add("select_active")
  showItems("movies");
}

sport.onclick = function () {
  def()
  sport.classList.add("select_active")
  showItems("sport");
}

music.onclick = function () {
  def()
  music.classList.add("select_active")
  showItems("music");
}
games.onclick = function () {
  def()
  games.classList.add("select_active")
  showItems("games");
}

function showItems(categorie) {
  let arr = categories[categorie];
  //  console.log(arr)
  let items = ""
  for (let i = 0; i < arr.length; i++) {
    let item = `<div class="item">` +
      `<div class="item_img">` +
      `<img src="img/items/${arr[i].img}" alt="IMG">` +
      `</div>` +
      `<div class="item_content">` +
      `<h3 class="item_title">${arr[i].name_ru}</h3>` +
      `<a class="item_link" target="_blank" href="${arr[i].link}">` +
      `<div>Присоединиться</div>` +
      `</a>` +
      `</div>` +
      `</div>`
    items += item;
  }
  document.getElementById("row").innerHTML = items
}


function def() {
  music.classList.remove("select_active");
  sport.classList.remove("select_active");
  movies.classList.remove("select_active");
  media.classList.remove("select_active");
  it.classList.remove("select_active");
  games.classList.remove("select_active");
}




    /*
{
        img: "",
      name:"",
      link:""
    },
*/