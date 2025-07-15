# Maincode Candidate Experience

A comprehensive microsite experience designed to showcase Maincode to potential candidates, built with Astro and Starlight.

## About This Site

This site serves as an interactive introduction to Maincode for candidates going through our hiring process. It provides a complete picture of our company culture, values, team, and what it's like to work with us.

## What Candidates Will Find

### 🏠 **Welcome Experience**
- Welcoming homepage that introduces Maincode's mission and values
- Clear navigation through the candidate journey
- Introduction to what makes Maincode unique

### 📚 **Required Reading**
Essential articles that every candidate should read

### 📖 **Optional Deep Dives**
Blog-style articles for candidates who want to learn more

### 👥 **Meet the Team**

### 🚀 **Next Steps**
- hiring process overview
- How to apply and what to expect
- Contact information and ways to connect

## Project Structure

This project uses pnpm workspaces with the main site in the `docs/` directory, built with Astro and Starlight.

```
maincode-experience/
├── docs/                          # Main candidate microsite
│   ├── src/
│   │   └── content/
│   │       └── docs/
│   │           ├── index.mdx             # Homepage
│   │           ├── welcome.mdx           # Welcome page
│   │           ├── what-is-maincode.mdx  # Company overview
│   │           ├── required/             # Required reading
│   │           │   ├── company-values.mdx
│   │           │   ├── our-mission.mdx
│   │           │   └── development-practices.mdx
│   │           ├── blog/                 # Optional reading
│   │           │   ├── engineering-culture.mdx
│   │           │   |
│   │           │   └── polymath-human-collider.mdx
│   │           ├── team/                 # Team showcase
│   │           │   ├── leadership.mdx
│   │           │   ├── engineering.mdx
│   │           │   └── culture.mdx
│   │           ├── next-steps.mdx        # Hiring process
│   │           └── contact.mdx           # Contact information
│   ├── astro.config.ts           # Astro configuration
│   └── package.json
├── packages/
│   └── starlight-theme-flexoki/  # Custom Starlight theme
├── package.json
└── README.md
```

## Key Features

### 🎨 **Maincode v2 Design motifs**
- Clean, professional design using the Flexoki theme
- Responsive layout that works on all devices
- Intuitive navigation and user experience

### 📱 **Mobile-First**
- Optimized for mobile and tablet viewing
- Touch-friendly navigation and interactions
- Fast loading times across all devices

### 🔍 **SEO Optimized**
- Proper meta tags and descriptions
- Structured content for search engines
- OpenGraph tags for social sharing

### ♿ **Accessible**
- WCAG compliant design and content
- Screen reader friendly
- Keyboard navigation support

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/maincode-org/candidate-experience.git
cd candidate-experience
cd docs

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Development

```bash
# Start the development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Customization

### Content Updates
All content is stored in Markdown files in `docs/src/content/docs/`. To update:

1. Edit the relevant `.mdx` files
2. Changes will hot-reload in development
3. Commit and push to deploy

### Theme Customization
The site uses the Flexoki theme with custom overrides:
- Theme files are in `packages/starlight-theme-flexoki/`
- Custom styles can be added to `packages/starlight-theme-flexoki/styles.css`
- Component overrides are in `packages/starlight-theme-flexoki/overrides/`

### Navigation
Update the navigation structure in `docs/astro.config.ts` in the `sidebar` configuration.

## Content Guidelines

### Writing Style
- **Conversational but professional**: Write like you're talking to a colleague
- **Authentic**: Share real experiences and genuine perspectives
- **Inclusive**: Use language that welcomes everyone
- **Clear**: Avoid jargon and explain technical terms

### Structure
- **Start with context**: Help readers understand why this matters
- **Use headings**: Break up content with clear section headers
- **Include examples**: Concrete examples make abstract concepts clear
- **End with next steps**: Guide readers to their next action

### Tone
- **Welcoming**: Make candidates feel invited and valued
- **Transparent**: Be honest about challenges and opportunities
- **Inspiring**: Show the meaningful impact of the work
- **Human**: Remember there's a person behind every application

## Contributing

### Content Updates
1. Edit the relevant `.mdx` files
2. Test changes locally with `pnpm dev`
3. Submit a pull request with your changes

### Bug Reports
If you find issues with the site:
1. Check existing issues first
2. Create a new issue with details about the problem
3. Include steps to reproduce if applicable

### Feature Requests
For new features or improvements:
1. Discuss the idea in an issue first
2. Get approval from the team
3. Submit a pull request with the implementation


## Support

For questions about this site or the candidate experience:
- **Issues**: Create a Linear issue
- **General**: kees@maincode.com

---

*Built with ❤️ by 💼*
