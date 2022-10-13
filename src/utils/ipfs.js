const IPFS = require('ipfs')
const { ethers } = require("ethers");
const Identities = require('orbit-db-identity-provider');
const { ethereum } = window


var provider, account, address, ipfs;
async function initIPFS() {
    provider = new ethers.providers.Web3Provider(ethereum);
    await provider.send("eth_requestAccounts", []);
    account = provider.getSigner();
    address=await account.getAddress();

    var identity = await Identities.createIdentity({
      type: "ethereum",
      wallet: account,
    });

    localStorage.setItem('identity', identity);

  
    // Create IPFS instance
    const ipfsOptions = {
      identity,
      repo: 'ipfs-' + Math.random(),
      preload: {
        enabled: true,
        addresses: [ 
      '/dns4/node0.preload.ipfs.io/https',
      '/dns4/node1.preload.ipfs.io/https',
      '/dns4/node2.preload.ipfs.io/https',
      '/dns4/node3.preload.ipfs.io/https'
       ],
      },
      relay: {
        enabled: true,  // This line means your node is dialable over a Relay, but doesn't make it a relay itself
        hop: {
          enabled: true,  // `true` means your node is a relay. So if two nodes are connected to it, it should relay their dials to one another
          active: false  // `true` means your node will attempt to actively dial the requested peer. This is likely not going to work in your situation, since your nodes aren't dialable.
        }
      },
      libp2p: {
          config: {
            dht: {
              enabled: true,
              clientMode: true,
            }
          }
      }
    }

    ipfs = await IPFS.create(ipfsOptions);
}

async function getAddress() {
    return address;
}
function getIPFS() {
    return ipfs;
}

function GetAccount() {
    return account;
}


async function add(param) {
  if (param != null) {
    return await ipfs.add(param, {cidVersion: 1});
  }
    return null
}


async function addAll(params) {

  if (params != null) {
    var hash=[];
    for await (const result of ipfs.addAll(params, {cidVersion: 1})) {
      hash.push(result);
    }
    console.log(hash);
    return hash;
  }

  return null;
  
}


export default {initIPFS, add, GetAccount, getIPFS, getAddress, addAll}


