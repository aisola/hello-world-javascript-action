const core = require("@actions/code");
const github = require("@actions/github");

try {
    // Print our hello world greeting
    const name = core.getInput("who-to-greet");
    console.log(`Hello, ${name}!`);
    
    // Output the time that we greeted
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    
    // Print the JSON webhook payload which triggered the workflow.
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);
} catch (error) {
    core.setFailed(error.message);
}
