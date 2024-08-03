import { useState } from "react"

export const SelectItem = () => {
    const [selectedItem, setSelectedItem] = useState([])
    
    const handleSelectAllChecked = (e) => {
		console.log(e.taarget)
        setSelectedItem([])
        e.target.checked ?
          
          document.querySelectorAll('input.each_invoice').forEach(item =>{
            item.checked = true  
            setSelectedItem(prevState => [...prevState, item.id])
        })
        :
          document.querySelectorAll('input.each_invoice').forEach(item =>{
            item.checked = false
        })

    }
      
    const handleEachInvoice = (e) => {
		console.log(e.target)
        if (e.target.checked === true){ 
          setSelectedItem([...selectedItem, e.target.id])
          if (selectedItem.length + 1 === document.querySelectorAll('input.each_invoice').length){
            document.querySelector('input.selectAll').checked = true
          }
            
        }else{
          setSelectedItem(selectedItem => selectedItem.filter(arr => arr !== e.target.id))
          document.querySelector('input.selectAll').checked = false  
        }
    }
      return {handleSelectAllChecked, handleEachInvoice, selectedItem, setSelectedItem}
}
