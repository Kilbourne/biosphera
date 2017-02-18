<?php
use Roots\Sage\Extras;
 ?>
<header class="banner">
  <div class="container">
     <div class="left"><?php echo Extras\sk_wcmenucart(); ?>        <form action="<?php  echo get_permalink( get_page_by_title('Risultati ricerca' ));  ?> " id="responsive_menu_pro_search" method="get" role="search">
     <i class="fa fa-search"></i>
            <input type="search" name='swpquery' value="" placeholder="<?php _e( 'Cerca', 'responsive-menu-pro' ); ?>" id="responsive_menu_pro_search_input">
        </form>    </div>
     <div class="center"><a href="<?php echo get_home_url(); ?>"><img src="<?= esc_url(get_stylesheet_directory_uri()); ?>/dist/images/biosphaera_logo.svg" alt="Logo Biosphera" class="logo">    </a>
    </div>
     <div class="right">


         <?php echo Extras\bios_wc_link(); ?>
       <div class="lang-switcher">IT | EN</div>
     </div>


  </div>
      <nav class="nav-primary">
      <?php
      if (has_nav_menu('primary_navigation')) :
        wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']);
      endif;
      ?>
    </nav>
</header>
