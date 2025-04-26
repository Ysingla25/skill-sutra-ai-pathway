import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseconfig";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useEffect } from "react";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth/signin");
    }
  }, [user, navigate]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/auth/signin");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Your Dashboard
          </h1>
          <p className="text-xl text-gray-600">
            Welcome, {user?.displayName || user?.email}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-4">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Create New Pathway
              </Button>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                View Progress
              </Button>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Add Skill
              </Button>
            </div>
          </Card>

          {/* Recent Activity */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>AI Pathway Started</span>
                <span className="text-sm text-gray-500">2 days ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Completed Python Basics</span>
                <span className="text-sm text-gray-500">1 week ago</span>
              </div>
            </div>
          </Card>

          {/* Statistics */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Your Progress</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Skills Mastered</span>
                <span className="font-semibold">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Current Pathway</span>
                <span className="font-semibold">AI & Machine Learning</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Sign Out Button */}
        <div className="mt-8 text-center">
          <Button 
            onClick={handleSignOut} 
            variant="outline" 
            className="bg-white hover:bg-gray-50 border-gray-300"
          >
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;