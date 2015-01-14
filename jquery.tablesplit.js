/*!
 * jQuery table split plugin
 * @author Jamie Hoeks <j@skeoh.com>
 * @license MIT
 */
(function ($) {

$.fn.tableSplit = function (index, options) {
	var $table = this.first();
	var $left = $table.tableSlice(0, index, options);
	var $right = $table.tableSlice(index, options);
	var $result = $($left).add($right);
	return $result;
};

})(jQuery);