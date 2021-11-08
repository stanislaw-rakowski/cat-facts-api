const btn = document.querySelector('button');

const getCatFact = () => {
    return fetch('https://catfact.ninja/fact')
        .then(response => {
            if (response.status !== 200) {
                throw new Error('cannot fetch the data');
            }
            return response.json()
        })
        .then((data) => {
            const div = document.querySelector('div');

            div.textContent = data.fact;
        })
        .catch(err => {
            console.log(err.message)
        })
}

btn.addEventListener('click', getCatFact);

getCatFact();




