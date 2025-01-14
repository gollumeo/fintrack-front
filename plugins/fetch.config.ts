export default defineNuxtPlugin(() => {
    return {
        provide: {
            fetch: (url: string, options = {}) => {
                return $fetch(url, {
                    baseURL: useRuntimeConfig().public.apiBase, // Définit l'URL de base globale
                    credentials: 'include', // Inclut automatiquement les cookies
                    headers: {
                        'X-XSRF-TOKEN': getCookieValue('XSRF-TOKEN') || '',
                    },
                    ...options, // Permet de personnaliser les requêtes si besoin
                });
            },
        },
    };
});

function getCookieValue(name: string): string | undefined {
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
        const [key, value] = cookie.split('=');
        acc[key] = value;
        return acc;
    }, {} as Record<string, string>);
    return cookies[name];
}
