const options = { method: 'GET', headers: { 'User-Agent': 'Insomnia/2023.5.3' } };
fetch('http://localhost:3000/noticias', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        response.map((element, index, array) => {
            const h3=document.createElement('h3')
            const body=document.querySelector('body')
            body.appendChild(h3)
            h3.innerHTML=element.titulo

            const img=document.createElement('img')
            body.appendChild(img)
            img.src=element.image
            img.style.width='300px'

            const p=document.createElement('p')
            body.appendChild(p)
            p.innerHTML=element.conteudo

            const autor=document.createElement('p')
            body.appendChild(autor)
            autor.innerHTML=element.autor
            autor.style.fontWeight='bolder'
        })
    })
    .catch(err => console.error(err))