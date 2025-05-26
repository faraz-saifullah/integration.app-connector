"use client";

import { useUser } from "@clerk/nextjs";
import { LoadingSpinner } from "@/components/Common/LoadingSpinner";
import { UserIcon, EmailIcon, TagIcon, CalendarIcon } from "@/components/Common/Icons";
import { TAB_LABELS, UI_MESSAGES } from "@/constants";

export default function UserInfoTab() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900">
            {UI_MESSAGES.NO_USER_INFO}
          </h3>
          <p className="text-gray-600">{UI_MESSAGES.NO_USER_INFO_DESCRIPTION}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-200px)] overflow-y-auto">
      <div className="space-y-6 p-6">
        <h2 className="text-xl font-semibold mb-6">{TAB_LABELS.USER_INFORMATION}</h2>

        <div className="space-y-4">
          {/* Name */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <UserIcon className="w-4 h-4 text-blue-600" />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Full Name</p>
              <p className="text-lg text-gray-900">
                {user.fullName ||
                  `${user.firstName || ""} ${user.lastName || ""}`.trim() ||
                  "Not provided"}
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <EmailIcon className="w-4 h-4 text-green-600" />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Email Address</p>
              <p className="text-lg text-gray-900">
                {user.emailAddresses?.[0]?.emailAddress || "Not provided"}
              </p>
            </div>
          </div>

          {/* Username */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <TagIcon className="w-4 h-4 text-purple-600" />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Username</p>
              <p className="text-lg text-gray-900">
                {user.username || "Not set"}
              </p>
            </div>
          </div>

          {/* Account Created */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <CalendarIcon className="w-4 h-4 text-gray-600" />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Member Since</p>
              <p className="text-lg text-gray-900">
                {user.createdAt
                  ? new Date(user.createdAt).toLocaleDateString()
                  : "Unknown"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
