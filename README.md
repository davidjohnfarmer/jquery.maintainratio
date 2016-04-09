# jquery.maintainratio
JQuery Plug-in to maintain an aspect ratio of an element as it resizes

Demo available here: [MaintainRatio JQuery Plugin](http://davidjohnfarmer.co.uk/jquery-plugins/).

Example use(s):

JQUERY: 
```
$( document ).ready(function() {

	$('.photo-square').maintainRatio({
	    ratio: 1 
	});

	$('.photo-portrait').maintainRatio({
	    ratio: 1.5  
	});

	$('.photo-landscape').maintainRatio({
	    ratio: 0.5  
	});

});
```