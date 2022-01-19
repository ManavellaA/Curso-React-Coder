import React, {useState, useEffect} from 'react'

const item = () => {

        const [items, setItems] = useState([]);
        useEffect(() => {
        
          //primer ejemplo
          const promise = new Promise((resolve, reject) => {
            setTimeout(
              () => (number > 5 ? resolve(number) : reject(new Error("Menor a 5"))),
              3000
            );
          });
          promise
            .then((number) => console.log(number))
            .catch((error) => console.error(error));

    return (
        <div>
            
        </div>
    )
}

export default item
