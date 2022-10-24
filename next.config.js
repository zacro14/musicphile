/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ['en-US', 'fr', 'nl-NL'],
        defaultLocale: 'fr',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.mzstatic.com',
            },
        ],
    },
}

module.exports = nextConfig
