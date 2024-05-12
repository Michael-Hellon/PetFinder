const responseForm = document.getElementById("response-form");
const speciesInput = document.getElementById("species");
const locationInput = document.getElementById("location");
const ageInput = document.getElementById("age");
const genderInput = document.getElementById("gender");
const distanceInput = document.getElementById("distance");
const modalSubmitBtn = document.getElementById("submit");

const petApiKey = "hg4nsv85lppeoqqixy3tnlt3k8lj6o0c";
let species = "dog"; // we'll need to make this dynamic later - eric

// This activates the Submit button on the modal's form
responseForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit() {
    const petInfo = {
        species: speciesInput.value,
        age: ageInput.value,
        gender: genderInput.value,
        distance: distanceInput.value,
        location: locationInput.value.trim()
    };

    if (!speciesInput.value) {
        alert('Enter Pet Species');
        return;
    } else if (!ageInput.value) {
        alert('Enter Pet Age');
        return;
    } else if (!genderInput.value) {
        alert('Enter Pet Gender');
        return;
    } else if (!distanceInput.value) {
        alert('Enter Distance From You');
        return;
    } else if (!locationInput.value) {
        alert('Enter your Location');
        return;
    } 

    // TODO push petInfo to local storage
    getAdoptPetData(petInfo);
    //location.href = "results.html";  // have this commented out for the moment to more easily see console log of the index page
    
}

// Calls the adopt a pet API and retrieves data on the selected species
function getAdoptPetData(petInfo) {
    console.log(petInfo);
    const petUrl = "https://api-staging.adoptapet.com/search/pet_search?key="+petApiKey+"&v=3&output=json&city_or_zip="+petInfo.location+"&geo_range="+petInfo.distance+"&species="+petInfo.species+"&breed_id=real%3D801&sex="+petInfo.gender+"&age="+petInfo.age+"&start_number=1&end_number=50";

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
