const backBtn = document.querySelector('#back-button');
const resultContainer = document.querySelector('#result-container');
const searchResultEl = document.getElementById("results")



// Back Button for Results Page
backBtn.addEventListener('click', function() {
    location.href = "index.html"
});

function getPetResultsFromLocalStorage() {
    return JSON.parse(localStorage.getItem(petArray)) || []


    for( let i = 0; i < data.pets.length; i++) {
        let petAge = data.pets[i].age;
        let petName = data.pets[i].pet_name;
        let petGender = data.pets[i].sex;
        let petBreed= data.pets[i].primary_breed;
        let petPic = data.pets[i].large_results_photo_url;

        let newDiv = document.createElement("div");
        let newFig = document.createElement("figure")
        let newImg = document.createElement("img");
        let newDiv2 = document.createElement("div");
        let newDiv3 = document.createElement("div");
        let newDiv4 = document.createElement("div");
        let newDiv5 = document.createElement("div");
        let newH2 = document.createElement("h2");
        let newP = document.createElement("p");

        newDiv.className = "card w-64 bg-base-100 shadow-xl";

        newImg.src =  `https://pet-uploads-staging.adoptapet.com/${petPic}.jpg`;
        newImg.alt = "Pet Picture"

        newDiv2.className = "card-body";

        newH2.className = "card-title";
        newH2.innerHTML = `${petName}`

        newP.innerHtml = `${petDetails}`;

        newDiv3.className = "card-actions justify-end"
        newDiv4.innerHTML = 'class="badge badge-outline">Add To Favorites';
        newDiv5.innerHTML ='class="badge badge-outline">Pick Me!';


        newFig.append(newImg);
        newDiv.append(newFig);
        newDiv3.append(newDiv4);
        newDiv3.append(newDiv5);
        newDiv2.append(newDiv3);
        newDiv.append(newDiv2);

        searchResultEl.append(newDiv);
    }
}


    console.log('petArray returned', petArray)