
(function($) {
	$.fn.jrumble = function(s) {
		var t = {
			rangeX: 2,
			rangeY: 2,
			rangeRot: 1,
			rumbleSpeed: 10,
			rumbleEvent: 'hover',
			posX: 'left',
			posY: 'top'
		};
		var u = $.extend(t, s);
		return this.each(function() {
			$obj = $(this);
			var f;
			var g = u.rangeX;
			var h = u.rangeY;
			var i = u.rangeRot;
			g = g * 2;
			h = h * 2;
			i = i * 2;
			var j = u.rumbleSpeed;
			var k = $obj.css('position');
			var l = u.posX;
			var m = u.posY;
			var n;
			var o;
			var p;
			if (l === 'left') {
				n = parseInt($obj.css('left'), 10)
			}
			if (l === 'right') {
				n = parseInt($obj.css('right'), 10)
			}
			if (m === 'top') {
				o = parseInt($obj.css('top'), 10)
			}
			if (m === 'bottom') {
				o = parseInt($obj.css('bottom'), 10)
			}
			function rumbler(a) {
				var b = Math.random();
				var c = Math.floor(Math.random() * (g + 1)) - g / 2;
				var d = Math.floor(Math.random() * (h + 1)) - h / 2;
				var e = Math.floor(Math.random() * (i + 1)) - i / 2;
				if (a.css('display') === 'inline') {
					p = true;
					a.css('display', 'inline-block')
				}
				if (c === 0 && g !== 0) {
					if (b < .5) {
						c = 1
					} else {
						c = -1
					}
				}
				if (d === 0 && h !== 0) {
					if (b < .5) {
						d = 1
					} else {
						d = -1
					}
				}
				if (k === 'absolute') {
					a.css({
						'position': 'absolute',
						'-webkit-transform': 'rotate(' + e + 'deg)',
						'-moz-transform': 'rotate(' + e + 'deg)',
						'-o-transform': 'rotate(' + e + 'deg)',
						'transform': 'rotate(' + e + 'deg)'
					});
					a.css(l, n + c + 'px');
					a.css(m, o + d + 'px')
				}
				if (k === 'fixed') {
					a.css({
						'position': 'fixed',
						'-webkit-transform': 'rotate(' + e + 'deg)',
						'-moz-transform': 'rotate(' + e + 'deg)',
						'-o-transform': 'rotate(' + e + 'deg)',
						'transform': 'rotate(' + e + 'deg)'
					});
					a.css(l, n + c + 'px');
					a.css(m, o + d + 'px')
				}
				if (k === 'static' || k === 'relative') {
					a.css({
						'position': 'relative',
						'-webkit-transform': 'rotate(' + e + 'deg)',
						'-moz-transform': 'rotate(' + e + 'deg)',
						'-o-transform': 'rotate(' + e + 'deg)',
						'transform': 'rotate(' + e + 'deg)'
					});
					a.css(l, c + 'px');
					a.css(m, d + 'px')
				}
			}
			var q = {
				'position': k,
				'-webkit-transform': 'rotate(0deg)',
				'-moz-transform': 'rotate(0deg)',
				'-o-transform': 'rotate(0deg)',
				'transform': 'rotate(0deg)'
			};
			if (u.rumbleEvent === 'hover') {
				$obj.hover(function() {
					var a = $(this);
					f = setInterval(function() {
						rumbler(a)
					},
					j)
				},
				function() {
					var a = $(this);
					clearInterval(f);
					a.css(q);
					a.css(l, n + 'px');
					a.css(m, o + 'px');
					if (p === true) {
						a.css('display', 'inline')
					}
				})
			}
			if (u.rumbleEvent === 'click') {
				$obj.toggle(function() {
					var a = $(this);
					f = setInterval(function() {
						rumbler(a)
					},
					j)
				},
				function() {
					var a = $(this);
					clearInterval(f);
					a.css(q);
					a.css(l, n + 'px');
					a.css(m, o + 'px');
					if (p === true) {
						a.css('display', 'inline')
					}
				})
			}
			if (u.rumbleEvent === 'mousedown') {
				$obj.bind({
					mousedown: function() {
						var a = $(this);
						f = setInterval(function() {
							rumbler(a)
						},
						j)
					},
					mouseup: function() {
						var a = $(this);
						clearInterval(f);
						a.css(q);
						a.css(l, n + 'px');
						a.css(m, o + 'px');
						if (p === true) {
							a.css('display', 'inline')
						}
					},
					mouseout: function() {
						var a = $(this);
						clearInterval(f);
						a.css(q);
						a.css(l, n + 'px');
						a.css(m, o + 'px');
						if (p === true) {
							a.css('display', 'inline')
						}
					}
				})
			}
			if (u.rumbleEvent === 'constant') {
				var r = $(this);
				f = setInterval(function() {
					rumbler(r)
				},
				j)
			}
		})
	}
})(jQuery);