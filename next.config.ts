import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Разрешаем загружать ресурсы из стороннего источника.
  // В данном случае - картинки из Google Firebase Storage.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/v0/b/gromada-zakon.firebasestorage.app/o/**',
      }
    ]
  }
};

export default nextConfig;
