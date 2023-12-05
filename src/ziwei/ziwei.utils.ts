export const neutralize = (index: number, arrLength: number) => {
    return (index > 0 ? index : arrLength + index) % arrLength;
};
