const ratingSystem = document.getElementById("rating-system");
const submitButton = document.getElementById("submit-button");
const ratingOutputText = document.getElementById("rating-output-text");
let selectedRating = 0;
let totalRating = 0;
let numberOfRatings = 0;

submitButton.addEventListener("click", () => {
    totalRating += selectedRating;
    numberOfRatings++;
});

function changeRating(rating) {
    selectedRating = rating;
}
