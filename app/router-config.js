import { AccountController } from "./controllers/AccountController.js";
import { ImageController } from "./controllers/ImageController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [ImageController],
    view: `app/views/HomeView.html`
  },
  {
    path: '#/profile',
    view: 'app/views/ProfileView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




