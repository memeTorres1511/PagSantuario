const grid = new Muuri('.grid', {
    layout:{
        rounding: false
    }
});

window.addEventListener('load', () =>{
    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.grid .item img').forEach((elemento) =>{
    
        elemento.addEventListener('click', () =>{
            const ruta = elemento.getAttribute('src');
            const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
            const link = elemento.parentNode.parentNode.dataset.link;
        
            overlay.classList.add('activo');
            document.querySelector('#overlay img').src = ruta;
            document.querySelector('#overlay .descripcion').innerHTML = descripcion;
            document.querySelector('#overlay' .link).innerHTML = link;
        });
    });

    document.querySelector('#btn-cerrar-popup').addEventListener('click', () =>{
        overlay.classList.remove('activo');
    })

    overlay.addEventListener('click', (evento) =>{
        evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
    })
})
