const responseForm = document.getElementById("response-form");
const speciesInput = document.getElementById("species");
const locationInput = document.getElementById("location");
const ageInput = document.getElementById("age");
const genderInput = document.getElementById("gender");
const distanceInput = document.getElementById("distance");
const modalSubmitBtn = document.getElementById("submit");

const petApiKey = "hg4nsv85lppeoqqixy3tnlt3k8lj6o0c";
let species = "dog"; // we'll need to make this dynamic later - eric

responseForm.addEventListener('submit', handleFormSubmit);


function handleFormSubmit() {
    const speciesAnswer = speciesInput.value;
    const locationAnswer = locationInput.value.trim();
    const petAgeAnswer = ageInput.value;
    const petGenderAnswer = genderInput.value;
    const petDistanceAnswer = distanceInput.value;

    location.href = "results.html";

    if (locationAnswer === '') {
        alert('error', 'Must enter a Zip code');



}

// Calls the adopt a pet API and retrieves data on the selected species
function getAdoptPetData() {
   
    const petUrl = "https://api-staging.adoptapet.com/search/pet_search?key="+petApiKey+"&v=3&output=json&city_or_zip="+locationInput+"&geo_range="+distanceInput+"&species="+species+"&breed_id=real%3D801&sex="+petGender+"&age="+petAgeInput+"&start_number=1&end_number=50";

        console.log()



    fetch(petUrl)
    .then(function (response) {
        if (!response.ok) {
            alert(`Error:${response.statusText}`);
        }
        else {
            response.json().then(function (data) {
                console.log(data);

            })
        }
    })
    .catch(function (error) {
        alert('Unable to connect to Adopt a Pet API');
    });
};

getAdoptPetData(); // have this just to test that the function is providing data.  We can delete this line later - eric
