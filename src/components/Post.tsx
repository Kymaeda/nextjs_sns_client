import Image from 'next/image';

export const Post = () => {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <Image
            className="w-10 h-10 rounded-full mr-2"
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            width={40}
            height={40}
          />
          <div>
            <h2 className="font-semibold text-md">kyohei</h2>
            <p className="text-gray-500 text-sm">12/05 13:12</p>
          </div>
        </div>
        <p className="text-gray-700">はじめての投稿です。</p>
      </div>
    </div>
  );
};
