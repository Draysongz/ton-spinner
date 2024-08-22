import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    TupleReader, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadGetterTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Slice;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw.asCell());
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadGetterTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw.asCell());
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadGetterTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadGetterTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadGetterTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadGetterTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type Withdraw = {
    $$type: 'Withdraw';
    amount: bigint;
}

export function storeWithdraw(src: Withdraw) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(195467089, 32);
        b_0.storeCoins(src.amount);
    };
}

export function loadWithdraw(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 195467089) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadCoins();
    return { $$type: 'Withdraw' as const, amount: _amount };
}

function loadTupleWithdraw(source: TupleReader) {
    let _amount = source.readBigNumber();
    return { $$type: 'Withdraw' as const, amount: _amount };
}

function loadGetterTupleWithdraw(source: TupleReader) {
    let _amount = source.readBigNumber();
    return { $$type: 'Withdraw' as const, amount: _amount };
}

function storeTupleWithdraw(source: Withdraw) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    return builder.build();
}

function dictValueParserWithdraw(): DictionaryValue<Withdraw> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeWithdraw(src)).endCell());
        },
        parse: (src) => {
            return loadWithdraw(src.loadRef().beginParse());
        }
    }
}

export type TransferOwnership = {
    $$type: 'TransferOwnership';
    newOwner: Address;
}

export function storeTransferOwnership(src: TransferOwnership) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1882669034, 32);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadTransferOwnership(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1882669034) { throw Error('Invalid prefix'); }
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'TransferOwnership' as const, newOwner: _newOwner };
}

function loadTupleTransferOwnership(source: TupleReader) {
    let _newOwner = source.readAddress();
    return { $$type: 'TransferOwnership' as const, newOwner: _newOwner };
}

function loadGetterTupleTransferOwnership(source: TupleReader) {
    let _newOwner = source.readAddress();
    return { $$type: 'TransferOwnership' as const, newOwner: _newOwner };
}

function storeTupleTransferOwnership(source: TransferOwnership) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserTransferOwnership(): DictionaryValue<TransferOwnership> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTransferOwnership(src)).endCell());
        },
        parse: (src) => {
            return loadTransferOwnership(src.loadRef().beginParse());
        }
    }
}

 type Spinner_init_args = {
    $$type: 'Spinner_init_args';
}

function initSpinner_init_args(src: Spinner_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        console.log(src, b_0)
    };
}

async function Spinner_init() {
    const __code = Cell.fromBase64('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');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initSpinner_init_args({ $$type: 'Spinner_init_args' })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const Spinner_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack underflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    4633: { message: `No spins available` },
    5365: { message: `New owner must be different from current owner` },
    12817: { message: `Only owner is allowed to withdraw specific amount` },
    15895: { message: `Not a depositor` },
    25810: { message: `Already withdrawn` },
    28503: { message: `Only the current owner can transfer ownership` },
    37352: { message: `Only owner is allowed to withdraw safe` },
    41486: { message: `Only owner is allowed to withdraw all` },
    54615: { message: `Insufficient balance` },
    63463: { message: `Minimum deposit is 1 TON` },
}

const Spinner_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"Withdraw","header":195467089,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"TransferOwnership","header":1882669034,"fields":[{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
]

const Spinner_getters: ABIGetter[] = [
    {"name":"balance","arguments":[],"returnType":{"kind":"simple","type":"string","optional":false}},
    {"name":"owner","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"spinleft","arguments":[{"name":"sender","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"simple","type":"int","optional":true,"format":257}},
]

export const Spinner_getterMapping: { [key: string]: string } = {
    'balance': 'getBalance',
    'owner': 'getOwner',
    'spinleft': 'getSpinleft',
}

const Spinner_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"empty"}},
    {"receiver":"internal","message":{"kind":"text","text":"withdraw depositor"}},
    {"receiver":"internal","message":{"kind":"text","text":"withdraw all"}},
    {"receiver":"internal","message":{"kind":"text","text":"withdraw safe"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Withdraw"}},
    {"receiver":"internal","message":{"kind":"typed","type":"TransferOwnership"}},
    {"receiver":"internal","message":{"kind":"text","text":"deduct"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class Spinner implements Contract {
    
    static async init() {
        return await Spinner_init();
    }
    
    static async fromInit() {
        const init = await Spinner_init();
        const address = contractAddress(0, init);
        return new Spinner(address, init);
    }
    
    static fromAddress(address: Address) {
        return new Spinner(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  Spinner_types,
        getters: Spinner_getters,
        receivers: Spinner_receivers,
        errors: Spinner_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: null | 'withdraw depositor' | 'withdraw all' | 'withdraw safe' | Withdraw | TransferOwnership | 'deduct' | Deploy) {
        
        let body: Cell | null = null;
        if (message === null) {
            body = new Cell();
        }
        if (message === 'withdraw depositor') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message === 'withdraw all') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message === 'withdraw safe') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Withdraw') {
            body = beginCell().store(storeWithdraw(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'TransferOwnership') {
            body = beginCell().store(storeTransferOwnership(message)).endCell();
        }
        if (message === 'deduct') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getBalance(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('balance', builder.build())).stack;
        let result = source.readString();
        return result;
    }
    
    async getOwner(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('owner', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getSpinleft(provider: ContractProvider, sender: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(sender);
        let source = (await provider.get('spinleft', builder.build())).stack;
        let result = source.readBigNumberOpt();
        return result;
    }
    
}

export {
    loadTupleStateInit,
    storeTupleStateInit,
    loadGetterTupleStateInit,
    dictValueParserStateInit,
    loadTupleContext,
    storeTupleContext,
    loadGetterTupleContext,
    dictValueParserContext,
    loadTupleSendParameters,
    storeTupleSendParameters,
    loadGetterTupleSendParameters,
    dictValueParserSendParameters,
    loadTupleDeploy,
    loadGetterTupleDeploy,
    storeTupleDeploy,
    dictValueParserDeploy,
    loadTupleDeployOk,
    loadGetterTupleDeployOk,
    storeTupleDeployOk,
    dictValueParserDeployOk,
    loadTupleFactoryDeploy,
    loadGetterTupleFactoryDeploy,
    storeTupleFactoryDeploy,
    dictValueParserFactoryDeploy,
    loadTupleWithdraw,
    loadGetterTupleWithdraw,
    storeTupleWithdraw,
    dictValueParserWithdraw,
    loadTupleTransferOwnership,
    storeTupleTransferOwnership,
    loadGetterTupleTransferOwnership,
    dictValueParserTransferOwnership,
    
}