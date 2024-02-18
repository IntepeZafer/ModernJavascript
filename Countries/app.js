const ui = new UI();
function displayCountry(country){
    const request = new XMLHttpRequest();
    request.open('GET' , 'https://restcountries.com/v3.1/name/' + country);
    request.send();

    request.addEventListener("load" , function(){
        const data = JSON.parse(this.responseText);
        setCountry(data);
        const countries = data[0].borders.toString();
        const req = new XMLHttpRequest();
        req.open("GET" , "https://restcountries.com/v3.1/alpha?codes=" + countries);
        req.send();
        req.addEventListener("load" , function(){
            const data = JSON.parse(this.responseText);
            setCountry(data)
        });
    });
};

function setCountry(data){
    for(let country of data){
        const html = `
            <div class="col-3 w-50">
                <div class="card h-100">
                    <img src="${country.flags.png}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${country.name.official}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><i class="bi bi-people-fill"></i> Population: ${(country.population / 1000000).toFixed(1)}</li>
                        <li class="list-group-item"><i class="bi bi-translate"></i> Language: ${Object.values(country.languages)}</li>
                        <li class="list-group-item"><i class="bi bi-geo-alt-fill"></i> Capital: ${country.capital}</li>
                        <li class="list-group-item"><i class="bi bi-globe-asia-australia"></i> Currencies: ${country.subregion}</li>
                        <li class="list-group-item"><i class="bi bi-highlighter"></i> Borders: ${country.borders}</li>
                    </ul>
                </div>
            </div>
        `;
        ui.container.querySelector(".row").insertAdjacentHTML("beforeend" , html)
    }
}
ui.input.addEventListener("keydown" , (e) => {
    if(e.key === "Enter"){
        displayCountry(ui.input.value);
    }
});
