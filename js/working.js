// Scroll
function scrollToSection() {
    const targetSection = document.getElementById('ticket-booking');
    targetSection.scrollIntoView({ behavior: 'smooth' });
}

// Count seat numbers
const allBtn = document.getElementsByClassName('add-btn');
let count = 0;
let finaltotal = 0;
let grandTotalValue = 0; // Added a variable to store the grand total

for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        if (count < 4) {
            if (!e.target.classList.contains('bg-[#1DD100]')) {
                e.target.classList.add('bg-[#1DD100]');

                const seatContainer = document.getElementById('seat-structure');
                seatContainer.classList.add('flex', 'flex-col');

                const seatDetails = document.createElement('div');
                seatDetails.classList.add('flex', 'flex-row', 'justify-between');

                const seatNo = document.createElement('p');
                seatNo.classList.add('inline-block');
                seatNo.innerText = e.target.textContent;

                const seatType = document.createElement('p');
                seatType.classList.add('inline-block');
                seatType.innerText = 'Economy';

                const seatFare = document.createElement('p');
                seatFare.classList.add('inline-block');
                seatFare.innerText = '550';

                seatDetails.appendChild(seatNo);
                seatDetails.appendChild(seatType);
                seatDetails.appendChild(seatFare);

                seatContainer.appendChild(seatDetails);

                const totalCostElement = document.getElementById('total-cost');
                const totalCost = parseFloat(totalCostElement.innerText);
                const seatValue = parseFloat(seatFare.innerText);
                const total = totalCost + seatValue;
                finaltotal = total;

                grandTotal(); // Call grandTotal without arguments
                setInnerText('total-cost', total);
                count++;
                setInnerText('seat-count', count);

                // Enable the apply coupon button if 4 seats are selected
                if (count === 4) {
                    document.getElementById('apply-coupon').disabled = false;
                }
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
    seat.addEventListener('click', function () {
        if (seats > 36) {
            seats = seats - 1;
        } else {
            alert('You can not buy more than 4 tickets');
        }
        setInnerText('seat-left', seats);

        // Disable
        const applyCouponButton = document.getElementById('apply-coupon');
        applyCouponButton.disabled = count < 4;
    });
}

// Coupon Input
const couponButton = document.getElementById('apply-coupon');
couponButton.addEventListener('click', function () {
    grandTotal();
    applyCoupon();
});

function applyCoupon() {
    const couponInput = document.getElementById('coupon-text').value.toUpperCase();
    const couponTextElement = document.getElementById('coupon-text');
    const couponCardElement = document.getElementById('coupon-card');
    const applyCouponButton = document.getElementById('apply-coupon');

    if (couponInput === 'NEW15' || couponInput === 'COUPLE20') {
        couponTextElement.classList.add('hidden');
        couponCardElement.classList.add('hidden');
        applyCouponButton.disabled = true;
    } else {
        alert('Invalid Coupon');
    }
}

// Grand Total
function grandTotal() {
    const totalCostElement = document.getElementById('total-cost');
    grandTotalValue = parseFloat(totalCostElement.innerText); // Update grandTotalValue

    const couponInput = document.getElementById('coupon-text').value.toUpperCase();

    if (couponInput === 'NEW15') {
        grandTotalValue -= grandTotalValue * 0.15;
    } else if (couponInput === 'COUPLE20') {
        grandTotalValue -= grandTotalValue * 0.20;
    } else {
        grandTotalValue = finaltotal;
    }

    const grandTotalElement = document.getElementById('grand-cost');
    grandTotalElement.innerText = grandTotalValue.toFixed(2);
}

// Hide element
function hideElementbyId(elementID) {
    const element = document.getElementById(elementID);
    element.classList.add('hidden');
}

// Show Element
function showElementbyId(elementID) {
    const element = document.getElementById(elementID);
    element.classList.remove('hidden');
}

// Enter the site
function enterSite() {
    hideElementbyId('ticket-booking');
    hideElementbyId('home-page');
    hideElementbyId('footer-design');
    showElementbyId('successful-section');
}

// Again start
function again() {
    setInnerText('seat-count', 0);
    setInnerText('total-cost', 0);
    setInnerText('seat-left', 40);
    const seatButtons = document.getElementsByClassName('add-btn');
    for (const btn of seatButtons) {
        btn.classList.remove('bg-[#1DD100]');
    }
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('apply-coupon').disabled = true;

    showElementbyId('ticket-booking');
    showElementbyId('home-page');
    showElementbyId('footer-design');
    hideElementbyId('successful-section');
}
