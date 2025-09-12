const fetchData=async()=>{ 
    //fetch 20 items' properties and return an array that contain all 20 items, each item is an object with many key values
        try {
            const response=await fetch(`https://fakestoreapi.com/products?limit=20`);
            if (!response.ok) {
                throw new Error("Could not fetch resource");
            }
            const data=await response.json();
            return data
        }catch(error) {
            console.log(error)
            return []
      }
     }
export default fetchData