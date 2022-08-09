import React from 'react';
import Image from 'next/image';

interface Props {
  loading: boolean;
}

function Loading(props: Props) {
  return (
    <div
      className={`transition-opacity duration-1000 ease-out h-screen w-screen bg-primary fixed inset-0 z-20 ${
        props.loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex h-screen w-screen">
        <span className="m-auto animate-pulse">
          <Image src="/logo.svg" alt="me" width="50" height="50" />
        </span>
      </div>
    </div>
  );
}

export default Loading;
