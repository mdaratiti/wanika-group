/** @type {import('next').NextConfig} */

const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
    // Remove standalone output for Azure
    // distDir: 'build',
    // output: 'standalone',
}

export default nextConfig;
