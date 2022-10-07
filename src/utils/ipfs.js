const IPFS = require('ipfs')
const { ethers } = require("ethers");
const Identities = require('orbit-db-identity-provider');




async function initIPFS() {
    window.provider = new ethers.providers.Web3Provider(window.ethereum);
    await window.provider.send("eth_requestAccounts", []);
    window.account = window.provider.getSigner();
    window.address=await window.account.getAddress();

    var identity = await Identities.createIdentity({
      type: "ethereum",
      wallet: window.account,
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

    window.ipfs = await IPFS.create(ipfsOptions);
}

async function getAddress() {
    return window.address;
}
function getIPFS() {
    return window.ipfs;
}

function GetAccount() {
    return window.account;
}
async function add(param) {
    return await window.ipfs.add(param, {cidVersion: 1});
}
async function addAll(params) {
    return await window.ipfs.addAll(params, {cidVersion: 1}) ;
}
var a=0
function conta() {
    
    alert(a);
    a=a+1;
}
export default {initIPFS, add, GetAccount, getIPFS, getAddress, addAll}


