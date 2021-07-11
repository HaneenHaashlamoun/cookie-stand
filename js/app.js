'use strict';
let hours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', '8pm '];
let TotalCookies = 0;
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Seattle
let Seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avgCookie: 6.3,
    cust: 0,    
    cookiesArr: [0],
    getCust: function () {
        return this.cust = random(23, 65);
    },

    render: function () {
        let secElement = document.getElementById('parentDiv');
        let paraElement = document.createElement('p');
        secElement.appendChild(paraElement);
        paraElement.textContent = this.name;
        let unordElement = document.createElement('ul');
        secElement.appendChild(unordElement);
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            this.cookiesArr[i] = this.getCust();
            let totAvCok = Math.round(this.avgCookie * this.cookiesArr[i]);
            unordElement.appendChild(liElement);
            liElement.textContent = `${hours[i]}` + totAvCok + ' Cookies';
            TotalCookies += totAvCok;
            if (i === 14) {
                let liElement = document.createElement('li');
                unordElement.appendChild(liElement);
                liElement.textContent = 'Total: ' + TotalCookies + ' Cookies';
            }
        }
    },
};
Seattle.render();

//Tokyo
let Tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 4,
    avgCookie: 1.2,
    cust: 0,    
    cookiesArr: [0],
    getCust: function () {
        return this.cust = random(3, 4);

    },

    render: function () {
        let secElement = document.getElementById('parentDiv');
        let paraElement = document.createElement('p');
        secElement.appendChild(paraElement);
        paraElement.textContent = this.name;
        let unordElement = document.createElement('ul');
        secElement.appendChild(unordElement);
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            this.cookiesArr[i] = this.getCust();
            let totAvCok = Math.round(this.avgCookie * this.cookiesArr[i]);
            unordElement.appendChild(liElement);
            liElement.textContent = `${hours[i]}` + totAvCok + ' Cookies';
            TotalCookies += totAvCok;
            if (i === 14) {
                let liElement = document.createElement('li');
                unordElement.appendChild(liElement);
                liElement.textContent = 'Total: ' + TotalCookies + ' Cookies';
            }
        }
    },
};
Tokyo.render();

//Dubai
let Dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avgCookie: 3.7,
    cust: 0,    
    cookiesArr: [0],
    getCust: function () {
        return this.cust = random(11, 38);

    },

    render: function () {
        let secElement = document.getElementById('parentDiv');
        let paraElement = document.createElement('p');
        secElement.appendChild(paraElement);
        paraElement.textContent = this.name;
        let unordElement = document.createElement('ul');
        secElement.appendChild(unordElement);
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            this.cookiesArr[i] = this.getCust();
            let totAvCok = Math.round(this.avgCookie * this.cookiesArr[i]);
            unordElement.appendChild(liElement);
            liElement.textContent = `${hours[i]}` + totAvCok + ' Cookies';
            TotalCookies += totAvCok;
            if (i === 14) {
                let liElement = document.createElement('li');
                unordElement.appendChild(liElement);
                liElement.textContent = 'Total: ' + TotalCookies + ' Cookies';
            }
        }
    },
};
Dubai.render();

//Paris
let Paris = {
    name: 'Paris',
    min: 20,
    max: 38,
    avgCookie: 3.7,
    cust: 0,    
    cookiesArr: [0],
    getCust: function () {
        return this.cust = random(20, 38);

    },

    render: function () {
        let secElement = document.getElementById('parentDiv');
        let paraElement = document.createElement('p');
        secElement.appendChild(paraElement);
        paraElement.textContent = this.name;
        let unordElement = document.createElement('ul');
        secElement.appendChild(unordElement);
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            this.cookiesArr[i] = this.getCust();
            let totAvCok = Math.round(this.avgCookie * this.cookiesArr[i]);
            unordElement.appendChild(liElement);
            liElement.textContent = `${hours[i]}` + totAvCok + ' Cookies';
            TotalCookies += totAvCok;
            if (i === 14) {
                let liElement = document.createElement('li');
                unordElement.appendChild(liElement);
                liElement.textContent = 'Total: ' + TotalCookies + ' Cookies';
            }
        }
    },
};
Paris.render();

//Lima
let Lima = {
    name: 'Lima',
    min: 2,
    max: 16,
    avgCookie: 3.7,
    cust: 0,    
    cookiesArr: [0],
    getCust: function () {
        return this.cust = random(2, 16);

    },

    render: function () {
        let secElement = document.getElementById('parentDiv');
        let paraElement = document.createElement('p');
        secElement.appendChild(paraElement);
        paraElement.textContent = this.name;
        let unordElement = document.createElement('ul');
        secElement.appendChild(unordElement);
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            this.cookiesArr[i] = this.getCust();
            let totAvCok = Math.round(this.avgCookie * this.cookiesArr[i]);
            unordElement.appendChild(liElement);
            liElement.textContent = `${hours[i]}` + totAvCok + ' Cookies';
            TotalCookies += totAvCok;
            if (i === 14) {
                let liElement = document.createElement('li');
                unordElement.appendChild(liElement);
                liElement.textContent = 'Total: ' + TotalCookies + ' Cookies';
            }
        }
    },
};
Lima.render();
