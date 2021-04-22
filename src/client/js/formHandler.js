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
                document.getElementById('results').innerHTML += '<br><li>Subjectivity: '+res.subjectivity+'</li>'
                document.getElementById('results').innerHTML += '<br><li>Agreement: '+res.agreement+'</li>'
                document.getElementById('results').innerHTML += '<br><li>Confidence: '+res.confidence+'</li>'
                document.getElementById('results').innerHTML += '<br><li>Irony: '+res.irony+'</li>'
                document.getElementById('results').innerHTML += '<br><li>Score Tag: '+res.score_tag+'</li>'

            })
    } else {
        document.getElementById('results').innerHTML = '<b style="color:red">This Field is required</b>'
    }

}
export { handleSubmit }