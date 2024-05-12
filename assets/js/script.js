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
    // const speciesAnswer = speciesInput.value;
    // const petAgeAnswer = ageInput.value;
    // const petGenderAnswer = genderInput.value;
    // const petDistanceAnswer = distanceInput.value;
    // const locationAnswer = locationInput.value.trim();
    
    // This checks if each field is filled out before allowing submission to occur.


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

    location.href = "results.html";
    return petInfo;
}

// Calls the adopt a pet API and retrieves data on the selected species
function getAdoptPetData(petInfo) {
   
    // I commented out the first petUrl line for now, but once we get local storage working I think that's the one we'll use. -eric
    //const petUrl = "https://api-staging.adoptapet.com/search/pet_search?key="+petApiKey+"&v=3&output=json&city_or_zip="+petInfo.location+"&geo_range="+petInfo.distance+"&species="+petInfo.species+"&breed_id=real%3D801&sex="+petInfo.gender+"&age="+petInfo.age+"&start_number=1&end_number=50";
    const petUrl = "https://api-staging.adoptapet.com/search/pet_search?key="+petApiKey+"&v=3&output=json&city_or_zip=47374&geo_range=50&species=dog";  // this will be deleted in favor of the one above once LS setup

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
