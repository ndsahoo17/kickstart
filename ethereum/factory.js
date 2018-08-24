import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';


const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x16fa50D03C9271fc2bE702BEc44085EBCdF4C4ba'
);
export default instance;
