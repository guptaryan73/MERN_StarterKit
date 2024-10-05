import { useEffect, useState } from 'react';

const Status = () => {
    const [status, setStatus] = useState({});

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const response = await fetch('http://localhost:5002'); // Adjust this URL if needed
                const data = await response.json();
                setStatus(data);
            } catch (error) {
                console.error('Error fetching status:', error);
            }
        };

        fetchStatus();
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
            <h1 className="text-4xl font-extrabold mb-4 hover:text-blue-400 transition duration-300">
                
            </h1>
            <h2 className="text-2xl font-semibold mb-4">Status Information:</h2>
            <ul className="bg-gray-800 rounded-lg shadow-lg p-6 space-y-4 w-full max-w-md">
                <li className="text-lg">
                    <span className="font-bold">Message:</span> {status.message}
                </li>
                <li className="text-lg">
                    <span className="font-bold">Mongo Status:</span> {status.mongoStatus}
                </li>
                <li className="text-lg">
                    <span className="font-bold">Environment:</span> {status.environment}
                </li>
                <li className="text-lg">
                    <span className="font-bold">Frontend URL:</span>
                    <a href={status.frontendURL} className="text-blue-400 hover:underline">{status.frontendURL}</a>
                </li>
            </ul>
            <footer className="mt-6 text-lg text-gray-400">
                Made by <a href="https://www.linkedin.com/in/aryangupta0/" target="_blank" rel="noopener noreferrer" className="underline text-blue-400">Aryan Gupta</a>
            </footer>
        </div>
    );
};

export default Status;
