# JavaScript Review Quiz

### Question 1
Which is the correct syntax to change the contents of the HTML element below?

    <p id = "quiz">This is a quiz. </p>
<br>

1) document.getElementById('quiz').innerHTML("New content!");
2) document.getElementById('quiz').innerHTML = "New content!";
3) document.getElementsByTagName('p').innerHTML = "New content!";
4) document.getElementsByTagName('p').innerHTML("New content!");

_ANS: 2) document.getElementById('quiz').innerHTML = "New content!";_<hr>

### Question 2
Where can you put JavaScript?

    1) In the head and body section
    2) Just in the <body> section
    3) Just in the <head> section

_ANS: 1) In the head and body section_<hr>

### Question 3
Built-in JavaScript functions (alert, prompt, etc) cannot be mixed in with other HTML code unless you use the <script> tag.

    1) True
    2) False
    
_ANS: 2) False_<hr>

### Question 4
Which of the following is the proper way to link to an external JavaScript file?

    1) <script = “file.js”></script>
    2) <script href=“file.js”></script>
    3) <script file = “file.js”></script>
    4) <script>”file.js”</script>
    5) <script src = “file.js”></script>
    
_ANS: 5) <script src = “file.js”></script>_<hr>
    
### Question 5
Which keyword is used to define a function in JavaScript?
    
_ANS: function_<hr>
    
### Question 6
If a function is defined twice, the first declaration will be called when used.

    1) True
    2) False
    
_ANS: 2) False_<hr>
    
### Question 7
A function can be called multiple times in a single file.

    1) True
    2) False

_ANS: 1) True_<hr>
    
### Question 8
You can define a function without calling it.

    1) True
    2) False

_ANS: 1) True_<hr>

### Question 9
You can call a function without it being defined.

    1) True
    2) False

_ANS: 2) False_<hr>

### Question 10
Conditional statements change the flow of execution in a program — the “next” line of code in the program is not always the next one that is executed.

    1) True
    2) False

_ANS: 1) True_<hr>

### Question 11
What is true about this code?

    <a href = "http://www.umich.edu" onclick = "return true">University of Michigan</a><br/>

    <a href = "#" onclick = "alert(this.href)">University of Michigan </a><br/>	

    <a href = "page2.html" onclick = "alert(this.href)">University of Michigan </a><br/>
<br>

    1) Only the first link will take you to the University of Michigan website .
    2) Only the second link will take you to the University of Michigan website.
    3) Only the third link will take you to the University of Michigan website.
    4) None of the links will take you to the University of Michigan website.
    
_ANS: 1) Only the first link will take you to the University of Michigan website ._<hr>
    
### Question 12
What is true about this code?
    
    <a href = "http://www.umich.edu" onclick = "alert(this.href)">University of Michigan</a><br/>

    <a href = "#" onclick = "alert(this.href)">University of Michigan </a><br/>	

    <a href = "page2.html" onclick = "alert(this.href)">University of Michigan </a><br/> 
<br>
    
    1) Only the first link will produce the alert  “http://www.umich.edu/“.
    2) Only the second link will produce the alert  “http://www.umich.edu/“.
    3) Only the third link will produce the alert  “http://www.umich.edu/“.
    4) None of the links will produce the alert  “http://www.umich.edu/“.
    
_ANS: 1) Only the first link will produce the alert  “http://www.umich.edu/“._<hr>
    
### Question 13
Assume you have a page with four paragraph tags, one of which has the id "second".  What is the proper JavaScript code to change the content of that  paragraph to "What does the Fox say?"

Note:

The quotes shouldn't be part of the value.
Please end the line of code with a semicolon.
Note, you can't assume that this is the second paragraph.  

_ANS: document.getElementById('second').innerHTML="What does the Fox say?";_<hr>
    
### Question 14
Assume you have a page with four paragraph tags.  What is the proper JavaScript code to change the content of the second paragraph to "What does the Fox say?"

    1) document.getElementByTagName('p')[2].innerHTML = "What does the Fox say?"
    2) document.getElementsByTagName('p').innerHTML = "What does the Fox say?"
    3) document.getElementsByTagName('p')[1].innerHTML = "What does the Fox say?"
    4) document.getElementById('second').innerHTML = "What does the Fox say?"
    5) document.getElementById('p')[2].innerHTML = "What does the Fox say?"    

_ANS: 3) document.getElementsByTagName('p')[1].innerHTML = "What does the Fox say?"_<hr>

### Question 15
How do you properly access the first element in an array variable named "fruit"

    1) fruit[0]
    2) fruit[1]
    3) [fruit]0
    4) fruit_0
    5) None of the above.

_ANS: 1) fruit[0]_<hr>
    
    
