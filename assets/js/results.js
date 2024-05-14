const backBtn = document.querySelector('#back-button');
const resultContainer = document.querySelector('#result-container');
const searchResultEl = document.getElementById("results")

// console.log('localStorage pet_name length', localStorage.pet_name.length) - YES IT WORKS
// console.log('localStorage petData', localStorage.petData) - YES, ITs a mess
// console.log('petArray', petArray) - NOPE
// console.log('petData', petData) - NOPE

let retrievedPetString = localStorage.getItem("petArray");
let petArray = JSON.parse(retrievedPetString);
// console.log('petData', petData);
console.log('petArray', petArray);
console.log('petAge', petArray[1].name);
console.log("petArray.length", petArray.length);


// Back Button for Results Page
backBtn.addEventListener('click', function() {
    location.href = "index.html"
});

function getPetResultsFromLocalStorage(petArray) {
    JSON.parse(localStorage.getItem())

    console.log('pet Array', petArray)
    for( let i = 0; i < petArray.length; i++) {

        let petAge = petArray[i].age;
        console.log("Hello");
        let petName = petArray[i].name;
        let petGender = petArray[i].sex;
        // let petBreed= petArray[i].breed;
        let petPic = petArray[i].pic;
        let petDetails = petArray[i].details;

        
        console.log('petAge', petArray[i].age);
        console.log('name', petArray[i].name);
        console.log('sex', petArray[i].sex);
        console.log("pet pic", petArray[i].pic); 
        console.log("pet Detail", petArray[i].details);     
        console.log("petArray.length",petArray[i].length);

        resultContainer.innerHTML += String.raw`
        <div class="card w-64 bg-base-100 shadow-xl">
          <figure><img src=${petArray.pic ? petArray.pic : "No Picture Available"} alt="pet"/></figure>
          <div class="card-body">
            <h2 class="card-title">${petArray.pet_name ? petArray[i].name : "No Picture Available"}
                          
            </h2>
            <p> `${petArray[i].details}``</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Add To Favorites</div> 
              <div class="badge badge-outline">Pick Me!</div>
            </div>
          </div>
        </div>`;
    }
  }

//         let newDiv = document.createElement("div");
//         let newFig = document.createElement("figure")
//         let newImg = document.createElement("img");
//         let newDiv2 = document.createElement("div");
//         let newDiv3 = document.createElement("div");
//         let newDiv4 = document.createElement("div");
//         let newDiv5 = document.createElement("div");
//         let newH2 = document.createElement("h2");
//         let newP = document.createElement("p");

//         newDiv.className = "card w-64 bg-base-100 shadow-xl";

//         newImg.alt = "Pet Picture"

//         newDiv2.className = "card-body";

//         newH2.className = "card-title";
//         newH2.innerHTML = `${petName}, sex: ${petGender}, Pet's Age: ${petAge}`

//         newP.innerHtml = `${petDetails}`;

//         newDiv3.className = "card-actions justify-end"
//         newDiv4.innerHTML = 'class="badge badge-outline">Add To Favorites';
//         newDiv5.innerHTML ='class="badge badge-outline">Pick Me!';


//         newFig.append(newImg);
//         newDiv.append(newFig);
//         newDiv3.append(newDiv4);
//         newDiv3.append(newDiv5);
//         newDiv2.append(newDiv3);
//         newDiv.append(newDiv2);

//         searchResultEl.append(newDiv);
//     }
// }


    // console.log('petArray returned', petArray)
