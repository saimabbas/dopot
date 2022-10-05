import { create }  from "ipfs-core";

const { ethers } = require("ethers");
const OrbitDB = require('orbit-db');
const Identities = require('orbit-db-identity-provider');

var file;
var ipfs;
var provider;
var orbit, db;

async function getAccount(setState) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const account = provider.getSigner();
    setState(await (await account.getAddress()).toString().substring(0, 7) + "...");

    const identity = await Identities.createIdentity({
      type: "ethereum",
      wallet: account,
    });
  
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
    await persistentStorage();

    ipfs = await create(ipfsOptions);
    sessionStorage.setItem("ipfsOptions", JSON.stringify(ipfsOptions));
    // Create OrbitDB instance
    orbit = await OrbitDB.createInstance(ipfs)
    //console.dir(orbit);
    // Create / Open a database
    db = await orbit.log("utente")
    await db.load()
  
    // Listen for updates from peers
    db.events.on("replicated", address => {
    //console.log(db.iterator({ limit: -1 }).collect())
    })
  
    await userdb(account, db)
  
    const randomN = Math.random().toString();
    const media = await ipfs.add(randomN);
    console.log("Original IPFS object: ");
    console.dir(media);
  
    //////////////////////////////////////
    console.log("Project IPFS hash: ");
    const hash1 = await ipfs.add(rndString(50), {cidVersion: 1});
    console.dir(hash1);
    //console.dir(getBytes32FromMultiash(media.path)) << no
    //////////////////////////////////////
  
  
    ////////////////////////////////////////
    console.log("DopotReward IPFS hash: ");
    const hash2 = await ipfs.add(rndString(50), {cidVersion: 1});
    console.dir(hash2);
    ////////////////////////////////////////
  }

  async function persistentStorage() {
    if (navigator.storage && navigator.storage.persist) {
      var isPersisted = await navigator.storage.persist();
      console.log(`Persisted storage granted: ${isPersisted}`);
      if(!isPersisted){
        await Notification.requestPermission()
        isPersisted = await navigator.storage.persist()
        console.log(`Persisted storage granted: ${isPersisted}`);
      }
    }
  }

  async function userdb(account, db) {

    // Add an entry
    const hash = await db.add("id",account.getAddress());
    //console.log(hash)
    // Query
    const result = db.iterator({ limit: -1 }).collect()
    //console.log(JSON.stringify(result, null, 2))
  }

  function rndString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

export default getAccount;


