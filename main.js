const ratings = document.querySelectorAll(".ratings span");
const submitBtn = document.getElementById("sbmt-btn");
const rateAgain = document.getElementById("rate-again");
const ratePoint = document.getElementById("rate");
const ratingBox = document.querySelector(".rating-box");
const thankYou = document.querySelector(".thankyou-box");

let rate = null;

ratings.forEach((rating) => {
    rating.addEventListener("click", (e) => {
        const active = document.querySelector(".checked");
        if (active) {
            active.classList.remove("checked");
        }
        const point = e.target;
        point.classList.add("checked");
        rate = e.target.innerText;
        console.log(rate);
    });
});

submitBtn.addEventListener("click", () => {
    if (rate) {
        ratePoint.innerText = rate;
        ratingBox.classList.add("hide");
        thankYou.classList.remove("hide");
    }
});

rateAgain.addEventListener("click", () => {
        thankYou.classList.add("hide");
        ratingBox.classList.remove("hide");
});