export {};

declare module 'nuxt/schema' {
    interface RuntimeConfig {
        public: {
            apiBase: string;
        };
    }
}
