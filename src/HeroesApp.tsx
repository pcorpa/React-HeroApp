import "./App.css";
import { AuthProvider } from "./Auth";
import { AppRouter } from "./routers/AppRouter";

function HeroesApp() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default HeroesApp;
