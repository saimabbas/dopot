import { IpfsState } from "../recoilState";
import { getRecoil, setRecoil } from 'recoil-nexus'



async function genproj(params) {   
    
    addImageIpfs(params.fotoProdottoListFiles);
}

async function addImageIpfs(files) {
    const IPFS = getRecoil(IpfsState);

    console.log(await IPFS.getAddress());
    console.log(files);
    console.log("Image IPFS hash: ");
    const hash1=await IPFS.add(files[0], {cidVersion: 1});
    console.log(hash1);
    //const hash1 = await ipfs.add(files, {cidVersion: 1});
    //console.dir(hash1);
}

export default genproj