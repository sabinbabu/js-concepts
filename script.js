console.log("CONNECTED");

const pageHeadingEL = document.getElementById("page-heading");
pageHeadingEL.innerText = "JS Concepts";

// **********variable-section
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

//*************operator section
const operatorHeadingEl = document.getElementById("operator-heading");
operatorHeadingEl.innerHTML = "<b>Operators</b>";

const operatorParaEl = document.getElementById("operator-para");
operatorParaEl.innerHTML =
  "Operators in javascript join two or more operands in an expression. They also help in taking logical decisions. For example. <br> <br> <code> const x = 1 + 1 </code> <br> <br> This is an expression, here, <code>= and +</code> are operators that perform their roles in an expression, whereas, <code>1's</code> are operands. JavaScript has both binary (x+y) and unary operators (x++), and one special ternary operator(x>y)?x:y, the conditional operator. Types of operators are :";

//arithmetic-operator
const arithmeticOperatorEl = document.getElementById("arithmetic-operator");
arithmeticOperatorEl.innerText = "Arithmetic Operator";

const assignmentOperatorParaEl = document.getElementById(
  "arithmetic-operator-para"
);
assignmentOperatorParaEl.innerHTML =
  "Arithmetic operators perform arithmetic on numbers (literals or variables). Different kinds of arithmetic operators are : <br><br> <code> <b>Addition (+)</b> &rarr; let sum = 1+2 &rarr; sum = 3 <br><b> Subtraction (-)</b> &rarr; let sub = 2-1 &rarr; sub = 1 <br> <b>Multiplication (*)</b>  &rarr; let mul = 1*2 &rarr; mul = 2 <br> <b>Exponentiation (**)</b>  &rarr; let expo = 2**3 &rarr; expo = 8 <br> <b>Division (/) </b> &rarr; let div = 4/2 &rarr; div = 2 <br> <b>Modulus (%)</b>  &rarr; let mod = 4/2 &rarr; mod = 0 <br> <b>Increment (++) </b> &rarr; let increment = 1  &rarr; increment++ &rarr; increment = 2 <br> <b>Decrement (--) </b>&rarr; let decrement = 2  &rarr; decrement++ &rarr; decrement = 1</code>";

//comparison-operator
const comparisonOperatorEl = document.getElementById("comparison-operator");
comparisonOperatorEl.innerText = "Comparison Operator";

const comparisonOperatorParaEl = document.getElementById(
  "comparison-operator-para"
);
comparisonOperatorParaEl.innerHTML =
  "A comparison operator compares its operands and returns a logical value based on whether the comparison is true or false.  Different types of comparison operator are: <br> <br> <code><b> Equal to (==) </b>&rarr; 5 == 4 &rarr; result : false <br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &rarr; 5 == 5 &rarr; result : true <br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &rarr; 5 == &#34 5 &#34 &rarr; result : true <br><br> <b>Equal value and equal type( === )</b> &rarr; 5 === 5 &rarr; result: true <br> &emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &rarr; 5 === &#34 5 &#34 &rarr; result : false <br><br> <b>Not equal (!=)</b> &rarr; 5 !=8 &rarr; result : true  <br><br> <b>Greater than (>) </b> &rarr; 5 > 8 &rarr; result: false <br><br> <b>Less than (<) </b> &rarr; 5 < 8 &rarr; result: true <br><br> <b>Greater than equal to (>=) </b> &rarr; 5 >= 8 &rarr; result: false <br><br> <b>Less than equal to (<=) </b> &rarr; 8 <= 8 &rarr; result: true</code>";

//Logical operator
const logicalOperatorEl = document.getElementById("logical-operator");
logicalOperatorEl.innerText = "Logical Operator";

const logicalOperatorParaEl = document.getElementById("logical-operator-para");
logicalOperatorParaEl.innerHTML =
  "Logical operators are usually used with Boolean values ( true or false), and return a boolean value. Most commonly used logical operators are: <br><br> <b>Logical AND (&&) </b> &rarr; Returns true only when both expressions are true, else false <br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &rarr;<code> (6 < 10 && 3 > 1) is true </code><br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &rarr; <code>(Cat && Dog); returns Dog </code><br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &rarr; <code>(false && Dog); returns false </code> <br><br> <b>Logical OR (||) </b> &rarr; Returns true if at least one of expressions are true, else false <br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &rarr;<code> (15 < 10 || 3 > 1) is true</code> <br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &rarr; <code>(Cat || Dog); returns Cat </code><br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &rarr; <code>(false || Dog); returns Dog </code> <br><br>  <b>Logical NOT (!) </b> &rarr; Returns true when other expression is false, and vice-versa <br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &rarr;<code> !(true) is false</code> <br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &rarr; <code>!(false); returns true</code> <br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &rarr; <code>!(Dog); returns false</code>  ";

//***************data-types-section
const dataTypesEl = document.getElementById("data-types");
dataTypesEl.innerHTML = "<b>Data Types</b>";

const dataTypeParaEl = document.getElementById("data-types-para");
dataTypeParaEl.innerHTML =
  "Data types are the different types of data that we can use for storing in variables. Data types in javaScript can be categorized in two different types: <b>Primitive Data Type </b> and <b>Reference Data Type</b>";

//primitive data type
const primitiveDataTypeEl = document.getElementById("primitive-data-types");
primitiveDataTypeEl.innerText = "Primitive Data Type";

const primitiveDataTypeParaEl = document.getElementById(
  "primitive-data-types-para"
);
primitiveDataTypeParaEl.innerHTML =
  "In JavaScript, primitive data types represent the simplest and most basic building blocks of data. They are <b>immutable</b>, meaning they cannot be altered once they are created, we cannot redeclare them, but reassign value in them. Primitive types are stored directly in memory and have a fixed size. Different types of primitive data in JS are:";

// Number data type

const primitiveNumberEl = document.getElementById("primitive-number");
primitiveNumberEl.innerText = "Number";

const primitiveNumberParaEl = document.getElementById("number-para");
primitiveNumberParaEl.innerHTML =
  "Numbers represent numeric values, both integers and floating-point numbers. They are used for performing mathematical operations. <br> <code> let number = 10 </code>";

// String data type

const primitiveStringEl = document.getElementById("primitive-string");
primitiveStringEl.innerText = "String";

const primitiveStringParaEl = document.getElementById("string-para");
primitiveStringParaEl.innerHTML =
  "Strings represent text and are enclosed in either single (‘’) or double (“”) quotes. They are used for storing and manipulating textual data. <br> <code> let myName = &#34sabin&#34</code> ";

// Boolean data type

const primitiveBooleanEl = document.getElementById("primitive-boolean");
primitiveBooleanEl.innerText = "Boolean";

const primitiveBooleanParaEl = document.getElementById("boolean-para");
primitiveBooleanParaEl.innerHTML =
  "Booleans have only two possible values: <code> true </code> and <code> false </code>. They are used to represent logical values and are essential for making decisions in code. <br> <code> let isGood = true</code>";

// null data type

const primitiveNullEl = document.getElementById("primitive-null");
primitiveNullEl.innerText = "null";

const primitiveNullParaEl = document.getElementById("null-para");
primitiveNullParaEl.innerHTML =
  "<code>null</code> represents the intentional absence of any object value. It is often used when you want to indicate that a variable should have no value or that an object property is intentionally empty. <br> <code> let value = null </code>";

// undefined data type

const primitiveUndefinedEl = document.getElementById("primitive-undefined");
primitiveUndefinedEl.innerText = "undefined";

const primitiveUndefinedParaEl = document.getElementById("undefined-para");
primitiveUndefinedParaEl.innerHTML =
  "<code>undefined</code> is a special value that represents the absence of a value. It is often used as the default value of variables that have not been assigned a value. Variables that are declared but not initialized are automatically assigned the value undefined.";

//Reference data type
const referenceDataTypeEl = document.getElementById("reference-data-types");
referenceDataTypeEl.innerText = "Reference Data Type";

const referenceDataTypeParaEl = document.getElementById(
  "reference-data-types-para"
);
referenceDataTypeParaEl.innerHTML =
  "While primitive data types represent single, immutable values, reference data types are more <b>complex</b>. They are used to store and manipulate collections of data or objects with multiple properties and methods. Unlike primitives, reference data types are <b>mutable</b>, meaning their contents can be changed after they are created. Different types of Reference data are:";

//array data type

const referenceArrayEl = document.getElementById("reference-array");
referenceArrayEl.innerText = "Array";

const referenceArrayParaEl = document.getElementById("array-para");
referenceArrayParaEl.innerHTML =
  "Arrays are collections of values. They are used for storing and manipulating lists of data. <br> <code> let arrayNumber = [2,4,5,6] </code>";

//object data type

const referenceObjectEl = document.getElementById("reference-object");
referenceObjectEl.innerText = "Object";

const referenceObjectParaEl = document.getElementById("object-para");
referenceObjectParaEl.innerHTML =
  "Objects are collections of key-value pairs, where keys are strings , and values can be of any data type, including other objects. Objects can represent complex data structures and are used for modeling real-world entities. <br> <code> let Student = { name : &#34Sabin&#34, number : 042387654 }</code>";

//date data type

const referenceDateEl = document.getElementById("reference-date");
referenceDateEl.innerText = "Date";

const referenceDateParaEl = document.getElementById("date-para");
referenceDateParaEl.innerHTML =
  "The Date object represents date and time information. It provides methods for working with dates, times, and time zones. <br> <code>let date = Date()</code> ";

//function data type

const referenceFunctionEl = document.getElementById("reference-function");
referenceFunctionEl.innerText = "Function";

const referenceFunctionParaEl = document.getElementById("function-para");
referenceFunctionParaEl.innerHTML =
  " Functions are objects that can be invoked and passed around as arguments to other functions. Functions are used for encapsulating reusable code and implementing logic in JavaScript programs.";
