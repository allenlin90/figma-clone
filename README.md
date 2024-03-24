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

### Live cursors chat
1. Users can send and show real-time message to the other users on cursor location.
2. Tap <kbd>/</kbd> to show text input and type to show message to the other users.
3. Tap <kbd>e</kbd> to show emoji buttons to click on.
4. Tap <kbd>Esc</kbd> to escape from the reaction state. 
5. `useBroadcastEvent` is used to show emoji reaction to the other users in the same room. 
6. `useEventListener` to handle event broadcast from the other users such as showing the emoji. 
7. [https://liveblocks.io/examples/live-cursors-chat/nextjs-live-cursors-chat](https://liveblocks.io/examples/live-cursors-chat/nextjs-live-cursors-chat)

### Live Avatar stack
1. Users can check active status and if there's any other users in the same room.
2. [https://liveblocks.io/examples/live-avatar-stack/nextjs-live-avatars](https://liveblocks.io/examples/live-avatar-stack/nextjs-live-avatars)

### LiveBlocks document
1. This stores the elements/objects created on the canvas for multiple users to collaborate in the same LiveBlocks room. 
2. We can update the `type Storage` for the data storage schema in `liveblocks.config.ts`.
3. Using `useMutation` to update and sync data storage to users. 
4. Using `useStorage` hook with the data structure defined in `Storage`.
5. [https://liveblocks.io/document/storage](https://liveblocks.io/document/storage)

### LiveBlocks comments
1. A thread of comments can overlay anywhere in the app.
2. When a user add new a comment to a thread, other users will be synced and able to check/react to the comment.
3. Using `useCreateThread` hook to create a new thread for comments.
4. A new thread can only be created in the area of the canvas, not in top nav or either left or right-sidebar. 
5. Using `useThreads` to read threads from Liveblocks. 
6. When rending threads on canvas, we need to pin the UI on specific coords with z-index which inferred from `useMaxZIndex` hook when creating the thread. 
7. [https://liveblocks.io/docs/get-started/nextjs-comments](https://liveblocks.io/docs/get-started/nextjs-comments)

## Shadcn and TailwindCSS

Get started with Shadcn and Next.js [https://ui.shadcn.com/docs/installation/next](https://ui.shadcn.com/docs/installation/next)

- This project customize both `tailwind.config.ts` and `/app/globals.css`
