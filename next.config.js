/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    typescript: {
        ignoreBuildErrors: true,  // ปิดการตรวจสอบประเภทในการ build
    },
};

module.exports = nextConfig;
