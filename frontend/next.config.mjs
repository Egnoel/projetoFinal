/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'tecdn.b-cdn.net',
      'www.freepik.com',
      'img.freepik.com',
      'res.cloudinary.com',
    ],
  },
};

export default nextConfig;
