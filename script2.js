const scriptURL = 'https://script.google.com/macros/s/AKfycbzId5RP06DqUqIs4yvjBAJ7m0hCjjKtszTnyFY5WLnUixogch6jC-XHPormPFeGB01zrg/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Order is placed.The Item will be deliverd to you in 2 to 3 days ..."))
                .catch(error => console.error('Error!', error.message))
            })
const links = document.getElementById("insta")
links.addEventListener("click" , () => {
  open("https://www.instagram.com/sigmastore012/")
}
)