import React, { useState } from 'react';
import './RequestSection.css';
import { getProduct, getProductById, postProduct } from '../../api/productApi';
import { getAllCategories, getCategoryById, postCategory } from '../../api/categoryApi';

function RequestSection({ selectedOption, setResponseData, setSelectedOption  ,setSelectedSection , selectedSection}) {
  const [inputFields, setInputFields] = useState({
    product: {
      postProduct: { productId: '' ,name: '', description: '', price: '', category: ''  },
      getProduct: { category: '' },
      getProductById : {productId: ''}
    },
    category: {
      postCategory: { categoryId: '', name: '' },
      getCategoryById: { id: '' },
      getAllCategories: { id: '' }
    },
    me: {
      getUserById: { name: '', email: '' },  // Fixed the duplicated key
      updateUser: { name: '', email: '' }
    }
  });


  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    setInputFields((prevFields) => ({
      ...prevFields,
      [selectedOption]: {
        ...prevFields[selectedOption],
        [selectedSection]: {
          ...prevFields[selectedOption][selectedSection],
          [fieldName]: value
        }
      }
    }));
  };

  const apiMap = {
    product: {
      postProduct: postProduct,
      getProduct: getProduct,
      getProductById: getProductById
    },
    category: {
      getAllCategories: getAllCategories,
      postCategory: postCategory,
      getCategoryById: getCategoryById,
      // postCategoryProductAssignment : postCategoryProductAssignment
    },
    // me: {
    //   getUserById: getUserById,
    //   updateUser: updateUser
    // }
  };
  
  const handleSubmit = async () => {
    try {
      const dataToSubmit = inputFields[selectedOption][selectedSection];
      const apiFunction = apiMap[selectedOption]?.[selectedSection];
  
      if (apiFunction) {
        const response = await apiFunction(dataToSubmit);
        setResponseData(response);
      } else {
        console.error('Invalid API Function');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  
  // const handleSubmit = async () => {
  //   try {
  //     const dataToSubmit = inputFields[selectedOption][selectedSection];
  //     // Dynamically choose the API function based on selectedSection
  //     let response;
  //     if (selectedOption === 'product' && selectedSection === 'postProduct') {
  //       response = await postProduct(dataToSubmit);
  //     } else if (selectedOption === 'product' && selectedSection === 'getProduct') {
  //       response = await getProduct(dataToSubmit);
  //     }  else if (selectedOption === 'categories' && selectedSection === 'getCategory') {
  //       response = await getCategory(dataToSubmit);
  //     }else if (selectedOption === 'categories' && selectedSection === 'getCategoryById') {
  //       response = await getCategoryById(dataToSubmit);
  //     }
      
  //     setResponseData(response);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  const handleClick = (section) => {


    setSelectedSection(section); // Set the clicked section as selected    
  };

  return (
    <div className='requestSection'>
    <div className='requestSection-head'>
      <div className='requestSection-head-all-apis'>
        <div className="custom-dropdown">
          <select onChange={(e) => handleClick(e.target.value)} value={selectedSection}>
            <option value="">Select an API</option>
            {Object.keys(inputFields[selectedOption] || {}).map((key) => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
        </div>
      </div>
      <button className='requestSection-btn' onClick={handleSubmit}>
        Submit
      </button>
    </div>
  
    <div className='requestSection-form'>
      {selectedSection && (
        <div className='requestSection-fields'>
          <h3>{selectedSection}</h3>
          {Object.keys(inputFields[selectedOption][selectedSection]).map((field) => (
            <div key={field}>
              <label htmlFor={field}>{field}</label>
              <input
                type={field === 'price' ? 'number' : 'text'}
                name={field}
                value={inputFields[selectedOption][selectedSection][field]}
                onChange={(e) => handleInputChange(e, field)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
  
  );
}

export default RequestSection;
