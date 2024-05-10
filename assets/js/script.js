const petApiKey = "hg4nsv85lppeoqqixy3tnlt3k8lj6o0c";
let species = "dog"; // we'll need to make this dynamic later - eric


const form = document.getElementById("form");
const submitter = document.querySelector("button[value=save]");
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {
e.preventDefault();
const formData = new FormData(form, submitter);
for (const [key, value] of formData) {
    if (key !== "intent") {
    output.textContent += `${key}: ${value}\n`;
    }
}
});





// Calls the adopt a pet API and retrieves data on the selected species
function getAdoptPetData() {
    const petUrl = "https://api-staging.adoptapet.com/search/pet_search?key="+petApiKey+"&v=3&output=json&city_or_zip=47374&geo_range=50&species="+species+"&breed_id=real%3D801&sex=m&age=young&start_number=1&end_number=50";

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
