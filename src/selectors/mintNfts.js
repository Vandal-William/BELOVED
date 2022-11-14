import { createRaribleSdk } from "@rarible/sdk"
import { toCollectionId, toUnionAddress } from "@rarible/types"
import { BlockchainWallet } from "@rarible/sdk-wallet/src"
import { MintType } from "@rarible/sdk/build/types/nft/mint/domain"

async function mintOnChainWithTokenId(wallet, contractAddress) {
    const sdk = createRaribleSdk(wallet, "dev")

    const collectionId = toCollectionId(contractAddress)
    //Get tokenId for collection and mint
    const tokenId = await sdk.nft.generateTokenId({
        collection: collectionId,
        minter: toUnionAddress("<CREATOR_ADDRESS>"),
    })

    const mintAction = await sdk.nft.mint({
        collectionId,
        tokenId,
    })
    /*
  You should upload json file with item metadata with the following format:
  {
    name: string
    description: string | undefined
    image: string | undefined
    "animation_url": string | undefined
    "external_url": string | undefined
    attributes: TokenMetadataAttribute[]
  }
  and insert link to json file to "uri" field.
  To format your json data use "sdk.nft.preprocessMeta()" method
   */
    const mintResult = await mintAction.submit({
        uri: "<YOUR_LINK_TO_JSON>",
        //optional
        royalties: [{
            account: toUnionAddress("<ROYLATY_ADDRESS>"),
            value: 1000,
        }],
        //optional, by default creator=minter
        creators: [{
            account: toUnionAddress("<CREATOR_ADDRESS>"),
            value: 10000,
        }],
        lazyMint: false,
        supply: 1,
    })
    if (mintResult.type === MintType.ON_CHAIN) {
        await mintResult.transaction.wait()
        return mintResult.itemId
    }
}
