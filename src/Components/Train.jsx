import { Seat } from "./Seat"
import { useEffect, useState } from "react"


export const Train = () => {

    const [seatArray, setSeatArray] = useState([])
    
    useEffect(() => {
        const arrayNumber = [ ... Array(48).keys()].map(x => ++x)

        const newArray = arrayNumber.map(number => ({seat: number, status: randomizeSeats()}))

        // for (let i = 0; i < arrayNumber.length; i += 4) {
        //     const chunk = arrayNumber.slice(i, i + 4);
        //     newArray.push(chunk)
        // }
        setSeatArray(newArray)

    }, [])
    

    const randomizeSeats = () => {
        return Math.random() > 0.5 ? 'free' : 'occupied'
    }
   
    const occupiedAlert = () => {
        alert ('This seat is occupied. You cannot select it.')
    }

    const clickSeat = (seatNo, status) => {
        const newArray = [...seatArray]

        newArray.forEach((seat) => {
            if (seat.status == "selected") {
                seat.status = 'free'
            }
        })

        newArray[seatNo - 1] = {seat: seatNo, status: status}

        setSeatArray(newArray)
    }

    return (
        <div className="train-carriage">
            {
                seatArray && seatArray.map((seatObj, index) => {
                    if (index % 4 == 0) {
                        return (
                            <div key={index} className="carriage-row">
    
                            <Seat status={seatArray[index].status} seats={seatArray[index].seat} clickSeat={seatArray[index].status !== 'occupied' ? clickSeat : occupiedAlert}/>
                            <Seat status={seatArray[index+1].status} seats={seatArray[index+1].seat} clickSeat={seatArray[index+1].status !== 'occupied' ? clickSeat : occupiedAlert}/>
                            
                                <div className="aisle-spacer"></div>
                            
                            <Seat status={seatArray[index+2].status} seats={seatArray[index+2].seat} clickSeat={seatArray[index+2].status !== 'occupied' ? clickSeat : occupiedAlert}/>
                            <Seat status={seatArray[index+3].status} seats={seatArray[index+3].seat} clickSeat={seatArray[index+3].status !== 'occupied' ? clickSeat : occupiedAlert}/>
                        </div>
                        )
                    }
                })
            }   
        </div>
        )
}