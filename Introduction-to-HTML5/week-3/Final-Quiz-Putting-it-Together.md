# Final Quiz - Putting it Together

### Question 1
Which is the best/proper way to declare that your page uses the HTML5 protocol?

  1) \<!DOCTYPE html> 
  2) \<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
  3) \<!DOCTYPE> 
  4) \<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 5.01//EN" "http://www.w3.org/TR/html5/strict.dtd">
  5) <!html> 
 
_ANS:  1) \<!DOCTYPE html>_<hr>

### Question 2
Which is the best/proper way to declare that the language for your page is English? 

  1) \<html lang=en>
  2) \<html lang="en">
  3) \<lang="english">
  4) \<lang="en">
  5) \<html lang="english">
  
_ANS: 2) \<html lang="en">_<hr>

### Question 3
What is the best/proper way to create the meta-data for your page?

_ANS:_

    <head>
      <meta charset="utf-8">
      <title>Mister Rogers</title>
    </head>
 
 <hr>

### Question 4
Which is the best/proper way to declare the header for a page?\

_ANS:_

    <header>
        <h1>Mister Rogers</h1>
        <nav>
      <a href="one.html">one</a>
      <a href="two.two.html">two</a>
      <a href="three.html">three</a>
      <a href="songs.html">Songs</a>
        </nav>
    </header>
    
<hr>

### Question 5
Which is the best/proper way to declare a section that has an h2 heading and an unordered list?

_ANS:_

    <section>
      <h2>Favorite Foods</h2>
      <ul>
        <li>stuff</li>
        <li>more</li>
        <li>stuff</li>
        <li>again</li>
      </ul>
    </section>
    
<hr>

### Question 6
Which is the best/proper way to declare a section that has an h2 heading and three progress elements?

_ANS:_

    <section>
       <h2>Achievements</h2>
          <p>Progress in this course (100%)<progress value="1"></progress><br/>
          Progress in the Specialization capstone (20%)<progress value="20" max="100"></progress><br/>
          Progress in life goals (70%)<progress value="70" max="100"></progress></p>
    </section>
    
<hr>

### Question 7
What is the best/proper way to declare a section that has an h2 heading and uses a detail tag?

_ANS:_

    <section>
       <h2>More about me</h2>
       <details open>
      <summary>My Childhood</summary>
      <p>stuff happened, I grew up</p>
       </details>
    </section>
    
<hr>

### Question 8
What is the best/proper way to create a footer that has an image, paragraph, and link?  Be careful, that paragraph includes a special entity.

_ANS:_

    <footer>
    <p>
        <img src="http://www.intro-webdesign.com/images/newlogo.png" alt="new logo">
        This page was created by Troy &amp; Colleen van Lent. To learn more about web design, visit
        <a href="http://www.intro-webdesign.com">Intro to Web Design</a>
      </p>
    </footer>
    
<hr>

