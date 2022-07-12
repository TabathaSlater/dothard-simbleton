import { businessList } from "./database.js";

/**
 BusinessList component function

 responsibility: use .forEach() array method to list all of the companies so that Doris can easily browse a list of customers.

 1- build function that uses forEach to generate an HTML representation of each business (see example for structure).
 2- invoke the function in the correct place in main.js to view results on the DOM

 Parameters: none

 returns: html string of entire business list
 */

export const listOfBusiness = () => {
    const businessArray = businessList()
    let businessHTML = "<h1>Active Businesses</h1>"

    // iterate businessArray
    businessArray.forEach(

        // forEach will invoke the function supplied below on each iteration
        (businessObject) => {
            businessHTML +=    `
              <section class='business'>
                <h2 class='business__name'>${businessObject.companyName}</h2>
                    <div class='business__street'>${businessObject.addressFullStreet}</div>
                    <div class'business_state'>${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</div>
             </section> 
        `
        }
    )

    return businessHTML
}