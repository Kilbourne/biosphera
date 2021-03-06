<?php
use Roots\Sage\Extras;
global $post;
?>
<div class="area-content">
  <div class="area-img-wrapper" style="border-bottom: 3px solid <?php echo Extras\get_areat_color($post->ID)   ?>;"><?php the_post_thumbnail('full');?></div>
  <?php Extras\theme_breadcrumb();?>
  <h1 class="area-title"><?php the_title() ?></h1>
  <div class="area-content-wrapper">
  <div class="first-col">
    <?php Extras\area_terap_attribute_template('cosa');?>
    <?php Extras\area_terap_attribute_template('cause');?>
  </div>
  <div class="second-col">
    <?php Extras\area_terap_attribute_template('manifestazioni');?>
    <?php Extras\area_terap_attribute_template('rimedi_naturali');?>
  </div>
  </div>
  <?php
$query = get_field('prodotti_to_areeterapeutiche');

if ($query) {
    ?>
 <div class="product-areat-wrapper" style="border-top: 3px solid <?php echo Extras\get_areat_color($post->ID)   ?>;">
  <?php
  global $area_id;
  $area_id=$post->ID;
  foreach ($query as $key => $product_1) {
        global $product, $post;
        $post = $product_1;
        setup_postdata($post);
        ?>
        <?php wc_get_template('content-areat-product.php',['area_id'=>$area_id],'woocommerce');?>

    <?php }
    ?>
    </div> <?php
}
?>
</div>
