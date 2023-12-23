import React, { createContext, useContext, useEffect, useReducer } from 'react';
import LoadingContext from './LoadingContext';
const ProductContext = createContext();

const initialState = {
  products: [],
  loading: true,
  error: null,
};

const productReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_PRODUCTS_ERROR':
      return {
        ...state,
        products: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const {isLoading, setIsLoading} = useContext(LoadingContext);


  useEffect(() => {
    setIsLoading(true)
    const apiUrl = 'http://localhost:8000/api/products'; // Update the URL as needed
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const itemsByCategory = {};
        const Data = JSON.parse(data);
        console.log(Data);
        Data.forEach(item => {
            const category = item.fields.category;
          
            // Check if the category exists in the itemsByCategory object, and create an array if it doesn't
            if (!itemsByCategory[category]) {
              itemsByCategory[category] = [];
            }
          
            // Push the item into the appropriate category
            itemsByCategory[category].push({
              name: item.fields.name,
              description: item.fields.description,
              price: parseFloat(item.fields.price),
              quantity: "Each", // You can customize this as needed
              veg: item.fields.is_veg,
              serves: `${item.fields.serves} piece`, // You can customize this as needed
              image: item.fields.image_url,
              id: item.pkey
            });
          });
        dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: itemsByCategory });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_PRODUCTS_ERROR', payload: error });
      });
    setIsLoading(false)

  }, []);

  return (
    <ProductContext.Provider value={state}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
