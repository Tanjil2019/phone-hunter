const loadPhones = () =>{
     const url = `https://openapi.programming-hero.com/api/phones?search=iphone`
     fetch(url)
     .then(res => res.json())
     .then(data => displayPhones(data.data))
}

const displayPhones = phones =>{
     const PhoneContainer = document.getElementById('phone-container')
     
     phones.forEach(phone =>{
          const newDiv = document.createElement('div')
          newDiv.classList.add('col');
          newDiv.innerHTML = `
          <div class="col">
                 <div class="card h-100 m-3 p-2">
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
     })
}
loadPhones()