import { createContext, useState, useEffect } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) =>{
    // shopping cart count
    const [count, setCount] = useState(0)

    // product detail Open close 
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // checkout side menu Open close 
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // product detail show data
    const [productShow, setProductShow] = useState({})

    // cart add products
    const [cartProducts, setCartProducts] = useState([])

    // Shopping Cart Order
    const [order, setOrder] = useState([])

    // Get Products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)
    
    // Get Products Search bar
    const [searchProduct, setSearchProduct] = useState(null)

    // Get products by category 
    const [searchCategory, setSearchCategory] = useState(null)
    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => setItems(data.products))

    }, [])
    const filteredItemsByTitle = (items, searchProduct) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchProduct.toLowerCase()))
    }
    const filteredItemsByCategory = (items, searchCategory) => {
        console.log(items)
        return items?.filter(item => item.category.toLowerCase().includes(searchCategory.toLowerCase()))
    }

    const filterBy =  (searchType, items, searchProduct, searchCategory ) => {
        if (searchType === 'BY_TITLE'){
            return filteredItemsByTitle(items,searchProduct)
        }
        if (searchType === 'BY_CATEGORY'){
            return filteredItemsByCategory(items,searchCategory)
        }
        if (searchType === 'BY_TITLE_AND_CATEGORY'){
            return filteredItemsByCategory(items,searchCategory).filter(item => item.title.toLowerCase().includes(searchProduct.toLowerCase()))
        }
        if (!searchType){
            return items
        }
    }
    
    useEffect(() => {
        if (searchProduct && searchCategory ) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY',items,searchProduct, searchCategory))
        if (searchProduct && !searchCategory ) setFilteredItems(filterBy('BY_TITLE',items,searchProduct, searchCategory))
        if (!searchProduct && searchCategory) setFilteredItems(filterBy('BY_CATEGORY',items,searchProduct, searchCategory))
        if (!searchProduct && !searchCategory) setFilteredItems(filterBy(null,items,searchProduct, searchCategory))
    }, [items, searchProduct, searchCategory])
    


    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productShow,
            setProductShow,
            cartProducts,
            setCartProducts,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen,
            order,
            setOrder,
            items,
            setItems,
            searchProduct,
            setSearchProduct,
            filteredItems,
            setSearchCategory,
            searchCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
