console.log("CONNECTED");

const pageHeadingEL = document.getElementById("page-heading");
pageHeadingEL.innerText = "JS Concepts";

// variable-section
const variableHeadingEl = document.getElementById("variables-heading");
variableHeadingEl.innerHTML = "<b>Variables</b>";

const variableParaEl = document.getElementById("variable-para");
variableParaEl.innerText =
  "A variable is a container for a value. One special thing about variables is that they can contain just about anything — not just strings and numbers. Variables can also contain complex data and even entire functions to do amazing things.";

//declaring-a-variable
const variableDeclaringEl = document.getElementById("variable-declaring");
variableDeclaringEl.innerText = "Declaring a Variable";

const declaringParaEl = document.getElementById("declaring-para");
declaringParaEl.innerHTML =
  "To use a variable, we must first declare it. By declaring a variable, we reserve its space in computer's memory. We can declare variables in javascript using <b>let</b>, <b>const</b> and <b>var</b> keywords. We can use <b>let</b> and <b>var</b> keywords for values that can change in future, but we must always use <b>const</b> for values that do not change in future, as we cannot reassign const variable values. To declare variable we type keyword name followed by the name you want to call the variable:<br> <br> <code>let myName;</code> <br> <br> <code>const myName;</code> <br> <br> <code>var myName;</code> <br> <br> Here we declared a variable named <code>myName</code> with three different keywords.";

//initialize-a-variable
const variableInitializeEl = document.getElementById("variable-initialize");
variableInitializeEl.innerText = "Initializing a variable";

const initializeParaEl = document.getElementById("initialize-para");
initializeParaEl.innerHTML =
  "Once we have declare a variable, we must now initialize it. We can do this by typing the variable name, followed by an equals sign (=), followed by the value you want to give it <br> <br> <code>myName = &#34;Sabin&#34; </code> <br> <br> We can also declare and initialize a variable at same time <br> <br> <code> let myName = &#34;Sabin&#34; <br>";

//update-a-variable
const variableUpdateEl = document.getElementById("variable-updating");
variableUpdateEl.innerText = "Updating a variable";

const updatingParaEl = document.getElementById("updating-para");
updatingParaEl.innerHTML =
  "We can update value assigned to variable created using <b>let</b> and <b>var</b> keywords. <br> <br> <code>myName = &#34;Engineer&#34;</code>";

//naming-variable
const variableNamingEl = document.getElementById("variable-naming");
variableNamingEl.innerText = "Naming Variables";

const namingParaEl = document.getElementById("naming-para");
namingParaEl.innerHTML =
  "<ul><li>A variable must be name with (0-9, a-z, A-Z) and the underscore characters only.</li> <li>We should not use reserved words as variables such as <code>var, function, let</code>.</li> <li>Variable name should be meaningful, no one letter variable</li> <li>Variable names are case sensitive</li></ul> ";
