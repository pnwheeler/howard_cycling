<h2 class="pg-name-variant">Home</h2>
<div class="home-container">
	<img class="large-img div-block" src="./img/mountain_bikers.jpg" alt="Mountain bikers" />
	<section class="news center">
		<h3>Welcome!</h3>
		<h4 class="text-left">
			Welcome to the <em class="emphasize">NEW</em> Howard Cycling Club designed for high school students
			attending Howard High School.
		</h4>
		<br>
		<iframe
			width="560" 
			height="315" 
			class="iframe-embed"
			src="https://www.youtube-nocookie.com/embed/vYl-TwOqXj4"
			title="YouTube video player"
			frameborder="0"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		/>
	</section>
	<section class="div-block" style="width: 100%">
		<hr />
		<h2 class="heading-break">Howard Cycling Club Mission</h2>
		<hr />
	</section>
	<section class="div-block text-center" id="mission">
		<p>
			We build youth, character, and fitness through off-road cycling adventures. And we have fun.
			<em>Lots and lots of fun!</em>
		</p>
		<img src="/img/NICA_MD.png" alt="MD NICA logo" id="nica-logo" />
		<p>
			The Howard Cycling Club is a new youth mountain bike team participating in the Maryland
			Interscholastic Cycling League (MICL). MICL provides a fun, safe and high-quality mountain
			biking program for students in grades 9 to 12. With the cooperation of our partners and our
			sponsors, MICL provides a competitive mountain bike youth racing experience.
		</p>
	</section>
	<section class="nica-info border-blue pane bg-dark">
		<iframe
			width="480"
			height="270"
			class="iframe-embed"
			src="https://www.youtube-nocookie.com/embed/XRxPZiGYNLg"
			title="YouTube video player"
			frameborder="0"
			referrerpolicy="strict-origin-when-cross-origin"
			
			allowfullscreen
		/>
		<div class="div-block" id="nica-message">
			<p>
				We take all levels of riders. We do not have try outs and no one gets cut from the team. We
				are an inclusive and inviting team where we enjoy riding our bikes and pushing ourselves to
				achieve goals. Everyone comes just as they are to have fun. Some kids race and some kids
				just ride bikes. We fully embrace these core MICL values:
			</p>
			<ul>
				<li>Inclusive</li>
				<li>Equal</li>
				<li>Strong Body</li>
				<li>Strong Mind</li>
				<li>Strong Character</li>
			</ul>
		</div>
		<div class="div-block">
			<h3>Licensed Coaching &amp; Fully Insured</h3>
			<p>
				Licensed MICL coaches are familiar with the best coaching practices. Training includes risk
				management, team management, ride management, youth sports psychology, and more. Team
				events, practices, and races are fully insured through MICL.
			</p>
		</div>
		<div class="div-block">
			<h3>Equipment Discounts</h3>
			<p>
				MICL athletes and coaches have access to incredible discount opportunities from name brands
				like Trek, Specialized, Shimano, Fox, and more!
			</p>
		</div>
	</section>
	<section class="div-block" style="width: 100%">
		<hr />
		<h2 class="heading-break">Our Super Awesome Sponsors</h2>
		<hr />
	</section>
	<section id="sponsors" class="div-block">
		<div class="flex-row logos">
			<img src="/img/NICA.png" alt="NICA logo" id="nica-logo" />
			<img src="/img/NICA_MD.png" alt="NICA MD logo" />
			<img src="/img/patapsco_bicycles.png" alt="Patapsco Bicycles logo"/>
		</div>
	</section>
</div>

<style>
	h3 {
		color: var(--color-lighter);
	}
	.home-container {
		display: flex;
		flex-direction: column;
		gap: 1em;
		align-items: center;
	}
	.large-img {
		border-radius: 0.5rem;
		width: min(100%, 800px);
	}
	.news {
		width: min(100%, 700px);
	}
	#mission {
		align-items: center;
		width: min(100%, 700px);
	}
	#mission > img {
		width: 50%;
		max-width: 80vw;
	}
	.heading-break {
		font-variation-settings: var(--font-decorative);
		text-transform: uppercase;
		color: var(--color-lighter);
		font-size: min(var(--size-step-3), 5.5vw);
		text-align: center;
	}
	.nica-info {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1em;
		place-items: stretch;
		max-width: 1000px;
	}
	.iframe-embed {
		border-radius: 1em;
		max-width: 100%;
		max-height: 48vw;
		justify-self: center;
	}
	#nica-message {
		height: fit-content;
		align-self: end;
	}
	.logos {
		display: grid;
		grid-template-columns: 1fr 1fr;
		place-items: stretch;
	}
	.logos > img {
		object-fit: contain;
	}
	#sponsors {
		width: min(90vw, 800px);
		padding-block: 1em;
	}
	@media (max-width: 900px) {
		.nica-info {
			grid-template-columns: auto;
			gap: 1em;
		}
	}
</style>
