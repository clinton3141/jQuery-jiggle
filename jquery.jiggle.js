(function ($) {
        $.fn.jiggle = function (options) {
                settings = $.extend ({
                                speed: 150,
                                distance: 3,
                                recoilSpeed: 150
                        }, options);
                return this.each (function () {
                        var $this = $(this),
                                do_jiggle = false,
                                random_jump = function () {
                                        var sign = Math.round (Math.random()),
                                                number = Math.floor (Math.random() * settings.distance);
                                        if (sign) return number + 'px';
                                        return -number + 'px';
                                },
                                start_jiggle = function () {
                                        var time = settings.speed;
                                        if (do_jiggle)
                                        {
                                                $this.css({position:'relative'})
                                                        .animate({left:random_jump(), top:random_jump()}, time/4)
                                                        .animate({left:random_jump(), top:random_jump()}, time/2)
                                                        .animate({left:random_jump(),  top:random_jump()}, time/4);
                                                setTimeout (start_jiggle, time);
                                        }
                                },
                                stop_jiggle = function () {
                                        do_jiggle = false;
                                        $this.stop(true).animate({top: 0, left: 0}, settings.recoilSpeed);
                                };
                        $this.hover (function () {
                                        do_jiggle = true;
                                        start_jiggle();
                                }, stop_jiggle)
                });
        };
})(jQuery);
