

class HandleMenu {
    constructor() {
        console.log('handle menu')
        this.handleMenu()
    }
    handleMenu = () => {
        //Please use the classes ids and attributes in the nav to construct a way to show and hide the dropdowns on click of the parent.
        //e.g. clicking parent 1 should display child-1

        //select all the menu buttons
        let menuBtns = document.querySelectorAll('.menu-item');
        let menuLen = menuBtns.length;
 
        //iterate over each button and its child and add a click event
        for (let i = 1; i <= menuLen; i++) {

            let btn = document.querySelector('[data-menu="' + i + '"]');
            let childMenu = document.querySelector('#child-' + i);

            //on click, hide or unhide the dropdown
            //note: there was no requirement to hide the dropdowns on clicking outside of the menu buttons
            btn.addEventListener("click", function(){ 
                childMenu.classList.toggle("hide");
            });
        }
       
        
    }
}

class DataProcessing  {

    constructor(data) {
        this.data = data
        this.processData();
    }

    //Please process the data provided to fill in the information below
    processData = () => {
        let bestEmployees = []
        let boss = ''
        let clearanceLevel = [];

        for(let x of this.data) {
            if (x.boss) {
                boss = x.name;
            }

            //assuming rating equals 1-5 with 1 being best and 5 worst
            //and 'best' employees are those less than half of 5
            if(x.rating < 2.5) {
                bestEmployees.push(x.name);
            }

            if(x.clearanceLevel === 1) {
                clearanceLevel.push(x.name);
            }
        }

        console.log(`The employees are:`, this.data)
        console.log(`the boss is: ${boss}`)
        console.log('The best rated employees are:', bestEmployees)
        console.log('The employees with clearance level 1 are:', clearanceLevel)
    }

}

const Init = () => {
    new HandleMenu();
    new DataProcessing(data);
}

const data = [
    {
        "name": "John",
        "clearanceLevel": 1,
        "rating": 2,
        "boss": false
    },
    {
        "name": "Amy",
        "clearanceLevel": 2,
        "rating": 2.4,
        "boss": false
    },
    {
        "name": "Sarah",
        "clearanceLevel": 2,
        "rating": 1.3,
        "boss": true
    },
    {
        "name": "Luke",
        "clearanceLevel": 2,
        "rating": 3.5,
        "boss": false
    },
    {
        "name": "Juliet",
        "clearanceLevel": 1,
        "rating": 4.2,
        "boss": false
    },
    {
        "name": "Daniel",
        "clearanceLevel": 2,
        "rating": 3.8,
        "boss": false
    },
    {
        "name": "Tom",
        "clearanceLevel": 1,
        "rating": 4.1,
        "boss": false
    },
    {
        "name": "Katie",
        "clearanceLevel": 2,
        "rating": 4.2,
        "boss": false
    },
    {
        "name": "Lucy",
        "clearanceLevel": 1,
        "rating": 4.1,
        "boss": false
    }
]

window.onload = Init
