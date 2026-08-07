/** @type {import("next").NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: "/ledger",
          destination: "https://ledger.workigom.com/ledger",
        },
        {
          source: "/ledger/:path*",
          destination: "https://ledger.workigom.com/ledger/:path*",
        },
      ]
    };
  },
};
export default nextConfig;
