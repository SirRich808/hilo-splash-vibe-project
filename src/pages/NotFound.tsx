
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-coral">404</h1>
            <div className="h-2 w-20 bg-teal mx-auto my-6"></div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            Oops! It seems like you've wandered off the path. The page you're looking for doesn't exist.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-teal hover:shadow-lg"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
