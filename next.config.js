/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (isServer) {
            // Configuración para manejar las dependencias de canvas en el servidor
            config.externals.push('canvas');
        }

        return config;
    },
};

module.exports = nextConfig;