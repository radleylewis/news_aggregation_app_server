"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const utils_1 = require("./utils");
/* initialize configuration */
dotenv_1.default.config();
const app = express_1.default();
const port = process.env.SERVER_PORT;
/* set cross origin request configuration */
utils_1.corsConfig(app);
/* register routes on app */
routes_1.default(app);
// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`server listening on port ${port} 🚀`));
//# sourceMappingURL=index.js.map