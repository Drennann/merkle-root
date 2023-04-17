const MerkleTree = require("./MerkleTree");
const niceList = require("./niceList");
const verifyProof = require("./verifyProof");

const merkleTree = new MerkleTree(niceList);

const root = merkleTree.getRoot();

console.log(root);

const name = "Alexandra Drennan";
const index = niceList.findIndex((n) => n === name);
const proof = merkleTree.getProof(index);

console.log(verifyProof(proof, name, root));
