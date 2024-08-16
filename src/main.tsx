import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { TonConnectUIProvider, THEME } from "@tonconnect/ui-react";



const manifestUrl =
  "https://raw.githubusercontent.com/Draysongz/nutswap/main/public/manifest.json";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <TonConnectUIProvider 
     manifestUrl={manifestUrl} 
     uiPreferences={{
      theme: THEME.DARK,
       colorsSet:{
        [THEME.DARK]: {
          connectButton:{
            background: 'transparent',
            foreground: 'white',
          }
        }
      }
     }
     }>
    <ChakraProvider>
      {" "}
      <App />
    </ChakraProvider>
    </TonConnectUIProvider>
  </StrictMode>
);
