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
        petCardEl.className = "flex flex-row space-x-5 ";

        const newDiv1El = document.createElement("div");
        newDiv1El.className = "card w-64 bg-base-100 shadow-xl";

        //const newFigEl = document.createElement("figure");

        // const newDiv2El = document.createElement("div")
        // newDiv2El.className = "card-body";

        const petPicEl = document.createElement("img");
        let petPic = petArray[i].pic;
        petPicEl.src = petPic;

        const petNameEl = document.createElement("h3");
        let petName = petArray[i].name;
        petNameEl.textContent = petName;
        petNameEl.className = "card-title";

        const petDetailsEl = document.createElement("p");
        let petDetails = petArray[i].details;
        petDetailsEl.textContent = petDetails;

        newDiv1El.appendChild(petNameEl);
        newDiv1El.appendChild(petPicEl);
        newDiv1El.appendChild(petDetailsEl);
       

        // const newDiv3El = document.createElement("div");
        // newDiv3El.className = "card-actions justify-end";

        // const newDiv4El = document.createElement("div");
        // newDiv4El.className = "badge badge-outline";
        // let contactEmail = petArray[i].email;
        // newDiv4El.textContent = contactEmail;

        // const newDiv5El = document.createElement("div");
        // newDiv5El.className = "badge badge-outline";
        // newDiv5El.attrteibutes = Pick Me!

        //newFigEl.appendChild(petPicEl); // good
        //petCardEl.appendChild(newFigEl);
        // newDiv2El.appendChild(petDetailsEl);
        // newDiv2El.appendChild(petNameEl);

        // newDiv3El.appendChild(newDiv4El);  // good
        // newDiv3El.appendChild(newDiv5El);  // good 
        // newDiv2El.appendChild(newDiv3El);  // good
        // newDiv1El.appendChild(newDiv2El);  //good
        // petCardEl.appendChild(newDiv1El);
        


        // petCardEl.appendChild(petPicEl); //
        // petCardEl.appendChild(petNameEl);
        
        // appends it all together
        petList.appendChild(newDiv1El);

    }
    };
    getPetResultsFromLocalStorage();
