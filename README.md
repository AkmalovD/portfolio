# Modern Portfolio Website

A modern, minimalistic, and elegant frontend developer portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Inspired by [brittanychiang.com](https://brittanychiang.com/).

## ✨ Features

- **Modern Tech Stack**: Built with React 18 and Vite for blazing-fast performance
- **Smooth Animations**: Framer Motion powers all the delightful transitions and scroll animations
- **Responsive Design**: Fully responsive across all devices with mobile-first approach
- **Clean UI/UX**: Minimalistic design with lots of whitespace and a soft color palette
- **Smooth Scrolling**: Seamless navigation between sections using React Scroll
- **Accessibility**: Semantic HTML and ARIA labels for better accessibility
- **Performance Optimized**: Fast loading times and optimized bundle size

## 🎨 Design Features

- Fixed sidebar navigation on desktop
- Collapsible mobile menu with smooth animations
- Fade-in animations on scroll using Intersection Observer
- Custom color palette with teal/primary accent
- Hover effects and micro-interactions
- Timeline-based experience section
- Grid layout for projects showcase

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn installed on your machine

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed.

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization

### Personal Information

Update the following files with your information:

1. **src/components/Sidebar.jsx** - Your name and tagline
2. **src/components/Hero.jsx** - Hero section content
3. **src/components/About.jsx** - About section and technologies
4. **src/components/Experience.jsx** - Work experience
5. **src/components/Projects.jsx** - Your projects
6. **src/components/Contact.jsx** - Contact information and social links

### Colors

The color palette is defined in `tailwind.config.js`. You can customize:

- **Primary colors** (teal by default): Used for accents and highlights
- **Dark colors**: Background and text colors

### Fonts

The project uses the Inter font family. You can change this in:
- `index.html` - Google Fonts link
- `tailwind.config.js` - Font family configuration

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Scroll** - Smooth scrolling functionality

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx         # Desktop navigation
│   │   ├── MobileNav.jsx       # Mobile menu
│   │   ├── Hero.jsx            # Hero section
│   │   ├── About.jsx           # About section
│   │   ├── Experience.jsx      # Experience timeline
│   │   ├── Projects.jsx        # Projects showcase
│   │   ├── Contact.jsx         # Contact section
│   │   └── Footer.jsx          # Footer
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
└── package.json                # Dependencies

```

## 🎯 Sections

1. **Hero** - Introduction and call-to-action buttons
2. **About** - Personal introduction and tech stack
3. **Experience** - Professional work history with timeline
4. **Projects** - Featured and other projects with links
5. **Contact** - Contact information and social media links
6. **Footer** - Copyright and credits

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🌟 Key Features Explained

### Smooth Scroll Navigation
Uses React Scroll library to enable smooth scrolling between sections with offset for fixed headers.

### Framer Motion Animations
- Fade-in on mount for initial load
- Scroll-based animations using `useInView` hook
- Hover and tap animations for interactive elements

### Intersection Observer
Sections animate into view as they enter the viewport using Framer Motion's `useInView` hook.

## 📄 License

This project is open source and available for personal and commercial use.

## 🙏 Credits

Design inspiration from [Brittany Chiang](https://brittanychiang.com/)

## 📧 Contact

Feel free to reach out if you have any questions or suggestions!

---

Built with ❤️ using React + Vite

