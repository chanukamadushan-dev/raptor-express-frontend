function getItems() {

    fetch("http://localhost:8080/item/get-all")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            showItems(data);
        })

}

function showItems(data) {

    let content = "";

    data.forEach(item => {
        content += `<div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                        <section class="card" style="max-width: 320px">
                            <img src="${item.url}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h4 class="card-title">${item.name}</h4>
                                <p class="card-text">${item.status}</p>
                                <h5 class="card-text">category : ${item.category}</h5>
                                <section class="buy-price-allign">
                                     <a href="#" class="btn-solid">Buy</a>
                                    <span>price :${item.price}</span>
                                </section>
                            </div>
                        </section>
                    </div>`

    });

    document.getElementById("card-body").innerHTML = content;
}

getItems();