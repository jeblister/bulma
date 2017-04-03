/*
 * clipboard for hugo
 */

(function(document, Clipboard) {

    var $codes = document.querySelectorAll('pre');

    function someFn(element) {
        var copy = document.createElement("button");
        copy.className = "copy button";
        copy.textContent = "copy";
        element.append(copy);
    }

    for (var i = 0, len = $codes.length; i < len; i++) {
        someFn($codes[i]);
    }


    new Clipboard('.copy', {
        target: function(trigger) {
            return trigger.previousElementSibling;
        }
    });
})(document, Clipboard);