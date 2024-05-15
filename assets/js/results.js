const backBtn = document.querySelector('#back-button');
const resultContainer = document.querySelector('#result-container');
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
        const newDiv1El = document.createElement("div");
        newDiv1El.className = "card w-64 bg-base-100 shadow-xl ml-4";

        const petPicEl = document.createElement("img");
        let petPic = petArray[i].pic;
        petPicEl.src = petPic;

        const petNameEl = document.createElement("h3");
        let petName = petArray[i].name;
        petNameEl.textContent = petName;
        petNameEl.className = "card-title";

        const petDetailsEl = document.createElement("textarea");
        petDetailsEl.setAttribute('rows', '5');
        petDetailsEl.setAttribute('cols', '5');
        petDetailsEl.className = "mb-4";
        let petDetails = petArray[i].details;
        petDetailsEl.textContent = petDetails;

        const petEmailEl = document.createElement("p");
        let contactEmail = petArray[i].email;
        petEmailEl.textContent = `Ask about me at: ${contactEmail}`;

        newDiv1El.appendChild(petNameEl);
        newDiv1El.appendChild(petPicEl);
        newDiv1El.appendChild(petDetailsEl);
        newDiv1El.appendChild(petEmailEl);
        
        // appends it all together
        petList.appendChild(newDiv1El);

    }
    };
    getPetResultsFromLocalStorage();
