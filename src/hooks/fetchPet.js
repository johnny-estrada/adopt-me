// *********************************************
// *********************************************
// React Query (TanStack)
// This is the react query (Tanstack) way of
// fetching data.
// *********************************************
// *********************************************

const fetchPet = async ({ queryKey }) => {
    const id = queryKey[1];
    const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
  
    if (!apiRes.ok) {
      throw new Error(`details/${id} fetch not ok`);
    }
  
    return apiRes.json();
  };
  
  export default fetchPet;