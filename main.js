let char_container = document.querySelector(".main-section__graphe");

let myData = fetch("./data.json");
async function data() {
  console.log("Before fetch");

  await myData
    .then((resolve) => resolve.json())
    .then(function (resolve) {
      console.log(resolve);
      array = [...resolve];
      return array;
    });

  let max = bigMonth(array);
  // console.log(max);
  array.forEach((Element, index, arr) => {
    console.log(Element.amount);
    let char = document.createElement("div");
    char.classList.add("char");
    char.innerHTML = `  <div class="char__rectangle" style="height: ${Element.amount}%">
    <div class="amount-cart">$${Element.amount}</div>
    </div>
      <p class="char__day">${Element.day}</p>
      `;
    if (Element.amount === max) {
      char.firstElementChild.style.backgroundColor = "hsl(186, 34%, 60%)";
    }
    char_container.appendChild(char);
  });
}

data();

// function to return the bigest amount of month.

function bigMonth(array) {
  let max = array[0].amount;
  for (let i = 0; i < array.length; i++) {
    if (array[i].amount > max) {
      max = array[i].amount;
    }
  }
  return max;
}
