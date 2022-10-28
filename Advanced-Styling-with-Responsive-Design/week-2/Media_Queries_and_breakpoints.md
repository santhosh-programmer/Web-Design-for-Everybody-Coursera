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
