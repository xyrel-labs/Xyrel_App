This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## How It Works

1. You Request a Resource: Tell XYREL what service or API you need access to
2. XYREL Handles Payment: The agent automatically detects HTTP 402 responses and processes blockchain payments
3. Instant Access: Once payment is verified, you receive immediate access to the resource

## Use Cases
### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables based on your .env.example
4. Deploy

## Environment Variables

Use .env.example as your template and add only what your x402 setup requires (facilitator URL, network settings, spend limits, etc.).
### x402 Protocol Integration
To make XYREL actually process payments, you'll need to integrate with the x402 protocol:

1. Implement x402 facilitator endpoints for payment verification
2. Add blockchain wallet connectivity (Phantom, WalletConnect, MetaMask)
3. Implement spending limits and transaction monitoring
4. Connect to x402-compatible services

## Important Disclaimers
- User Responsibility: Users are responsible for setting appropriate spending limits and monitoring transactions
- Blockchain Transactions: All blockchain transactions are irreversible
- Service Trust: Always verify and trust the services you're accessing
- Beta Software: This is experimental software for demonstration purposes

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is open source and available under the MIT License.

## Tokenomics
$XYREL Token
XYREL features a sustainable token economy designed to create value for holders through platform fees and automatic buybacks.

## Resources

- [x402 Protocol Website](https://x402.org)
- [x402 Documentation](https://x402.gitbook.io/x402)
- [x402 GitHub](https://github.com/x402)
