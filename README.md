This is a project in designing a functional calculator from scratch. This was a really good project for strengthening my understanding on how to use event listeners and the way it interacts with other functions.

Challenges: 
1. One of the biggest obstacles that I faced was not being able to get a return value even from the button event listeners even though there was no issue with console.log displaying the value that I wanted. There were 2 different solutions that I came across for this issue: convert the variable I wanted to change into an object, and to move the event listeners outside of the for loop.
2. Another challenge that was faced was the implementation of different safety catches to ensure that the user would not be able to break the program. Things such as only being able to use one decimal point at a time, only being able to use one operator at a time and preventing work arounds such as clicking a decimal, then operator, then decimal again.


One valuable takeaway when using event listeners is to try to keep them outside of functions when possible as it will result in less trouble when trying to interact with events.



<h1>Calculator Project for The Odin Project </h1>

<h2>About</h2>
<ul>
    <li>Calculator with basic functionality</li>
    <li>Keyboard functionality, additionally "backspace" for clear and "esc" for all clear</li>
    <li>Able do multiple calculations at once</li>
    <li>Plenty of safeguards to prevent abuse, e.g. using "+" twice, or decimal point multiple times. </li>
    
    <li>Option to play again</li>
</ul>
<br>
<h2>Languages:</h2>
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
</ul>
<br>
<h2>Challenges</h2>
<ul>
    <li>Trouble with return values from event listeners, unexpected behaviours with using loops with event listeners</li>
    <li>Adding classes to the dom using JS</li>
    <li>Implementing safeguards required extensive testing</li>
</ul>
<h2>Important takeaway</h2>
<ul>
    <li>Keep event listeners outside of functions when possible as my experience with the project showed that there was less trouble with interacting with events.</li>
</ul>