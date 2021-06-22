const args = process.argv;
const toPrint = args.slice(2);

console.log(Number(toPrint[0]) + Number(toPrint[1]));