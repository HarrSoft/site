<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, slide } from 'svelte/transition';
	import { writable } from 'svelte/store';
	import { preprocess } from 'svelte/compiler';

	const serviceCategories = [
		{
			name: 'Development',
			description:
				'We build websites, web apps, and mobile apps. We research your goals, design for the outcome you want to have, and we create business tools that help you reach success.'
		},
		{
			name: 'Identity',
			description:
				'We perform audits for your live applications and websites, discover pain points for your users/audience, and create solutions to improve them. This process can help you discover the potential of new features to attract and retain more people.'
		},
		{
			name: 'Research',
			description:
				'We create branding packages that provide you with imagery, illustrations, typekits, e-mail signatures, and brand guidelines that help you convey your message and reach the people you want to reach.'
		},
		{
			name: 'Marketing',
			description:
				'We create and implement social media and SEO strategies to get and keep you in front of your target audience. We focus on organic growth and only use paid advertising as needed.'
		}
	];
	let activeCategory = writable('Development');

	let observer: IntersectionObserver;

	onMount(() => {
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeCategory.set(entry.target.id);
					}
				});
			},
			{ threshold: 0.5 }
		);

		const sections = document.querySelectorAll('.service-section');
		sections.forEach((section) => observer.observe(section));
	});
</script>

<h1>Services</h1>
<div class="container">
	<div class="categories">
		<ul class="list-none p-0">
			{#each serviceCategories as category}
				<li class="my-4">
					<!-- <li on:click={() => scrollToCategory(category.name)}> -->
					<h2>
						<a
							href="#{category.name}"
							class="category-link {category.name === $activeCategory ? 'active' : ''}"
							>{category.name}</a
						>
					</h2>
					{#if category.name === $activeCategory}
						<p in:slide out:slide>{category.description}</p>
					{/if}
				</li>
			{/each}
		</ul>
	</div>

	<div class="content">
		<section id="Development" class="service-section" in:fly={{ y: 200, duration: 300 }}>
			<h2>Development</h2>

			<h3>Basic Website - Starting at $500</h3>
			<p>
				We build and provide a fully branded and customized modern WordPress FSE theme. That allows
				you to leverage the WordPress block editor to create dynamic layouts for all of your pages
				and posts. We work with you for the initial setup and get it to your desired state before
				handing it off for hosting/management.
			</p>
			<p>
				We also provide fully managed WordPress services where we take care of everything for a
				monthly fee that varies based on your business needs, allowing for feature requests and
				content updates.
			</p>

			<h3>Custom Webapp - Starting at $1500</h3>
			<p>
				We use modern JavaScript frameworks such as Nuxt, Next, and SvelteKit to create custom
				business and marketing tools that deliver next-generation web experiences to your customers.
			</p>
			<p>
				Upon completion of the app, we hand it off to you for hosting. Or, if you prefer a fully
				managed solution, you can hire us to take care of hosting and scaling your application.
			</p>

			<h3>Custom Cross-Platform Mobile App - Starting at $2000 + $300/month</h3>
			<p>
				We use Flutter to create cross-platform mobile applications that deploy to both iOS and
				Android.
			</p>
			<p>
				Due to the complexity of mobile development, we can only safely offer this service if we
				manage it ourselves.
			</p>
		</section>

		<section id="Identity" class="service-section" in:fly={{ y: 200, duration: 300 }}>
			<h2>Identity Systems</h2>
			<h3>Logo - Starting at $250</h3>
			<p>
				We tailor a custom logo that speaks to your brand's values and shows your target audience
				what you stand for. We will work with a team of illustrators, designers, and artists to
				create logos in any style that suits your business needs.
			</p>
			<p>
				Additionally, we can provide guidelines for how to use the logo in different scenarios, as
				well as variations of the logo for different use cases.
			</p>

			<h3>Business Cards - Starting at $250</h3>
			<p>
				We create bespoke business cards to suit the needs of your organization and its members.
				Every detail, from material and shape to aesthteic impact, will be styled to your brand
				identity.
			</p>

			<h3>Branding and Style Guide - Starting at $900</h3>
			<p>
				We dive deep into your mission to build custom logos, brand guidelines, social media assets,
				business cards, e-mail signatures, and everything else that makes an exceptional itentiy
				system that drives your success and forwards your vision. Our team will source creatives who
				resonate with your values to make sure you get exactly what you are looking for.
			</p>
		</section>

		<section id="Research" class="service-section" in:fly={{ y: 200, duration: 300 }}>
			<h2>User Research and UI Design</h2>

			<h3>UX Audit - Starting at $500</h3>
			<p>
				If you have a website or application that struggles with engagement, retaining users, or
				being used effectively, our audits can help. Have us research the who, what, and how of your
				issue so we can provide actionable steps for improvement.
			</p>

			<h3>UX Research - Starting at $1000</h3>
			<p>We research pain points and provide steps to improve user engagement.</p>

			<h3>UI Redesign - Starting at $500</h3>
			<p>
				Are you losing your audience to a dated UI that doesn't capture the core of your brand and
				vision? We can create a fresh new look for your website or app that make your message ring
				loud and clear.
			</p>

			<h3>UX/UI Prototyping - Starting at $1500</h3>
			<p>
				Do you need an entirely new website or application, but not know where to start? We build
				functional prototypes that cover every touchpoint for your audience and organization.
				Focusing on your goals, we will help determine which features and screens form a solution.
				Let us handle the details of visual elements and user experience. We can also optimize
				copywriting to streamline your message.
			</p>
			<p>
				Our process culminates in us studying how people use your new prototype. We then integrate
				feedback to refine this MVP into something that provides maximal value for your end users.
			</p>
		</section>

		<section id="Marketing" class="service-section" in:fly={{ y: 200, duration: 300 }}>
			<h2>Digital Marketing Strategy</h2>

			<h3>Market Research - Starting at $150</h3>
			<p>
				Whether you are starting something new or already providing a service, market research is
				crucial to knowing what your customers expect. Based on what you want to accomplish, we will
				conduct market analysis and interviews with members of your target audience. Revealing what
				your customers want out of your service steers development in the right direction, helping
				every aspect of your business succeed.
			</p>

			<h3>SEO Research - Starting at $250</h3>
			<p>We provide a technical SEO audit to improve your website's structure and rankability.</p>
			<p>
				First, we research your organization, services, and products. Then, we will identify key
				words and phrases that boost your search engine rankings. We will synthesize this
				information into a technical deep dive on changes that will improve your website's code
				structure, performance, and crawlability.
			</p>

			<h3>SEO Content - Starting at $50/post or page</h3>
			<p>
				Rank high and be recognized for your domain expertise with our search engine-optimized
				content. Our professional copywriters will help you attract visitors, make your service
				engaging, and showcase your domain expertise.
			</p>

			<h3>Social Media Strategy - Starting at $150</h3>
			<p>
				See more engagement with our long-term social media strategies. We analyze your niche and
				competition to craft workflows for growing your audience, then coach your team on how to
				execute.
			</p>
		</section>
	</div>
</div>

<style scoped>
	.container {
		display: flex;
	}

	.categories {
		position: sticky;
		top: 0;
		bottom: 0;
		padding: 1rem;
		width: 35%;
		height: 100vh;
		background-color: #f5f5f5;
	}

	.content {
		width: 75%;
		padding: 2rem;
	}

	.service-section {
		margin-top: 10vh;
		margin-bottom: 2rem;
		min-height: 75vh;
	}

	p {
		@apply mt-2 font-Roboto;
	}

	h2 {
		@apply mt-2 font-HCapsuleBlack font-black;
	}

	h3 {
		@apply mt-2 font-CapsuleSemiExpanded;
	}

	.category-link {
		transition: color 0.3s ease;
	}
	.category-link.active {
		color: tomato;
	}
</style>
