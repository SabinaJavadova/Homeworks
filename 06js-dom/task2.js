
const divs = document.createElement("div");
divs.style.width="80%";
divs.style.margin="auto";
const container = document.createElement("div");
container.style.width = "100%";
container.style.margin = "auto";
container.style.backgroundColor = "gray";
container.style.height = "500px";  
container.classList.add("big");

const h1 = document.createElement("h1");
h1.classList.add("name");
h1.textContent = "960 x 360 px";
h1.style.textAlign = "center";
h1.style.paddingTop = "200px";





container.appendChild(h1);

const divsContainer = document.createElement("div");
divsContainer.style.display = "flex"; 
divsContainer.style.justifyContent = "space-between";
divsContainer.style.marginTop = "20px"; 

const div1_1 = document.createElement("div");
div1_1.classList.add("div1");
div1_1.style.width = "100%";
div1_1.style.height = "100px";
div1_1.style.backgroundColor = "gray"; 

const div1_2 = document.createElement("div");
div1_2.classList.add("div1");
div1_2.style.width = "100%";
div1_2.style.height = "100px";
div1_2.style.backgroundColor = "gray";

const div1_3 = document.createElement("div");
div1_3.classList.add("div1");
div1_3.style.width = "100%";
div1_3.style.height = "100px";
div1_3.style.backgroundColor = "gray";

document.body.appendChild(container);

document.body.appendChild(divsContainer);

const h2 = document.createElement("h1");
h2.classList.add("name");
h2.textContent = "960 x 360 px";
h2.style.textAlign = "center";
h2.style.paddingTop = "20px";
div1_1.appendChild(h2);
const h3 = document.createElement("h1");
h3.classList.add("name");
h3.textContent = "960 x 360 px";
h3.style.textAlign = "center";
h3.style.paddingTop = "20px";
div1_2.appendChild(h3);
const h4 = document.createElement("h1");
h4.classList.add("name");
h4.textContent = "960 x 360 px";
h4.style.textAlign = "center";
h4.style.paddingTop = "20px";
div1_3.appendChild(h4);

const divbir = document.createElement("div");
divbir.style.position = "relative";
divbir.style.width = "30%";
const diviki = document.createElement("div");
diviki.style.position = "relative";
diviki.style.width = "30%";
const divuc = document.createElement("div");
divuc.style.position = "relative";

divuc.style.width = "30%";

const yazi = document.createElement("h3");
yazi.style.textAlign = "center"
yazi.innerText = "lorem ipsum dolor iksum for sjhs";

const yazi2 = document.createElement("h3");
yazi2.style.textAlign = "center"
yazi2.innerText = "lorem ipsum dolor iksum for sjhs";

const yazi3 = document.createElement("h3");
yazi3.style.textAlign = "center"
yazi3.innerText = "lorem ipsum dolor iksum for sjhs";


const yazip = document.createElement("p");
yazip.style.textAlign = "center"
yazip.innerText = "ipsum dipsum dipsum dipsum dipsum dipsum dorem ipsum dsum dsum dsum dsum dsum d";

const yazip2 = document.createElement("p");
yazip2.style.textAlign = "center"
yazip2.innerText = "ipsum dipsum dipsum dipsum dipsum dipsum dorem ipsum dsum dsum dsum dsum dsum d";

const yazip3 = document.createElement("p");
yazip3.style.textAlign = "center"
yazip3.innerText = "ipsum dipsum dipsum dipsum dipsum dipsum dorem ipsum dsum dsum dsum dsum dsum d";

const read = document.createElement("a");
read.style.position = "absolute";
read.style.right = "0px";
read.style.color = "orange"
read.innerText = "Read more"
const read2 = document.createElement("a");
read2.style.position = "absolute";
read2.style.right = "0px";
read2.style.color = "orange"
read2.innerText = "Read more"

const read3 = document.createElement("a");
read3.style.position = "absolute";
read3.style.right = "0px";
read3.style.color = "orange"
read3.innerText = "Read more"



divsContainer.appendChild(divbir);
divbir.appendChild(div1_1);
divbir.appendChild(yazi);
divbir.appendChild(yazip);
divbir.appendChild(read);


divsContainer.appendChild(diviki);
diviki.appendChild(div1_2);
diviki.appendChild(yazi2);
diviki.appendChild(yazip2);
diviki.appendChild(read2);


divsContainer.appendChild(divuc);
divuc.appendChild(div1_3);
divuc.appendChild(yazi3);
divuc.appendChild(yazip3);
divuc.appendChild(read3);