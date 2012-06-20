<?php 
	get_header();
	get_template_part('sidebar', 'left');
	get_template_part('sidebar', 'right');
?>
		<div class="content">
			<?php
				if(have_posts()){
					while(have_posts()){
						the_post();
			?>
			<div class="post">
				<div class="title">
					<h2><a href="<?php the_permalink() ?>" target="_blank"><?php the_title(); ?></a></h2>
				</div>
				<div class="text">
					<div class="txt">
						<?php the_content(''); ?>
					</div>
					<div class="clear"></div>
				</div>
				<div class="footer"></div>
			</div>
			<?php
						}
					}else{
						echo "
							<div class='post not-found'>
								<div class='title'>
									<h2>Not Found</h2>
								</div>
								<div class='text'>
									<div class='txt'>
										<p id='not'></p>
										<p>متاسفانه مطلب درخواستی شما یافت نشد.</p>
									</div>
								</div>
								<div class='footer'></div>
							</div>
						";
					}
			?>
			<?php include("tabliq/post-bottom.php"); ?>
		</div>
<?php 
	get_footer();
?>