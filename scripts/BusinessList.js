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
};
//_____________________________________________________

/*
    Responsibility:
        Add event listener. Find the object that matches the search query string

    Parameters:
        (search string) - The string of item being searched for

    Returns:
        (object) - The first matching object
*/

document
    .querySelector("#content")
        .addEventListener(
            "keypress",
            (keyPressEvent) => {
                const companySearchResultArticle = document.querySelector(".foundBusinesses")

                if (keyPressEvent.charCode === 13) {
                    /*
                        When the user presses 'Enter', find the matching business.


                        You can use the `.includes()` string method to
                        see if a smaller string is part of a larger string.

                        Example:
                            if (business.companyName.includes(keyPressEvent.target.value)) {

                            }
                    */
                   let businessArray = businessList();

                    const foundBusiness = businessArray.find(
                        // Your callback function goes here
                        (object) => {
                            if (object.companyName.toLowerCase().includes(keyPressEvent.target.value.toLowerCase()))
                            return object
                            
                        }
                    )

                    companySearchResultArticle.innerHTML = ` <section class='business'>
                    <h2 class='business__name'>${foundBusiness.companyName}</h2>
                        <div class='business__street'>${foundBusiness.addressFullStreet}</div>
                        <div class'business_state'>${foundBusiness.addressCity}, ${foundBusiness.addressStateCode} ${foundBusiness.addressZipCode}</div>
                 </section> `
                }
        });

//______________________________________________________

document
    .querySelector("#content")
        .addEventListener(
            "keypress",
            (keyPressEvent) => {
                const companySearchResultArticle = document.querySelector(".foundBusinesses")

                if (keyPressEvent.charCode === 13) {
                    /*
                        When the user presses 'Enter', find the matching agent.


                        You can use the `.includes()` string method to
                        see if a smaller string is part of a larger string.

                        Example:
                            if (object.purhcasingAgent.(property).includes(keyPressEvent.target.value)) {

                            }
                    */
                   let businessArray = businessList();

                    const foundAgent = businessArray.find(
                        // Your callback function goes here
                        (object) => {
                            if (object.purchasingAgent.nameFirst.toLowerCase().includes(keyPressEvent.target.value.toLowerCase()) || object.purchasingAgent.nameLast.toLowerCase().includes(keyPressEvent.target.value.toLowerCase()))
                            return object
                            
                        }
                    )

                    companySearchResultArticle.innerHTML = `<section class='agent'><h2>${foundAgent.purchasingAgent.nameFirst} ${foundAgent.purchasingAgent.nameLast}</h2> 
                    <div>${foundAgent.companyName}</div>
                    <div>${foundAgent.phoneWork}
                    </section>`
                }
        });