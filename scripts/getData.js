let btnCategoria1 = document.getElementById('btnCategory1')
let btnCategoria2 = document.getElementById('btnCategory2')
const getElementos = async (url) => {
    let mostrarElementos = document.querySelector('.grid-elementos')
    mostrarElementos.innerHTML = ''
    const resp = await fetch(url)
    const data = await resp.json()
    data.forEach(element => {
        const { nombre, genero, vivo, amigos, imagen } = element
        mostrarElementos.innerHTML += `
        <div class="col elementos">
            <a href="#" class="enlace-detalle-elemento">
                <div class="card bg-dark text-white gradiente">                
                    <img src="${imagen}" class="card-img" alt="...">
                    <div class="card-img-overlay">
                            <h5 class="card-title body2Bold">${nombre}</h5>
                            <p class="card-text body2Regular">${genero}</p>
                            <p class="card-text body2Regular">${vivo}</p>
                            <p class="card-text body2Regular">${amigos[0]}</p>
                    </div>
                </div>
            </a>
        </div>
        `
    });
};

btnCategoria1.addEventListener('click' , () =>{
    getElementos("http://localhost:4000/harryPotter");
});

btnCategoria2.addEventListener('click' , () =>{
    getElementos("http://localhost:4001/LotR");
});