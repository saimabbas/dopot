import { IpfsState } from "../recoilState";
import { getRecoil } from 'recoil-nexus';

const Abi = require('../abi/projectFactory/1.json');
const { ethers } = require("ethers");



async function genproj(params) {  
    const IPFS = getRecoil(IpfsState); 
    console.log(params);

    // Carico prima i file ipfs
    params.logoAzienda=await addFilesIpfs(params.logoAziendaListFiles);
    params.documentazione=await addFilesIpfs(params.documentazioneListFiles);
    params["fotoProdotto1"]=await addFilesIpfs(params["fotoProdotto1ListFiles"]);
    params["fotoProdotto2"]=await addFilesIpfs(params["fotoProdotto2ListFiles"]);
    params["fotoProdotto3"]=await addFilesIpfs(params["fotoProdotto3ListFiles"]);
    params["fotoProdotto4"]=await addFilesIpfs(params["fotoProdotto4ListFiles"]);
    
    
    const hash= await IPFS.add( JSON.stringify(params) );
    console.log(hash);
    //var ipfsLogo=addImageIpfs(params.fotoProdottoListFiles);

    var i = 1;
    var Tier = [];   
    while (params["nomeProdotto"+i] != null) {
        
        console.log(i)
        Tier.push({ipfshash:params["fotoProdotto"+i],
        tokenId:0,
        investment: ethers.utils.parseUnits(params["prezzo"+i].toString(), 18),
        supply:params["supply"+i]});
        i++;
    }
     

    contrattoprojectFactory(params.giorniCampagna * 86400, hash, Tier);
}

async function addFilesIpfs(files) {
    const IPFS = getRecoil(IpfsState);
    console.log(await IPFS.getAddress());
    console.log(files);
    console.log("Image IPFS hash: ");

    return await IPFS.addAll(files, {cidVersion: 1});
}

async function contrattoprojectFactory(fundRaisingDeadline, infoIpfs, Tier){

    console.log(fundRaisingDeadline);
    console.log(infoIpfs);
    console.log(Tier);
  
    const Address = "0x06BC55Cb05F934E9CbCd1Cf8Eb92a968E3B1E7B3";
  
    // The ERC-20 Contract ABI, which is a common contract interface
    // for tokens (this is the Human-Readable ABI format)
    // const Abi = abiproject
    // console.log(JSON.parse(Abi))
    // console.log(abiproject)
    // The Contract object
    var provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
  
  
    const Contract = new ethers.Contract(Address, Abi, provider);
  
    const signer = provider.getSigner()
    const daiWithSigner = Contract.connect(signer);
  
    // Each DAI has 18 decimal places
    const dai = ethers.utils.parseUnits("1", 18);
  
    var tx = await daiWithSigner.createProject(fundRaisingDeadline, infoIpfs, Tier);
  
    let receipt = await tx.wait(1);
    let projectCreatedEvent = receipt.events.pop();
    let projectaddr = projectCreatedEvent.args["project"];
    console.log(projectaddr);
  
   
  }

export default genproj