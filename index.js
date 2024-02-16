let titleCount = 1;
let totalPrice = 0;

const cards = document.getElementsByClassName('card')
for (const card of cards) {

    card.addEventListener('click', function () {
        const title = card.querySelector('h3').innerText
        // console.log(title.innerText)
        const price = parseFloat( card.querySelector('span').innerText.slice(2))
        
        // console.log(price)
        const titleContainer = document.getElementById('title-container')
        // console.log(titleContainer)
        const p = document.createElement('p')
         p.innerText = titleCount +'. '+ title;
         titleContainer.appendChild(p)
         titleCount++


         totalPrice+= price;
         document.getElementById('totalPrice').innerText = totalPrice.toFixed(2)

        
        console.log(totalPrice)
    })
}


const btn = document.getElementById('apply-btn')
btn.addEventListener('click',function(){

    const couponElement = document.getElementById('input-field').value;
    const couponCode = couponElement.split(' ').join('').toUpperCase()
    console.log(couponCode)
    if(totalPrice >= 200 ){
        if(couponCode === "SELL200" ){
            discountPrice = totalPrice * 20/100
            document.getElementById('discountPrice').innerText=discountPrice
            total = totalPrice - discountPrice;
            document.getElementById('total').innerText = total
            console.log(total)
            // couponElement = "";
            document.getElementById('input-field').value = ""
        }
        else{
            alert('hoy nai coupon')
            document.getElementById('input-field').value = ""
        }
    }
    else{
        alert('200 hoy nai')
        document.getElementById('input-field').value = ""
    }
    
})



