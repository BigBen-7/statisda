/* eslint-disable no-unused-vars */
import React from 'react';
import FadeInWrapper from 'src/ui/FadeInWrapper';

function Settings() {
  return (
    <FadeInWrapper className="">
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
        {/* Breadcrumb */}
        <div className="w-full max-w-4xl px-4">
          <h2 className="text-sm text-gray-500">Account settings / Profile</h2>
        </div>

        {/* Profile Section */}
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8 mt-4">
          {/* Header */}
          <h1 className="text-2xl font-bold mb-6">Profile</h1>
          <p className="text-gray-500 mb-8">
            Manage settings for your [Brand_name] profile
          </p>

          {/* Profile Picture and Upload Button */}
          <div className="flex items-center mb-8">
            {/* Profile Picture */}
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-3xl font-bold text-white">
              MA
            </div>
            <div className="ml-6">
              <p className="text-gray-500 mb-2">
                We support PNGs, JPEGs, and GIFs under 10MB
              </p>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
                Upload image
              </button>
            </div>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                value="Murat Alpay"
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Mobile Number
              </label>
              <input
                type="text"
                value="+61400000000"
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email Address */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value="murataplayl"
                  className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-0 top-0 mt-2 mr-2 bg-green-500 text-white px-4 py-2 rounded-lg">
                  Update e-mail
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                You may need to log out and back in to see any change.
              </p>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="border-t pt-8 mt-8">
            <h3 className="text-lg font-bold text-red-600 mb-2">Danger zone</h3>
            <p className="text-gray-500 mb-4">
              If you want to permanently delete this account and all of its
              data, you can do so below.
            </p>
            <button className="text-red-600 font-semibold">
              Delete account
            </button>
          </div>
        </div>
      </div>
    </FadeInWrapper>
  );
}

export default Settings;
