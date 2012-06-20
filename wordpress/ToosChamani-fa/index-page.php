<!-- ///////////////////////////////////// Div scrool ///////////////////////////////////// -->
	<div class="scroll">


		<div class="home_main border">
			<div class="home_container container">
				<div class="home">
					<div class="header">
						<?php include ("logo.php"); ?>
						<div class="menu">
							<ul>
								<li id="active" id="home-btn"><a href="#home">صفحه اصلی</a></li>
								<li id="product-btn"><a href="#product">معرفی محصولات</a></li>
								<li id="gallery-btn"><a href="#gallery">گالری عکس</a></li>
								<li><a href="#draw">قرعه کشی</a></li>
								<li><a href="#blog">وبلاگ</a></li>
								<li id="contactus-btn"><a href="#contact us">تماس با ما</a></li>
							</ul>
							<div class="clear"></div>
						</div>
					</div>
					<div class="clear"></div>
					<?php
		 				query_posts($query_string . '&page_id=17');
						if ( have_posts() ) : while ( have_posts() ) : the_post();
					?>
					<div class="padding">
						<div class="text-fa">
							<h2><?php the_title(); ?></h2>
							<div id="txt"><span>
								<?php the_content(''); ?></span>
							</div>
							<!--<p id="more"><a href="#">ادامه مطلب این متن</a></p>-->
						</div>
					</div>
					<?php endwhile; else:
						echo "
							<div class='padding'>
								<div class='text-fa'>
									<h2>Not Found</h2>
									<div id='txt'>
										<p>متاسفانه مطلب درخواستی شما یافت نشد.</p>
									</div>
								</div>
							</div>
						";
					endif; ?>
				</div>
			</div>
		</div><!-- ///// end home_main ///// -->
		<div class="clear"></div>
		<div class="product_main border">
			<div class="product_container container">
				<div class="product">
					<div class="header">
						<?php include ("logo.php"); ?>
						<div class="menu">
							<ul>
								<li id="home-btn"><a href="#home">صفحه اصلی</a></li>
								<li id="active" id="product-btn"><a href="#product">معرفی محصولات</a></li>
								<li id="gallery-btn"><a href="#gallery">گالری عکس</a></li>
								<li><a href="#draw">قرعه کشی</a></li>
								<li><a href="#blog">وبلاگ</a></li>
								<li id="contactus-btn"><a href="#contact us">تماس با ما</a></li>
							</ul>
							<div class="clear"></div>
						</div>
					</div>
					<div class="clear"></div>
					<?php
		 				query_posts($query_string . '&page_id=19');
						if ( have_posts() ) : while ( have_posts() ) : the_post();
					?>
					<div class="padding">
						<div class="text-fa">
							<h2><?php the_title(); ?></h2>
							<div id="txt"><span>
								<?php the_content(''); ?></span>
							</div>
							<!--<p id="more"><a href="#">ادامه مطلب این متن</a></p>-->
						</div>
					</div>
					<?php endwhile; else:
						echo "
							<div class='padding'>
								<div class='text-fa'>
									<h2>Not Found</h2>
									<div id='txt'>
										<p>متاسفانه مطلب درخواستی شما یافت نشد.</p>
									</div>
								</div>
							</div>
						";
					endif; ?>
				</div>
			</div>
		</div><!-- ///// end product_main ///// -->
		<div class="clear"></div>
		<div class="gallery_main border">
			<div class="gallery_container container">
				<div class="gallery">
					<div class="header">
						<?php include ("logo.php"); ?>
						<div class="menu">
							<ul>
								<li id="home-btn"><a href="#home">صفحه اصلی</a></li>
								<li id="product-btn"><a href="#product">معرفی محصولات</a></li>
								<li id="active" id="gallery-btn"><a href="#gallery">گالری عکس</a></li>
								<li><a href="#draw">قرعه کشی</a></li>
								<li><a href="#blog">وبلاگ</a></li>
								<li id="contactus-btn"><a href="#contact us">تماس با ما</a></li>
							</ul>
							<div class="clear"></div>
						</div>
					</div>
					<div class="clear"></div>
					<div class="padding">
						<div class="slideshow">
							<p>مکان قرارگیر اسلاید شو</p>
						</div>
					</div>
				</div>
			</div>
		</div><!-- ///// end gallery_main ///// -->
		<div class="clear"></div>
		<div class="contactus_main border">
			<div class="contactus_container container">
				<div class="contactus">
					<div class="header">
						<?php include ("logo.php"); ?>
						<div class="menu">
							<ul>
								<li id="home-btn"><a href="#home">صفحه اصلی</a></li>
								<li id="product-btn"><a href="#product">معرفی محصولات</a></li>
								<li id="gallery-btn"><a href="#gallery">گالری عکس</a></li>
								<li><a href="#draw">قرعه کشی</a></li>
								<li><a href="#blog">وبلاگ</a></li>
								<li id="active" id="contactus-btn"><a href="#contact us">تماس با ما</a></li>
							</ul>
							<div class="clear"></div>
						</div>
					</div>
					<div class="clear"></div>
					<div class="padding">
						<div class="slideshow">
							<p>مکان قرارگیری فرم تماس با ما</p>
						</div>
					</div>
				</div>
			</div>
		</div><!-- ///// end contactus_main ///// -->



	</div><!-- ///////////// end scroll ///////////// -->





