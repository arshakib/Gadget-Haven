import { toast } from "react-toastify";

const getStored = () => {
  const data = localStorage.getItem("data");
  return data ? JSON.parse(data) : [];
};

const addToStorage = (data) => {
  const storedData = getStored();
  if (storedData.includes(data)) {
    toast.error("Already added");
  } else {
    storedData.push(data);
    localStorage.setItem("data", JSON.stringify(storedData));
    toast.success("Added to cart");
  }
};
const getwishlist = () => {
  const data = localStorage.getItem("wishdata");
  return data ? JSON.parse(data) : [];
};

const addTowishlist = (data) => {
  const storedData = getwishlist();
  if (storedData.includes(data)) {
    toast.error("Already added");
  } else {
    storedData.push(data);
    localStorage.setItem("wishdata", JSON.stringify(storedData));
    toast.success("Added to wishlist");
  }
};

const removeFromStorage = (data) => {
  const storedData = getStored();
  const updatedData = storedData.filter((item) => item !== data);
  localStorage.setItem("data", JSON.stringify(updatedData));
  toast.success("Removed from cart");
};

const removeFromwishlist = (data) => {
  const storedData = getwishlist();
  const updatedData = storedData.filter((item) => item !== data);
  localStorage.setItem("wishdata", JSON.stringify(updatedData));
  toast.success("Removed from wishlist");
};

const clearStorage = () => {
  localStorage.removeItem("data");
};

export {
  getStored,
  addToStorage,
  removeFromStorage,
  clearStorage,
  getwishlist,
  addTowishlist,
  removeFromwishlist,
};
