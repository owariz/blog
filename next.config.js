/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,  // ปิดการตรวจสอบประเภทในการ build
    },
};

module.exports = nextConfig;
