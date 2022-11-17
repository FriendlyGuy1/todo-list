let main_page = document.getElementById("main_div");

console.log(main_page);

// a element
let link = document.createElement("a");
link.textContent = "Google";
main_page.appendChild(link)
link.href = "https://Google.com";
link.target = "_blank";

// section
let sect = document.createElement("section");
let para = document.createElement("p");
para.textContent = "Hello";
main_page.append(sect);
sect.append(para);


let Parr = document.querySelectorAll("p");
for(let i =0; i < Parr.length;i++){
    Parr[i].style.color = "red";
}