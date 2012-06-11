<?php 

if(have_posts()){
	
	while(have_posts()){
		the_post();
		
	?>
<div class="article"> 
<article class="post">
  <h2 id="postTitle">
    <?php  the_title(); ?>
  </h2>
  <p>
    <?php
	 
	  the_content(); 
	 ?>
  </p>
</article>
</div> <!-- article  -->
<br />
<br />
<?php
	} /* while */
}else{
	echo'Nothing post....';
	}
	?>
