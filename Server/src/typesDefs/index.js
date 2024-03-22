import { mergeTypeDefs } from "@graphql-tools/merge";

import { userTypeDefs } from "./user.typedefs.js";
import { transectionTypeDefs } from "./transection.typedefs.js";

const mergetypeDefs = mergeTypeDefs([userTypeDefs, transectionTypeDefs]);

export { mergetypeDefs };
