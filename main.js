const ratingSystem = document.getElementById("rating-system"); //rating system container
const submitButton = document.getElementById("submit-button"); //submit button
const ratingOutputText = document.getElementById("rating-output-text"); //rating output text
let selectedRating = 0; //selected rating
let totalRating = 0; //total rating
let numberOfRatings = 0; //number of ratings

submitButton.addEventListener("click", () => {
    //when submit button is clicked
    totalRating += selectedRating; //add selected rating to total rating
    numberOfRatings++; //increase number of ratings by 1
    ratingOutputText.textContent = `Selected rating: ${selectedRating}/5\nAverage rating: ${(totalRating / numberOfRatings).toFixed(2)}\nTotal ratings: ${numberOfRatings}`; //update rating output text
});

function changeRating(rating) {
    //function to change selected rating
    selectedRating = rating; //set selected rating to the given rating
}
