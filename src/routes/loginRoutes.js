"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send("Not permitted");
}
router.get("/", function (req, res) {
    // let websiteInfo = BundestagParty.getBundestagPartyWebsiteInfo();
    // let selector: string = "Party";
    // let executor = new ScriptExecutor(selector, websiteInfo);
    // executor.scriptSelector();
    // const partyCollection = Party.buildCollection();
    // partyCollection.on("change", () => {
    //   const partyCollectionDiv = document.createElement("partyCollection");
    //   if (partyCollectionDiv) {
    //     let userList = new PartyList(partyCollectionDiv, partyCollection);
    //     userList.render();
    //     res.send(partyCollectionDiv);
    //   }
    // });
    // partyCollection.fetch();
    if (req.session && req.session.loggedIn) {
        res.send("\n    <div>  \n      <h1>\n        Intro\n      </h1>\n      <label>\n        Intro thing\n      </label>\n      <div>\n      You are logged in  \n      </div>\n      <a href=\"/logout\">\n        Logout\n      </a>\n    </div>\n    ");
    }
    else {
        res.send("\n    <div>\n      <div>\n      You are not logged in  \n      </div>\n      <a href=\"/login\">\n        Login\n      </a>\n    </div>\n   ");
    }
});
router.get("/login", function (req, res) {
    res.send("\n  <form method=\"POST\">\n  <div>\n    <label>Email</label>\n    <input name=\"email\"/>\n  </div>\n  <div>  \n    <label>Password</label>\n    <input name=\"password\" type=\"password\"/>\n  </div>\n  <button>Submit</button>\n  </form>\n  ");
});
router.post("/login", function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === "hi" && password === "hi") {
        req.session = { loggedIn: true };
        res.redirect("/");
    }
    else {
        res.send("you suck");
    }
});
router.get("/logout", function (req, res) {
    req.session = null;
    res.redirect("/");
});
router.get("/protected", requireAuth, function (req, res) {
    res.send("Welcome to protected route");
});
