import { Link } from 'react-router-dom';
import FadeInWrapper from '../ui/FadeInWrapper';

function NotFound() {
  return (
    <FadeInWrapper>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <div className="text-center">
        {/* Error Code */}
        <h1 className="text-6xl font-bold text-blue-600">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mt-4">
          Oops! Page not found
        </p>
        <p className="text-gray-500 mt-2">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Animation or Image */}
        <div className="mt-8">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/search-not-found-illustration-download-in-svg-png-gif-file-formats--page-error-404-empty-state-pack-user-interface-illustrations-5210416.png" 
            alt="404 Animation"
            className="w-96 mx-auto"
          />
        </div>

        {/* Button to navigate back home */}
        <div className="mt-8">
          <Link
            to="/dashboard"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition ease-in-out duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
    </FadeInWrapper>
  );
}

export default NotFound;
