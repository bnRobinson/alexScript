
import React, { useState, useRef, useEffect } from 'react';


export default function AlexScripts() {
    const [someText, setSomeText] = useState('');
    const [interfaceArray, setInterfaceArray] = useState([]);
    const [noBpduguardArray, setNoBpduguardArray] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            const textLength = someText.length;
            inputRef.current.style.width = `${Math.max(100, textLength * 10)}px`;
        }
    }, [someText]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted");

        const data = new FormData(event.currentTarget);
        const newInterfaceArray = [];
        const noBpduguard = [];

        for (const [key, value] of data.entries()) {
            const valueString = value.toString();
            console.log(`Processing: ${valueString}`);

            // Regular expression to match substrings between "interface" and "!"
            const regex = /interface (GigabitEthernet\d+\/\d+\/\d+|GigabitEthernet\d+\/\d+|TenGigabitEthernet\d+\/\d+\/\d+|TwentyFiveGigabitEthernet\d+\/\d+\/\d+|HundredGigabitEthernet\d+\/\d+\/\d+).*?!/g;

           // const regex = /interface.*?!/g;
            const matches = valueString.match(regex);

            if (matches) {
                matches.forEach((match) => {
                    newInterfaceArray.push(match);
                });


                newInterfaceArray.forEach((interfaceStr) => {
                    if (interfaceStr.includes("switchport mode access") && 
                        !interfaceStr.includes("spanning-tree bpduguard enable")) {
                        noBpduguard.push(interfaceStr);
                       
                    }
                });
console.log(noBpduguard);
               
            }
        }

        setInterfaceArray(newInterfaceArray);
        setNoBpduguardArray(noBpduguard);
        console.log(newInterfaceArray);
    }

    const handleTextChange = (event) => {
        setSomeText(event.target.value);
    }

    const extractInterfaceNames = (interfaces) => {
        return interfaces.map((interfaceStr) => {
            const match = interfaceStr.match(/interface (GigabitEthernet\d+\/\d+\/\d+|GigabitEthernet\d+\/\d+|TenGigabitEthernet\d+\/\d+\/\d+|TwentyFiveGigabitEthernet\d+\/\d+\/\d+|HundredGigabitEthernet\d+\/\d+\/\d+)/);

            //const match = interfaceStr.match(/interface\s+GigabitEthernet\d+\/\d+\/\d+/);
            return match ? match[0] : '';
        }).filter(Boolean); // Remove empty strings
    }

    const filteredInterfaceNames = extractInterfaceNames(noBpduguardArray);

    return (
        <>
            <h1>Interfaces With No BPDU Guard:</h1>
            <form onSubmit={handleSubmit} className="form-container">
                <input 
                    type="text" 
                    name="someText" 
                    value={someText} 
                    onChange={handleTextChange} 
                    className="responsive-input"
                    ref={inputRef}
                />
                <button type="submit">Submit</button>
            </form>
            <h2>Interfaces to Check:</h2>
            <p>{filteredInterfaceNames.join(', ')}</p>
            <h2>Interfaces Entered:</h2>
            <p>{interfaceArray.join(', ')}</p>
        </>
    );
}

// import React, { useState } from 'react';

// export default function AlexScripts() {
//     const [someText, setSomeText] = useState('');
//     const [interfaceArray, setInterfaceArray] = useState([]);
//     const [noBpduguardArray, setNoBpduguardArray] = useState([])

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log("Form Submitted");

//         const data = new FormData(event.currentTarget);
//         const newInterfaceArray = [];
//         const noBpduguard=[];

//         for (const [key, value] of data.entries()) {
//             const valueString = value.toString();
//             console.log(`Processing: ${valueString}`);

//             // Regular expression to match substrings between "interface" and "!"
//             const regex = /interface.*?!/g;
//             const matches = valueString.match(regex);

//             if (matches) {
//                 matches.forEach((match) => {
//                     newInterfaceArray.push(match);
//                 });

//                 newInterfaceArray.forEach((interfaceStr)=> {
//                     if (interfaceStr.includes("switchport mode access") && !interfaceStr.includes("spanning-tree bpduguard enable")) {
//                         noBpduguard.push(interfaceStr);
//                     }
//                 });

                
//                 console.log(noBpduguard);
//             }
//         }
//         setNoBpduguardArray(noBpduguard);
//         setInterfaceArray(newInterfaceArray);
//         console.log(newInterfaceArray);
//     }

//     const handleTextChange = (event) => {
//         setSomeText(event.target.value);
//     }

//     return (
//         <>
//             <h1>Interfaces With No BPDU Guard:</h1>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" name="someText" value={someText} onChange={handleTextChange} 
//                 className='responsie-input'/>
//             </form>
//             <h2>Interfaces to Check!!</h2>
//             <p>{noBpduguardArray.join(',')}</p>
//             <h2>Interfaces Entered: </h2>
//                 <p>{interfaceArray.join(', ')}</p>

//         </>
//     );
// }



    


