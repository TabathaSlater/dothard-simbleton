import { businessList } from "./database.js";

const copyBusinessList = businessList();

// Build a function that uses .filter to generate a list of companies in NY

// 1- Function responsibility: determine if a company is located in NY.
// 2- Parameters: company object
// 3- Returns: boolean. true is an object having the addressStateCode === NY, otherwise false

const inNY = (company) => {
    if (company.addressStateCode === 'NY') {
        return true
    }
    return false
};

// Create and return a new array that contains companies located in NY. Export this function.
// 1- function responsibility: Create and return array that has ny states
// 2- Parameters: none
// 3- Returns: array

export const nyCompany = () => {
    const filteredItems = copyBusinessList.filter(inNY)
    return filteredItems
};

const nyArray = nyCompany();

export const nyCompanies = () => {
    
    let businessHTML = ""
    // iterate Array
    nyArray.forEach(

        // forEach will invoke the function supplied below on each iteration
        (businessObject) => {
            businessHTML +=    `
              <section class='manufacturing'>
                <h2 class='manufacturing__name'>${businessObject.companyName}</h2>
                    <div class='manufacturing__street'>${businessObject.addressFullStreet}</div>
                    <div class'manufacturing_state'>${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</div>
             </section> 
        `
        }
    )
    return businessHTML
    }