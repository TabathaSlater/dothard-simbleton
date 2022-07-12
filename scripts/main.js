const contentTarget = document.querySelector("#content")

// imports
import { listOfBusiness } from "./BusinessList.js"
import { nyCompanies } from "./NewYorkBusinesses.js"
import { mfCompanies } from "./ManufacturingBusinesses.js"
import { purchaseAgents } from "./AgentList.js"

const renderHTML = () => {
  contentTarget.innerHTML = `
  <input type="text" placeholder="Enter business name..." id="companySearch" />

  <article class="foundBusinesses"></article>

  <article class="businesses">
      <h2>All Businesses</h2>
      ${listOfBusiness()}
  </article>

  <article class="businesses--manufacturing">
      <h2>Manufacturing Businesses</h2>
      ${mfCompanies()}
  </article>

  <article class="businesses--newYork">
      <h2>New York Businesses</h2>
      ${nyCompanies()}
  </article>
  
  <article class="agents">
        <h2>Purchasing Agents</h2>
        ${purchaseAgents()}
  </article>
  `
}

renderHTML()