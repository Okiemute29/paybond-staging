import { useState } from "react"
export const SearchHandle = () =>{
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResult, setSearchResult] = useState([])

	const deepSearch = (obj, searchTerm) => {
        const searchString = searchTerm.toLowerCase();
        if (typeof obj === 'string') {
            return obj.toLowerCase().includes(searchString);
        }
        if (typeof obj === 'object' && obj !== null) {
            return Object.values(obj).some(value => deepSearch(value, searchString));
        }
        return false;
    };

//  const filterHandle = (e, client) =>{
//     setSearchTerm(e)
//     if(searchTerm !== ''){
//         const newClient = client.filter((clientitem) => {
//             return (Object.values(clientitem).join('').toLowerCase().includes(e.toLowerCase()))
//         })
//         setSearchResult(newClient)
//     }else(
//         setSearchResult(client)
//     )
// }

const filterHandle = (e, client) => {
	setSearchTerm(e);
	if (e !== '') {
		const newClient = client.filter((clientItem) => deepSearch(clientItem, e));
		setSearchResult(newClient);
	} else {
		setSearchResult(client);
	}
};

    return{searchResult, filterHandle, searchTerm, setSearchTerm}
}