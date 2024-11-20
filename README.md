# PayZap

PayZap is a payment application that allows users to manage wallets, perform peer-to-peer (P2P) transfers, and track transactions efficiently.




## Features

- Wallet 
- Peer to peer transactions
- Transactions details ( Processing, success and failure of transaction)
- Balance management 


## Screenshots

![payZap-c4-1](https://github.com/user-attachments/assets/1f373095-b79f-4876-b696-30485406b7b5)
![payZap-c4-2-new](https://github.com/user-attachments/assets/ba69cc36-1435-4735-bc99-28dc86feb325)


## Tech Stack

**TurboRepo** 

**User application:** Nextjs (FE & BE), PostgreSQL, Prisma ORM, Recoil, TailwindCSS, Shadcn UI

**Bank Webhook handler:** Node, Express


## Documentation

**What's inside ?**

This Turborepo includes the following packages/apps:


- `user-app`: a [Next.js](https://nextjs.org/) app

- `merchant-app`: another [Next.js](https://nextjs.org/) app

- `bank-webhook`: a Express app

- `@repo/ui`: a database package shared by both `user-app` and `merchant-app` applications

- `@repo/db`: a stub React component library shared by both `user-app` and `merchant-app` applications

- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)

- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting


### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
