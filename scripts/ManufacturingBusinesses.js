import { businessList } from "./database.js";
 let manufactures = businessList();

 // Build a function that uses .filter to generate a list of companies in the industry of Manufacturing and invoke in main.js

 // 1 create a function to-
//  responsibility: check array for business that match companyIndustry === Manufacturing and return a true value if so.
 // Parameters: single company object
 // Returns: boolean. True if matches manufacturing conditional, otherwise false.

 const manufacturing = (companyObject) => {
    if (companyObject.companyIndustry === 'Manufacturing') {
        return true
    }
return false
 };

 // use .filter on the array with the previous function as a callback function. 
// responsibility: filter array and create new array containing companies in manufacturing.
// parameters: none
// returns: array of manufacturing companies

export const manufacturingCompanies = () => {
    const filteredItems = manufactures.filter(manufacturing)
    return filteredItems
};

// map through the array and create a function to return and export HTML

const businessArray = manufacturingCompanies();

export const mfCompanies = () => {
    
    let businessHTML = ""
    // iterate Array
    businessArray.forEach(

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