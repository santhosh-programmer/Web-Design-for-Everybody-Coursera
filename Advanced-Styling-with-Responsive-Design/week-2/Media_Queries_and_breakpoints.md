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

_ANS: 1) <meta name = ‘viewport’ content=‘width=device-width, initial-scale=1, maximum-scale = 1’>_<hr>

