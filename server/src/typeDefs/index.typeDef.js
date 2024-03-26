import {mergeTypeDefs} from '@graphql-tools/merge';
import {userTypeDef} from './user.typeDef';
import {transectionTypeDef} from './transection.typeDef';

const typeDefs = mergeTypeDefs([userTypeDef, transectionTypeDef]);
console.log(typeDefs);

export {typeDefs}
