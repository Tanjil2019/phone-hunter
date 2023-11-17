const loadPhones = (searchText) =>{
     const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
     fetch(url)
     .then(res => res.json())
     .then(data => displayPhones(data.data))
}

const displayPhones = phones =>{
     const PhoneContainer = document.getElementById('phone-container')
     PhoneContainer.textContent = ''
     phones= phones.slice(0, 9)


     const noPhones = document.getElementById('no-phone-massage');

     if(phones.length === 0 ){
          noPhones.classList.remove('d-none');
     }
     else{
          noPhones.classList.add('d-none')
     }
     
     
     
     phones.forEach(phone =>{
          const newDiv = document.createElement('div')
          newDiv.classList.add('col');
          newDiv.innerHTML = `
          <div class="col">
                 <div class="card h-100 m-2 p-2">
                   <img class="img-fluid" src="${phone.image}" class="card-img-top" alt="...">
                   <div class="card-body">
                     <h5 class="card-title">${phone.phone_name}</h5>
                     <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                   </div>
                  </div>
          </div>
          `

          PhoneContainer.appendChild(newDiv)
          console.log(phone);


     });
          // Stop spinner

     toggleSpinner(false)
}

document.getElementById('button-addon2').addEventListener('click', function(){
     // Start Spinner
     toggleSpinner(true);
     const inputPhonesFiles = document.getElementById('input-phones').value;
     loadPhones(inputPhonesFiles)

})

const toggleSpinner = isLoading =>{
     const loadSpinnerSuccess = document.getElementById('spinner');

     if(isLoading){
          loadSpinnerSuccess.classList.remove('d-none')
     }
     else{
          loadSpinnerSuccess.classList.add('d-none')
     }
}
// loadPhones()