// InfluFind PWA - Main Application Script
// Version 1.0.0

/**
 * NOTE: Logika utama aplikasi saat ini ada di dalam index.html
 * File ini adalah placeholder untuk struktur modular di masa depan
 */

// Configuration
const APP_CONFIG = {
    name: 'InfluFind',
    version: '1.0.0',
    apiEndpoint: '/api', // For future use
    cacheVersion: 'v1.0.0',
    debug: false
};

// Utility Functions
const Utils = {
    // Format currency
    formatCurrency(amount) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(amount);
    },
    
    // Format date
    formatDate(date) {
        return new Date(date).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },
    
    // Validate email
    isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },
    
    // Generate unique ID
    generateId() {
        return Date.now() + Math.random().toString(36).substr(2, 9);
    },
    
    // Debounce function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Log to console (if debug mode)
    log(...args) {
        if (APP_CONFIG.debug) {
            console.log('[InfluFind]', ...args);
        }
    }
};

// Storage Manager
const StorageManager = {
    // Get item from localStorage
    get(key) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            Utils.log('Error getting item from storage:', error);
            return null;
        }
    },
    
    // Set item to localStorage
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            Utils.log('Error setting item to storage:', error);
            return false;
        }
    },
    
    // Remove item from localStorage
    remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            Utils.log('Error removing item from storage:', error);
            return false;
        }
    },
    
    // Clear all storage
    clear() {
        try {
            localStorage.clear();
            return true;
        } catch (error) {
            Utils.log('Error clearing storage:', error);
            return false;
        }
    }
};

// API Manager (for future backend integration)
const API = {
    // Base fetch wrapper
    async request(endpoint, options = {}) {
        const url = APP_CONFIG.apiEndpoint + endpoint;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        };
        
        try {
            const response = await fetch(url, config);
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.message || 'API Error');
            }
            
            return data;
        } catch (error) {
            Utils.log('API Error:', error);
            throw error;
        }
    },
    
    // GET request
    get(endpoint, options = {}) {
        return this.request(endpoint, { ...options, method: 'GET' });
    },
    
    // POST request
    post(endpoint, data, options = {}) {
        return this.request(endpoint, {
            ...options,
            method: 'POST',
            body: JSON.stringify(data)
        });
    },
    
    // PUT request
    put(endpoint, data, options = {}) {
        return this.request(endpoint, {
            ...options,
            method: 'PUT',
            body: JSON.stringify(data)
        });
    },
    
    // DELETE request
    delete(endpoint, options = {}) {
        return this.request(endpoint, { ...options, method: 'DELETE' });
    }
};

// Analytics (for future implementation)
const Analytics = {
    // Track page view
    trackPageView(pageName) {
        Utils.log('Page View:', pageName);
        // Future: Send to analytics service
    },
    
    // Track event
    trackEvent(category, action, label) {
        Utils.log('Event:', category, action, label);
        // Future: Send to analytics service
    },
    
    // Track user action
    trackUserAction(action, data) {
        Utils.log('User Action:', action, data);
        // Future: Send to analytics service
    }
};

// Service Worker Manager
const ServiceWorkerManager = {
    // Register service worker
    async register() {
        if ('serviceWorker' in navigator) {
            try {
                const registration = await navigator.serviceWorker.register('/service-worker.js');
                Utils.log('Service Worker registered:', registration.scope);
                
                // Check for updates
                registration.addEventListener('updatefound', () => {
                    Utils.log('Service Worker update found');
                });
                
                return registration;
            } catch (error) {
                Utils.log('Service Worker registration failed:', error);
                return null;
            }
        }
    },
    
    // Unregister service worker
    async unregister() {
        if ('serviceWorker' in navigator) {
            const registration = await navigator.serviceWorker.getRegistration();
            if (registration) {
                await registration.unregister();
                Utils.log('Service Worker unregistered');
            }
        }
    },
    
    // Check for updates
    async checkForUpdates() {
        if ('serviceWorker' in navigator) {
            const registration = await navigator.serviceWorker.getRegistration();
            if (registration) {
                await registration.update();
                Utils.log('Checked for Service Worker updates');
            }
        }
    }
};

// Export for use in other modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        APP_CONFIG,
        Utils,
        StorageManager,
        API,
        Analytics,
        ServiceWorkerManager
    };
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    Utils.log('App initialized');
    
    // Register service worker
    ServiceWorkerManager.register();
    
    // Track initial page view
    Analytics.trackPageView('Initial Load');
});

console.log('InfluFind v' + APP_CONFIG.version + ' - App script loaded');
