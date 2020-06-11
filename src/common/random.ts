export function nextNumber(fromInclude: number = 0, toExclude: number = Number.MAX_VALUE): number {
    return Math.random() * (toExclude - fromInclude) - fromInclude;
}

export function uuid() : string{
    return Math.floor(nextNumber(0, 0x10000)).toString(16).substring(1);
}