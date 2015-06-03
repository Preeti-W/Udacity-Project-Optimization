# Optimization

###[PROJECT @ UDACITY]

May 19th, 2015

-----------------

###Project Overview
Review the current state of various pages within the application and identify areas for improvement. Review the code powering the website and identify areas where you believe modifications are warranted. Iteratively make changes and test those changes using the tools available to you to determine if they are a performance gain or loss.

### Learning Outcome
* Website Performance Optimization
* Browser Rendering Optimization

### Optimize index.html

1. Optimize profilepic.jpg. Created a resized version of pizzeria.jpg, name it pizzeria_100.jpg, optimize it, and use it instead of profilepic.jpg.
2. Used a CSS media query on the print.css link element
3. Used the async attribute for analytics.js
4. Used local font files instead of web fonts
5. Inlined the content of style.css
6. Bug fix: added missing closing div tag
7. Minified index.html directly (in real projects, this would be done via a build tool)
8. TODO - Setup browser caching
9. TODO - Enable GZIP

### Optimize main.js

1. Resized pizzeria.jpg to 360 px (width) which is enough for most cases
2. Compressed pizza.png and pizzeria.jpg
3. Reduced the number of moving pizzas to 32, which is enough for most cases
4. Refactored updatePosition(): used getElementsByClassName instead of querySelectorAll, pre-calculated all phase offsets, called document.body.scrollTop only once
5. Refactored the callback for DOMContentLoaded event: cloned an existing element instead of creating a new one every time, set the position style within the loop instead of calling updatePositions(), use some of the refactored code from updatePositions(), used document fragment to append elements (pizzas) in a single call
6. Put each moving pizza on a new layer
7. Refactored changePizzaSizes(): cached random pizza elements, pulled dx calculation out of the loop, calculated dx only once.

### Optimize pizza.html

1. Added viewport meta element
2. Bug fix: removed unnecessary closing input tag
3. Inlined style.css in pizza.html
4. Minified CSS, JS, HTML files. This would normally be done by a build tool. However, for the sake of the project, I did them manually.

### Resources
##### Articles
- [Mobile Analysis in PageSpeed Insights](https://developers.google.com/speed/docs/insights/mobile)
- [CSS TRIGGERS...](http://csstriggers.com/)
- [Analyzing Critical Rendering Path Performance](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp#performance-patterns)
- [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path)
- [Adding Interactivity with JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript#parser-blocking-vs-asynchronous-javascript)
- [Render Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css)
- [requestAnimationFrame for Smart Animating](http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/)
- [Optimizing encoding and transfer size of text-based assets](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer#text-compression-with-gzip)
- [Size content to the viewport](https://developers.google.com/web/fundamentals/layouts/rwd-fundamentals/size-content-to-the-viewport?hl=en)

##### Tools
- [Tiny JPG](https://tinyjpg.com/)
- [RESIZE PHOTOS](http://www.resize-photos.com/)
- [HTML Minifier](https://kangax.github.io/html-minifier/)
- [Online Javascript Compression Tool](http://jscompress.com/)
- [CSS Minifier](http://cssminifier.com/)