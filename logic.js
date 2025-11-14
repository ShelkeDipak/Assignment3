const input = document.querySelector("input");
const btn = document.querySelector("button");
const nav = document.querySelector("nav");
const boxes = document.querySelectorAll(".box");

btn.addEventListener("click", () => {
    const name = input.value.trim();

    if (name === "") {
        nav.textContent = "Hello";
    } else {
        nav.textContent = "Hello, " + name;
    }
});

boxes.forEach(box => {
    const originalText = box.textContent;
    const originalBg = "rgb(255, 255, 255)";
    const originalTextColor = "black";

box.addEventListener("click", () => {

        const color = originalText.toLowerCase();

         const currentBg = getComputedStyle(box).backgroundColor;

         const temp = document.createElement("div");
        temp.style.backgroundColor = color;
        document.body.appendChild(temp);
        const targetColor = getComputedStyle(temp).backgroundColor;
        document.body.removeChild(temp);

         if (currentBg === targetColor) {
            box.style.backgroundColor = "white";
            box.style.color = originalTextColor;
            box.textContent = originalText;
        } 
         else {
            box.style.backgroundColor = color;
            box.style.color = "white";
            box.textContent = originalText;
        }
    });
});
