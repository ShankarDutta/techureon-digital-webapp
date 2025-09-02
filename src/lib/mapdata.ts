import {
	AboutWorkFlowCardsDataType,
	BlogCardsDataType,
	homeServiceCardsType,
	MultipleServiceSecDatasType,
	OurExpartsImagesType,
} from "./types";

// Home page card
export const homeServiceCards: homeServiceCardsType[] = [
	{
		id: 1,
		heading: "Brand Design",
		discription:
			"Visual identities that inspire trust and growth of Your Identity. We craft with clarity and purpose.",
		pointsI: "Logos infused with hidden stories.",
		pointsII: "Scalable visual identities for growth.",
		pointsIII: "Style guides anyone can follow easily.",
		link: "/brand-design",
	},
	{
		id: 2,
		heading: "UI/UX Design",
		discription:
			"Interfaces that delight users and drive conversions. We design with outcomes in mind.",
		pointsI: "User flows that boost engagement.",
		pointsII: "Prototypes in under three days.",
		pointsIII: "Mobile-first, award-winning design.",
		link: "/ui-ux-design",
	},
	{
		id: 3,
		heading: "Development",
		discription:
			"Websites that load fast, rank higher, and grow with you. No bloated code—just seamless Webflow experiences.",
		pointsI: "Future-ready tech for easy scaling.",
		pointsII: "Lightning-fast loads with optimized code.",
		pointsIII: "Seamless integrations with favorite tools.",
		link: "/development",
	},
	{
		id: 4,
		heading: "Marketing",
		discription:
			"Strategies that amplify your brand and drive measurable growth. We craft campaigns with impact in mind.",
		pointsI: "Data-driven campaigns that convert.",
		pointsII: "Creative content that grabs attention.",
		pointsIII: "Multi-channel strategies for wider reach.",
		link: "/marketing",
	},
];

export const AboutWorkFlowCardsDatas: AboutWorkFlowCardsDataType[] = [
	{
		id: 1,
		title: "Discover & Plan",
		description:
			"We dive deep into your goals, and 'must-haves' to craft a battle plan.",
		buttonText: "Step 1",
		icon: "/about/icon1.png",
	},
	{
		id: 2,
		title: "Design & Build",
		description:
			"You’ll see real work fast—with checkpoints to refine every detail.",
		buttonText: "Step 2",
		icon: "/about/icon2.png",
	},
	{
		id: 3,
		title: "Launch & Grow",
		description: "We don’t just deliver—we optimize for long-term success.",
		buttonText: "Step 3",
		icon: "/about/icon3.png",
	},
];

export const OurExpartsImages: OurExpartsImagesType[] = [
	{
		id: 1,
		src: "team-01.jpg",
		alt: "Img-1",
		name: "John Doe",
		position: "Founder",
	},
	{
		id: 2,
		src: "team-02.jpg",
		alt: "Img-2",
		name: "Jane Smith",
		position: "Frontend Developer",
	},
	{
		id: 3,
		src: "team.jpg",
		alt: "Img-3",
		name: "Sophia Williams",
		position: "UI/UX Designer",
	},
	{
		id: 4,
		src: "team-04.jpg",
		alt: "Img-4",
		name: "Emily Davis",
		position: "Project Manager",
	},
	{
		id: 5,
		src: "team-05.jpg",
		alt: "Img-5",
		name: "David Brown",
		position: "QA Specialist",
	},
];

export const BlogCardsDatas: BlogCardsDataType[] = [
	{
		id: 1,
		img: "post-01.jpg",
		badge: "UI/UX Design",
		title: "How We Boosted Client Conversions With Smarter UI/UX",
		subtitle: "Sep 23, 2020 · 1 min read",
		slug: "how-we-boosted-client-conversions-with-smarter-ui-ux",

		Content: {
			heading1: "Understanding the Problem: Why UI/UX Matters",
			paragraph1:
				"Before the redesign, our client’s website was suffering from high bounce rates, low engagement, and a confusing user journey. The navigation was cluttered, CTAs (calls to action) were inconsistent, and the overall visual hierarchy did not guide users toward conversion. Users simply didn’t know what to do next—so they left.",
			paragraph2:
				"To turn this around, we focused on one key principle: clarity through design. We mapped user behavior, identified bottlenecks, and restructured the site using strategic UI/UX principles aimed at guiding the user effortlessly from landing to conversion.",
			qoute: "“When users don’t have to think about how to navigate your product, they can focus entirely on its value.”",
			heading2: "The UI/UX Overhaul That Changed Everything",
			paragraph3:
				"Simplified menus and consistent call-to-action buttons across pages made it easier for users to find what they were looking for.With over 70% of traffic coming from mobile devices, we optimized every component for smaller screens, ensuring fast load times and easy interactivity.We restructured page layouts to prioritize key actions, using contrast, whitespace, and typography to highlight what matters most.Engaging headlines and subtle animations helped keep users engaged and nudged them toward conversions..",
			heading3: "",
			paragraph4:
				"Page load times were reduced by 40%, which directly contributed to decreased bounce rates and longer session durations.",
		},
	},
	{
		id: 2,
		img: "post-02.jpg",
		badge: "Branding",
		title: "Why Your Logo Colors Are Driving Away Your Ideal Customers",
		subtitle: "Dec 24, 2020 · 1 min read",
		slug: "why-your-logo-colors-are-driving-away-your-ideal-customers",

		Content: {
			heading1: "Choosing the Wrong Colors Can Hurt Your Brand",
			paragraph1:
				"Your logo is often the first impression your brand makes—and color plays a crucial role in shaping that impression. The wrong color palette can unintentionally convey emotions or messages that don’t align with your brand values, turning away the very customers you’re trying to attract. For example, using harsh reds for a wellness brand might evoke urgency or aggression rather than calm and trust.",
			paragraph2:
				"Color psychology tells us that different hues evoke different responses: blue signals trust and professionalism, yellow feels youthful and energetic, and black implies luxury and sophistication.",
			qoute: "“Color is not just an aesthetic choice—it’s a strategic tool that influences how people feel about your brand in just seconds.”",
			heading2:
				"Align Color With Brand Personality and Audience Expectations",
			paragraph3:
				"Think about your brand’s personality: is it playful or serious, bold or minimalist? Your color choices should reinforce that. For example, a children’s toy company might use vibrant, cheerful colors like orange and lime green, while a fintech startup might choose cool blues and muted grays to reflect stability and trust.",
			heading3: "",
			paragraph4:
				"If you’re targeting eco-conscious consumers, earthy greens and neutrals make more sense than electric pinks or glossy metallics. Understanding your ideal customer’s mindset, lifestyle, and preferences helps guide color choices that attract rather than repel.",
		},
	},
	{
		id: 3,
		img: "post-03.jpg",
		badge: "Web Development",
		title: "WordPress vs Webflow – Our Developers Settle The Debate",
		subtitle: "Jun 17, 2021 · 2 min read",
		slug: "wordpress-vs-webflow-our-developers-settle-the-debate",

		Content: {
			heading1: "Understanding SEO-Friendly Mobile Site Structures",
			paragraph1:
				"When optimizing websites for mobile devices, the site structure plays a pivotal role in SEO performance. A clean, organized layout improves user experience and ensures that search engines can easily crawl and index the content. Mobile SEO focuses on ensuring fast load times, logical navigation, and the right content hierarchy. Mobile users are often looking for quick answers, so a streamlined structure with clear call-to-action buttons is essential. Additionally, implementing responsive design allows your website to adapt seamlessly across different screen sizes, which is crucial for both user experience and SEO.",
			paragraph2: "",
			qoute: "“Optimizing for mobile SEO isn’t just about speed—it’s about making your content accessible and providing a seamless, efficient experience that users will appreciate.”",
			heading2: "Best Practices for Mobile SEO Site Structure",
			paragraph3:
				"To make a mobile site SEO-friendly, it’s important to understand how to structure content for both usability and search engine crawling. A logical hierarchy with easy-to-follow menus and clear headings ensures that search engines can properly index your content. For example, avoid overly complex navigation menus that may confuse both users and search engines.",
			heading3: "",
			paragraph4:
				"Mobile-friendly content should also load quickly. Techniques like lazy loading for images and proper use of JavaScript frameworks help keep the page responsive. Proper internal linking is also essential to guide users and search engines through the site, ensuring that valuable pages are prioritized and easily found.",
		},
	},
	{
		id: 4,
		img: "post-04.jpg",
		badge: "Web Development",
		title: "The Lazy Developer’s Guide to SEO-Friendly Site Structures",
		subtitle: "Aug 23, 2022 · 2 min read",
		slug: "the-lazy-developers-guide-to-seo-friendly-site-structures",

		Content: {
			heading1: "Understanding SEO-Friendly Mobile Site Structures",
			paragraph1:
				"When optimizing websites for mobile devices, the site structure plays a pivotal role in SEO performance. A clean, organized layout improves user experience and ensures that search engines can easily crawl and index the content. Mobile SEO focuses on ensuring fast load times, logical navigation, and the right content hierarchy. Mobile users are often looking for quick answers, so a streamlined structure with clear call-to-action buttons is essential. Additionally, implementing responsive design allows your website to adapt seamlessly across different screen sizes, which is crucial for both user experience and SEO.",
			paragraph2: "",
			qoute: "“Optimizing for mobile SEO isn’t just about speed—it’s about making your content accessible and providing a seamless, efficient experience that users will appreciate.”",
			heading2: "Best Practices for Mobile SEO Site Structure",
			paragraph3:
				"To make a mobile site SEO-friendly, it’s important to understand how to structure content for both usability and search engine crawling. A logical hierarchy with easy-to-follow menus and clear headings ensures that search engines can properly index your content. For example, avoid overly complex navigation menus that may confuse both users and search engines.",
			heading3: "",
			paragraph4:
				"Mobile-friendly content should also load quickly. Techniques like lazy loading for images and proper use of JavaScript frameworks help keep the page responsive. Proper internal linking is also essential to guide users and search engines through the site, ensuring that valuable pages are prioritized and easily found.",
		},
	},
	{
		id: 5,
		img: "post-5.jpg",
		badge: "UI/UX Design",
		title: "Mobile-First Design Mistakes That Are Costing You Customers",
		subtitle: "Oct 02, 2022 · 1 min read",
		slug: "mobile-first-design-mistakes-that-are-costing-you-customers",

		Content: {
			heading1: "Ignoring User Experience Across Devices.",
			paragraph1:
				"In today’s digital landscape, designing for mobile first is essential. Many businesses still make the mistake of creating desktop versions of their websites and then scaling them down for mobile. This approach leads to a poor mobile user experience, causing frustration for users and potentially losing customers. With the majority of web traffic coming from mobile devices, it’s critical to ensure that the mobile version is not just a downsized desktop version but a well-optimized experience designed from the ground up for small screens and touch navigation.",
			paragraph2: "",
			qoute: "“Neglecting the mobile-first approach could lead to lost customers and missed opportunities, as users increasingly expect seamless, intuitive interactions across all devices.””",
			heading2: "Slow Load Times on Mobile Devices.",
			paragraph3:
				"Automation in client onboarding goes beyond simply saving time; it significantly improves client engagement and satisfaction. By automating repetitive tasks, we can focus on building stronger relationships with clients through personalized communication and support. For example, with automated email workflows and client feedback collection, we ensure that clients feel attended to throughout the onboarding journey. This level of automation also ensures that no step is missed, maintaining consistency and reducing the risk of human error.",
			heading3: "",
			paragraph4:
				"Ensuring that your website loads quickly on mobile devices also contributes to better SEO rankings. Google, for instance, prioritizes mobile-friendly websites in search results, which means that a slow-loading site could affect your visibility and ability to attract organic traffic.",
		},
	},
	{
		id: 6,
		img: "post-06.jpg",
		badge: "Web Development",
		title: "How We Automated 80% of Client Onboarding With No-Code",
		subtitle: "Mar 12, 2023 · 1 min read",
		slug: "how-we-automated-80-percent-of-client-onboarding-with-no-code",

		Content: {
			heading1: "Streamlining Onboarding with No-Code Solutions",
			paragraph1:
				"Client onboarding is a critical stage in ensuring a seamless relationship between the company and its clients. Traditionally, it involved multiple manual processes, from collecting information to inputting data into various systems. However, with the advent of no-code platforms, we automated approximately 80% of our client onboarding process. This transformation not only saved time but also minimized errors and increased efficiency. By leveraging tools like Zapier, Airtable, and Typeform, we automated tasks such as form submission, data entry, communication, and file storage, enabling a smoother experience for both our team and clients.",
			paragraph2: "",
			qoute: "“Automating routine tasks with no-code tools has dramatically improved our efficiency, allowing us to deliver better service to clients while focusing on the aspects of onboarding that truly matter.”",
			heading2: "The Impact of Automation on Client Engagement",
			paragraph3:
				"Automation in client onboarding goes beyond simply saving time; it significantly improves client engagement and satisfaction. By automating repetitive tasks, we can focus on building stronger relationships with clients through personalized communication and support. For example, with automated email workflows and client feedback collection, we ensure that clients feel attended to throughout the onboarding journey. This level of automation also ensures that no step is missed, maintaining consistency and reducing the risk of human error.",
			heading3: "",
			paragraph4:
				"Additionally, automating parts of the process allowed us to gather actionable insights faster, enabling our team to adjust our approach and offerings based on real-time data.",
		},
	},
	{
		id: 7,
		img: "post-07.jpg",
		badge: "Branding",
		title: "The $500 Rebrand That Made Our Client Look Like a Fortune 500",
		subtitle: "Feb 13, 2024 · 1 min read",
		slug: "the-500-rebrand-that-made-our-client-look-like-a-fortune-500",

		Content: {
			heading1: "A Strategic Design Overhaul: The Power of Simplicity",
			paragraph1:
				"When we were approached by a local startup with a modest budget of $500 for a rebrand, we knew that a visual transformation could change how they were perceived in their industry. Our goal was to create a brand identity that was not only visually appealing but also communicated a sense of trust, professionalism, and high-quality service that would resonate with a larger audience. By focusing on clean, modern design elements and strategic typography, we were able to create a sophisticated look that positioned the brand to appear like a Fortune 500 company.",
			paragraph2: "",
			qoute: "“A brand is not just a logo—it’s the story you tell, the trust you build, and the experience you deliver.”",
			heading2: "Brand Identity: Less Is More",
			paragraph3:
				"In a crowded marketplace, it’s often the brands that simplify their messaging that stand out the most. The client’s previous logo was cluttered and didn’t communicate their core values effectively. By focusing on a minimalist approach, we created a sleek, simple logo that spoke volumes about the brand’s vision and values. The refined color palette and crisp typography gave the brand an elevated, high-end feel—one that aligns with the company’s aspirations and market position.",
			heading3: "",
			paragraph4:
				"The visual overhaul included redesigning the website to match the new branding. We created a responsive, modern design that improved user experience and engagement. The layout was simplified to highlight key information and make navigation easier",
		},
	},
	{
		id: 8,
		img: "post-08.jpg",
		badge: "Web Development",
		title: "How We Built a 98/100 PageSpeed Score Website in 2 Weeks",
		subtitle: "Jan 08, 2025 · 1 min read",
		slug: "how-we-built-a-98-100-pagespeed-score-website-in-2-weeks",

		Content: {
			heading1:
				"Key Optimizations for Achieving a 98/100 PageSpeed Score",
			paragraph1:
				"Achieving a high PageSpeed score is not just about speeding up a website—it’s about optimizing both the front-end and back-end performance for the best user experience. In our case, we focused on several strategies to make the website faster without compromising functionality.",
			paragraph2:
				"This included optimizing image sizes, reducing HTTP requests, leveraging browser caching, and minifying CSS and JavaScript files. By using these techniques, we were able to reduce page load times significantly, making the site not only faster but also more responsive across devices.",
			qoute: "“A website’s speed is crucial for both SEO and user retention. Every millisecond matters, and a faster website leads to better user experience and higher conversion rates.”",
			heading2: "Prioritizing Performance While Maintaining Aesthetics",
			paragraph3:
				"One of the biggest challenges when optimizing for speed is balancing design aesthetics with performance. To maintain a beautiful and functional website while optimizing for speed, we leveraged lazy loading for images and videos, reducing the initial load time significantly. We also used modern front-end frameworks and a Content Delivery Network (CDN) to ensure fast loading times no matter where the user is located.",
			heading3: "",
			paragraph4:
				"Throughout the process, we continually tested and refined the website, ensuring it stayed visually appealing while enhancing its performance.",
		},
	},
	{
		id: 9,
		img: "post-09.jpg",
		badge: "Branding",
		title: "How We Made a Boring B2B Brand Go Viral",
		subtitle: "Sep 19, 2025 · 1 min read",
		slug: "how-we-made-a-boring-b2b-brand-go-viral",

		Content: {
			heading1: " Turning Complexity into Clarity",
			paragraph1:
				"We partnered with a logistics software company struggling to stand out. Their content was technical and lifeless—great product, but no spark. Our first step? Repositioning their message. We ditched jargon and told relatable stories, shifting from “freight optimization software” to “making shipping headaches disappear.” The difference was immediate—engagement on LinkedIn started climbing.",
			paragraph2: "",
			qoute: "“The moment we stopped talking features and started telling stories, people listened.”",
			heading2: "Making B2B Fun (Yes, Really)",
			paragraph3:
				"We launched a #ShippingFails content series—real shipping mishaps, expert tips, and humor. It struck a nerve. Posts were shared, laughed at, and most importantly, remembered. We repurposed top posts into LinkedIn carousels, short videos, and blog content that was both useful and entertaining. One post got 40,000+ organic impressions.",
			heading3: "From Views to Value",
			paragraph4:
				"To drive results, we added strong CTAs—checklists, webinars, demo invites—ensuring viral content led to real conversions. The result? A 2x increase in leads and a brand that went from invisible to industry favorite.",
		},
	},
];

export const MultipleServiceSecDatas: MultipleServiceSecDatasType[] = [
	{
		url: "brand-design",

		heroheading: "Brand Design",
		heroparagraph: `Your brand is more than a logo – it’s your competitive
						edge. We develop comprehensive visual identities
						including color systems, typography hierarchies, and
						design languages that communicate your unique value.
						Let’s Rebrand `,
		heroimg: "/Services/brand-design/service-02.jpg",
		btn: "Let's Rebrand",

		mainheading: "Branding That Demands Attention",
		mainparagraph: `Your brand is more than a logo—it’s your story. We build
					memorable visual identities from the ground up, including
					logos, color systems, typography, and style guides. Our
					strategic approach ensures your brand stands out, resonates
					with your audience, and scales seamlessly as you grow.`,
		mainimg: "/Services/brand-design/Brand-Design.png",

		cardsecheading: "Our Brand Design Process",

		cradheading1: "Discovery",
		cradheading2: "Conceptualize",
		cradheading3: "Build the System",

		cardpargraph1: "We learn what makes you and your product unique.",
		cardpargraph2:
			"Where creativity meets strategy. Color palette exploration",
		cardpargraph3: "Polishing every touchpoint. Mockups & asset templates",
	},
	{
		url: "ui-ux-design",

		heroheading: "UI/UX Design",
		heroparagraph: `We craft user experiences that drive action, not just
					admiration. Whether it’s a conversion-focused SaaS dashboard
					or a mobile app that users can’t put down, our process
					blends behavioral psychology with pixel-perfect execution. `,
		heroimg: "/Services/uiux/service-01.jpg",
		btn: "Get a Free UX Audit",

		mainheading: "Design That Works as Hard as You Do",
		mainparagraph: `	We craft user-centric interfaces that blend aesthetics with
				functionality, turning complex workflows into intuitive
				experiences. Through wireframing, prototyping, and usability
				testing, we design digital products that reduce friction, boost
				engagement, and drive conversions—whether it’s a SaaS dashboard,
				mobile app, or e-commerce platform.`,
		mainimg: "/Services/uiux/Service-1-Img-1.png",

		cardsecheading: "Our UI/UX Design Process",

		cradheading1: "Discover & Define",
		cradheading2: "Ideate & Prototype",
		cradheading3: "Refine & Validate",

		cardpargraph1:
			"We start by learning your business – its ambitions & challenges.",
		cardpargraph2:
			"Transforming insights into tangible designs – Accelerate your growth.",
		cardpargraph3:
			"Perfecting every pixel with real user feedback & user serveys.",
	},
	{
		url: "development",

		heroheading: "Web Development",
		heroparagraph: `Modern businesses deserve modern websites. We build
						lightning-fast Webflow sites with custom CMS
						architectures, animations that enhance storytelling, and
						SEO-optimized structures. Say goodbye to WordPress
						bloat. `,
		heroimg: "/Services/webdev/post-06.jpg",
		btn: "Build your website",

		mainheading: "Websites Built for Speed & Results",
		mainparagraph: `Websites Built for Speed & Results Say goodbye to slow,
					clunky websites. We build lightning-fast, SEO-optimized
					Webflow sites with custom CMS architectures, sleek
					animations, and editor-friendly interfaces. Whether you need
					a marketing site or a scalable web app, we deliver
					performance and polish without bloated code.`,
		mainimg: "/Services/webdev/Webfloe-Img.png",

		cardsecheading: "Our Web-Dev Process",

		cradheading1: "Plan & Architect",
		cradheading2: "Build & Optimize",
		cradheading3: "Launch & Scale",

		cardpargraph1:
			"We design and develop high-conversion digital experiences.",
		cardpargraph2:
			"From pixel-perfect interfaces to scalable architectures.",
		cardpargraph3:
			"We design and develop high-conversion digital experiences.",
	},
	{
		url: "marketing",

		heroheading: "Marketing Service",
		heroparagraph: `A trusted SEO and Digital Marketing partner in the USA,
						we craft tailored strategies—SEO, PPC, social media, and
						content marketing—that deliver measurable growth for
						your business `,
		heroimg: "/Services/marketing/image.png",
		btn: "Launch Your Success",

		mainheading: "Marketing That Works as Hard as You Hustle",
		mainparagraph: `We create digital experiences that put users first—where design
				meets functionality to deliver real impact. By combining
				research-driven insights with wireframing, prototyping, and
				usability testing, we transform complex ideas into seamless
				interactions. From SaaS platforms to mobile apps and e-commerce
				solutions, our designs reduce friction, enhance engagement, and
				drive measurable growth for your business.`,
		mainimg: "/Services/marketing/market.jpg",

		cardsecheading: "Our Web-Dev Process",

		cradheading1: "1. Research & Strategize",
		cradheading2: "2. Execute & Optimize",
		cradheading3: "3. Scale & Dominate",

		cardpargraph1:
			"We analyze your market, audience, and competitors to craft data-driven strategies.",
		cardpargraph2:
			"From SEO and ads to content and social, we execute campaigns that convert.",
		cardpargraph3:
			"We amplify results, boost ROI, and scale your brand’s digital presence for lasting growth.",
	},
];
