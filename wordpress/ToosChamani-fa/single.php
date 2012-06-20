<?php 
	get_header();
	get_template_part('sidebar', 'left');
	get_template_part('sidebar', 'right');
	include("function.php");
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
					<div class="box">
						<div class="right date"><?php the_time(__('j F, Y','kubrick')) ?></div>
						<div class="cat">دسته بندی : <?php the_category(', '); ?></div>
					</div>
					<div class="clear"></div>
					<div class="divider"></div>
					<div class="txt">
						<?php the_content(''); ?>
					</div>
					<div class="clear"></div>
					<div class="tags">
						<?php the_tags(' برچسب ها : ', ', ', ' '); ?>
					</div>
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
			<div class="similar-post">
				<h3>مطالب مشابه</h3>
				<ul>
					<?php
						$categories = get_the_category($post->ID);
						if ($categories) {
							$category_ids = array();
							foreach($categories as $individual_category) $category_ids[] = $individual_category->term_id;
							$args=array(
								'category__in' => $category_ids,
								'post__not_in' => array($post->ID),
								'showposts'=>7, // Number of related posts that will be shown.
								'caller_get_posts'=>1
							);
							$my_query = new wp_query($args);
								if( $my_query->have_posts() ) {
									while ($my_query->have_posts()) {
										$my_query->the_post();
					?>
					<li>
						<a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a>
					</li>
					<?php
									}
								}
						}
					?>
				</ul>
			</div>
			<?php include("tabliq/post-bottom.php"); ?>
			<div class="comment">
				<p>نظرات برای این پست غیرفعال شده است.</p>
			</div>
		</div>

<?php 
	get_footer();
?>