import data from './data.js'

//Please process the data provided to fill in the information bellow

export default class DataProcessing {
    constructor() {
        this.ProcessData()
    }

    ProcessData = () => {
        let bestEmployees = []
        let boss = ''
        let clearanceLevel = [];

        console.log(`The employees are:`, data)
        console.log(`the boss is: ${boss}`)
        console.log('The best rated employees are:', bestEmployees)
        console.log('The employees with clearance level 1 are:', clearanceLevel)
    }
}