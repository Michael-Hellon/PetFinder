

   
        // <div>
        //     <h1>Adoption Centers near you</h1>
        //     <p>Don't want to travel too far? Try out our maps to see your closest adoption centers.</p>
        // </div>
    



// Select the div element where you want to display the API response


const backBtn = document.querySelector('#back-button');
const resultContainer = document.querySelector('#result-container');
//const searchResultEl = document.getElementById("results");
const petList = document.querySelector("#results");



// Back Button for Results Page
backBtn.addEventListener('click', function() {
    location.href = "index.html"
});


function getPetResultsFromLocalStorage() {
    const petArray = JSON.parse(localStorage.getItem('petArray'));
    if (!petArray) {
        return;
    }
    console.log(petArray);
    for (let i = 0; i < petArray.length; i++) {
        const petCardEl = document.createElement("div");

        const petPicEl = document.createElement("img");
        let petPic = petArray[i].pic;
        petPicEl.src = petPic;

        const petNameEl = document.createElement("h3");
        let petName = petArray[i].name;
        petNameEl.textContent = petName;

        petCardEl.appendChild(petPicEl);
        petCardEl.appendChild(petNameEl);
        
        // appends it all together
        petList.appendChild(petCardEl);

    }
    };
    getPetResultsFromLocalStorage();