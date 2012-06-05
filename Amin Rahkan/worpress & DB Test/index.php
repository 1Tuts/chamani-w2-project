<?php 
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Eleven
 */
get_header();

?>

<div class="Content_Page">
  <div class="Content">
  
  

	<?php   
	get_template_part('content', 'post');
	
	?>  
  
  <?php
	require_once('db.php');
	db_connect();
	mysql_query('SET NAMES utf8');
	$arr = db_getrows('product');
	

	db_show($arr);
	
	db_close();
?>

  </div>
  <!--  Content -->
  <?php 
		   get_sidebar('right');
		   
		    ?>
            
            
            
  
  
</div>
<!--  Content_Page -->

<?php get_footer();  ?>
