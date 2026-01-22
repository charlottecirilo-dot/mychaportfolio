# Quick Start Guide

## 🚀 Get Your Portfolio Running in 3 Steps

### Step 1: Install Dependencies
```bash
cd portfolio
npm install
```

### Step 2: Start Development Server
```bash
npm start
```

The portfolio will automatically open in your browser at `http://localhost:3000`

### Step 3: Customize Your Portfolio

#### Option A: Use the config.json
Edit `src/config.json` to update your personal information, and the components will use these values.

#### Option B: Direct Component Updates
1. **Update Hero** → Edit name and tagline in `src/components/Hero/Hero.jsx`
2. **Update About** → Edit bio in `src/components/About/About.jsx`
3. **Update Skills** → Edit tech stack in `src/components/Skills/Skills.jsx`
4. **Update Projects** → Add your projects to `src/components/Projects/Projects.jsx`
5. **Update Experience** → Add work history in `src/components/Experience/Experience.jsx`
6. **Update Contact** → Change email in `src/components/Contact/Contact.jsx`

## 🎨 Customization Quick Tips

### Change Colors
Edit the CSS variables in `src/styles/globals.css`:
```css
:root {
  --primary-color: #FF69B4;      /* Pink */
  --primary-light: #FFB6D9;      /* Light Pink */
  --primary-dark: #E85B9E;       /* Dark Pink */
  /* ... other colors ... */
}
```

### Add Project Images
Replace image URLs in `src/components/Projects/Projects.jsx`:
```javascript
image: 'https://your-image-url.com/project.jpg'
```

### Connect Contact Form
Add email service integration:
1. Install EmailJS: `npm install @emailjs/browser`
2. Update `src/components/Contact/Contact.jsx` with your EmailJS credentials

### Deploy to Production
```bash
npm run build
# Then deploy the 'build' folder to Vercel, Netlify, or GitHub Pages
```

## 📱 Test Responsiveness
- Press `F12` in browser to open DevTools
- Click the device toolbar to test on mobile, tablet, and desktop sizes

## ✅ Best Practices

1. ✨ Keep animations smooth - don't disable them on mobile
2. 📸 Optimize images before adding (use tools like TinyPNG)
3. 🔐 Never commit sensitive data (passwords, API keys)
4. 📝 Update README.md with your own information
5. 🧪 Test on actual devices, not just browser DevTools
6. ⚡ Check performance with Lighthouse (DevTools)
7. 🔍 Test accessibility with keyboard navigation

## 🆘 Troubleshooting

**Port 3000 already in use?**
```bash
npx kill-port 3000
npm start
```

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build fails?**
```bash
npm cache clean --force
npm install
npm run build
```

## 📚 Next Steps

1. Read the full [README.md](./README.md)
2. Deploy your portfolio to a hosting service
3. Add your own projects and content
4. Share your portfolio with the world!

---

Happy coding! 🚀
