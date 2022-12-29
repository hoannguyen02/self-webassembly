async function init() {
    let rustApp = null;
    try {
        rustApp = await import('../pkg')
    } catch (error) {
        console.error(error)
    }

    console.log(rustApp);

    const input = document.getElementById('upload');
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
        const based64 = fileReader.result.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
        const image_data_url = rustApp.grayscale(based64);
        document.getElementById('new-img').setAttribute('src', image_data_url);
    }
    input.addEventListener('change', () => {
        fileReader.readAsDataURL(input.files[0]);
    })
}


init();