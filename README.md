# Website Performance Optimization Portfolio Project

## Objective

- To optimize the website for speed, by optimmizing the CRP (Critical Rendering Path)
- To get a score of not less than 90 on [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
- To get Rid of Jank
- To optimize Frames per Second rate to be 60fps
- To properly documenting (Readme & comment) the project

## About the Project

### Awesome, fast and smooth optimization project

The **SRC** folder contains all the original files, without optimization. You can test using developer tools on a browser. You will notive slow rendering speeds.

The **DIST** folder contains all the optimized files. Speedy and smooth. Notice that rendering times are several times faster than the SRC files.

All the associated files like: *gruntfile*, *license*, *readme* and *package.json* are outside in the main directory.

### RAIL Model Followed

RAIL or LIAR is a user-centric performance model. Every web app has these four distinct aspects to its life cycle, and performance fits into them in different ways:

- R: Response
- A: Animation
- I: Idle
- L: Load

You are curious? Checkout more on that [here](https://developers.google.com/web/fundamentals/performance/rail).

####Score of Website Before Optimizations

- Mobile: 27/100
- Desktop: 29/100

#### Score of Website After Optimizations

- Mobile: 98/100
- Desktop: 96/100

## Installation Instructions

Try the LIVE (fast) version  [here](https://gautamgahlawat.github.io/mobile-portfolio-performance-optimization/dist/index.html)

Try the LIVE (slow) version [here](https://gautamgahlawat.github.io/mobile-portfolio-performance-optimization/src/index.html)

**STEPS**

Option 1

1. Download all the files from [here](https://github.com/gautamgahlawat/mobile-portfolio-performance-optimization/archive/master.zip).
2. Unzip the file, open the dist folder and open the index.html in your browser or inside src folder open index.html to experience the slow website


Option 2

1. Press the clone button and copy the link to the clipboard

2. Open the terminal and write command `cd /usr/name-of-folder` to select the directory
3. Write `git clone` and paste the link by pressing ctrl+shift+v or cmd+shift+v (on Mac) and press enter
4. open the dist folder and open the index.html in your browser or inside src folder open index.html to experience the slow website

## Changes

Changes are listed below, changes made in files are usually comments with changes.

#### Automated project build using GulpJS

```
  grunt-inline-css - inline the css
  grunt-contrib-htmlmin - minify html pages
  grunt-contrib-uglify - minimize js files
  grunt-contrib-cssmin - minify css files
```

**index.html, project-2048.html, project-mobile.html, project-webperf.html**

Inlined all style sheets, resized and compressed all the images, minified all the html files

**pizza.html**

Resized and compressed pizzeria.jpg

**main.js**

Optimized randompizza appending loop Moved randomPizza reference outside of loop so it is not recalculated Added variable to store reference to all random pizzas so change pizza size does not have to recalculate

implementation of requestAnimationFrame on scrolling events

Optimized document.addEventListener('DOMContentLoaded', function() {} Optimized algorithm to generate scrolling pizzas to produce only 40 elements instead of 200 Changed elem.src to prescaled image Floored the value of width

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

## License

Change whatever and do whatever you want with it. Make it your own. :)

Licensed under MIT License detail [here](https://github.com/gautamgahlawat/mobile-portfolio-performance-optimization/blob/master/LICENSE)
