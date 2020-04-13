const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

let yourDay;
let yourMonth;
for (let i = 0; i < 1; i++) {
    yourDay = prompt('DAY OF YOUR BIRTH', '17');
    yourMonth = prompt(`
                                              MONTH OF YOUR BIRTH 
                                                  please choose one:

                             1.January, 2.February, 3.March, 4.April, 5.May, 
    6.June, 7.July, 8.August, 9.September,10.October, 11.November, 12.December,
    `,
                        'August');
    if (yourDay != null && yourDay != '' && yourMonth != null && yourMonth != '') {
    } else i--;
}

const currentYear = new Date().getFullYear();

const BirthdayTime = new Date(`${currentYear} ${yourMonth} ${yourDay}  00:00:00`);
const nextYearBirthdayTime = new Date(`${currentYear + 1} ${yourMonth} ${yourDay}  00:00:00`);

// Update countdown time
function updateCountdown() {
    const currentTime = new Date();
    const A = BirthdayTime - currentTime;
    const B = currentTime - nextYearBirthdayTime;
    const diff = BirthdayTime > currentTime ? A : -B;
    
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    // Add values to DOM
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

// Show spinner before countdown
setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
}, 1000);

// Run every second
setInterval(updateCountdown, 1000);