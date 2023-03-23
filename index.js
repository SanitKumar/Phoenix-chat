var data = {
  chatinit: {
    title: [
      "Hello <span class='emoji'> &#128075;</span>",
      "I am Mr. Chatbot",
      "How can I help you?",
    ],
    options: [
      "Movies <span class='emoji'> &#128250;</span>",
      "News",
      "Shopping <span class='emoji'> &#128090;</span>",
      "Music <span class='emoji'> &#127925;</span>",
    ],
  },
  movies: {
    title: ["Please select category"],
    options: ["Hindi", "English", "Web Series", "Others"],
    url: {},
  },

  news: {
    title: ["Some famous news papers are.."],
    options: [
      "The Times of India",
      "The Hindu",
      "Hindustan Times",
      "The Indian Express",
      "Dainik Bhaskar",
    ],
    url: {
      more: "https://news.google.com/home?hl=en-IN&gl=IN&ceid=IN:en",
      link: [
        "https://timesofindia.indiatimes.com/?from=mdr",
        "https://www.thehindu.com/",
        "https://www.hindustantimes.com/",
        "https://indianexpress.com/",
        "https://www.bhaskar.com/",
      ],
    },
  },
  shopping: {
    title: [
      "Thanks for your response",
      "Welcome to shopping zone <span class='emoji'> &#128090;</span>",
      "Please select one of the below options to proceed further",
    ],
    options: [
      "Electronics",
      "Beauty products",
      "Mobiles",
      "Men Fashion",
      "Women fashion",
    ],
    url: {},
  },
  electronics: {
    title: [
      "Thanks for your response",
      "Here are some electronic items for you",
      "Click on it to know more",
    ],
    options: [
      "Televisions",
      "Cameras",
      "Gaming Consoles",
      "Headphones",
      "Speakers",
    ],
    url: {
      more: "https://www.flipkart.com/flipkart-electronics-new-store",
      link: [
        "https://www.flipkart.com/television-store",
        "https://www.flipkart.com/camera-clp-store?otracker=nmenu_sub_Electronics_0_Camera",
        "https://www.flipkart.com/gaming/gaming-consoles/pr?sid=4rr%2Cx1m",
        "https://www.flipkart.com/headphones-store",
        "https://www.flipkart.com/speakers/pr?sid=0o7",
      ],
    },
  },
  beauty: {
    title: [
      "Thanks for your response",
      "Here are some beauty products for you",
      "Click on it to know more",
    ],
    options: ["Make-up & Nails", "Skin Care", "Fragrance", "Hair care"],
    url: {
      more: "https://www.flipkart.com/beauty-and-grooming/pr?sid=g9b",
      link: [
        "https://www.flipkart.com/beauty-and-grooming/makeup/pr?sid=g9b%2Cffi",
        "https://www.flipkart.com/beauty-and-grooming/body-face-skin-care/body-and-face-care/pr?sid=g9b%2Cema%2C5la",
        "https://www.flipkart.com/beauty-and-grooming/fragrances/perfume/pr?sid=g9b%2C0yh%2Cjhz",
        "https://www.flipkart.com/beauty-and-grooming/hair-care-and-accessory/hair-care/pr?sid=g9b%2Clcf%2Cqqm",
      ],
    },
  },
  mobiles: {
    title: [
      "Thanks for your response",
      "These are some results based on your input",
      "Click on it to know more",
    ],
    options: ["Mobile Phones", "Cases & Covers", "Power Banks", "Tablets"],
    url: {
      more: "https://www.flipkart.com/mobile-phones-store",
      link: [
        "https://www.flipkart.com/mobile-phones-store",
        "https://www.flipkart.com/mobile-accessories/cases-and-covers/pr?sid=tyy,4mr,q2u",
        "https://www.flipkart.com/mobile-accessories/power-banks/pr?sid=tyy%2C4mr%2Cfu6",
        "https://www.flipkart.com/tablets/pr?sid=tyy%2Chry",
      ],
    },
  },
  men: {
    title: [
      "Thanks for your response",
      "These are some results based on your input",
      "Click on it to know more",
    ],
    options: ["Clothing", "Shirts", "T-shirts", "Jeans"],
    url: {
      more: "https://www.flipkart.com/q/mens-clothing",
      link: [
        "https://www.flipkart.com/q/mens-clothing",
        "https://www.flipkart.com/mens-shirts/pr?sid=clo,ash,axc,mmk",
        "https://www.flipkart.com/mens-tshirts/pr?sid=clo%2Cash%2Cank%2Cedy",
        "https://www.flipkart.com/mens-jeans/pr?sid=clo,vua,k58,i51",
      ],
    },
  },
  women: {
    title: [
      "Thanks for your response",
      "These are some results based on your input",
      "Click on it to know more",
    ],
    options: ["Clothing", "Western Wear", "Ethnic Wear", "Footwear"],
    url: {
      more: "https://www.flipkart.com/q/womens-clothing",
      link: [
        "https://www.flipkart.com/q/womens-clothing",
        "https://www.flipkart.com/q/western-dresses",
        "https://www.flipkart.com/q/womens-ethnic-wear",
        "https://www.flipkart.com/womens-footwear/pr?sid=osp,iko",
      ],
    },
  },
  music: {
    title: [
      "These are some latest songs <span class='emoji'> &#127925;</span>",
    ],
    options: [
      "Luis Fonsi - Despacito ft. Daddy Yankee",
      "Rema, Selena Gomez - Calm Down (Official Music Video)",
      "Maan Meri Jaan | Official Music Video | Champagne Talk | King",
      "King - Tu Aake Dekhle | The Carnival | The Last Ride | Prod. by Shahbeatz",
      "ZAYN - Dusk Till Dawn (Official Video) ft. Sia",
    ],
    url: {
      more: "https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ",
      link: [
        "https://youtu.be/kJQP7kiw5Fk",
        "https://youtu.be/CQLsdm1ZYAw",
        "https://youtu.be/VuG7ge_8I2Y",
        "https://youtu.be/A66TYFdz8YA",
        "https://youtu.be/tt2k8PGm-TI",
      ],
    },
  },
  hindi: {
    title: ["Thanks for your response", "Here are some genre based movies"],
    options: ["Comedy", "Horror", "Sci-Fi", "Romance", "Action"],
    url: {
      more: "https://www.hotstar.com/in/movies/languages/hindi",
      link: [
        "https://www.hotstar.com/in/genres/comedy",
        "https://www.hotstar.com/in/genres/horror",
        "https://www.hotstar.com/in/genres/science-fiction",
        "https://www.hotstar.com/in/genres/romance",
        "https://www.hotstar.com/in/genres/action",
      ],
    },
  },
  english: {
    title: ["Thanks for your response", "Here are some genre based movies"],
    options: ["Comedy", "Horror", "Sci-Fi", "Romance", "Action"],
    url: {
      more: "https://www.hotstar.com/in/movies/languages/english",
      link: [
        "https://www.hotstar.com/in/genres/comedy",
        "https://www.hotstar.com/in/genres/horror",
        "https://www.hotstar.com/in/genres/science-fiction",
        "https://www.hotstar.com/in/genres/romance",
        "https://www.hotstar.com/in/genres/action",
      ],
    },
  },
  web: {
    title: ["Thanks for your response", "Here are some genre based web series"],
    options: ["Comedy", "Horror", "Sci-Fi", "Romance", "Action"],
    url: {
      more: "https://www.hotstar.com/in/channels/hotstar-specials",
      link: [
        "https://www.hotstar.com/in/genres/comedy",
        "https://www.hotstar.com/in/genres/horror",
        "https://www.hotstar.com/in/genres/science-fiction",
        "https://www.hotstar.com/in/genres/romance",
        "https://www.hotstar.com/in/genres/action",
      ],
    },
  },
  others: {
    title: ["Here are some more options for you"],
    options: ["YouTube", "Netflix", "Amazon Prime", "Hot Star"],
    url: {
      more: "https://www.youtube.com/",
      link: [
        "https://www.youtube.com/feed/storefront?bp=ogUCKAI%3D",
        "https://www.netflix.com/in/",
        "https://www.primevideo.com/",
        "https://www.hotstar.com/in",
      ],
    },
  },
};

document.getElementById("init").addEventListener("click", showChatBot);
var cbot = document.getElementById("chat-box");

var len1 = data.chatinit.title.length;

function showChatBot() {
  console.log(this.innerText);
  if (this.innerText == "START CHAT") {
    document.getElementById("test").style.display = "block";
    document.getElementById("init").innerText = "CLOSE CHAT";
    initChat();
  } else {
    location.reload();
  }
}

function initChat() {
  j = 0;
  cbot.innerHTML = "";
  for (var i = 0; i < len1; i++) {
    setTimeout(handleChat, i * 500);
  }
  setTimeout(function () {
    showOptions(data.chatinit.options);
  }, (len1 + 1) * 500);
}

var j = 0;
function handleChat() {
  console.log(j);
  var elm = document.createElement("p");
  elm.innerHTML = data.chatinit.title[j];
  elm.setAttribute("class", "msg");
  cbot.appendChild(elm);
  j++;
  handleScroll();
}

function showOptions(options) {
  for (var i = 0; i < options.length; i++) {
    var opt = document.createElement("span");
    var inp = "<div>" + options[i] + "</div>";
    opt.innerHTML = inp;
    opt.setAttribute("class", "opt");
    opt.addEventListener("click", handleOpt);
    cbot.appendChild(opt);
    handleScroll();
  }
}

function handleOpt() {
  console.log(this);
  var str = this.innerText;
  var textArr = str.split(" ");
  var findText = textArr[0];

  document.querySelectorAll(".opt").forEach((el) => {
    el.remove();
  });
  var elm = document.createElement("p");
  elm.setAttribute("class", "test");
  var sp = '<span class="rep">' + this.innerText + "</span>";
  elm.innerHTML = sp;
  cbot.appendChild(elm);

  console.log(findText.toLowerCase());
  var tempObj = data[findText.toLowerCase()];
  handleResults(tempObj.title, tempObj.options, tempObj.url);
}

function handleDelay(title) {
  var elm = document.createElement("p");
  elm.innerHTML = title;
  elm.setAttribute("class", "msg");
  cbot.appendChild(elm);
}

function handleResults(title, options, url) {
  for (let i = 0; i < title.length; i++) {
    setTimeout(function () {
      handleDelay(title[i]);
    }, i * 500);
  }

  const isObjectEmpty = (url) => {
    return JSON.stringify(url) === "{}";
  };

  if (isObjectEmpty(url) == true) {
    console.log("having more options");
    setTimeout(function () {
      showOptions(options);
    }, title.length * 500);
  } else {
    console.log("end result");
    setTimeout(function () {
      handleOptions(options, url);
    }, title.length * 500);
  }
}

function handleOptions(options, url) {
  for (var i = 0; i < options.length; i++) {
    var opt = document.createElement("span");
    var inp =
      '<a class="m-link" href="' + url.link[i] + '">' + options[i] + "</a>";
    opt.innerHTML = inp;
    opt.setAttribute("class", "opt");
    cbot.appendChild(opt);
  }
  var opt = document.createElement("span");
  var inp = '<a class="m-link" href="' + url.more + '">' + "See more</a>";

  const isObjectEmpty = (url) => {
    return JSON.stringify(url) === "{}";
  };

  console.log(isObjectEmpty(url));
  console.log(url);
  opt.innerHTML = inp;
  opt.setAttribute("class", "opt link");
  cbot.appendChild(opt);
  handleScroll();
}

function handleScroll() {
  var elem = document.getElementById("chat-box");
  elem.scrollTop = elem.scrollHeight;
}