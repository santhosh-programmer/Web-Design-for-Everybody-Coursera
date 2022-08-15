# Hosting and Validation

### Question 1
What validation error will this code produce?

    <!DOCTYPE html>
    <html lang="en">
    <head>	
       <meta charset="UTF-8">
       <title>Testing</title>
    </head>
    <body>
       <p>		
         <h2>Validate me!</h2>	
       </p>
    </body>
    </html>
    
<br>  

    1) No error
    2) Start tag seen without seeing a doctype first. Expected e.g. <!DOCTYPE html>.
    3) No p element in scope but a p end tag seen.
    
_ANS: 3) No p element in scope but a p end tag seen._<hr>

### Question 2
What validation error will this code produce?

    <!DOCTYPE html>
    <html lang="en">
    <head></head>
    <body>	
       <p> Validate me! </p>
    </body>
    </html>
    
<br>


    1) Element head is missing a required instance of child element title.
    2) No error.
    3) End of file seen when expecting text or an end tag.

_ANS: 1) Element head is missing a required instance of child element title._<hr>


