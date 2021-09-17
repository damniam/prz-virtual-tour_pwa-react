let installButton = document.createElement('button');
let prompt;
window.addEventListener('beforeinstallprompt', (e) => {

    // preventing the mini-infobar from appearing on the mobile
    e.preventDefault();
    // stash, stack the event so it can be triggered later
    prompt = e;
    console.log('beforeinstall prompt event was fired');
})

installButton.addEventListener('click', (e) => {
    prompt.prompt();
});

