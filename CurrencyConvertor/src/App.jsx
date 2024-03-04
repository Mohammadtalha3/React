import { useState } from 'react'
import { InputBox } from './components'
import usecurrencyInfo from './hooks/usecurrencyinfo'

function App() {
  const [amount, setamount] = useState(0)
  const [from ,setfrom]= useState("usd")
  const [to, setTo]=useState("pkr")
  const [convertedamount, setconvertedamount]= useState(0)


  const currencyInfo= usecurrencyInfo(from);
  const options= Object.keys(currencyInfo)
  //console.log(options)

  const swap=()=>{

    setfrom(to)
    setTo(from)

  }

  const convert=()=>{
    setconvertedamount(amount*currencyInfo[to])
  }


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOPtions={options}
                            onCurrencyChange={(currency)=>
                              setamount(amount)

                            }
                            selectedCurrency={from}
                            onAmountChange={(amount)=>setamount(amount)}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                    <InputBox
                            label="To"
                            amount={convertedamount}
                            currencyOPtions={options}
                            onCurrencyChange={(currency)=>
                              setTo(convertedamount)

                            }
                            amountDisable
                            selectedCurrency={to}
                            />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from} to {to}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
