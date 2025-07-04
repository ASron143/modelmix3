import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Supabase environment variables
    'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(process.env.VITE_SUPABASE_URL || 'https://dhodiovlbczrdxawuorv.supabase.co'),
    'import.meta.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRob2Rpb3ZsYmN6cmR4YXd1b3J2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMjk0MDQsImV4cCI6MjA2NTgwNTQwNH0.O9jrnzQpem8YkyP-4079Hd0AQm_l-a6b3MgRtsETZGU'),
    
    // PayPal environment variables - HARDCODED FOR PRODUCTION
    'import.meta.env.VITE_PAYPAL_CLIENT_ID': JSON.stringify('Ab3iofQucOsvAl7Wo-1UZjPstqls7jdt58YgOhdcPQ-jVk0oGaA-yGstQ7NX4DJEfzKGd4eULnTOsaYj'),
    'import.meta.env.VITE_PAYPAL_ENVIRONMENT': JSON.stringify('production')
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          supabase: ['@supabase/supabase-js'],
        },
      },
    },
  },
});