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
    
<span></span>    

    1) No error
    2) Start tag seen without seeing a doctype first. Expected e.g. <!DOCTYPE html>.
    3) No p element in scope but a p end tag seen.
    
_ANS: 3) No p element in scope but a p end tag seen._
