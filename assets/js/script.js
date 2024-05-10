modalCreation

    


const petApiKey = "hg4nsv85lppeoqqixy3tnlt3k8lj6o0c";
let species = "dog"; // we'll need to make this dynamic later - eric

window.onload = function () {
    document.getElementById("modal_id-anchor-toggle").click();
    };
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


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
main
