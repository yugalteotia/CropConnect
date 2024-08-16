import { useState } from 'react';

export const useFormValues = () => {
  const [formValues, setFormValues] = useState({
    id: null,
    cropName: "",
    price: "",
    imageUrl: "",
    quantity: "",
    categoryId: "",
    farmerId: 10,
  });

  return { formValues, setFormValues };
};
