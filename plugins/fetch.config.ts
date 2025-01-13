export default defineNuxtPlugin(() => {
    return {
        provide: {
            fetch: (url: string, options = {}) => {
                return $fetch(url, {
                    baseURL: useRuntimeConfig().public.apiBase, // Définit l'URL de base globale
                    credentials: 'include', // Inclut automatiquement les cookies
                    ...options, // Permet de personnaliser les requêtes si besoin
                });
            },
        },
    };
});
