basicPlanW.innerHTML = `
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