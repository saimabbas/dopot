import { IpfsState, progettiAddressState , providerState, progettiState} from "../recoilState";
import { getRecoil, setRecoil } from 'recoil-nexus';
import {GetAccount} from "./ethersUtils"

const abiProjectFactory = require('../abi/projectFactory/1.json');
const abiProject = require('../abi/project/1.json');

const { ethers, Contract } = require("ethers");



async function genproj(params) {  

    const IPFS = getRecoil(IpfsState); 
    setRecoil(providerState, new ethers.providers.Web3Provider(window.ethereum));
    
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
     
    //getAllProject();
    getIPFSprojectAddr(getRecoil(progettiAddressState)[0][0]);
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
  
    const Address = "0xEe784386066cd3B340C6A97626B74b57009f7935";
  
    // The ERC-20 Contract ABI, which is a common contract interface
    // for tokens (this is the Human-Readable ABI format)
    // const Abi = abiproject
    // console.log(JSON.parse(Abi))
    // console.log(abiproject)
    // The Contract object
  
  
    const Contract = new ethers.Contract(Address, abiProjectFactory,getRecoil(providerState));
  
    const signer = getRecoil(providerState).getSigner();
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
        contrattoProjectAddTier(projectaddr, getRecoil(providerState), Tier[0]);
    }
    

  }


  async function getIPFSprojectAddr(Address) {
    
    const Contract = new ethers.Contract(Address, abiProject, getRecoil(providerState));
    setRecoil(progettiState, await getRecoil(IpfsState).getJSON(await Contract.projectMedia()));
    var img =await getRecoil(IpfsState).getImage(getRecoil(progettiState).fotoProdotto1ipfs[0].path);
    setRecoil(progettiState, {...getRecoil(progettiState)[0], fotoProdotto1: img} )
    console.log()
    
  }

  


  async function contrattoProjectAddTier(Address,provider,tier) {
    const Contract = new ethers.Contract(Address, abiProject, provider);
  
    const signer = provider.getSigner()
    const daiWithSigner = Contract.connect(signer);
    
    var tx = await daiWithSigner.addRewardTier(tier.ipfshash, tier.investment, tier.supply);
  }


  async function getAllProject() {
   
    const Address = "0xEe784386066cd3B340C6A97626B74b57009f7935";
    var contract = new Contract(Address, abiProjectFactory, getRecoil(providerState));
   
    var progetti=[];
    try {  
      var i = 0;
      while (true) {
        progetti.push( await contract.projectsVersions(i));
        i++;
      }
      } 
      catch (e) {    
        console.log(progetti);
          // handle exception  
      } 
      setRecoil(progettiAddressState, progetti);

  }



    /** Uses `URL.createObjectURL` free returned ObjectURL with `URL.RevokeObjectURL` when done with it.
     * 
     * @param {string} cid CID you want to retrieve
     * @param {string} mime mimetype of image (optional, but useful)
     * @param {number} limit size limit of image in bytes
     * @returns ObjectURL
     */
    async function loadImgURL(cid, mime, limit) {
      const IPFS = getRecoil(IpfsState);

      if (cid == "" || cid == null || cid == undefined) {
          return;
      }
      for await (const file of IPFS.getIPFS().get(cid)) {
          if (file.size > limit) {
              return;
          }
          const content = [];
          if (file.content) {
              for await(const chunk of file.content) {
                  content.push(chunk);
              }
              return URL.createObjectURL(new Blob(content, {type: mime}));
          }
      }
    }




export default genproj