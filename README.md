# GadgetHaven E-Commerce Platform

Welcome to GadgetHaven, an e-commerce platform designed specifically for gadget enthusiasts. The platform allows users to browse, filter, and manage a collection of gadgets with ease. Developed in React, this project utilizes various modern React fundamentals like Context API for state management and LocalStorage for data persistence, ensuring a seamless user experience.

## Live Website

[Visit GadgetHaven](https://your-live-website-link.com)

## Project Overview

GadgetHaven is designed to offer a streamlined shopping experience. The site provides a structured navigation bar, a categorized gadget sidebar, and features like a wishlist and shopping cart with data persistence. With features like product sorting, cart management, and detailed product views, GadgetHaven meets the needs of any gadget shopper.

## React Fundamentals Used

- **Components**: Modularized components for Navbar, Footer, Banner, Product Cards, and more.
- **State Management**: Managed cart and wishlist states with the Context API.
- **Event Handling**: Used event handlers for actions like adding to cart/wishlist and sorting items.
- **React Router**: Set up routing to navigate between pages like Home, Product Details, Dashboard, etc.
- **Conditional Rendering**: Displayed content based on states like availability and item existence in cart/wishlist.

## Data Handling

- **Context API**: Used to manage and propagate cart and wishlist data throughout the app.
- **LocalStorage**: Used for data persistence to retain cart and wishlist items across page reloads, ensuring user data isn't lost during session interruptions.

## Key Features

1. **Product Categorization and Filtering**: Sidebar categories (e.g., computers, phones, smartwatches) allow users to filter products by category, displaying only the relevant items in a nested layout.
2. **Shopping Cart and Wishlist Management**: Users can add gadgets to their cart or wishlist. The items in both lists are managed by the Context API, with data stored in LocalStorage.
3. **Product Details Page**: Each product has a detailed view with an image, description, price, specifications, and ratings. Users can add items to the cart or wishlist from here.
4. **Dynamic Cart and Wishlist Tabs on Dashboard**: The dashboard includes tabs for both the cart and wishlist, with real-time updates. Cart items can be sorted by price.
5. **Navbar and Footer Consistency**: The Navbar and Footer are displayed on all pages, enhancing navigation and usability.

Thank you for visiting GadgetHaven! Explore our collection and find the perfect gadget for your needs.
