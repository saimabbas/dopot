import { IpfsState } from "../recoilState";
import { getRecoil } from 'recoil-nexus';
import {GetAccount} from "./ethers"

const abiProjectFactory = require('../abi/projectFactory/1.json');
const abiProject = require('../abi/project/1.json');

const { ethers, Contract } = require("ethers");



async function genproj(params) {  

    const IPFS = getRecoil(IpfsState); 
    if (IPFS==null) {
        await GetAccount(null);
        IPFS = getRecoil(IpfsState); 
    }
    console.log(params);

    // Carico prima i file ipfs
    params.logoAzienda=await addFilesIpfs(params.logoAziendaListFiles);
    params.documentazione=await addFilesIpfs(params.documentazioneListFiles);
    params["fotoProdotto1ipfs"]=await addFilesIpfs(params["fotoProdotto1ListFiles"]);
    params["fotoProdotto2ipfs"]=await addFilesIpfs(params["fotoProdotto2ListFiles"]);
    params["fotoProdotto3ipfs"]=await addFilesIpfs(params["fotoProdotto3ListFiles"]);
    params["fotoProdotto4ipfs"]=await addFilesIpfs(params["fotoProdotto4ListFiles"]);
    
    
    const hash= await IPFS.add( JSON.stringify(params) );
    console.log(hash);
    //var ipfsLogo=addImageIpfs(params.fotoProdottoListFiles);

    var i = 1;
    var Tier = [];   
    while (params["nomeProdotto"+i] != null) {
        
        console.log(i)
        Tier.push({ipfshash:params["fotoProdotto"+i+"ipfs"][0].path,
        investment: ethers.utils.parseUnits(params["prezzo"+i].toString(), 18),
        supply:parseInt( params["supply"+i]) });
        i++;
    }
     
    getAllProject();
    //contrattoprojectFactory(45 * 86400, hash.path, Tier);
}

async function addFilesIpfs(files) {
    const IPFS = getRecoil(IpfsState);
    console.log(await IPFS.getAddress());
    console.log(files);
    console.log("Image IPFS hash: ");

    return await IPFS.addAll(files, {cidVersion: 1});
}

async function contrattoprojectFactory(fundRaisingDeadline, infoIpfs, Tier){
    console.log(Tier)
    for (const key in Tier) {
       console.log(Tier[0]);
    }

    console.log(fundRaisingDeadline);
    console.log(infoIpfs);
    console.log(abiProjectFactory);
  
    const Address = "0xbDd97c35487b5E0D2379762265Dbaa10d28a1d61";
  
    // The ERC-20 Contract ABI, which is a common contract interface
    // for tokens (this is the Human-Readable ABI format)
    // const Abi = abiproject
    // console.log(JSON.parse(Abi))
    // console.log(abiproject)
    // The Contract object
    var provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
  
  
    const Contract = new ethers.Contract(Address, abiProjectFactory, provider);
  
    const signer = provider.getSigner()
    const daiWithSigner = Contract.connect(signer);
  
    // Each DAI has 18 decimal places
    const dai = ethers.utils.parseUnits("1", 18);
  
    var tx = await daiWithSigner.createProject(fundRaisingDeadline, infoIpfs.toString());
  
    let receipt = await tx.wait(1);
    let projectCreatedEvent = receipt.events.pop();
    let projectaddr =  ethers.utils.defaultAbiCoder.decode(['address'], projectCreatedEvent.topics[3])[0]  ;

    console.log(projectaddr);
    console.log(Tier);
    for (const key in Tier) {
        contrattoProjectAddTier(projectaddr, provider, Tier[0]);
    }
    

  }


  async function contrattoProjectAddTier(Address,provider,tier) {
    const Contract = new ethers.Contract(Address, abiProject, provider);
  
    const signer = provider.getSigner()
    const daiWithSigner = Contract.connect(signer);
  
    // Each DAI has 18 decimal places
    const dai = ethers.utils.parseUnits("1", 18);
  
    var tx = await daiWithSigner.addRewardTier(tier.ipfshash, tier.investment, tier.supply);
  }


  async function getAllProject() {
    var provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const Address = "0xbDd97c35487b5E0D2379762265Dbaa10d28a1d61";
    var contract = new Contract(Address, abiProjectFactory, provider);
    console.log(await contract.projectsVersions()) ;

  }





export default genproj