import { en } from './locales/en';
import { nl } from './locales/nl';
import { Translation, ExperienceItem } from './locales/types';

const locales: Record<string, Translation> = { en, nl };
let currentLang = 'nl'; // Default fallback

// Helper to resolve nested object paths (e.g. "nav.about")
function resolvePath(obj: any, path: string): string | undefined {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

function renderExperience(items: ExperienceItem[]) {
    const experienceContainer = document.getElementById('experience-container');
    if (!experienceContainer) return;

    // Clear existing content
    experienceContainer.innerHTML = '';

    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'resume-item';

        // Create Tags HTML
        const tagsHtml = item.tags.map(tag => `<span class="resume-tag">${tag}</span>`).join('');

        itemElement.innerHTML = `
            <div class="resume-left-border"></div>
            <div class="resume-content">
                <div class="resume-header">
                    <h3 class="resume-role">${item.role}</h3>
                    <span class="resume-date">${item.date}</span>
                </div>
                <span class="resume-company">${item.company}</span>
                <p class="resume-description">${item.description}</p>
                <div class="resume-tags">
                    ${tagsHtml}
                </div>
            </div>
        `;
        experienceContainer.appendChild(itemElement);
    });
}

function setLanguage(lang: string) {
    const translations = locales[lang];
    if (!translations) return;

    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    // Update static text
    // Update static text
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key) {
            const text = resolvePath(translations, key);
            // If text is defined (even empty string), use it. If undefined, clear if it should be controlled?
            // Better: if undefined, it means this key doesn't exist for this language -> clear text
            if (typeof text === 'string') {
                element.textContent = text;
            } else {
                element.textContent = ''; // Clear if not found in current language
            }
        }
    });

    // Update Toggle Button Text
    const langText = document.querySelector('.language-toggle .lang-text');
    if (langText) {
        langText.textContent = lang.toUpperCase();
    }

    // Re-render Experience Section
    renderExperience(translations.experience.items);
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle (Keep existing logic)
    const themeToggle = document.querySelector('.theme-toggle');
    const html = document.documentElement;
    const themeIcon = themeToggle?.querySelector('i');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        html.setAttribute('data-theme', 'light');
        themeIcon?.classList.replace('ph-moon', 'ph-sun');
    }

    if (themeToggle && themeIcon) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            if (currentTheme === 'light') {
                html.removeAttribute('data-theme');
                themeIcon.classList.replace('ph-sun', 'ph-moon');
                localStorage.setItem('theme', 'dark');
            } else {
                html.setAttribute('data-theme', 'light');
                themeIcon.classList.replace('ph-moon', 'ph-sun');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // 2. Language Initialization
    const savedLang = localStorage.getItem('language');
    if (savedLang && locales[savedLang]) {
        setLanguage(savedLang);
    } else {
        // Detect browser language
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith('en')) {
            setLanguage('en');
        } else {
            setLanguage('nl'); // Default to Dutch
        }
    }

    // 3. Language Toggle Event Listener
    const langToggle = document.querySelector('.language-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'nl' ? 'en' : 'nl';
            setLanguage(newLang);
        });
    }

    // 4. Smooth scrolling for anchor links (Keep existing)
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href) {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 5. Intersection Observer (Keep existing)
    const observerOptions: IntersectionObserverInit = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.section h2, .service-card, .timeline-item, .about-text');

    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // 6. Mobile Menu Toggle (Keep existing)
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (mainNav.classList.contains('active')) {
                    icon.classList.replace('ph-list', 'ph-x');
                } else {
                    icon.classList.replace('ph-x', 'ph-list');
                }
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) icon.classList.replace('ph-x', 'ph-list');
            });
        });
    }
});
