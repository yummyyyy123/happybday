// Countdown and Birthday Reveal Logic
const targetDate = new Date();
targetDate.setMonth(2); // March (0-indexed)
targetDate.setDate(10); // 10th
targetDate.setHours(0, 0, 0, 0); // Midnight

const countdownSection = document.getElementById('countdown-section');
const birthdaySection = document.getElementById('birthday-section');
const typewriterText = document.getElementById('typewriter-text');

// Birthday message for typewriter effect
const birthdayMessage = `Happy 24th Birthday, my love 💙

Gusto ko lang magsulat ng simple na letter for you, kasi minsan the best way to say things is just straight from the heart.

I hope today reminds you kung gaano ka ka-special. Not just today, but every single day. You bring so much happiness, warmth, and light into my life. Kahit yung mga ordinary na moments, nagiging special basta kasama kita.

I feel really lucky na nakilala kita. I love the way you smile, the way you care about people, and how you make everything feel a little better just by being there. Parang somehow, you make my world calmer and brighter at the same time.

I hope this year brings you more happiness, more adventures, and more dreams coming true. Deserve mo lahat ng good things in life, and I hope you always remember how amazing you are.

Thank you for being patient with me, for laughing with me, and for sharing your life with me. I'm really grateful for all the memories we've made together, and I'm excited for all the memories we'll still create.

So today, I just want you to feel extra loved and appreciated — because you truly deserve it.

Happy 24th birthday again. I'm really glad na pinagtagpo tayo ng tadhana.

Love,
Me 💙`;

// Check if it's already past the target time
function checkTime() {
    const now = new Date();
    const difference = targetDate - now;
    return difference <= 0;
}

// Update countdown timer
function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        showBirthday();
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Show birthday section
function showBirthday() {
    console.log('Showing birthday section...');
    
    // Get elements
    const countdownSection = document.getElementById('countdown-section');
    const birthdaySection = document.getElementById('birthday-section');
    const typewriterText = document.getElementById('typewriter-text');
    
    console.log('Elements found:', {
        countdownSection: !!countdownSection,
        birthdaySection: !!birthdaySection,
        typewriterText: !!typewriterText
    });
    
    // Hide countdown and show birthday
    if (countdownSection) {
        countdownSection.classList.add('hidden');
        console.log('Countdown section hidden');
    }
    
    if (birthdaySection) {
        birthdaySection.classList.remove('hidden');
        console.log('Birthday section shown');
    }
    
    // Start all birthday features
    if (typewriterText) {
        startTypewriter();
    }
    createConfetti();
    createEnhancedFloatingElements();
    addTitleInteractions();
    addWishCardInteractions();
    initializePolaroids();
    initializeCarousel();
    initializeFloatingMemories();
    initializeSlideshow();
    initializeTimelineInteractions();
    initializeCakeInteraction();
    
    // Add welcome celebration
    setTimeout(() => {
        createCelebrationRipple();
        const birthdayTitle = document.querySelector('.birthday-title');
        if (birthdayTitle) {
            createParticleExplosion(birthdayTitle);
        }
    }, 1000);
    
    console.log('Birthday section fully initialized');
}

// Typewriter effect
function startTypewriter() {
    let index = 0;
    const text = birthdayMessage;
    const typewriterText = document.getElementById('typewriter-text');
    
    console.log('Starting typewriter effect...');
    
    if (!typewriterText) {
        console.error('Typewriter element not found!');
        return;
    }
    
    typewriterText.textContent = ''; // Clear existing text
    
    function type() {
        if (index < text.length) {
            typewriterText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50);
        } else {
            console.log('Typewriter effect completed');
        }
    }
    
    type();
}

// Create enhanced floating elements with performance optimization
function createEnhancedFloatingElements() {
    const heartsContainers = document.querySelectorAll('.floating-hearts');
    
    heartsContainers.forEach(container => {
        container.innerHTML = '';
        // Reduce number of elements for better performance
        const elementCount = window.innerWidth < 768 ? 8 : 15;
        
        for (let i = 0; i < elementCount; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = ['💙', '💕', '💖', '✨', '🌟'][Math.floor(Math.random() * 5)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 6 + 's';
            heart.style.fontSize = (Math.random() * 15 + 12) + 'px';
            heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
            heart.style.willChange = 'transform'; // Performance optimization
            container.appendChild(heart);
        }
    });
    
    // Add birthday balloons with reduced count
    const balloonsContainer = document.createElement('div');
    balloonsContainer.className = 'birthday-balloons';
    balloonsContainer.style.cssText = `
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
    `;
    
    const balloonCount = window.innerWidth < 768 ? 4 : 6;
    for (let i = 0; i < balloonCount; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.textContent = ['🎈', '🎈', '🎀', '🎁'][Math.floor(Math.random() * 4)];
        balloon.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 15 + 20}px;
            left: ${Math.random() * 100}%;
            animation: floatBalloon ${Math.random() * 4 + 8}s ease-in-out infinite;
            animation-delay: ${Math.random() * 4}s;
            will-change: transform;
        `;
        balloonsContainer.appendChild(balloon);
    }
    
    // Add balloons to both sections
    document.querySelectorAll('.section').forEach(section => {
        section.appendChild(balloonsContainer.cloneNode(true));
    });
    
    // Add balloon animation to CSS
    const balloonStyle = document.createElement('style');
    balloonStyle.textContent = `
        @keyframes floatBalloon {
            0%, 100% {
                transform: translateY(100vh) rotate(-10deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(10deg);
                opacity: 0;
            }
        }
        
        .balloon {
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
        }
        
        .heart {
            will-change: transform;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
        }
    `;
    document.head.appendChild(balloonStyle);
}

// Create sparkles with performance optimization
function createSparkles() {
    const sparklesContainer = document.querySelector('.sparkles');
    if (!sparklesContainer) return;
    
    // Reduce sparkle count for performance
    const sparkleCount = window.innerWidth < 768 ? 10 : 15;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 3 + 's';
        sparkle.style.animationDuration = (Math.random() * 2 + 2) + 's';
        sparkle.style.willChange = 'transform, opacity';
        sparklesContainer.appendChild(sparkle);
    }
}

// Create stars with performance optimization
function createStars() {
    const starsContainer = document.querySelector('.stars');
    if (!starsContainer) return;
    
    // Reduce star count for performance
    const starCount = window.innerWidth < 768 ? 15 : 20;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 4 + 's';
        star.style.animationDuration = (Math.random() * 3 + 3) + 's';
        star.style.willChange = 'transform, opacity';
        starsContainer.appendChild(star);
    }
}

// Create confetti with performance optimization
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    if (!confettiContainer) return;
    
    confettiContainer.innerHTML = '';
    
    // Reduce confetti count for performance
    const confettiCount = window.innerWidth < 768 ? 30 : 50;
    const colors = ['#87CEEB', '#FFB6C1', '#98FB98', '#DDA0DD', '#F0E68C'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
        confetti.style.width = (Math.random() * 8 + 5) + 'px';
        confetti.style.height = (Math.random() * 8 + 5) + 'px';
        confetti.style.willChange = 'transform, opacity';
        confettiContainer.appendChild(confetti);
    }
}

// Love button functionality
const loveButton = document.getElementById('love-button');
const lovePopup = document.getElementById('love-popup');
const closePopup = document.getElementById('close-popup');

if (loveButton) {
    loveButton.addEventListener('click', () => {
        lovePopup.classList.remove('hidden');
        createHeartBurst();
    });
}

if (closePopup) {
    closePopup.addEventListener('click', () => {
        lovePopup.classList.add('hidden');
    });
}

// Add interactive click effects to titles
function addTitleInteractions() {
    const countdownMessage = document.querySelector('.countdown-message');
    const birthdayTitle = document.querySelector('.birthday-title');
    
    if (countdownMessage) {
        countdownMessage.addEventListener('click', () => {
            createMiniHeartBurst(countdownMessage);
            createParticleExplosion(countdownMessage);
            // Add a fun sound effect simulation
            countdownMessage.style.transform = 'scale(0.95)';
            setTimeout(() => {
                countdownMessage.style.transform = '';
            }, 150);
        });
        
        // Add hover effect
        countdownMessage.addEventListener('mouseenter', () => {
            createFloatingParticles(countdownMessage, 3);
        });
    }
    
    if (birthdayTitle) {
        birthdayTitle.addEventListener('click', () => {
            createMiniHeartBurst(birthdayTitle);
            createParticleExplosion(birthdayTitle);
            createCelebrationRipple();
            // Add celebration effect
            birthdayTitle.style.transform = 'scale(1.1) rotateY(5deg)';
            setTimeout(() => {
                birthdayTitle.style.transform = '';
            }, 300);
        });
        
        // Add hover effect
        birthdayTitle.addEventListener('mouseenter', () => {
            createFloatingParticles(birthdayTitle, 5);
        });
    }
}

// Create particle explosion effect
function createParticleExplosion(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const particles = ['✨', '⭐', '💫', '🌟', '✦', '✧', '⋆'];
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        particle.style.cssText = `
            position: fixed;
            font-size: ${Math.random() * 20 + 15}px;
            color: ${['#FFD700', '#87CEEB', '#FFB6C1', '#98FB98'][Math.floor(Math.random() * 4)]};
            pointer-events: none;
            z-index: 10000;
            left: ${centerX}px;
            top: ${centerY}px;
            transform: translate(-50%, -50%);
            animation: particleExplosion 1.5s ease-out forwards;
            --x: ${(Math.random() - 0.5) * 200}px;
            --y: ${(Math.random() - 0.5) * 200}px;
            --rotation: ${Math.random() * 360}deg;
        `;
        document.body.appendChild(particle);
        
        setTimeout(() => {
            document.body.removeChild(particle);
        }, 1500);
    }
    
    // Add CSS animation if not exists
    if (!document.querySelector('#particleExplosionStyle')) {
        const style = document.createElement('style');
        style.id = 'particleExplosionStyle';
        style.textContent = `
            @keyframes particleExplosion {
                0% {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(0) rotate(0deg);
                }
                50% {
                    opacity: 1;
                    transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(1.5) rotate(var(--rotation));
                }
                100% {
                    opacity: 0;
                    transform: translate(calc(-50% + var(--x) * 1.5), calc(-50% + var(--y) * 1.5)) scale(0.5) rotate(calc(var(--rotation) + 180deg));
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Create floating particles on hover
function createFloatingParticles(element, count) {
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.textContent = ['✨', '💫', '⭐'][Math.floor(Math.random() * 3)];
            particle.style.cssText = `
                position: fixed;
                font-size: ${Math.random() * 10 + 8}px;
                color: #87CEEB;
                pointer-events: none;
                z-index: 9999;
                left: ${rect.left + Math.random() * rect.width}px;
                top: ${rect.top + rect.height}px;
                animation: floatUp 2s ease-out forwards;
                --x: ${(Math.random() - 0.5) * 50}px;
            `;
            document.body.appendChild(particle);
            
            setTimeout(() => {
                document.body.removeChild(particle);
            }, 2000);
        }, i * 100);
    }
    
    // Add CSS animation if not exists
    if (!document.querySelector('#floatUpStyle')) {
        const style = document.createElement('style');
        style.id = 'floatUpStyle';
        style.textContent = `
            @keyframes floatUp {
                0% {
                    opacity: 1;
                    transform: translateY(0) translateX(0);
                }
                100% {
                    opacity: 0;
                    transform: translateY(-100px) translateX(var(--x));
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Create celebration ripple effect
function createCelebrationRipple() {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(135, 206, 235, 0.3), transparent);
        transform: translate(-50%, -50%) scale(0);
        animation: rippleEffect 1.5s ease-out forwards;
        pointer-events: none;
        z-index: 9998;
    `;
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        document.body.removeChild(ripple);
    }, 1500);
    
    // Add CSS animation if not exists
    if (!document.querySelector('#rippleStyle')) {
        const style = document.createElement('style');
        style.id = 'rippleStyle';
        style.textContent = `
            @keyframes rippleEffect {
                0% {
                    transform: translate(-50%, -50%) scale(0);
                    opacity: 1;
                }
                100% {
                    transform: translate(-50%, -50%) scale(20);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Create mini heart burst effect
function createMiniHeartBurst(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.textContent = '💙';
        heart.style.cssText = `
            position: fixed;
            font-size: ${Math.random() * 15 + 10}px;
            color: #87CEEB;
            pointer-events: none;
            z-index: 10000;
            left: ${centerX}px;
            top: ${centerY}px;
            transform: translate(-50%, -50%);
            animation: miniHeartBurst 1s ease-out forwards;
            --x: ${(Math.random() - 0.5) * 100}px;
            --y: ${(Math.random() - 0.5) * 100}px;
        `;
        document.body.appendChild(heart);
        
        setTimeout(() => {
            document.body.removeChild(heart);
        }, 1000);
    }
    
    // Add CSS animation if not exists
    if (!document.querySelector('#miniHeartBurstStyle')) {
        const style = document.createElement('style');
        style.id = 'miniHeartBurstStyle';
        style.textContent = `
            @keyframes miniHeartBurst {
                0% {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(0);
                }
                50% {
                    opacity: 1;
                    transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(1);
                }
                100% {
                    opacity: 0;
                    transform: translate(calc(-50% + var(--x) * 2), calc(-50% + var(--y) * 2)) scale(0.5);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Add engaging interactions to wish cards
function addWishCardInteractions() {
    const wishCards = document.querySelectorAll('.wish-card');
    
    wishCards.forEach((card, index) => {
        // Add click interaction
        card.addEventListener('click', () => {
            createCardCelebration(card);
            animateWishIcon(card);
        });
        
        // Add hover effect with particles
        card.addEventListener('mouseenter', () => {
            createFloatingParticles(card, 2);
        });
        
        // Add touch interaction for mobile
        card.addEventListener('touchstart', () => {
            createCardCelebration(card);
        });
    });
}

// Create card celebration effect
function createCardCelebration(card) {
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Create star burst
    for (let i = 0; i < 6; i++) {
        const star = document.createElement('div');
        star.textContent = '⭐';
        star.style.cssText = `
            position: fixed;
            font-size: ${Math.random() * 15 + 10}px;
            color: #FFD700;
            pointer-events: none;
            z-index: 10000;
            left: ${centerX}px;
            top: ${centerY}px;
            transform: translate(-50%, -50%);
            animation: starBurst 1s ease-out forwards;
            --x: ${(Math.random() - 0.5) * 150}px;
            --y: ${(Math.random() - 0.5) * 150}px;
        `;
        document.body.appendChild(star);
        
        setTimeout(() => {
            document.body.removeChild(star);
        }, 1000);
    }
    
    // Add CSS animation if not exists
    if (!document.querySelector('#starBurstStyle')) {
        const style = document.createElement('style');
        style.id = 'starBurstStyle';
        style.textContent = `
            @keyframes starBurst {
                0% {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(0) rotate(0deg);
                }
                50% {
                    opacity: 1;
                    transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(1.2) rotate(180deg);
                }
                100% {
                    opacity: 0;
                    transform: translate(calc(-50% + var(--x) * 1.5), calc(-50% + var(--y) * 1.5)) scale(0.3) rotate(360deg);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Animate wish icon
function animateWishIcon(card) {
    const icon = card.querySelector('.wish-icon');
    if (icon) {
        icon.style.animation = 'none';
        setTimeout(() => {
            icon.style.animation = 'iconBounce 0.6s ease-out, iconSpin 0.6s ease-out';
        }, 10);
    }
    
    // Add spin animation
    if (!document.querySelector('#iconSpinStyle')) {
        const style = document.createElement('style');
        style.id = 'iconSpinStyle';
        style.textContent = `
            @keyframes iconSpin {
                0% { transform: rotate(0deg) scale(1); }
                50% { transform: rotate(180deg) scale(1.2); }
                100% { transform: rotate(360deg) scale(1); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Enhanced photo gallery and lightbox with engaging interactions
const photoItems = document.querySelectorAll('.photo-item, .timeline-img, .polaroid, .floating-memory, .carousel-img, .slide-img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeLightbox = document.getElementById('close-lightbox');

photoItems.forEach(item => {
    // Add hover effect with particles
    item.addEventListener('mouseenter', () => {
        createFloatingParticles(item, 1);
        item.style.transform = 'scale(1.05)';
        item.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
    
    item.addEventListener('click', () => {
        const img = item.querySelector('img') || item;
        if (img && lightboxImage) {
            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt || 'Memory';
            
            // Add caption
            const caption = document.querySelector('.lightbox-caption') || document.createElement('div');
            caption.className = 'lightbox-caption';
            caption.textContent = 'One of my favorite memories with you 💙';
            
            if (!document.querySelector('.lightbox-caption')) {
                lightboxContent.appendChild(caption);
            }
            
            lightbox.classList.remove('hidden');
            createMiniHeartBurst(item); // Add heart burst on photo click
        }
    });
});

if (closeLightbox) {
    closeLightbox.addEventListener('click', () => {
        lightbox.classList.add('hidden');
    });
}

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.add('hidden');
        }
    });
}

// Polaroid initialization
function initializePolaroids() {
    const container = document.getElementById('polaroid-container');
    if (!container) return;
    
    const photos = [
        { src: 'images/photo1.jpg', caption: 'Our beginning' },
        { src: 'images/photo2.jpg', caption: 'Perfect moments' },
        { src: 'images/photo3.jpg', caption: 'My happiness' },
        { src: 'images/photo4.jpg', caption: 'Forever together' },
        { src: 'images/photo_2026-03-09_12-09-35.jpg', caption: 'Adventures' },
        { src: 'images/photo_2026-03-09_12-09-52.jpg', caption: 'Love' },
        { src: 'images/20260214_172739.jpg', caption: 'Special day' },
        { src: 'images/photo_2026-03-09_12-20-16.jpg', caption: 'Sweet memories' },
        { src: 'images/photo_2026-03-09_12-20-30.jpg', caption: 'Beautiful times' },
        { src: 'images/photo_2026-03-09_12-20-34.jpg', caption: 'Joyful moments' },
        { src: 'images/photo_2026-03-09_12-20-39.jpg', caption: 'Precious memories' },
        { src: 'images/photo_2026-03-09_12-20-53.jpg', caption: 'Amazing journey' }
    ];
    
    const positions = [
        { left: '3%', top: '10%', rotation: '-18deg' },
        { left: '70%', top: '5%', rotation: '15deg' },
        { left: '20%', top: '40%', rotation: '-10deg' },
        { left: '80%', top: '50%', rotation: '12deg' },
        { left: '10%', top: '75%', rotation: '-15deg' },
        { left: '60%', top: '80%', rotation: '8deg' },
        { left: '35%', top: '20%', rotation: '-8deg' },
        { left: '85%', top: '25%', rotation: '10deg' },
        { left: '5%', top: '55%', rotation: '-12deg' },
        { left: '45%', top: '65%', rotation: '6deg' },
        { left: '25%', top: '85%', rotation: '-6deg' },
        { left: '75%', top: '90%', rotation: '9deg' }
    ];
    
    photos.forEach((photo, index) => {
        const polaroid = document.createElement('div');
        polaroid.className = 'polaroid';
        polaroid.style.setProperty('--rotation', positions[index].rotation);
        polaroid.style.left = positions[index].left;
        polaroid.style.top = positions[index].top;
        polaroid.setAttribute('data-caption', photo.caption);
        polaroid.style.animationDelay = `${index * 0.2}s`;
        
        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.caption;
        img.style.objectFit = 'cover';
        img.style.objectPosition = 'center';
        
        polaroid.appendChild(img);
        container.appendChild(polaroid);
    });
}

// 3D Carousel initialization
function initializeCarousel() {
    const carousel = document.getElementById('carousel-3d');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    
    if (!carousel) return;
    
    let currentIndex = 0;
    const items = carousel.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    
    function updateCarousel() {
        items.forEach((item, index) => {
            const angle = (index - currentIndex) * (360 / totalItems);
            const translateZ = 200;
            
            item.style.transform = `rotateY(${angle}deg) translateZ(${translateZ}px)`;
            item.classList.toggle('active', index === currentIndex);
        });
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }
    
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    // Touch/swipe support
    let startX = 0;
    let isDragging = false;
    
    carousel.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        isDragging = true;
        carousel.style.cursor = 'grabbing';
    });
    
    carousel.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const diff = e.clientX - startX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
            isDragging = false;
            carousel.style.cursor = 'grab';
        }
    });
    
    carousel.addEventListener('mouseup', () => {
        isDragging = false;
        carousel.style.cursor = 'grab';
    });
    
    carousel.addEventListener('mouseleave', () => {
        isDragging = false;
        carousel.style.cursor = 'grab';
    });
    
    // Initial positioning
    updateCarousel();
}

// Floating memories initialization
function initializeFloatingMemories() {
    const container = document.getElementById('floating-memories');
    if (!container) return;
    
    const photos = [
        'images/photo1.jpg', 
        'images/photo2.jpg', 
        'images/photo3.jpg', 
        'images/photo4.jpg',
        'images/photo_2026-03-09_12-09-35.jpg',
        'images/photo_2026-03-09_12-09-52.jpg',
        'images/20260214_172739.jpg',
        'images/photo_2026-03-09_12-20-16.jpg',
        'images/photo_2026-03-09_12-20-30.jpg',
        'images/photo_2026-03-09_12-20-34.jpg',
        'images/photo_2026-03-09_12-20-39.jpg',
        'images/photo_2026-03-09_12-20-53.jpg'
    ];
    
    photos.forEach((photo, index) => {
        const memory = document.createElement('div');
        memory.className = 'floating-memory';
        memory.style.left = Math.random() * 80 + 10 + '%';
        memory.style.top = Math.random() * 80 + 10 + '%';
        memory.style.animationDelay = index * 0.4 + 's';
        
        const img = document.createElement('img');
        img.src = photo;
        img.alt = `Memory ${index + 1}`;
        img.style.objectFit = 'cover';
        img.style.objectPosition = 'center';
        
        memory.appendChild(img);
        container.appendChild(memory);
    });
}

// Cinematic slideshow initialization
function initializeSlideshow() {
    const slideshow = document.getElementById('slideshow');
    const prevBtn = document.getElementById('slideshow-prev');
    const nextBtn = document.getElementById('slideshow-next');
    const dots = document.querySelectorAll('.dot');
    
    if (!slideshow) return;
    
    let currentSlide = 0;
    const slides = slideshow.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    // Update slides with all 12 photos
    const allPhotos = [
        'images/photo1.jpg', 
        'images/photo2.jpg', 
        'images/photo3.jpg', 
        'images/photo4.jpg',
        'images/photo_2026-03-09_12-09-35.jpg',
        'images/photo_2026-03-09_12-09-52.jpg',
        'images/20260214_172739.jpg',
        'images/photo_2026-03-09_12-20-16.jpg',
        'images/photo_2026-03-09_12-20-30.jpg',
        'images/photo_2026-03-09_12-20-34.jpg',
        'images/photo_2026-03-09_12-20-39.jpg',
        'images/photo_2026-03-09_12-20-53.jpg'
    ];
    
    const captions = [
        'Our adventures',
        'My favorite moments', 
        'The reason I smile',
        'Forever and always',
        'Beautiful memories',
        'Love and laughter',
        'Special times together',
        'Sweet moments',
        'Beautiful days',
        'Joyful times',
        'Precious memories',
        'Amazing journey'
    ];
    
    // Clear existing slides and create new ones with all photos
    slideshow.innerHTML = '';
    
    allPhotos.forEach((photo, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        if (index === 0) slide.classList.add('active');
        
        const img = document.createElement('img');
        img.src = photo;
        img.alt = `Memory ${index + 1}`;
        img.className = 'slide-img';
        img.style.objectFit = 'cover';
        img.style.objectPosition = 'center';
        
        const caption = document.createElement('div');
        caption.className = 'slide-caption';
        caption.textContent = captions[index];
        
        slide.appendChild(img);
        slide.appendChild(caption);
        slideshow.appendChild(slide);
    });
    
    // Update dots
    const dotsContainer = document.querySelector('.slideshow-dots');
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        allPhotos.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = 'dot';
            if (index === 0) dot.classList.add('active');
            dot.setAttribute('data-slide', index);
            dotsContainer.appendChild(dot);
        });
    }
    
    function showSlide(index) {
        const slides = slideshow.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        currentSlide = index;
    }
    
    function nextSlide() {
        const totalSlides = slideshow.querySelectorAll('.slide').length;
        showSlide((currentSlide + 1) % totalSlides);
    }
    
    function prevSlide() {
        const totalSlides = slideshow.querySelectorAll('.slide').length;
        showSlide((currentSlide - 1 + totalSlides) % totalSlides);
    }
    
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    // Add dot click listeners
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
    
    // Auto-play
    setInterval(nextSlide, 5000);
}

// Timeline interactions
function initializeTimelineInteractions() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });
    
    timelineItems.forEach(item => {
        item.style.animationPlayState = 'paused';
        observer.observe(item);
    });
}

// Interactive birthday cake
function initializeCakeInteraction() {
    const cake = document.getElementById('birthday-cake');
    if (!cake) return;
    
    cake.addEventListener('click', () => {
        if (!cake.classList.contains('candles-blown')) {
            cake.classList.add('candles-blown');
            createHeartBurst();
            
            // Show message
            setTimeout(() => {
                const message = document.createElement('div');
                message.textContent = 'Make a wish! 💙';
                message.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: rgba(255, 255, 255, 0.9);
                    color: #87CEEB;
                    padding: 20px 40px;
                    border-radius: 20px;
                    font-size: 1.5rem;
                    font-weight: bold;
                    z-index: 10000;
                    animation: fadeIn 0.5s ease;
                `;
                
                document.body.appendChild(message);
                
                setTimeout(() => {
                    message.style.animation = 'fadeOut 0.5s ease';
                    setTimeout(() => {
                        document.body.removeChild(message);
                    }, 500);
                }, 2000);
            }, 500);
        }
    });
}

// Music controls
const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');
const musicIcon = document.getElementById('music-icon');

if (musicToggle && backgroundMusic) {
    // Set initial state to muted
    backgroundMusic.volume = 0.3;
    backgroundMusic.muted = true;
    
    musicToggle.addEventListener('click', () => {
        if (backgroundMusic.muted) {
            backgroundMusic.muted = false;
            backgroundMusic.play().catch(e => console.log('Music play failed:', e));
            musicIcon.textContent = '🔊';
        } else {
            backgroundMusic.muted = true;
            backgroundMusic.pause();
            musicIcon.textContent = '🎵';
        }
    });
}

// Add fadeOut animation
const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(fadeOutStyle);

// Sound effect system for engagement
function createSoundEffect(type) {
    // Create visual sound feedback since we can't play actual sounds
    const soundIndicator = document.createElement('div');
    soundIndicator.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(135, 206, 235, 0.9);
        color: white;
        padding: 10px 20px;
        border-radius: 25px;
        font-size: 14px;
        font-weight: 600;
        z-index: 10001;
        animation: soundPop 2s ease-out forwards;
        pointer-events: none;
    `;
    
    const sounds = {
        click: '🎵 Click!',
        celebrate: '🎉 Celebration!',
        wish: '⭐ Wish!',
        photo: '📸 Memory!',
        cake: '🎂 Birthday!'
    };
    
    soundIndicator.textContent = sounds[type] || '✨ Magic!';
    document.body.appendChild(soundIndicator);
    
    setTimeout(() => {
        document.body.removeChild(soundIndicator);
    }, 2000);
    
    // Add CSS animation if not exists
    if (!document.querySelector('#soundPopStyle')) {
        const style = document.createElement('style');
        style.id = 'soundPopStyle';
        style.textContent = `
            @keyframes soundPop {
                0% {
                    opacity: 0;
                    transform: translateY(20px) scale(0.8);
                }
                20% {
                    opacity: 1;
                    transform: translateY(0) scale(1.1);
                }
                80% {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
                100% {
                    opacity: 0;
                    transform: translateY(-20px) scale(0.9);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Add keyboard interactions for engagement
function addKeyboardInteractions() {
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case ' ':
                e.preventDefault();
                createCelebrationRipple();
                createSoundEffect('celebrate');
                break;
            case 'h':
            case 'H':
                createMiniHeartBurst(document.body);
                createSoundEffect('wish');
                break;
            case 'c':
            case 'C':
                createConfetti();
                createSoundEffect('celebrate');
                break;
        }
    });
}

// Add mouse trail effect for fun
function addMouseTrail() {
    let mouseTimer;
    document.addEventListener('mousemove', (e) => {
        clearTimeout(mouseTimer);
        mouseTimer = setTimeout(() => {
            if (Math.random() > 0.95) { // 5% chance to create trail
                createMouseTrailParticle(e.clientX, e.clientY);
            }
        }, 100);
    });
}

function createMouseTrailParticle(x, y) {
    const particle = document.createElement('div');
    particle.textContent = ['✨', '💫', '⭐'][Math.floor(Math.random() * 3)];
    particle.style.cssText = `
        position: fixed;
        font-size: 12px;
        color: #87CEEB;
        pointer-events: none;
        z-index: 9997;
        left: ${x}px;
        top: ${y}px;
        animation: mouseTrail 1s ease-out forwards;
        --x: ${(Math.random() - 0.5) * 30}px;
    `;
    document.body.appendChild(particle);
    
    setTimeout(() => {
        document.body.removeChild(particle);
    }, 1000);
    
    // Add CSS animation if not exists
    if (!document.querySelector('#mouseTrailStyle')) {
        const style = document.createElement('style');
        style.id = 'mouseTrailStyle';
        style.textContent = `
            @keyframes mouseTrail {
                0% {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                }
                100% {
                    opacity: 0;
                    transform: translate(calc(-50% + var(--x)), calc(-50% - 50px)) scale(0.5);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize the page with performance optimizations and engagement features
function init() {
    console.log('Initializing birthday website...');
    
    // Check if it's time for birthday
    if (checkTime()) {
        console.log('Birthday time confirmed, showing birthday section');
        showBirthday();
    } else {
        console.log('Not birthday time yet, showing countdown');
        // Start countdown
        updateCountdown();
        setInterval(updateCountdown, 1000);
        
        // Create decorative elements for countdown
        createEnhancedFloatingElements();
        createSparkles();
        createStars();
        addTitleInteractions();
    }
    
    // Add engagement features
    addKeyboardInteractions();
    addMouseTrail();
    
    // Add performance monitoring
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            console.log('Birthday website loaded successfully!');
            createSoundEffect('celebrate');
        });
    }
}

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', () => {
    // Add hover sound effects (optional enhancement)
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
        
        button.addEventListener('click', () => {
            createSoundEffect('click');
            createMiniHeartBurst(button);
        });
    });
    
    // Add click sound to time blocks
    const timeBlocks = document.querySelectorAll('.time-block');
    timeBlocks.forEach(block => {
        block.addEventListener('click', () => {
            createSoundEffect('celebrate');
            createFloatingParticles(block, 3);
        });
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (!lightbox.classList.contains('hidden')) {
                lightbox.classList.add('hidden');
            }
            if (!lovePopup.classList.contains('hidden')) {
                lovePopup.classList.add('hidden');
            }
        }
    });
    
    // Add touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    const gallery = document.querySelector('.photo-gallery');
    if (gallery) {
        gallery.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        gallery.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    }
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            // Could implement swipe navigation here
            console.log('Swipe detected');
        }
    }
});

// Performance optimization - throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Add smooth scroll behavior (if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Console message for fun
console.log('💙 Happy Birthday! This website was made with love! 💙');

// Start the application
init();
