var $responsive_menu_pro_jquery = jQuery.noConflict();$responsive_menu_pro_jquery( document ).ready( function(){$responsive_menu_pro_jquery( document ).bind( 'vclick', function( e ){if( e.which != 2 && !$responsive_menu_pro_jquery( e.target ).closest( '#responsive_menu_pro, #responsive_menu_pro_button' ).length ){closeRM()}});var isOpen = false;$responsive_menu_pro_jquery( document ).on( 'click', '#responsive_menu_pro_button', function(){!isOpen ? openRM() : closeRM()});function openRM(){$responsive_menu_pro_jquery( '#responsive_menu_pro' ).css( 'left', '' );var MenuWidth = $responsive_menu_pro_jquery('#responsive_menu_pro').width();$responsive_menu_pro_jquery( '#responsive_menu_pro' ).css( 'display', 'block' );$responsive_menu_pro_jquery( '#responsive_menu_pro' ).addClass( 'responsive_menu_pro_opened' );$responsive_menu_pro_jquery( '#responsive_menu_pro_button' ).addClass( 'responsive_menu_pro_button_active' );$responsive_menu_pro_jquery( '#responsive_menu_pro' ).stop().animate({left: "0"}, 500, 'linear', function(){isOpen = true})}function closeRM(){$responsive_menu_pro_jquery( '#responsive_menu_pro' ).animate({left: -$responsive_menu_pro_jquery( '#responsive_menu_pro' ).width()}, 500, 'linear', function(){$responsive_menu_pro_jquery( '#responsive_menu_pro' ).css( 'display', 'none' );$responsive_menu_pro_jquery( '#responsive_menu_pro' ).removeClass( 'responsive_menu_pro_opened' );$responsive_menu_pro_jquery( '#responsive_menu_pro_button' ).removeClass( 'responsive_menu_pro_button_active' );isOpen = false})}$responsive_menu_pro_jquery( window ).resize( function(){$responsive_menu_pro_jquery( '#responsive_menu_pro' ).stop( true, true );if( $responsive_menu_pro_jquery( window ).width() >= 800 ){if( $responsive_menu_pro_jquery( '#responsive_menu_pro' ).css( 'left' ) != -$responsive_menu_pro_jquery( '#responsive_menu_pro' ).width() ){closeRM()}}});$responsive_menu_pro_jquery( '#responsive_menu_pro ul ul' ).css( 'display', 'none' );$responsive_menu_pro_jquery( '#responsive_menu_pro .current_page_ancestor.menu-item-has-children' ).children( 'ul' ).css( 'display', 'block' );$responsive_menu_pro_jquery( '#responsive_menu_pro .current-menu-ancestor.menu-item-has-children' ).children( 'ul' ).css( 'display', 'block' );$responsive_menu_pro_jquery( '#responsive_menu_pro .current-menu-item.menu-item-has-children' ).children( 'ul' ).css( 'display', 'block' );$responsive_menu_pro_jquery( '#responsive_menu_pro .current_page_ancestor.page_item_has_children' ).children( 'ul' ).css( 'display', 'block' );$responsive_menu_pro_jquery( '#responsive_menu_pro .current-menu-ancestor.page_item_has_children' ).children( 'ul' ).css( 'display', 'block' );$responsive_menu_pro_jquery( '#responsive_menu_pro .current-menu-item.page_item_has_children' ).children( 'ul' ).css( 'display', 'block' );$responsive_menu_pro_jquery( '#responsive_menu_pro ul ul' ).css( 'display', 'block' );var clickLink = '<span class=\"responsive_menu_pro_append_link responsive_menu_pro_append_active\">▲</span>';var clickedLink = '<span class=\"responsive_menu_pro_append_link responsive_menu_pro_append_active\">▲</span>';$responsive_menu_pro_jquery( '#responsive_menu_pro .responsive_menu_pro_menu li' ).each( function(){if( $responsive_menu_pro_jquery( this ).children( 'ul' ).length > 0 ){if( $responsive_menu_pro_jquery( this ).find( '> ul' ).css( 'display' ) == 'none' ){$responsive_menu_pro_jquery( this ).prepend( clickLink )}else{$responsive_menu_pro_jquery( this ).prepend( clickedLink )}}});$responsive_menu_pro_jquery( '.responsive_menu_pro_append_link' ).on( 'click', function(){$responsive_menu_pro_jquery( this ).nextAll( '#responsive_menu_pro ul ul' ).slideToggle(function(){});$responsive_menu_pro_jquery( this ).html( $responsive_menu_pro_jquery( this ).hasClass( 'responsive_menu_pro_append_active' ) ? '▼' : '▲' );$responsive_menu_pro_jquery( this ).toggleClass( 'responsive_menu_pro_append_active responsive_menu_pro_append_inactive' )});$responsive_menu_pro_jquery( '.responsive_menu_parent_click_disabled' ).on( 'click', function(){$responsive_menu_pro_jquery( this ).nextAll( '#responsive_menu_pro ul ul' ).slideToggle( function(){});$responsive_menu_pro_jquery( this ).siblings( '.responsive_menu_pro_append_link' ).html( $responsive_menu_pro_jquery( this ).hasClass( 'responsive_menu_pro_append_active' ) ? '▼' : '▲' );$responsive_menu_pro_jquery( this ).toggleClass( 'responsive_menu_pro_append_active responsive_menu_pro_append_inactive' )});$responsive_menu_pro_jquery( '.responsive_menu_pro_append_inactive' ).siblings( 'ul' ).css( 'display', 'none' );$responsive_menu_pro_jquery( '#responsive_menu_pro ul li a' ).on( 'click', function(){closeRM()})});