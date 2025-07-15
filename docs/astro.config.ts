import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightThemeFlexoki from 'starlight-theme-flexoki';

export default defineConfig({
	site: 'https://maincode-experience.vercel.app',
	base: '/',
	image: {
		service: {
			entrypoint: 'astro/assets/services/sharp'
		},
		remotePatterns: [
			{
				protocol: 'https'
			}
		]
	},
	integrations: [
		starlight({
			title: 'Maincode',
			description: 'Your journey with Maincode starts here - learn about our company, culture, and what makes us special',
			social: {
				github: 'https://github.com/MaincodeHQ',
				linkedin: 'https://linkedin.com/company/maincode',
				twitter: 'https://twitter.com/maincode',
			},
			editLink: {
				baseUrl: 'https://github.com/maincode-org/candidate-experience/edit/main/docs/',
			},
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: 'https://maincode-experience.vercel.app/og.png',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:image:alt',
						content: 'Welcome to Maincode - Your journey starts here',
					},
				},
			],
			plugins: [starlightThemeFlexoki()],
			sidebar: [
				{
					label: 'Getting Started',
					items: ['welcome'],
				},
				{
					label: 'Required Reading',
					items: ['required/a-new-pathway', 'required/our-mission'],
				},
				{
					label: 'Optional Reading',
					items: ['blog/principles', 'blog/polymath-human-collider'],
				},
				{
					label: 'Meet the Team',
					items: ['team/leadership', 'team/culture'],
				},
				{
					label: 'Next Steps',
					items: ['next-steps'],
				},
			],
		}),
	],
});
