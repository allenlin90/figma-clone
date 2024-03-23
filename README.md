## LiveBlocks
A backend to manage collaborations between users

Get started with LiveBlocks and Next.js [https://liveblocks.io/docs/get-started/nextjs](https://liveblocks.io/docs/get-started/nextjs)

1. LiveBlocks requires a public key `NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY` in `.env.local`. 
2. After initiating `liveblocks.config.ts`, we can pass this credential as `publicApiKey` to create a client.
3. LiveBlocks uses the concept of rooms, separate virtual spaces where collaborate. To create a real-time experience, multiple users must be connected to the same room.
   1. This provider is kept in `/app/Room.tsx`. 
4. After assigning a room, we need to wrap it with the collaborative app which we allow users to work together and interact with in `/app/page.tsx`. 
5. In this project, we have only `1` room and wrap on the index page `/app/page.tsx` directly. 
6. In the `/app/CollaborativeApp.tsx`, we can use `useOthers` hook to check the number of users connected in real-time. 

### Live cursors

1. This allows syncing the mouse cursor of the other users in the same room. 
2. [https://liveblocks.io/examples/live-cursors/nextjs-live-cursors](https://liveblocks.io/examples/live-cursors/nextjs-live-cursors)
## Shadcn and TailwindCSS

Get started with Shadcn and Next.js [https://ui.shadcn.com/docs/installation/next](https://ui.shadcn.com/docs/installation/next)

- This project customize both `tailwind.config.ts` and `/app/globals.css`
