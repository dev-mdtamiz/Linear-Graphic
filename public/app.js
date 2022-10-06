
async function DataFetch() {
    await fetch('https://lineargraphic.com/api/pricing')
        .then(res => res.json())
        .then(json => setData(json))


    await fetch('https://lineargraphic.com/api/titles')
        .then(res => res.json())
        .then(json => setTitles(json))

    await fetch('https://lineargraphic.com/api/genarel')
        .then(res => res.json())
        .then(json => {
            setGenarelPricing(json)
        })
}

DataFetch()

const basicPlan = document.getElementById("basic-plan")
const standersPnal = document.getElementById("staderd-plan")
const silverPlan = document.getElementById("silver-plan")

const basicPlanM = document.getElementById("basic-plan-monthly")
const standersPnalM = document.getElementById("staderd-plan-monthly")
const silverPlanM = document.getElementById("silver-plan-monthly")


const basicPlanW = document.getElementById("basic-plan-web")
const standersPnalW = document.getElementById("staderd-plan-web")
const silverPlanW = document.getElementById("silver-plan-web")
// Importting Titles 
// Importting Titles 
const titleMonthlyPlan = document.getElementById("title-monthly-plan")
const titleLeadManagement = document.getElementById("title-management-plan")
const titleWebDevelopment = document.getElementById("title-web-development")
const titleGenarel = document.getElementById("title-genarel-price")
const setData = (pricing) => {
    // Start setup Of pricing Lead management
    // Start setup Of pricing Lead management
    // Start setup Of pricing Lead management


    basicPlan.innerHTML = `
    <div class="pricing-item pricing-item-one mb-40 wow fadeInUp">
<div class="pricing-head text-center">
    <span class="plan">${pricing[0]?.name}</span>
    <h2 class="price"><span class="currency">$</span>${pricing[0]?.price}</h2>
</div>
<div class="pricing-body">
<p>${pricing[0].desc}</p>
    <ul class="pricing-list">
    <li class="${pricing[0]?.service1.active ? 'ckeck' : 'uncheck'} ">${pricing[0]?.service1.serv}</li>
    <li class="${pricing[0]?.service2.active ? 'ckeck' : 'uncheck'} ">${pricing[0]?.service2.serv}</li>
    <li class="${pricing[0]?.service3.active ? 'ckeck' : 'uncheck'} ">${pricing[0]?.service3.serv}</li>
    <li class="${pricing[0]?.service4.active ? 'ckeck' : 'uncheck'} ">${pricing[0]?.service4.serv}</li>
    <li class="${pricing[0]?.service5.active ? 'ckeck' : 'uncheck'} ">${pricing[0]?.service5.serv}</li>
    </ul>
    <a href="contact.html" class="main-btn arrow-btn">Choose Plan</a>
</div>
</div>
`

    standersPnal.innerHTML = `
<div class="pricing-item pricing-item-one mb-40 wow fadeInUp">
<div class="ribbon">Popular</div>
<div class="pricing-head text-center">
<span class="plan">${pricing[1]?.name}</span>
<h2 class="price"><span class="currency">$</span>${pricing[1]?.price}</h2>
</div>
<div class="pricing-body">
    <p>${pricing[1].desc}</p>
    <ul class="pricing-list">
    <li class="${pricing[1]?.service1.active ? 'ckeck' : 'uncheck'} ">${pricing[1]?.service1.serv}</li>
    <li class="${pricing[1]?.service2.active ? 'ckeck' : 'uncheck'} ">${pricing[1]?.service2.serv}</li>
    <li class="${pricing[1]?.service3.active ? 'ckeck' : 'uncheck'} ">${pricing[1]?.service3.serv}</li>
    <li class="${pricing[1]?.service4.active ? 'ckeck' : 'uncheck'} ">${pricing[1]?.service4.serv}</li>
    <li class="${pricing[1]?.service5.active ? 'ckeck' : 'uncheck'} ">${pricing[1]?.service5.serv}</li>
    </ul>
    <a href="contact.html" class="main-btn arrow-btn">Choose Plan</a>
</div>
</div>
`
    // setting up inner html of silver plan 
    // setting up inner html of silver plan 

    silverPlan.innerHTML = `
    <div class="pricing-item pricing-item-one mb-40 wow fadeInUp">
    <div class="pricing-head text-center">
        <span class="plan">${pricing[2]?.name}</span>
        <h2 class="price"><span class="currency">$</span>${pricing[2]?.price}</h2>
    </div>
    <div class="pricing-body">
    <p>${pricing[2].desc}</p>
        <ul class="pricing-list">
        <li class="${pricing[2]?.service1.active ? 'ckeck' : 'uncheck'} ">${pricing[2]?.service1.serv}</li>
        <li class="${pricing[2]?.service2.active ? 'ckeck' : 'uncheck'} ">${pricing[2]?.service2.serv}</li>
        <li class="${pricing[2]?.service3.active ? 'ckeck' : 'uncheck'} ">${pricing[2]?.service3.serv}</li>
        <li class="${pricing[2]?.service4.active ? 'ckeck' : 'uncheck'} ">${pricing[2]?.service4.serv}</li>
        <li class="${pricing[2]?.service5.active ? 'ckeck' : 'uncheck'} ">${pricing[2]?.service5.serv}</li>
        </ul>
        <a href="contact.html" class="main-btn arrow-btn">Choose Plan</a>
    </div>
    </div>
`
    // Lead Management End here 
    // Lead Management End here 

    // Start MOnthly package 
    // Start MOnthly package 

    basicPlanM.innerHTML = `
    <div class="pricing-item pricing-item-one mb-40 wow fadeInUp">
    <div class="pricing-head text-center">
    <span class="plan">${pricing[3]?.name}</span>
    <h2 class="price"><span class="currency">$</span>${pricing[3]?.price}</h2>
    </div>
    <div class="pricing-body">
    <p>${pricing[3].desc}</p>
    <ul class="pricing-list">
    <li class="${pricing[3]?.service1.active ? 'ckeck' : 'uncheck'} ">${pricing[3]?.service1.serv}</li>
    <li class="${pricing[3]?.service2.active ? 'ckeck' : 'uncheck'} ">${pricing[3]?.service2.serv}</li>
    <li class="${pricing[3]?.service3.active ? 'ckeck' : 'uncheck'} ">${pricing[3]?.service3.serv}</li>
    <li class="${pricing[3]?.service4.active ? 'ckeck' : 'uncheck'} ">${pricing[3]?.service4.serv}</li>
    <li class="${pricing[3]?.service5.active ? 'ckeck' : 'uncheck'} ">${pricing[3]?.service5.serv}</li>
    </ul>
    <a href="contact.html" class="main-btn arrow-btn">Choose Plan</a>
    </div>
    </div>
    `

    standersPnalM.innerHTML = `
    <div class="pricing-item pricing-item-one mb-40 wow fadeInUp">
    <div class="ribbon">Popular</div>
    <div class="pricing-head text-center">
    <span class="plan">${pricing[4]?.name}</span>
    <h2 class="price"><span class="currency">$</span>${pricing[4]?.price}</h2>
    </div>
    <div class="pricing-body">
        <p>${pricing[4].desc}</p>
        <ul class="pricing-list">
        <li class="${pricing[4]?.service1.active ? 'ckeck' : 'uncheck'} ">${pricing[4]?.service1.serv}</li>
        <li class="${pricing[4]?.service2.active ? 'ckeck' : 'uncheck'} ">${pricing[4]?.service2.serv}</li>
        <li class="${pricing[4]?.service3.active ? 'ckeck' : 'uncheck'} ">${pricing[4]?.service3.serv}</li>
        <li class="${pricing[4]?.service4.active ? 'ckeck' : 'uncheck'} ">${pricing[4]?.service4.serv}</li>
        <li class="${pricing[4]?.service5.active ? 'ckeck' : 'uncheck'} ">${pricing[4]?.service5.serv}</li>
        </ul>
        <a href="contact.html" class="main-btn arrow-btn">Choose Plan</a>
    </div>
    </div>
    `
    // setting up inner html of silver plan 
    // setting up inner html of silver plan 

    silverPlanM.innerHTML = `
    <div class="pricing-item pricing-item-one mb-40 wow fadeInUp">
    <div class="pricing-head text-center">
        <span class="plan">${pricing[5]?.name}</span>
        <h2 class="price"><span class="currency">$</span>${pricing[5]?.price}</h2>
    </div>
    <div class="pricing-body">
    <p>${pricing[5].desc}</p>
        <ul class="pricing-list">
        <li class="${pricing[5]?.service1.active ? 'ckeck' : 'uncheck'} ">${pricing[5]?.service1.serv}</li>
        <li class="${pricing[5]?.service2.active ? 'ckeck' : 'uncheck'} ">${pricing[5]?.service2.serv}</li>
        <li class="${pricing[5]?.service3.active ? 'ckeck' : 'uncheck'} ">${pricing[5]?.service3.serv}</li>
        <li class="${pricing[5]?.service4.active ? 'ckeck' : 'uncheck'} ">${pricing[5]?.service4.serv}</li>
        <li class="${pricing[5]?.service5.active ? 'ckeck' : 'uncheck'} ">${pricing[5]?.service5.serv}</li>
        </ul>
        <a href="contact.html" class="main-btn arrow-btn">Choose Plan</a>
    </div>
    </div>
`

    // Start Web package 
    // Start Web package 

    basicPlanW.innerHTML = `
    <div class="pricing-item pricing-item-one mb-40 wow fadeInUp">
    <div class="pricing-head text-center">
    <span class="plan">${pricing[6]?.name}</span>
    <h2 class="price"><span class="currency">$</span>${pricing[6]?.price}</h2>
    </div>
    <div class="pricing-body">
    <p>${pricing[6].desc}</p>
    <ul class="pricing-list">
    <li class="${pricing[6]?.service1.active ? 'ckeck' : 'uncheck'} ">${pricing[6]?.service1.serv}</li>
    <li class="${pricing[6]?.service2.active ? 'ckeck' : 'uncheck'} ">${pricing[6]?.service2.serv}</li>
    <li class="${pricing[6]?.service3.active ? 'ckeck' : 'uncheck'} ">${pricing[6]?.service3.serv}</li>
    <li class="${pricing[6]?.service4.active ? 'ckeck' : 'uncheck'} ">${pricing[6]?.service4.serv}</li>
    <li class="${pricing[6]?.service5.active ? 'ckeck' : 'uncheck'} ">${pricing[6]?.service5.serv}</li>
    </ul>
    <a href="contact.html" class="main-btn arrow-btn">Choose Plan</a>
    </div>
    </div>
    `

    standersPnalW.innerHTML = `
    <div class="pricing-item pricing-item-one mb-40 wow fadeInUp">
    <div class="ribbon">Popular</div>
    <div class="pricing-head text-center">
    <span class="plan">${pricing[7]?.name}</span>
    <h2 class="price"><span class="currency">$</span>${pricing[7]?.price}</h2>
    </div>
    <div class="pricing-body">
        <p>${pricing[7].desc}</p>
        <ul class="pricing-list">
        <li class="${pricing[7]?.service1.active ? 'ckeck' : 'uncheck'} ">${pricing[7]?.service1.serv}</li>
        <li class="${pricing[7]?.service2.active ? 'ckeck' : 'uncheck'} ">${pricing[7]?.service2.serv}</li>
        <li class="${pricing[7]?.service3.active ? 'ckeck' : 'uncheck'} ">${pricing[7]?.service3.serv}</li>
        <li class="${pricing[7]?.service4.active ? 'ckeck' : 'uncheck'} ">${pricing[7]?.service4.serv}</li>
        <li class="${pricing[7]?.service5.active ? 'ckeck' : 'uncheck'} ">${pricing[7]?.service5.serv}</li>
        </ul>
        <a href="contact.html" class="main-btn arrow-btn">Choose Plan</a>
    </div>
    </div>
    `
    // setting up inner html of silver plan 
    // setting up inner html of silver plan 

    silverPlanW.innerHTML = `
    <div class="pricing-item pricing-item-one mb-40 wow fadeInUp">
    <div class="pricing-head text-center">
        <span class="plan">${pricing[8]?.name}</span>
        <h2 class="price"><span class="currency">$</span>${pricing[8]?.price}</h2>
    </div>
    <div class="pricing-body">
    <p>${pricing[8].desc}</p>
        <ul class="pricing-list">
        <li class="${pricing[8]?.service1.active ? 'ckeck' : 'uncheck'} ">${pricing[8]?.service1.serv}</li>
        <li class="${pricing[8]?.service2.active ? 'ckeck' : 'uncheck'} ">${pricing[8]?.service2.serv}</li>
        <li class="${pricing[8]?.service3.active ? 'ckeck' : 'uncheck'} ">${pricing[8]?.service3.serv}</li>
        <li class="${pricing[8]?.service4.active ? 'ckeck' : 'uncheck'} ">${pricing[8]?.service4.serv}</li>
        <li class="${pricing[8]?.service5.active ? 'ckeck' : 'uncheck'} ">${pricing[8]?.service5.serv}</li>
        </ul>
        <a href="contact.html" class="main-btn arrow-btn">Choose Plan</a>
    </div>
    </div>
`


}

const setTitles = (titles) => {
    titleMonthlyPlan.innerHTML = `
    <h2>${titles[0].title}</h2>
    <p>${titles[0].desc}</p>    
`
    titleLeadManagement.innerHTML = `
    <h2>${titles[1].title}</h2>
    <p>${titles[1].desc}</p>
`
    titleWebDevelopment.innerHTML = `
    <h2>${titles[2].title}</h2>
    <p>${titles[2].desc}</p>
`
    titleGenarel.innerHTML = `
    <h2>${titles[3].title}</h2>
    <p>${titles[3].desc}</p>
`
}
const GenarelPricing = document.getElementById("Genarel-pricing-container")

const setGenarelPricing = (pricing) => {
    pricing.pricing.map(p => (
        GenarelPricing.innerHTML +=
        `
        <div class=" genarel-price">
        <i class="fas fa-plus"></i>
        <p>${p.serv}</p>
        </div>
    `
    ))
}