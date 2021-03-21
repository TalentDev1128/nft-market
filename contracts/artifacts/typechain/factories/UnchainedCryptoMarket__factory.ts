/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { UnchainedCryptoMarket } from "../UnchainedCryptoMarket";

export class UnchainedCryptoMarket__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    pricePerToken_: BigNumberish,
    overrides?: Overrides
  ): Promise<UnchainedCryptoMarket> {
    return super.deploy(
      pricePerToken_,
      overrides || {}
    ) as Promise<UnchainedCryptoMarket>;
  }
  getDeployTransaction(
    pricePerToken_: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(pricePerToken_, overrides || {});
  }
  attach(address: string): UnchainedCryptoMarket {
    return super.attach(address) as UnchainedCryptoMarket;
  }
  connect(signer: Signer): UnchainedCryptoMarket__factory {
    return super.connect(signer) as UnchainedCryptoMarket__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UnchainedCryptoMarket {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UnchainedCryptoMarket;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pricePerToken_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "contentHash",
        type: "bytes32",
      },
    ],
    name: "mintAndBuy",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pricePerToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenContentHashes",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620036b1380380620036b1833981810160405260208110156200003757600080fd5b81019080805190602001909291905050506040518060400160405280601a81526020017f556e636861696e65642043727970746f6d61726b6574204e46540000000000008152506040518060400160405280600581526020017f55434e46540000000000000000000000000000000000000000000000000000008152506000620000c66200024c60201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3506200017c6301ffc9a760e01b6200025460201b60201c565b81600790805190602001906200019492919062000379565b508060089080519060200190620001ad92919062000379565b50620001c66380ac58cd60e01b6200025460201b60201c565b620001de635b5e139f60e01b6200025460201b60201c565b620001f663780e9d6360e01b6200025460201b60201c565b50506200023e6040518060400160405280601e81526020017f68747470733a2f2f6d75736b792e6d656d65732f6170692f746f6b656e2f00008152506200035d60201b60201c565b80600b81905550506200041f565b600033905090565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415620002f1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433136353a20696e76616c696420696e746572666163652069640000000081525060200191505060405180910390fd5b6001806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b80600a90805190602001906200037592919062000379565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620003bc57805160ff1916838001178555620003ed565b82800160010185558215620003ed579182015b82811115620003ec578251825591602001919060010190620003cf565b5b509050620003fc919062000400565b5090565b5b808211156200041b57600081600090555060010162000401565b5090565b613282806200042f6000396000f3fe60806040526004361061014b5760003560e01c806370a08231116100b6578063a22cb4651161006f578063a22cb465146107c1578063b88d4fde1461081e578063c87b56dd14610930578063e985e9c5146109e4578063f2fde38b14610a6b578063fad3219714610abc5761014b565b806370a08231146105fb578063715018a6146106605780637b1b1de6146106775780637e36b5b7146106a25780638da5cb5b146106f057806395d89b41146107315761014b565b80632f745c59116101085780632f745c59146103b65780633ccfd60b1461042557806342842e0e1461043c5780634f6ccce7146104b75780636352211e146105065780636c0360eb1461056b5761014b565b806301ffc9a71461015057806306fdde03146101c0578063081812fc14610250578063095ea7b3146102b557806318160ddd1461031057806323b872dd1461033b575b600080fd5b34801561015c57600080fd5b506101a86004803603602081101561017357600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610b0b565b60405180821515815260200191505060405180910390f35b3480156101cc57600080fd5b506101d5610b73565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102155780820151818401526020810190506101fa565b50505050905090810190601f1680156102425780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561025c57600080fd5b506102896004803603602081101561027357600080fd5b8101908080359060200190929190505050610c15565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102c157600080fd5b5061030e600480360360408110156102d857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610cb0565b005b34801561031c57600080fd5b50610325610df4565b6040518082815260200191505060405180910390f35b34801561034757600080fd5b506103b46004803603606081101561035e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610e05565b005b3480156103c257600080fd5b5061040f600480360360408110156103d957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610e7b565b6040518082815260200191505060405180910390f35b34801561043157600080fd5b5061043a610ed6565b005b34801561044857600080fd5b506104b56004803603606081101561045f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610fd4565b005b3480156104c357600080fd5b506104f0600480360360208110156104da57600080fd5b8101908080359060200190929190505050610ff4565b6040518082815260200191505060405180910390f35b34801561051257600080fd5b5061053f6004803603602081101561052957600080fd5b8101908080359060200190929190505050611017565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561057757600080fd5b5061058061104e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105c05780820151818401526020810190506105a5565b50505050905090810190601f1680156105ed5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561060757600080fd5b5061064a6004803603602081101561061e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506110f0565b6040518082815260200191505060405180910390f35b34801561066c57600080fd5b506106756111c5565b005b34801561068357600080fd5b5061068c611332565b6040518082815260200191505060405180910390f35b6106ee600480360360408110156106b857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611338565b005b3480156106fc57600080fd5b506107056114a2565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561073d57600080fd5b506107466114cb565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561078657808201518184015260208101905061076b565b50505050905090810190601f1680156107b35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156107cd57600080fd5b5061081c600480360360408110156107e457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080351515906020019092919050505061156d565b005b34801561082a57600080fd5b5061092e6004803603608081101561084157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156108a857600080fd5b8201836020820111156108ba57600080fd5b803590602001918460018302840111640100000000831117156108dc57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611723565b005b34801561093c57600080fd5b506109696004803603602081101561095357600080fd5b810190808035906020019092919050505061179b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156109a957808201518184015260208101905061098e565b50505050905090810190601f1680156109d65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156109f057600080fd5b50610a5360048036036040811015610a0757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611a6c565b60405180821515815260200191505060405180910390f35b348015610a7757600080fd5b50610aba60048036036020811015610a8e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611b00565b005b348015610ac857600080fd5b50610af560048036036020811015610adf57600080fd5b8101908080359060200190929190505050611cf2565b6040518082815260200191505060405180910390f35b600060016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060078054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c0b5780601f10610be057610100808354040283529160200191610c0b565b820191906000526020600020905b815481529060010190602001808311610bee57829003601f168201915b5050505050905090565b6000610c2082611d0a565b610c75576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180613177602c913960400191505060405180910390fd5b6005600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610cbb82611017565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610d42576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806131fb6021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610d61611d27565b73ffffffffffffffffffffffffffffffffffffffff161480610d905750610d8f81610d8a611d27565b611a6c565b5b610de5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806130ca6038913960400191505060405180910390fd5b610def8383611d2f565b505050565b6000610e006003611de8565b905090565b610e16610e10611d27565b82611dfd565b610e6b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603181526020018061321c6031913960400191505060405180910390fd5b610e76838383611ef1565b505050565b6000610ece82600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061213490919063ffffffff16565b905092915050565b610ede611d27565b73ffffffffffffffffffffffffffffffffffffffff16610efc6114a2565b73ffffffffffffffffffffffffffffffffffffffff1614610f85576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b60004790503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610fd0573d6000803e3d6000fd5b5050565b610fef83838360405180602001604052806000815250611723565b505050565b60008061100b83600361214e90919063ffffffff16565b50905080915050919050565b60006110478260405180606001604052806029815260200161312c60299139600361217a9092919063ffffffff16565b9050919050565b6060600a8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110e65780601f106110bb576101008083540402835291602001916110e6565b820191906000526020600020905b8154815290600101906020018083116110c957829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611177576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180613102602a913960400191505060405180910390fd5b6111be600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612199565b9050919050565b6111cd611d27565b73ffffffffffffffffffffffffffffffffffffffff166111eb6114a2565b73ffffffffffffffffffffffffffffffffffffffff1614611274576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600b5481565b600b5434146113af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f4d696e207072696365206e6f74206d657400000000000000000000000000000081525060200191505060405180910390fd5b600c600082815260200190815260200160002060009054906101000a900460ff1615611443576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f4d6564696120616c7265616479206d696e74656400000000000000000000000081525060200191505060405180910390fd5b600061144d610df4565b905061145983826121ae565b6001600c600084815260200190815260200160002060006101000a81548160ff02191690831515021790555081600d600083815260200190815260200160002081905550505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060088054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115635780601f1061153857610100808354040283529160200191611563565b820191906000526020600020905b81548152906001019060200180831161154657829003601f168201915b5050505050905090565b611575611d27565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611616576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b8060066000611623611d27565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff166116d0611d27565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b61173461172e611d27565b83611dfd565b611789576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603181526020018061321c6031913960400191505060405180910390fd5b611795848484846121cc565b50505050565b60606117a682611d0a565b6117fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f8152602001806131cc602f913960400191505060405180910390fd5b6060600960008481526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156118a45780601f10611879576101008083540402835291602001916118a4565b820191906000526020600020905b81548152906001019060200180831161188757829003601f168201915b5050505050905060606118b561104e565b90506000815114156118cb578192505050611a67565b60008251111561199c5780826040516020018083805190602001908083835b6020831061190d57805182526020820191506020810190506020830392506118ea565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b6020831061195e578051825260208201915060208101905060208303925061193b565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405292505050611a67565b806119a68561223e565b6040516020018083805190602001908083835b602083106119dc57805182526020820191506020810190506020830392506119b9565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b60208310611a2d5780518252602082019150602081019050602083039250611a0a565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050505b919050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611b08611d27565b73ffffffffffffffffffffffffffffffffffffffff16611b266114a2565b73ffffffffffffffffffffffffffffffffffffffff1614611baf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611c35576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061302e6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600d6020528060005260406000206000915090505481565b6000611d2082600361238590919063ffffffff16565b9050919050565b600033905090565b816005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16611da283611017565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000611df68260000161239f565b9050919050565b6000611e0882611d0a565b611e5d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061309e602c913960400191505060405180910390fd5b6000611e6883611017565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611ed757508373ffffffffffffffffffffffffffffffffffffffff16611ebf84610c15565b73ffffffffffffffffffffffffffffffffffffffff16145b80611ee85750611ee78185611a6c565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16611f1182611017565b73ffffffffffffffffffffffffffffffffffffffff1614611f7d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806131a36029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612003576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806130546024913960400191505060405180910390fd5b61200e8383836123b0565b612019600082611d2f565b61206a81600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206123b590919063ffffffff16565b506120bc81600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206123cf90919063ffffffff16565b506120d3818360036123e99092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000612143836000018361241e565b60001c905092915050565b60008060008061216186600001866124a1565b915091508160001c8160001c9350935050509250929050565b600061218d846000018460001b8461253a565b60001c90509392505050565b60006121a782600001612630565b9050919050565b6121c8828260405180602001604052806000815250612641565b5050565b6121d7848484611ef1565b6121e3848484846126b2565b612238576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180612ffc6032913960400191505060405180910390fd5b50505050565b60606000821415612286576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050612380565b600082905060005b600082146122b0578080600101915050600a82816122a857fe5b04915061228e565b60608167ffffffffffffffff811180156122c957600080fd5b506040519080825280601f01601f1916602001820160405280156122fc5781602001600182028036833780820191505090505b50905060006001830390508593505b6000841461237857600a848161231d57fe5b0660300160f81b8282806001900393508151811061233757fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a848161237057fe5b04935061230b565b819450505050505b919050565b6000612397836000018360001b6128cb565b905092915050565b600081600001805490509050919050565b505050565b60006123c7836000018360001b6128ee565b905092915050565b60006123e1836000018360001b6129d6565b905092915050565b6000612415846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b612a46565b90509392505050565b60008183600001805490501161247f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612fda6022913960400191505060405180910390fd5b82600001828154811061248e57fe5b9060005260206000200154905092915050565b60008082846000018054905011612503576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806131556022913960400191505060405180910390fd5b600084600001848154811061251457fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008084600101600085815260200190815260200160002054905060008114158390612601576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156125c65780820151818401526020810190506125ab565b50505050905090810190601f1680156125f35780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5084600001600182038154811061261457fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b61264b8383612b22565b61265860008484846126b2565b6126ad576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180612ffc6032913960400191505060405180910390fd5b505050565b60006126d38473ffffffffffffffffffffffffffffffffffffffff16612d16565b6126e057600190506128c3565b606061284a63150b7a0260e01b6126f5611d27565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561277957808201518184015260208101905061275e565b50505050905090810190601f1680156127a65780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051806060016040528060328152602001612ffc603291398773ffffffffffffffffffffffffffffffffffffffff16612d299092919063ffffffff16565b9050600081806020019051602081101561286357600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080836001016000848152602001908152602001600020541415905092915050565b600080836001016000848152602001908152602001600020549050600081146129ca576000600182039050600060018660000180549050039050600086600001828154811061293957fe5b906000526020600020015490508087600001848154811061295657fe5b906000526020600020018190555060018301876001016000838152602001908152602001600020819055508660000180548061298e57fe5b600190038181906000526020600020016000905590558660010160008781526020019081526020016000206000905560019450505050506129d0565b60009150505b92915050565b60006129e28383612d41565b612a3b578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050612a40565b600090505b92915050565b6000808460010160008581526020019081526020016000205490506000811415612aed57846000016040518060400160405280868152602001858152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550508460000180549050856001016000868152602001908152602001600020819055506001915050612b1b565b82856000016001830381548110612b0057fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612bc5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b612bce81611d0a565b15612c41576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b612c4d600083836123b0565b612c9e81600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206123cf90919063ffffffff16565b50612cb5818360036123e99092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600080823b905060008111915050919050565b6060612d388484600085612d64565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b606082471015612dbf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806130786026913960400191505060405180910390fd5b612dc885612d16565b612e3a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b60208310612e8a5780518252602082019150602081019050602083039250612e67565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612eec576040519150601f19603f3d011682016040523d82523d6000602084013e612ef1565b606091505b5091509150612f01828286612f0d565b92505050949350505050565b60608315612f1d57829050612fd2565b600083511115612f305782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612f97578082015181840152602081019050612f7c565b50505050905090810190601f168015612fc45780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b939250505056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a2646970667358221220022a853840fbc54f2c43b40d3c0ffc7ca437461113d761266e6c49141f73251064736f6c63430007030033";
