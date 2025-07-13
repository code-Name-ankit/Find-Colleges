let btn = document.querySelector("button");
let list = document.getElementById("list");


let url = "";

btn.addEventListener("click", async () => {
  let country = document.querySelector("#country").value;
  let state = document.querySelector("#state").value;

  try {
    let response = await axios.get(
      `http://universities.hipolabs.com/search?country=${country}&name=${state}`
    );
    let fact = response.data;
    list.innerText = ""; // Clear previous results
    for (let Coname of fact) {
      let li = document.createElement("li");
      li.innerText = Coname.name;

      list.appendChild(li);
    }
  } catch (e) {
    console.error("Error fetching cat fact :", e.message);
  }
});
