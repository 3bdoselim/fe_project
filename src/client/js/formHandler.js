async function handleSubmit(event) {
    event.preventDefault()
    document.getElementById('results').innerHTML = ''
    // check what text was put into the form field
    let inputText = document.getElementById('name').value
    console.log(inputText)
    if (inputText){
        fetch('http://localhost:8081/checklang', {
            method: 'POST',
            body: JSON.stringify({ txt: inputText }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(function (res) {
                console.log(res)
                res.language_list.map(lang => {
                    document.getElementById('results').innerHTML += '<li>'+lang.name+'</li>'
                })
                // document.getElementById('results').innerHTML = JSON.stringify()
            })
    } else {
        document.getElementById('results').innerHTML = '<b style="color:red">This Field is required</b>'
    }

}
export { handleSubmit }