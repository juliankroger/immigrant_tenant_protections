// All policy data stored in one object
const policies = {
    era: {
        title: "Emergency Rental Assistance",
        fact: "Emergency rental assistance (ERA) helps households that are struggling financially by paying a portion of their housing costs. With the increase of ICE activity in many communities across the U.S., many tenants have struggled to pay rent, with a fear to return to workplaces being targeted by ICE being one reason. Los Angeles County has already implemented an ERA program with two phases of funding for those impacted by this increase in federal activity. Other communities, such as Minneapolis, have sought to provide similar services by raising funds themselves where delays or insufficient funding have limited the impacts of municipal and state governments."
    },
    moratorium: {
        title: "Eviction Moratorium",
        fact: "Eviction moratoriums target displacement directly by temporarily pausing eviction cases, sometimes focusing solely on cases with special circumstances. Emergency moratoriums have been implemented in the recent past to ensure that households struggling to make it to work would not also lose their homes, most famously during the Covid-19 pandemic. LA County Executives and the city councils of Minneapolis and St. Paul have been actively seeking ways to implement a moratorium over the past few months."
    },
    virtual_hearings: {
        title: "Virtual Court Hearings",
        fact: "Virtual court hearings are those that take place by video call (e.g., Zoom, Webex) rather than in-person at a courthouse. Following a change to ICE's internal policy allowing agents to detain people at 'sensitive locations' like courthouses, advocates have been pushing courts to adopt measures allowing immigrants to appear at hearings virtually in order to avoid dangerous and unnecessary confrontations with DHS. These should be applied not soley to hearings regarding individuals' immigration status, but also to eviction and other civil hearings. A group of organizations in Minnesota sent a letter to teh Chief Justice of the MN Supreme Court in March 2025 requesting the adoption of such, but were unfortunately denied."
    }
};

function showInfo(policyKey) {
    // Look up the policy data
    const policy = policies[policyKey];

    // Put the data into the info panel
    document.getElementById('info_title').textContent = policy.title;
    document.getElementById('info_fact').textContent = policy.fact;

    // Make the info panel visible
    document.getElementById('info_panel').style.display = 'block';

    // Remove the 'selected' class from all policies
    const allPolicies = document.querySelectorAll('.policy');
    allPolicies.forEach(function (el) {
        el.classList.remove('selected');
    });

    // Add 'selected' to the clicked policy
    event.currentTarget.classList.add('selected');

}


// scratch in class
let num1 = 5
let num2 = 50

let string1 = "Julian "
let string2 = "Mura-Kröger"

console.log(num1 + num2)
// console.log: like just using the console in R; won't show up on the actual site, but instead just in inspect -> console

console.log(string1 + string2)

console.log(`The instructor's name is ${string1} and he is ${num1} years old`)
// backticks ` allow you to do this ^

// Creating an object
const user = {
    name: "Julian",
    age: 22,
    active: true
}

console.log(user.name)
console.log(`The instructor's name is ${user.name} and he is ${num1} years old`)

const arrayofNames = ["Julian", "Mesut", "Arsène"];

console.log(arrayofNames[1])

arrayofNames.forEach(function (name) {
    console.log("I am in the loop");
    console.log(name);
    //    const div = document.createElement('div');
    //    div.textContent = name;
    //    document.body.appendChild(div);
});