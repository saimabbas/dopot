import { atom, selector } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

const IpfsState = atom({
  key: "IPFS",
  default: null
});


export {IpfsState}