import React, { useEffect, useState } from 'react';

export default function Github() {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('https://api.github.com/users/razashaikh99')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            });
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-600 p-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center transform transition duration-300 hover:scale-105">
                <img
                    className="mx-auto mb-4 rounded-full w-32 border-4 border-purple-500"
                    src={data.avatar_url}
                    alt="User Avatar"
                />
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{data.name || 'Loading...'}</h1>
                <p className="text-sm text-gray-600 mb-4">@{data.login}</p>
                <div className="flex justify-around text-gray-700 font-medium">
                    <div>
                        <p className="text-lg">{data.followers}</p>
                        <p className="text-xs text-gray-500">Followers</p>
                    </div>
                    <div>
                        <p className="text-lg">{data.following}</p>
                        <p className="text-xs text-gray-500">Following</p>
                    </div>
                    <div>
                        <p className="text-lg">{data.public_repos}</p>
                        <p className="text-xs text-gray-500">Repos</p>
                    </div>
                </div>
                <a
                    href={data.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-block bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition"
                >
                    View Profile
                </a>
            </div>
        </div>
    );
}
