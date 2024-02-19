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
    hideElementbyId('home-page');
    showElementbyId('ticket-booking');
}

// Count seat numbers
// Count seat numbers
const allBtn = document.getElementsByClassName('add-btn');
let count = 0;

for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        
        if (e.target.classList.contains('add-btn')) {
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
        
    });
}

// Set Count
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}


// Set Count
function setInnerText(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.innerText = value;
    }
}



// Seats Left
const leftSeats = document.getElementsByClassName('add-btn');
let seats = 40;

for (let seat of leftSeats) {
    seat.addEventListener('click' , function(element){
        seats = seats - 1;
        setInnerText('seat-left' , seats);
    });
}

// Set Count
function setInnerText(id , value){
    document.getElementById(id).innerText = value;
}

//Coupone-Input
const couponButton = document.getElementById()
