/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

    // Use this variable to set up the common and page specific functions. If you
    // rename this variable, you will also need to rename the namespace below.
    var Sage = {
        // All pages
        'common': {
            init: function() {
                $('.lang-switcher a,.lang-sel a').click(function(e) {
                    $.cookie("bios_current_language", $(this).data("lang"), {
                        expires: 365,
                        path: "/",
                        domain: document.location.host
                    });
                });
            },
            finalize: function() {
                // JavaScript to be fired on all pages, after page specific JS is fired
            }
        },
        'woocommerce': {
            init: function() {
                var quantity = $('.product .cart .qty');
                if (quantity.length) {
                    quantity.change(function(event) {
                        var button = $('.add_to_cart_button');
                        if (button.attr('data-quantity') !== undefined)
                            button.attr('data-quantity', quantity.val());
                    });
                }
            }
        },
        'single_product': {
            init: function() {
                function get_first_uri_part() {
                    var first = $(location).attr('pathname');

                    first.indexOf(1);

                    first.toLowerCase();

                    first = first.split("/")[1];
                    return first;
                }
                var cookie_opts = { wildcardDomain: true, onEnable: function() { $('.fb-share').toggleClass('frame ok'); } };
                if (get_first_uri_part() !== 'en') { cookie_opts['iframesPlaceholderHTML'] = '<p><span>Condividi su Facebook - </span> Per vedere questo contenuto è necessario ' + '<a href="#" class="ce-accept">accetare un cookie di terze parti</a>' + '</p>' } else {
                    cookie_opts['iframesPlaceholderHTML'] = '<p><span>Share on Facebook - </span> To view this content you need to' + '<a href="#" class="ce-accept"> enable cookies</a>' + '</p>';
                }
                COOKIES_ENABLER.init(cookie_opts);

            }
        },
        // Home page
        'home': {
            init: function() {

                if ('ontouchstart' in window || navigator.msMaxTouchPoints) $('.aree_tera_list_link').fadeTo(0, 1);
            },
            finalize: function() {
                // JavaScript to be fired on the home page, after the init JS
            }
        },
        // About us page, note the change from about-us to about_us.
        'about_us': {
            init: function() {
                // JavaScript to be fired on the about us page
            }
        }
    };

    // The routing fires all common scripts, followed by the page specific scripts.
    // Add additional events for more control over timing e.g. a finalize event
    var UTIL = {
        fire: function(func, funcname, args) {
            var fire;
            var namespace = Sage;
            funcname = (funcname === undefined) ? 'init' : funcname;
            fire = func !== '';
            fire = fire && namespace[func];
            fire = fire && typeof namespace[func][funcname] === 'function';

            if (fire) {
                namespace[func][funcname](args);
            }
        },
        loadEvents: function() {
            // Fire common init JS
            UTIL.fire('common');

            // Fire page-specific init JS, and then finalize JS
            $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
                UTIL.fire(classnm);
                UTIL.fire(classnm, 'finalize');
            });

            // Fire common finalize JS
            UTIL.fire('common', 'finalize');
        }
    };

    // Load Events
    $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
