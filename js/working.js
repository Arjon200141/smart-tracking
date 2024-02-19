//Scroll
function scrollToSection() {
    const targetSection = document.getElementById('ticket-booking');
    targetSection.scrollIntoView({ behavior: 'smooth' });
}


// Count seat numbers
const allBtn = document.getElementsByClassName('add-btn');
let count = 0;

    for (const btn of allBtn) {
        btn.addEventListener('click', function (e)
        
        {    
            if(count<4)
            {
                e.target.classList.add('bg-[#1DD100]');
                
             if(e.target.classList.contains('add-btn')) {
                const seatContainer = document.getElementById('seat-structure');
                seatContainer.classList.add('flex','flex-col')
    
                const seatDetails = document.createElement('div');
                seatDetails.classList.add( 'flex', 'flex-row' , 'justify-between');
    
                
                const seatNo = document.createElement('p');
                seatNo.classList.add('inline-block')
                seatNo.innerText = e.target.textContent;
    
                const seatType = document.createElement('p');
                seatType.classList.add('inline-block')
                seatType.innerText = 'Economy';
    
                const seatFare = document.createElement('p');
                seatFare.classList.add('inline-block')
                seatFare.innerText = '550';
    
                
                    seatDetails.appendChild(seatNo);
                    seatDetails.appendChild(seatType);
                    seatDetails.appendChild(seatFare);
    
                    seatContainer.appendChild(seatDetails);
               
    
                const totalCostElement = document.getElementById('total-cost');
                const totalCost = parseInt(totalCostElement.innerText);
                const seatValue = parseInt(seatFare.innerText);
                const total = totalCost + seatValue;
               
                setInnerText('total-cost', total);
                    count++;
                setInnerText('seat-count', count);
            }
        }
    });
}
        

// Seat Count
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}


// Seats Left
const leftSeats = document.getElementsByClassName('add-btn');
let seats = 40;

for (let seat of leftSeats) {
    seat.addEventListener('click' , function(element){
        if(seats>36)
        {
            seats = seats - 1;
        }
        setInnerText('seat-left' , seats);
    });
}


//Coupone-Input
const couponButton = document.getElementById('apply-coupon');
couponButton.addEventListener('click', function () {
    applyCoupon();
    grandTotal();
});

function applyCoupon() {
    const couponInput = document.getElementById('coupon-text').value.toUpperCase();
    const couponTextElement = document.getElementById('coupon-text');
    const couponCardElement = document.getElementById('coupon-card');
    if (couponInput === 'NEW15' || couponInput === 'COUPLE20') {
        couponTextElement.classList.add('hidden');
        couponCardElement.classList.add('hidden');
    } else {
        alert('Invalid Coupon');
    }
}

function grandTotal(e) {
    const totalCostElement = document.getElementById('total-cost');
    const grandTotalValue = document.getElementById('grand-cost');
    const couponInput = document.getElementById('coupon-text').value.toUpperCase();

    let total = parseFloat(totalCostElement.innerText);

    if (couponInput === 'NEW15') 
    {
        total -= total * 0.15;
    } 
    else if (couponInput === 'COUPLE20') 
    {
        total -= total * 0.20;
    }
    else
    {
        total = total
    }

    grandTotalValue.innerText = total.toFixed(2);
}


// Hide element
function hideElementbyId(elementID){
    const element = document.getElementById(elementID);
    element.classList.add('hidden');
}

// Show Element
function showElementbyId(elementID){
    const element = document.getElementById(elementID);
    element.classList.remove('hidden');
}

// Enter the site
function enterSite(){
    hideElementbyId('ticket-booking');
    hideElementbyId('home-page');
    hideElementbyId('footer-design');
    showElementbyId('successful-section');
}

//Successful
function again()
{
    hideElementbyId('successful-section');
    showElementbyId('ticket-booking');
    showElementbyId('home-page');
    showElementbyId('footer-design');

    setInnerText('total-cost', 0)
    setInnerText('seat-count', 0)
    setInnerText('total-cost', 0)
    setInnerText('grand-cost', 0)
    setInnerText('seat-left' , 40)
    

}



