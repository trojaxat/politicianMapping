import { Router, Response, Request, NextFunction } from "express";
import { BundestagParty } from "../importConst/BundestagParty";
import { ScriptExecutor } from "../scripts/ScriptExecutor";
import { Party } from "../models/Party";
import { PartyList } from "../components/Party/PartyList";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send("Not permitted");
}

router.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
    <div>  
      <h1>
        Intro
      </h1>
      <label>
        Intro thing
      </label>
      <div>
      You are logged in  
      </div>
      <a href="/logout">
        Logout
      </a>
    </div>
    `);
  } else {
    res.send(`
    <div>
      <div>
      You are not logged in  
      </div>
      <a href="/login">
        Login
      </a>
    </div>
   `);
  }
});

router.get("/login", (req: Request, res: Response) => {
  res.send(`
  <form method="POST">
  <div>
    <label>Email</label>
    <input name="email"/>
  </div>
  <div>  
    <label>Password</label>
    <input name="password" type="password"/>
  </div>
  <button>Submit</button>
  </form>
  `);
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  if (email && password && email === "hi" && password === "hi") {
    req.session = { loggedIn: true };
    res.redirect("/");
  } else {
    res.send("you suck");
  }
});

router.get("/logout", (req, res) => {
  req.session = null;
  res.redirect("/");
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("Welcome to protected route");
});

export { router };
