import Image from "next/image";

export default function Profile() {
  const user = {
    name: "Temuulen",
    username: "@ᠲᠡᠮᠦᠯᠦᠨ ᠰ",
    bio: "Suragch",
    avatar: "/kobe.jpg", // place an image in /public folder
    location: "Ulaanabaater",
    followers: 1200,
    following: 300,
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm">
        <div className="flex flex-col items-center">
          <Image
            src={user.avatar}
            alt="Profile Avatar"
            width={120}
            height={120}
            className="rounded-full"
          />
          <h1 className="mt-4 text-2xl text-black font-bold">{user.name}</h1>
          <p className="text-gray-500">{user.username}</p>
          <p className="mt-2 text-center text-gray-700">{user.bio}</p>

          <div className="mt-4 flex space-x-4 text-gray-700">
            <div className="flex flex-col items-center">
              <span className="font-bold">{user.followers}</span>
              <span className="text-sm">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold">{user.following}</span>
              <span className="text-sm">Following</span>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">{user.location}</p>
            <a
              href={user.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm"
            >
              {user.website}
            </a>
          </div>

          <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
