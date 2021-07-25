let portfolio = JSON.parse(port);

for (let i = 0; i < portfolio.length; i++) {
    document.getElementById(
        "portFolio"
    ).innerHTML += `<div class="col col-12 col-sm-10 col-md-6 col-lg-4 d-flex  justify-content-around" style="margin-bottom: 40px; padding:0">
                        <div class="flip-box ">
                            <div class="flip-box-inner ">
                                <div class="flip-box-front ">
                                    <img class="images " src="${portfolio[i].images}" alt="${portfolio[i].them}" style="border-radius:10px" />
                                </div>
                                <div class="flip-box-back ">
                                    <h4 class="imgLet">${portfolio[i].them}</h4>
                                    <a class ="imgLet imgLet-a" href="${portfolio[i].vercel}" style="text-decoration:none;">Look at the project</a>
                                 <p class="imgLet">${portfolio[i].skills}</p>
                                 <p class="imgLet">${portfolio[i].skills}</p>
                                </div>
                            </div>
                        </div>
                    </div>
    `;
}