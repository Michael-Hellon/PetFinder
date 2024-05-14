const responseForm = document.getElementById("response-form");
const speciesInput = document.getElementById("species");
const locationInput = document.getElementById("location");
const ageInput = document.getElementById("age");
const genderInput = document.getElementById("gender");
const distanceInput = document.getElementById("distance");
const modalSubmitBtn = document.getElementById("submit");

const petApiKey = "hg4nsv85lppeoqqixy3tnlt3k8lj6o0c";
const geoCodeApiKey = "664243d6da3b5785032551omxdb1a57";

// let species = "dog"; // we'll need to make this dynamic later - eric

// This activates the Submit button on the modal's form
responseForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event
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
    const petUrl = "https://api-staging.adoptapet.com/search/pet_search?key="+petApiKey+"&v=3&output=json&city_or_zip="+petInfo.location+"&geo_range="+petInfo.distance+"&species="+petInfo.species+"&sex="+petInfo.gender+"&age="+petInfo.age+"&start_number=1&end_number=50";
    // removed breed ID param so cats work:  &breed_id=real%3D801

    let petArray = [];
    fetch(petUrl)
    .then(function (response) {
        if (!response.ok) {
            alert(`Error:${response.statusText}`);
        }
        else {
            response.json().then(function (data) {
                // console.log(data);
                // console.log('Pet age',data.pets[0].age);
                // console.log('Pet name',data.pets[0].pet_name);
                // console.log('Pet sex',data.pets[0].sex);
                // console.log('Pet breed',data.pets[0].primary_breed);
                // console.log('Pet pic',data.pets[0].large_results_photo_url);
                // console.log('pet Details', data.pets[0].details_url) 

                // console.log('pets.length', data.pets.length)

                for (let i = 0; i < data.pets.length; i++) {
                    const petData = {
                        name: data.pets[i].pet_name,
                        age: data.pets[i].age,
                        sex: data.pets[i].sex,
                        breed: data.pets[i].primary_breed,
                        pic: data.pets[i].large_results_photo_url,
                        details: data.pets[i].details_url,
                    }
                    petArray.push(petData);
                    localStorage.setItem(data.pets[i].pet_name, JSON.stringify(petArray));
                }


            //     let petAge = data.pets[0].age;
            //     let petName = data.pets[0].pet_name;
            //     let petGender = data.pets[0].sex;
            //     let petBreed= data.pets[0].primary_breed;
            //     let petPic = data.pets[0].large_results_photo_url;
            //     let petDetails = data.pets[0].details_url;

            //     petArray.push(petData);
            //     petArray.push(petAge, petName, petGender, petBreed, petPic, petDetails);
            //         localStorage.setItem('petName', JSON.stringify(petArray));
            })
        }
       
    })
    .catch(function (error) {
        alert('Unable to connect to Adopt a Pet API');
    });
    geoCodeZip(petInfo);
 };

 function geoCodeZip(petInfo) {
    //console.log(petInfo);
    const geoUrl = "https://geocode.maps.co/search?q="+petInfo.location+"&api_key=664243d6da3b5785032551omxdb1a57&limit=1";
    
    fetch(geoUrl)
    .then(function (response) {
        if (!response.ok) {
            alert(`Error: ${response.statusText}`);
        }
        else {
            response.json().then(function (data) {
                console.log(data);
                console.log(`Longitude: ${data[0].lon}`);
                console.log(`Latitude: ${data[0].lat}`);
                const geoLatLon = {
                    latitude: data[0].lat,
                    longitude: data[0].lon,
                };
                let geoArray = JSON.parse(localStorage.getItem('geoArray'));
                if (!geoArray) {
                    geoArray = [];
                }
                geoArray.push(geoLatLon);
                localStorage.setItem('geoArray', JSON.stringify(geoArray));
                console.log(geoArray);
            })
        }
    })
 };
