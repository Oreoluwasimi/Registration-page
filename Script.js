let netWorkImage = document.querySelector(".netWork-image");
let networksLogo = (document.querySelector(".network").style.display = "flex");

const prefix = [
  "0803",
  "0806",
  "0703",
  "0706",
  "0810",
  "0813",
  "0814",
  "0816",
  "0903",
  "0906",
  "0802",
  "0808",
  "0812",
  "0701",
  "0708",
  "0902",
  "0907",
  "0901",
  "0805",
  "0807",
  "0811",
  "0705",
  "0815",
  "0905",
];

const numberField = document.getElementById("number");

numberField.addEventListener("keydown", (e) => {
  let newNum;
  let val = e.target.value.trim();
  const getVal = prefix
    .filter((num) => num === val)
    .forEach((element) => {
      newNum = element;
    });
  switch (val) {
    case "0803":
    case "0806":
    case "0703":
    case "0706":
    case "0810":
    case "0813":
    case "0814":
    case "0816":
    case "0903":
    case "0906":
      netWorkImage.src = "./img/mtn.png";
      break;
    case "0802":
    case "0802":
    case "0808":
    case "0812":
    case "0701":
    case "0708":
    case "0902":
    case "0907":
    case "0901":
      netWorkImage.src = "./img/airtel.png";
      break;
    case "0809":
    case "0809":
    case "0817":
    case "0818":
    case "0908":
    case "0909":
      netWorkImage.src = "./img/9mobile.png";
      break;
    case "0809":
    case "0805":
    case "0807":
    case "0811":
    case "0705":
    case "0815":
    case "0905":
      netWorkImage.src = "./img/glo.png";
      break;

    default:
      netWorkImage.src = "";
      break;
  }
});
