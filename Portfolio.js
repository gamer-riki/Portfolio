const scriptURL = 'https://script.google.com/macros/s/AKfycbxFMh_WHM2VzySXH4-w6iMhDRDAj8pQy5q8LrGtSXq9jS3e6Yls5GqrHqgmlK4YSbix/exec' // add your own app script link here
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })