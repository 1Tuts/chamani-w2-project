<!-- ///////////////////////////////////// Div intro (top circle) ///////////////////////////////////// -->
	<div class="main intro">


		<div class="top">
			<div class="circle-one">
				<div class="circle-two">
					<div class="padding">
						<div class="circle-three">
							<div class="text">
								<p>Menu</p>
								<img src="<?php bloginfo('template_url') ?>/images/intro/down.png" width="8" height="11" />
								<p id="fa">زبان فارسی</p>
								<p id="about">تماس با ما</p>
								<p id="en">زبان انگلیسی</p>
							</div>
							<div class="text2">
								<p>Menu</p>
								<img src="<?php bloginfo('template_url') ?>/images/intro/down.png" width="8" height="11" />
							</div>
							<div class="button">
								<div class="fa"><a href="fa.php"></a></div>
								<div class="about"><a href="#"></a></div>
								<div class="en"><a href="#"></a></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
<!-- ///////////////////////////////////// Div About-Chamani ///////////////////////////////////// -->
		<?php
			//$displayposts = new WP_Query();
  			//get posts from your news category
	 		// $displayposts->query('cat=1');
	 		// while ($displayposts->have_posts()) : $displayposts->the_post();
		 	query_posts($query_string . '&page_id=2');
			if ( have_posts() ) : while ( have_posts() ) : the_post();
		?>
		<div class="about-chamani">
			<h2><?php the_title(); ?></h2>
			<?php the_content(''); ?>
			<p style="padding:0px">
				<?php 
					$imglink = get_post_meta($post->ID,'imglink',true);
					$img = get_post_meta($post->ID,'img',true);
					if( $img!=null ){
				?>
					<span id="left">
						<a href="<?php echo $imglink; ?>" title="بسته ای از محصول شرکت توس چمنی" rel="lightbox">
							<img src="<?php echo $img; ?>" width="180" height="108" alt="بسته ای از محصول شرکت توس چمنی">
						</a>
					</span>
				<?php } ?>
				<?php 
					$address = get_post_meta($post->ID,'address',true);
					if( $address!=null ){
				?>
						<span id="right">
							<?php echo $address; ?>
						</span>
					<?php } ?>
			</p>
		</div>
		<?php endwhile; else:
				echo "
					<div class='about-chamani'>
						<h2>Not Found</h2>
						<p id='not'></p>
						<p>متاسفانه مطلب درخواستی شما یافت نشد.</p>
					</div>
					";
		endif; ?>

		
	</div><!-- ///// End div.main ///// -->
	<?php include ("video.php"); ?>
