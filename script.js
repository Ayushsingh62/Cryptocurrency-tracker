

async function cryptocurrency() {
   try{

const crypto = document.getElementById('crypto_select').value
console.log(crypto)

    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd&include_24hr_high_low=true`)

    const data = await response.json()
    console.log(data)

const price = data[crypto].usd

console.log(price)

const high = price*1.05
console.log(high)

const low = (price*0.95).toFixed(2)



document.querySelector('.price_info').innerHTML=`

   <p><strong>CurrentPrice :</strong>  ${price}  </p>

            <p><strong>High24:</strong> ${high}</p>

            <p><strong>Low24 :</strong> ${low}</p>
`}

catch{

   console.log('err')
}

 }

// const body = document.querySelector('body')
const select = document.querySelector('#crypto_select')
//  body.appendChild=select

select.addEventListener("change",cryptocurrency)

setInterval(cryptocurrency,  10000)


//  let Interval=  setInterval(()=>{
// const cryptos = document.getElementById('crypto_select').value
 

//    cryptocurrency(cryptos)
//    // fetchCryptoData('bitcoin')

//    console.log('Referesh sucessfull')
// },
// 6000


// )

// setTimeout(()=>{
   
// clearInterval(Interval)
// console.log('stop')
// },8000)


//    }
//    catch(err){
//  console.log(err)
//    }
// }
// cryptocurrency()