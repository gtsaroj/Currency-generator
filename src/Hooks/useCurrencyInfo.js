import { useEffect } from "react"

 export const useCurrencyInfo = (currency) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((response) => {
            response.json();
        }).then((res) => {
            console.log(res)
        }).catch((error) => {
            console.error(`error found : ${error}`)
        }) 
            } catch (error) {
                console.log(error)
            }
        }
    })
}