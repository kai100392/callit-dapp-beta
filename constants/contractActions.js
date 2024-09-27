import { ethers } from "ethers";

const gasOptions = {
  gasLimit: ethers.utils.hexlify(15000000), // Set your gas limit
  maxPriorityFeePerGas: ethers.utils.parseUnits("2.5", "gwei"), // Set the priority fee
  maxFeePerGas: ethers.utils.parseUnits("1000000", "gwei"), // Set the max fee
};

// Make a new market
export const makeNewMarket = async (contract, params) => {
  const {
    _name,
    _usdAmntLP,
    _dtCallDeadline,
    _dtResultVoteStart,
    _dtResultVoteEnd,
    _resultLabels,
    _resultDescrs,
  } = params;
  console.log("contract--", _resultLabels);
  try {
    const tx = await contract.makeNewMarket(
      _name,
      _usdAmntLP,
      _dtCallDeadline,
      _dtResultVoteStart,
      _dtResultVoteEnd,
      _resultLabels,
      _resultDescrs,
      gasOptions
    );
    // Wait for the transaction to be mined
    await tx.wait();
    console.log("Transaction successful:", tx);
  } catch (error) {
    console.error("Error in makeNewMarket:", error);
    throw error;
  }
};

// Buy call ticket with promo code
export const buyCallTicketWithPromoCode = async (contract, params) => {
  const { _ticket, _promoCodeHash, _usdAmnt } = params;
  try {
    const tx = await contract.buyCallTicketWithPromoCode(
      _ticket,
      _promoCodeHash,
      _usdAmnt,
      gasOptions
    );
    // Wait for the transaction to be mined
    await tx.wait();
    console.log("Ticket Bought successfully:", tx);
  } catch (error) {
    console.error("Error in buyCallTicketWithPromoCode:", error);
    throw error;
  }
};

// Execute air parity for ticket
export const exeArbPriceParityForTicket = async (contract, params) => {
  const { _ticket } = params;
  try {
    const tx = await contract.exeArbPriceParityForTicket(_ticket, gasOptions);
    // Wait for the transaction to be mined
    await tx.wait();
    console.log("Transaction successful:", tx);
  } catch (error) {
    console.error("Error in exeArbPriceParityForTicket:", error);
    throw error;
  }
};

// Close market calls for ticket
export const closeMarketCallsForTicket = async (contract, params) => {
  const { _ticket } = params;
  try {
    const tx = await contract.closeMarketCallsForTicket(_ticket);
    // Wait for the transaction to be mined
    await tx.wait();
    console.log("Transaction successful:", tx);
  } catch (error) {
    console.error("Error in closeMarketCallsForTicket:", error);
    throw error;
  }
};

// Cast vote for market ticket
export const castVoteForMarketTicket = async (contract, params) => {
  const { _ticket } = params;
  try {
    const tx = await contract.castVoteForMarketTicket(_ticket);
    // Wait for the transaction to be mined
    await tx.wait();
    console.log("Transaction successful:", tx);
  } catch (error) {
    console.error("Error in castVoteForMarketTicket:", error);
    throw error;
  }
};

// Close market for ticket
export const closeMarketForTicket = async (contract, params) => {
  const { _ticket } = params;
  try {
    const tx = await contract.closeMarketForTicket(_ticket);
    // Wait for the transaction to be mined
    await tx.wait();
    console.log("Transaction successful:", tx);
  } catch (error) {
    console.error("Error in closeMarketForTicket:", error);
    throw error;
  }
};

// Claim ticket rewards
export const claimTicketRewards = async (contract, params) => {
  const { _ticket, _resultAgree } = params;
  try {
    const tx = await contract.claimTicketRewards(_ticket, _resultAgree);
    // Wait for the transaction to be mined
    await tx.wait();
    console.log("Transaction successful:", tx);
  } catch (error) {
    console.error("Error in claimTicketRewards:", error);
    throw error;
  }
};

// Claim voter rewards
export const claimVoterRewards = async (contract) => {
  try {
    const tx = await contract.claimVoterRewards();
    // Wait for the transaction to be mined
    await tx.wait();
    console.log("Transaction successful:", tx);
  } catch (error) {
    console.error("Error in claimVoterRewards:", error);
    throw error;
  }
};

// Claim promoter rewards
export const claimPromotorRewards = async (contract, params) => {
  const { _promoCodeHash } = params;
  try {
    const tx = await contract.claimPromotorRewards(_promoCodeHash);
    // Wait for the transaction to be mined
    await tx.wait();
    console.log("Transaction successful:", tx);
  } catch (error) {
    console.error("Error in claimPromotorRewards:", error);
    throw error;
  }
};

// Set Market Information
export const setMarketInfo = async (contract, params) => {
  const { _anyTicket, _category, _descr, _imgUrl } = params;
  console.log("sMIcontract--", params);
  try {
    const tx = await contract.setMarketInfo(
      _anyTicket,
      _category,
      _descr,
      _imgUrl,
      gasOptions
    );
    // Wait for the transaction to be mined
    await tx.wait();
    console.log("Transaction successful:", tx);
  } catch (error) {
    console.error("Error in setMarketInfo:", error);
    throw error;
  }
};

// Get Market Information For Maker
export const getMarketsForMaker = async (contract, params) => {
  const { _maker, _liveAll, _idxStart, _retCnt } = params;
  console.log("gMFMcontract--", _category);
  try {
    const tx = await contract.getMarketsForMaker(
      _maker,
      _liveAll,
      _idxStart,
      _retCnt
    );
    // Wait for the transaction to be mined
    await tx.wait();
    console.log("Transaction successful:", tx);
  } catch (error) {
    console.error("Error in getMarketsForMaker:", error);
    throw error;
  }
};

//Get Marketget Count For Category or Maker
export const getMarketCntForMakerOrCategory = async (contract, params) => {
  const { _maker, _category } = params;
  console.log("params:", params);
  try {
    const tx = await contract.getMarketCntForMakerOrCategory(
      _maker,
      _category
      // gasOptions
    );
    return tx.toNumber();
  } catch (error) {
    console.error("Error in getMarketCntForMakerOrCategory:", error);
    throw error;
  }
};

// Get Market Info For Category
export const getMarketsForMakerOrCategory = async (contract, params) => {
  const { _category, _maker, _all, _live, _idxStart, _retCnt } = params;
  try {
    const tx = await contract.getMarketsForMakerOrCategory(
      _category,
      _maker,
      _all,
      _live,
      _idxStart,
      _retCnt
      // gasOptions
    );
    // Wait for the transaction to be mined
    console.log("GetMarkets executed successfully:", tx);
    return tx;
  } catch (error) {
    console.error("Error in getMarketsForMakerOrCategory:", error);
    throw error;
  }
  console.log("getMarketsForCategoryOrMaker", params);
};

export const getUSDBalance = async (contract, params) => {
  const { _acct } = params;
  try {
    const balance = await contract.getUsdBalanceForAcct(_acct);
    console.log("USD Balance:", Number(balance));
    return balance;
  } catch (error) {
    console.error("Error fetching balance:", error);
  }
};

export const depositToVault = async (contract, params) => {
  const { _depositor, _value } = params;
  try {
    await contract.deposit(_depositor, _value);
  } catch (error) {
    console.error("Error fetching balance:", error);
  }
};

export const getMarketHashesForMakerOrCategory = async (contract, params) => {
  const { _category, _maker, _all, _live, _idxStart, _retCnt } = params;
  try {
    const tx = await contract.getMarketHashesForMakerOrCategory(
      _category,
      _maker,
      _all,
      _live,
      _idxStart,
      _retCnt
      // gasOptions
    );
    // Wait for the transaction to be mined
    console.log("GetMarketHashes executed successfully:", tx);
    return tx;
  } catch (error) {
    console.error("Error in getMarketHashesForMakerOrCategory:", error);
    throw error;
  }
};

export const getMarketForTicket = async (contract, params) => {
  console.log("getMarketForTicket params;", params);
  const { _ticket } = params;
  try {
    const tx = await contract.getMarketForTicket(
      _ticket
      // gasOptions
    );
    // Wait for the transaction to be mined
    console.log("GetMarketForTicket executed successfully:", tx);
    return tx;
  } catch (error) {
    console.error("Error in getMarketForTicket:", error);
    throw error;
  }
};
