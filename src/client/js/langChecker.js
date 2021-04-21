const fetch = require("node-fetch");

async function checkForLang(inputText, apiKey) {
    const formdata = new FormData();
    formdata.append("key", apiKey);
    formdata.append("txt", inputText);
    let response = null
    const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
    };
    console.log(formdata.get('key'), formdata.get('txt'))
        response = await fetch("https://api.meaningcloud.com/lang-4.0/identification", requestOptions)
        .then(async (response)  => ({
            body: await response.json(),
        }))
        .catch(error => console.log('error', error));
    return response
}

export { checkForLang }