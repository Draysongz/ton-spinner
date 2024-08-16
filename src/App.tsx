import { useState, useEffect } from "react";
import LoadingScreen from "./components/re/ls";
import GameScreen from "./components/re/gs";
import ResultModal from "./components/re/rm";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [prize, setPrize] = useState<number>(0);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSpinComplete = (result: string) => {
    setPrize(parseInt(result) * 10); // Multiply by 10 to get dollar amount
    setShowResult(true);
  };

  const handleClaimPrize = () => {
    setShowResult(false);
    // Here you would typically handle the prize claiming logic
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <GameScreen onSpinComplete={handleSpinComplete} />
          <ResultModal
            isOpen={showResult}
            onClose={handleClaimPrize}
            prize={prize}
          />
        </>
      )}
    </>
  );
};

export default App;
