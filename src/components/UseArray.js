import React, { useEffect, useState } from 'react'

function UseArray() {
    const [fruits, setfruits] = useState([])

    useEffect(()=>{
        if(fruits.length>0){
            console.log("useEffect [fruits] executed");
        }
    },[fruits])

    let addFruit=()=>{
        let fruitsCopy = [...fruits]
        fruitsCopy.push("Lychee")
        setfruits(fruitsCopy)
    }
    return (
        <div>
            <button onClick={addFruit}>Add fruit</button>
            {
                fruits.map((val,idx)=>{
                    return <p key={val+idx}>{val} at index {idx}</p>
                })
            }
        </div>
    )
}

export default UseArray
