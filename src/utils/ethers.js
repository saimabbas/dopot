
import { create }  from "ipfs";
import IPFS from "./ipfs"
import { useSetRecoilState } from "recoil";
import { IpfsState } from "../recoilState";
import { getRecoil, setRecoil } from 'recoil-nexus'

const OrbitDB = require('orbit-db');
const Identities = require('orbit-db-identity-provider');



var orbit, db;

export const GetAccount = async (setState) => {
    

    await IPFS.initIPFS();
    setRecoil(IpfsState, IPFS);
    setState(await (await IPFS.getAddress()).toString().substring(0, 7) + "...");

    // Create OrbitDB instance
    orbit = await OrbitDB.createInstance(IPFS.getIPFS())
    console.dir(orbit);
    // Create / Open a database
    db = await orbit.log("utente")
    await db.load()
  
    // Listen for updates from peers
    db.events.on("replicated", address => {
    //console.log(db.iterator({ limit: -1 }).collect())
    })
  
    await userdb(IPFS.GetAccount(), db)
    

    
    const media = await IPFS.add("prova prova prova porva pro prova prova prova");
    console.log("Original IPFS object: ");
    console.dir(media);
    console.log(IPFS);
    localStorage.setItem('SessionIpfs', IPFS);
  
    // //////////////////////////////////////
    // console.log("Project IPFS hash: ");
    // const hash1 = await ipfs.add(rndString(50), {cidVersion: 1});
    // console.dir(hash1);
    // //console.dir(getBytes32FromMultiash(media.path)) << no
    // //////////////////////////////////////
  
  
    // ////////////////////////////////////////
    // console.log("DopotReward IPFS hash: ");
    // const hash2 = await ipfs.add(rndString(50), {cidVersion: 1});
    // console.dir(hash2);
    // ////////////////////////////////////////
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

export default GetAccount;


