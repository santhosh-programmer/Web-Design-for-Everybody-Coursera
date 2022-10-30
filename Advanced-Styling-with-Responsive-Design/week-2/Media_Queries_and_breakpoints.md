# Week Two Review: Media Queries and breakpoints

### Question 1
Consider the following CSS rules:

    div{
       width: 80%;
    }

    @media all and (min-width: 500px){
        div{
           width: 25%;
        }
    }

What is the width of any div elements on a 350px screen?

    1) 25%
    2) 80%
    3) 100%

_ANS: 2) 80%_<hr>

### Question 2
Consider the following CSS rules:

    div{
       width: 80%;
    }

    @media all and (min-width: 500px){
        div{
           width: 25%;
        }
    }

What is the width of any div elements on a 750px screen?

    1) 25%
    2) 80%
    3) 100%

_ANS: 1) 25%_<hr>

### Question 3
Consider the following CSS rules:

    @media all and (min-width: 500px){
        div{
           width: 25%;
        }
    }

    div{   
       width: 80%;
    }

What is the width of any div elements on a 750px screen?

    1) 100%
    2) The div won't display since media queries must go at the bottom of the screen.
    3) 25%
    4) 80%

_ANS: 4) 80%_<hr>

### Question 4
Consider the following CSS rule:

    div{
        width: 80%;
    }

    @media print {
        div{
           width: 25%;
        }
    }

Which of the following is a true statement?

    1) The div elements will have a width of 80% only when the page is printed
    2) The div elements will have a width of 25% only when the page is printed
    3) The div elements will only visible only when the page is printed

_ANS: 2) The div elements will have a width of 25% only when the page is printed_<hr>

### Question 5
Which of the following code segments will keep people from being able to zoom in or out on your content?

    1) <meta name = ‘viewport’ content=‘width=device-width, initial-scale=1, maximum-scale = 1’>
    2) <meta name = ‘viewport’ content=‘width=device-width, initial-scale=1’>
    3) It is impossible to lock the zoom ability
<br>
    
    ANS: 1) <meta name = ‘viewport’ content=‘width=device-width, initial-scale=1, maximum-scale = 1’>
<hr>

### Question 6
Breakpoints often correspond with common screen sizes for phones, tablets, and laptops.

    1) True
    2) False
    
_ANS: 1) True_<hr>

### Question 7
Wireframes should...

    1) specify the layout, color, and content of your pages
    2) specify the layout of your pages
    3) specify the layout and content of your pages

_ANS: 3) specify the layout and content of your pages_<hr>

### Question 8
A key component of your wireframes should test  

    1) interaction
    2) color schemes
    3) code syntax

_ANS: 1) interaction_<hr>

### Question 9
Give an example screen width size for a mobile phone using pixels.  (Just provide a number, and not the px!!!)

_ANS: 720_<hr>

### Question 10
Which of the following is a deprecated media type -- meaning they are omitted in later versions.   (You will need to search for this online it is not in the notes.  But a lot of what you do with web design will require a little searching!) 

    1) all
    2) braille
    3) speech
    4) print
    5) screen

_ANS: 2) braille_<hr>


