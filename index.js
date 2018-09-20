const si = require('systeminformation')

const main = async () => {
  console.log(await si.cpu())
}

main()
