import { useMyPresence, useOthers } from '@/liveblocks.config';
import LiveCursors from './cursor/LiveCursors';
import { useCallback } from 'react';

const Live = () => {
  const others = useOthers();
  const [{ cursor }, updateMyPresence] = useMyPresence() as any;

  const handlePointMove = useCallback(
    (event: React.PointerEvent) => {
      event.preventDefault();

      const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
      const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

      updateMyPresence({ cursor: { x, y } });
    },
    [updateMyPresence]
  );

  const handlePointLeave = useCallback(
    (event: React.PointerEvent) => {
      event.preventDefault();

      updateMyPresence({ cursor: null, message: null });
    },
    [updateMyPresence]
  );

  const handlePointDown = useCallback(
    (event: React.PointerEvent) => {
      const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
      const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

      updateMyPresence({ cursor: { x, y } });
    },
    [updateMyPresence]
  );

  return (
    <div
      onPointerMove={handlePointMove}
      onPointerLeave={handlePointLeave}
      onPointerDown={handlePointDown}
      className='h-[100vh] w-full flex justify-center items-center text-center'
    >
      <h1 className='text-xl text-white'>LiveBlocks Figma Clone</h1>
      <LiveCursors others={others} />
    </div>
  );
};

export default Live;
