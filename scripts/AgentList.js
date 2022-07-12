import { businessList } from "./database.js";
const originalArray = businessList();

// build a function named AgentList that uses .map to generate HTML representation of each purchasing agent. Display agent name, company, and phone number.
// use .join("") to concatenate all strings together into a single string.
// invoke function in main.js


// function responsibility: generate an array of purchasing agents and their info
//Parameters: none
//Returns: array containing only strings.




export const purchaseAgents = () => {
    //generate new array based on original with .map()
    const agents = originalArray.map(
        //callback function to handle each object
        (a => { return `<section class='agent'><h2>${a.purchasingAgent.nameFirst} ${a.purchasingAgent.nameLast}</h2> 
                <div>${a.companyName}</div>
                <div>${a.phoneWork}
                </section>`
    })
    )
    const finalHTML = agents.join("")
    return finalHTML
};