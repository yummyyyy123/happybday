# 💙 Birthday Surprise Website

A beautiful, interactive birthday surprise website with countdown timer, animations, and engaging features.

## 🎂 Features

- **Countdown Timer**: Dynamic countdown to birthday date (March 10th at midnight)
- **Interactive Animations**: Particle effects, floating elements, and micro-interactions
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Photo Galleries**: Multiple photo display modes (timeline, polaroids, floating memories, slideshow)
- **Interactive Cake**: Clickable cake with candle-blowing animation
- **Sound Effects**: Visual sound feedback for interactions
- **Keyboard Shortcuts**: Space for celebrations, H for hearts, C for confetti
- **Mouse Trail**: Magical particle trail following cursor movement
- **Performance Optimized**: Smooth 60fps animations with hardware acceleration

## 🎨 Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Advanced animations, gradients, and transforms
- **JavaScript**: Vanilla JS with modern ES6+ features
- **Google Fonts**: Poppins, Playfair Display, Dancing Script
- **Responsive Design**: Mobile-first approach

## 📁 Project Structure

```
baby/
├── index.html          # Main HTML file
├── styles.css          # Complete styling with animations
├── script.js           # All JavaScript functionality
├── images/            # Birthday photos (12 photos)
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── ... (up to photo12.jpg)
├── music/             # Background music (optional)
│   └── romantic.mp3
└── README.md          # This file
```

## 🚀 Deployment to Vercel

### Step 1: Push to GitHub

```bash
# Initialize git repository
git init
git add .
git commit -m "Add birthday surprise website with countdown and animations"

# Create GitHub repository and push
git branch -M main
git remote add origin https://github.com/yourusername/birthday-surprise.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with your GitHub account
3. Click **"New Project"**
4. Select your `birthday-surprise` repository
5. Vercel will automatically:
   - Detect it as a static site
   - Build and deploy instantly
   - Give you a live URL like: `https://birthday-surprise.vercel.app`

### Alternative: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
cd baby
vercel --prod
```

## ⚙️ Configuration

### Current Settings
- **Target Date**: March 10th at midnight
- **Birthday Age**: 24th birthday
- **Photos**: 12 portrait-oriented images
- **Sections**: Countdown, Birthday celebration, Timeline, Polaroids, Floating Memories, Slideshow

### To Modify Birthday Date
Edit `script.js`:
```javascript
const targetDate = new Date();
targetDate.setMonth(2); // March (0-indexed)
targetDate.setDate(10); // 10th
targetDate.setHours(0, 0, 0, 0); // Midnight
```

## 📱 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile Safari (iOS 12+)
- ✅ Chrome Mobile (Android 8+)

## 🎯 Performance Features

- **Hardware Acceleration**: `will-change` and `transform3d`
- **Optimized Animations**: 60fps with efficient CSS
- **Particle Systems**: Object pooling for smooth effects
- **Responsive Images**: Proper aspect ratios and lazy loading
- **Minimal Reflows**: Efficient DOM manipulation

## 🎮 Interactive Elements

- **Click Effects**: Particle explosions, heart bursts, ripples
- **Hover Effects**: Floating particles and scale animations
- **Keyboard Controls**: 
  - `Space`: Celebration ripple
  - `H`: Heart burst
  - `C`: Confetti rain
  - `ESC`: Close popups
- **Mouse Trail**: 5% chance of sparkle particles on movement

## 💝️ Deployment Tips

### For Vercel Success:
1. **No build step needed** - it's a static site
2. **All files should be in root** - no subdirectories needed
3. **Images will be auto-optimized** by Vercel
4. **HTTPS included** automatically
5. **Custom domain** can be added later in Vercel dashboard

### Environment Variables (Optional):
- Add any API keys or config in Vercel dashboard
- Access via `process.env.VAR_NAME` if needed

## 💌 Special Features

- **Countdown Logic**: Automatically switches to birthday at midnight
- **Photo Galleries**: 4 different viewing modes
- **Interactive Cake**: Click to blow out candles
- **Love Button**: Special popup message
- **Wishes Section**: 6 animated wish cards
- **Memory Timeline**: Portrait photos with parallax scrolling

## 🎉 Live Deployment

Once deployed, your site will be available at:
`https://your-project-name.vercel.app`

Share the link with the birthday person, and they'll see:
1. Beautiful countdown (if before birthday)
2. Amazing birthday celebration (on/after birthday)
3. All your photos and memories
4. Interactive elements and surprises

---

**Made with 💙 for someone special on their 24th birthday!**

*Last updated: March 2026*
