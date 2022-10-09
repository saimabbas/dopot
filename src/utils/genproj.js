import { IpfsState } from "../recoilState";
import { getRecoil } from 'recoil-nexus'



async function genproj(params) {  
    const IPFS = getRecoil(IpfsState); 
    console.log(params);

    // Carico prima i file ipfs
    params.documentazione=await addFilesIpfs(params.documentazioneListFiles);
    params.fotoProdotto=await addFilesIpfs(params.fotoProdottoListFiles);
    params.logoAzienda=await addFilesIpfs(params.logoAziendaListFiles);
    
    const hash= await IPFS.add( JSON.stringify(params) );
    console.log(hash);
    //var ipfsLogo=addImageIpfs(params.fotoProdottoListFiles);
}

async function addFilesIpfs(files) {
    const IPFS = getRecoil(IpfsState);
    console.log(await IPFS.getAddress());
    console.log(files);
    console.log("Image IPFS hash: ");

    return await IPFS.addAll(files, {cidVersion: 1});
}

export default genproj