
const formSubmit = (e) => {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const subject = document.getElementById('subject').value
    const message = document.getElementById('message').value
    const data = { email, name, subject, message }
    fetch('https://lineargraphic.com/email', {
        method: "post",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(data)
    })
}