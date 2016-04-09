/*! MaintainRatio for JQuery v1.00 BETA
 * http://www.davidjohnfarmer.co.uk/jquery-plugins/maintainratio/
 * Do not remove any of this notice (you're welcome to use this code in commercial projects)
 * Copyright (c) 2016 David John Farmer www.davidjohnfarmer.co.uk
 * Licensed under the MIT license */

(function ( $ ) {

    $.fn.maintainRatio = function(options) {
 
        // DEFAULT OPTIONS 
        var settings = $.extend({
            ratio: 1,
            pixelmod: 0 
        }, options );
 
        var $this = $(this);
        $this.css('min-height',0);

        var calculateSize = function(obj) { 
        	var thiswidth = $(obj).width();
        	var newheight = thiswidth*settings.ratio;

        	if (settings.pixelmod != 0) {
        		newheight = newheight + settings.pixelmod;
        	}

        	return newheight; 
        }

       
        return this.each(function(i,obj) {
        	var newheight = calculateSize(obj);
            $(obj).css('min-height',newheight);
			$(window).resize(function() {
                var $newheight = calculateSize(obj);
                $(obj).css('min-height',$newheight);
            });
        });

    };

}( jQuery ));