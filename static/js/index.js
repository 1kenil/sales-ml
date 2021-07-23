

function login(event) {
    event.preventDefault()
    window.location.replace('/home');   
    window.history.pushState(null, null, null);
}



function main(event) {
    event.preventDefault()
    window.location.replace('/');   
    window.history.pushState(null, null, null);
}