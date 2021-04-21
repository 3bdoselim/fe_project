async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let inputText = document.getElementById('name').value
    let apiKey = document.getElementById('key').value
    let response = null
    if(inputText && apiKey){
        response = await Client.checkForLang(inputText, apiKey)
    }else if (!apiKey){
        document.getElementById('results').innerHTML = '<b style="color:red">You aren\'t authenticated</b>'
    }else{
        document.getElementById('results').innerHTML = '<b style="color:red">Please provide a sentinse</b>'
    }

    if (response){
        document.getElementById('results').innerText = response.body.language_list[0].name
        document.getElementById('name').value = ''
    }
}
export { handleSubmit }