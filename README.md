This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```
ai-short-video-gen
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ fsmonitor--daemon
│  │  └─ cookies
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     └─ heads
│  │        └─ master
│  ├─ objects
│  │  ├─ 0d
│  │  │  └─ c9ea2bcc4104b736ec1c0cf6e6e0d8d82ab07d
│  │  ├─ 0f
│  │  │  └─ f7e75d79961b426ad64d0103e11a6101c1a5d1
│  │  ├─ 13
│  │  │  └─ d40b892057e0e4271c5c8f9fc8db30e80f2409
│  │  ├─ 1a
│  │  │  └─ 69fd2a450afc3bf47e08b22c149190df0ffdb4
│  │  ├─ 1b
│  │  │  └─ 62daacff96dad6584e71cd962051b82957c313
│  │  ├─ 2a
│  │  │  └─ 2e4b3bf8ba1c86d96fc2f5786597ad77a0e5e9
│  │  ├─ 46
│  │  │  └─ 78774e6d606704bce1897a5dab960cd798bf66
│  │  ├─ 71
│  │  │  └─ 8d6fea4835ec2d246af9800eddb7ffb276240c
│  │  ├─ 7f
│  │  │  └─ 0afc267b23f6538f10da42db3bde7d3e749319
│  │  ├─ 82
│  │  │  └─ 2a89c079b3fec7fd920c6e07d2f561b004558b
│  │  ├─ 83
│  │  │  └─ b312f5a47cc50392572ef2d06e1727b56aaf29
│  │  ├─ 84
│  │  │  └─ 581005a869464af48da0732710b9508bb0fb3d
│  │  ├─ 98
│  │  │  └─ 00bf8dde1c4ef9a17a143eb622b4d56a089226
│  │  ├─ af
│  │  │  └─ 99692719e72e11241f0e9c9fe8838b86867098
│  │  ├─ f2
│  │  │  └─ ae185cbfd16946a534d819e9eb03924abbcc49
│  │  ├─ fc
│  │  │  └─ b741a341df889205f9868e01cdef51cc530ae9
│  │  ├─ fd
│  │  │  └─ 3dbb571a12a1c3baf000db049e141c888d05a8
│  │  ├─ ff
│  │  │  └─ c7f2861b7ad9d45ed73cc571241b00dedbaf7f
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ master
│     └─ tags
├─ .gitignore
├─ app
│  ├─ (auth)
│  │  ├─ sign-in
│  │  │  └─ [[...sign-in]]
│  │  │     └─ page.jsx
│  │  └─ sign-up
│  │     └─ [[...sign-up]]
│  │        └─ page.jsx
│  ├─ api
│  │  ├─ generate-audio
│  │  │  └─ route.jsx
│  │  ├─ generate-caption
│  │  │  └─ route.jsx
│  │  ├─ generate-image
│  │  │  └─ route.jsx
│  │  └─ get-video-script
│  │     └─ route.jsx
│  ├─ dashboard
│  │  ├─ create-new
│  │  │  └─ page.jsx
│  │  ├─ layout.jsx
│  │  ├─ page.jsx
│  │  └─ _components
│  │     ├─ CustomLoading.jsx
│  │     ├─ EmptyState.jsx
│  │     ├─ Header.jsx
│  │     ├─ SelectDuration.jsx
│  │     ├─ SelectStyle.jsx
│  │     ├─ SelectTopic.jsx
│  │     └─ SideNav.jsx
│  ├─ favicon.ico
│  ├─ fonts
│  │  ├─ GeistMonoVF.woff
│  │  └─ GeistVF.woff
│  ├─ globals.css
│  ├─ layout.js
│  ├─ page.js
│  ├─ provider.js
│  └─ _context
│     └─ VideoDataContext.jsx
├─ components
│  └─ ui
│     ├─ alert-dialog.jsx
│     ├─ button.jsx
│     ├─ select.jsx
│     └─ textarea.jsx
├─ components.json
├─ config
│  ├─ AiModel.js
│  ├─ db.js
│  ├─ FirebaseConfig.js
│  └─ schema.js
├─ drizzle
│  └─ meta
│     └─ _journal.json
├─ drizzle.config.js
├─ jsconfig.json
├─ lib
│  └─ utils.js
├─ middleware.js
├─ next.config.mjs
├─ output.mp3
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ audio
│  │  ├─ 05f7a9a8-14d0-400c-b784-5c0da70846df.mp3
│  │  ├─ 21d0f8fe-7736-4e18-8c11-67dd194c87f6.mp3
│  │  ├─ 21fa6adc-bd1d-4892-9170-8aab50097b57.mp3
│  │  ├─ 34cd0ab8-e76e-4805-8026-b04f3c5c3b22.mp3
│  │  ├─ 3c276bf0-f48d-4cbc-acfb-01b25e1d252f.mp3
│  │  ├─ 57b7c590-4640-4cd8-9450-b5044dfd0087.mp3
│  │  ├─ 5a049ded-4404-4a68-8368-7dc2ac53aaa8.mp3
│  │  ├─ 71c96f85-de77-44fd-a06e-b1aeb18c12c6.mp3
│  │  ├─ a76c1b31-a572-4c4c-bae0-d50bbaba054f.mp3
│  │  ├─ abeea37a-f0fe-44d8-bd21-86ca1a0b4661.mp3
│  │  ├─ b0727b6f-44b0-471a-9453-c760f699b0bb.mp3
│  │  ├─ c2e81644-0f95-485c-b1ba-a75e5fca142a.mp3
│  │  ├─ cd39efbf-c574-42e6-8062-14be907f535e.mp3
│  │  └─ ce43d5cd-5a0c-4eb2-905e-8b210a03ff24.mp3
│  ├─ cartoon.jpg
│  ├─ comic.jpg
│  ├─ gta.jpeg
│  ├─ image.png
│  ├─ loading.gif
│  ├─ login1.jpg
│  ├─ login2.jpg
│  ├─ login3.jpg
│  ├─ login3.webp
│  ├─ login4.jpg
│  ├─ login5.jpg
│  ├─ real.jpg
│  ├─ watercolor.jpeg
│  └─ watercolor.jpg
├─ README.md
└─ tailwind.config.js

```
```
ai-short-video-gen
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ fsmonitor--daemon
│  │  └─ cookies
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     └─ heads
│  │        └─ master
│  ├─ objects
│  │  ├─ 0d
│  │  │  └─ c9ea2bcc4104b736ec1c0cf6e6e0d8d82ab07d
│  │  ├─ 0f
│  │  │  └─ f7e75d79961b426ad64d0103e11a6101c1a5d1
│  │  ├─ 13
│  │  │  └─ d40b892057e0e4271c5c8f9fc8db30e80f2409
│  │  ├─ 1a
│  │  │  └─ 69fd2a450afc3bf47e08b22c149190df0ffdb4
│  │  ├─ 1b
│  │  │  └─ 62daacff96dad6584e71cd962051b82957c313
│  │  ├─ 2a
│  │  │  └─ 2e4b3bf8ba1c86d96fc2f5786597ad77a0e5e9
│  │  ├─ 46
│  │  │  └─ 78774e6d606704bce1897a5dab960cd798bf66
│  │  ├─ 71
│  │  │  └─ 8d6fea4835ec2d246af9800eddb7ffb276240c
│  │  ├─ 7f
│  │  │  └─ 0afc267b23f6538f10da42db3bde7d3e749319
│  │  ├─ 82
│  │  │  └─ 2a89c079b3fec7fd920c6e07d2f561b004558b
│  │  ├─ 83
│  │  │  └─ b312f5a47cc50392572ef2d06e1727b56aaf29
│  │  ├─ 84
│  │  │  └─ 581005a869464af48da0732710b9508bb0fb3d
│  │  ├─ 98
│  │  │  └─ 00bf8dde1c4ef9a17a143eb622b4d56a089226
│  │  ├─ af
│  │  │  └─ 99692719e72e11241f0e9c9fe8838b86867098
│  │  ├─ f2
│  │  │  └─ ae185cbfd16946a534d819e9eb03924abbcc49
│  │  ├─ fc
│  │  │  └─ b741a341df889205f9868e01cdef51cc530ae9
│  │  ├─ fd
│  │  │  └─ 3dbb571a12a1c3baf000db049e141c888d05a8
│  │  ├─ ff
│  │  │  └─ c7f2861b7ad9d45ed73cc571241b00dedbaf7f
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ master
│     └─ tags
├─ .gitignore
├─ app
│  ├─ (auth)
│  │  ├─ sign-in
│  │  │  └─ [[...sign-in]]
│  │  │     └─ page.jsx
│  │  └─ sign-up
│  │     └─ [[...sign-up]]
│  │        └─ page.jsx
│  ├─ api
│  │  ├─ generate-audio
│  │  │  └─ route.jsx
│  │  ├─ generate-caption
│  │  │  └─ route.jsx
│  │  ├─ generate-image
│  │  │  └─ route.jsx
│  │  ├─ get-video-script
│  │  │  └─ route.jsx
│  │  └─ render-video.js
│  ├─ dashboard
│  │  ├─ create-new
│  │  │  └─ page.jsx
│  │  ├─ layout.jsx
│  │  ├─ page.jsx
│  │  └─ _components
│  │     ├─ CustomLoading.jsx
│  │     ├─ EmptyState.jsx
│  │     ├─ Header.jsx
│  │     ├─ PlayerDialog.jsx
│  │     ├─ RemotionVideo.jsx
│  │     ├─ SelectDuration.jsx
│  │     ├─ SelectStyle.jsx
│  │     ├─ SelectTopic.jsx
│  │     ├─ SideNav.jsx
│  │     └─ VideoList.jsx
│  ├─ favicon.ico
│  ├─ fonts
│  │  ├─ GeistMonoVF.woff
│  │  └─ GeistVF.woff
│  ├─ globals.css
│  ├─ layout.js
│  ├─ page.js
│  ├─ provider.js
│  └─ _context
│     └─ VideoDataContext.jsx
├─ components
│  └─ ui
│     ├─ alert-dialog.jsx
│     ├─ button.jsx
│     ├─ dialog.jsx
│     ├─ select.jsx
│     └─ textarea.jsx
├─ components.json
├─ config
│  ├─ AiModel.js
│  ├─ db.js
│  ├─ FirebaseConfig.js
│  └─ schema.js
├─ drizzle
│  └─ meta
│     └─ _journal.json
├─ drizzle.config.js
├─ jsconfig.json
├─ lib
│  └─ utils.js
├─ middleware.js
├─ next.config.mjs
├─ output.mp3
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ audio
│  │  ├─ 05f7a9a8-14d0-400c-b784-5c0da70846df.mp3
│  │  ├─ 21d0f8fe-7736-4e18-8c11-67dd194c87f6.mp3
│  │  ├─ 21fa6adc-bd1d-4892-9170-8aab50097b57.mp3
│  │  ├─ 34cd0ab8-e76e-4805-8026-b04f3c5c3b22.mp3
│  │  ├─ 3c276bf0-f48d-4cbc-acfb-01b25e1d252f.mp3
│  │  ├─ 57b7c590-4640-4cd8-9450-b5044dfd0087.mp3
│  │  ├─ 5a049ded-4404-4a68-8368-7dc2ac53aaa8.mp3
│  │  ├─ 71c96f85-de77-44fd-a06e-b1aeb18c12c6.mp3
│  │  ├─ a76c1b31-a572-4c4c-bae0-d50bbaba054f.mp3
│  │  ├─ abeea37a-f0fe-44d8-bd21-86ca1a0b4661.mp3
│  │  ├─ b0727b6f-44b0-471a-9453-c760f699b0bb.mp3
│  │  ├─ c2e81644-0f95-485c-b1ba-a75e5fca142a.mp3
│  │  ├─ cd39efbf-c574-42e6-8062-14be907f535e.mp3
│  │  └─ ce43d5cd-5a0c-4eb2-905e-8b210a03ff24.mp3
│  ├─ cartoon.jpg
│  ├─ comic.jpg
│  ├─ gta.jpeg
│  ├─ image.png
│  ├─ loading.gif
│  ├─ login1.jpg
│  ├─ login2.jpg
│  ├─ login3.jpg
│  ├─ login3.webp
│  ├─ login4.jpg
│  ├─ login5.jpg
│  ├─ real.jpg
│  ├─ watercolor.jpeg
│  └─ watercolor.jpg
├─ README.md
├─ remotion
│  ├─ index.jsx
│  └─ Root.jsx
└─ tailwind.config.js

```"# Ai-shortz" 
"# shortz" 
