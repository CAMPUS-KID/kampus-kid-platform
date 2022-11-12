import { Router } from "./navigation";
import { Providers } from "./providers";

function App() {
  return (
    <Providers>
      <Router />
    </Providers>
  );
}

export default App;
