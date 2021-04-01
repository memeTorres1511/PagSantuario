document.addEventListener('DOMContentLoaded', () => {
    const imgLightBox = document.querySelectorAll('.materialBoxed');
    M.Materialbox.init(imgLightBox, {
        inDuration: 500,
        outDuration: 500
    });
});
