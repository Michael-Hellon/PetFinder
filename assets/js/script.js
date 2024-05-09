const petApiKey = "hg4nsv85lppeoqqixy3tnlt3k8lj6o0c";
let species = "dog"; // we'll need to make this dynamic later - eric

// Modal on page load 
window.onload = function () {
    document.getElementById("modal_id-anchor-toggle").click();
    };
//


// Calls the adopt a pet API and retrieves data on the selected species
function getAdoptPetData() {
    const petUrl = "https://api-staging.adoptapet.com/search/search_form?key="+petApiKey+"&v=3&output=json&species="+species+"";

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