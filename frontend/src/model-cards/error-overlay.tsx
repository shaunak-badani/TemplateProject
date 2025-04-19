import useGlobalStore from "@/store/store";
import { Card, CardContent } from "@/components/ui/card";

const ErrorOverlay = () => {
  const error = useGlobalStore((state) => state.error);

  if (!error) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <Card className="max-w-md p-6 bg-red-600  shadow-xl">
        <CardContent className="text-white">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p>{error}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ErrorOverlay;
