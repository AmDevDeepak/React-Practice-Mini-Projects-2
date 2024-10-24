import React from "react";
import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";

const PdfViewer = () => {
  const [products, setProducts] = React.useState([]);
  const [productDetails, setProductDetails] = React.useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products?limit=10&skip=0"
      );
      if (!response.ok) {
        throw new Error("HTTP error!");
      }
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFetchProductsDetails = async (productId) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`
      );
      if (!response.ok) {
        throw new Error("HTTP error!");
      }
      const data = await response.json();
      console.log(data);
      setProductDetails(data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-full h-[100vh] bg-slate-400 flex items-center justify-center">
      <ul>
        {products.length > 0 &&
          products.map((product) => (
            <li
              key={product.id}
              className="bg-pink-500 text-white p-2 rounded-md mb-1 cursor-pointer"
              onClick={() => handleFetchProductsDetails(product.id)}
            >
              {product.title}
            </li>
          ))}
      </ul>
      <div className="pdf-viewer">
        {productDetails && (
          <PDFViewer
            style={{
              width: "100%",
              height: "500px", // Increased height for better visibility
            }}
          >
            <Document>
              <Page>
                <View>
                  <Text>{productDetails.title}</Text>
                  <Text>{productDetails.description}</Text>
                  <Text>Price: {productDetails.price}</Text>
                  <Text>Category: {productDetails.category}</Text>
                </View>
              </Page>
            </Document>
          </PDFViewer>
        )}
      </div>
    </div>
  );
};

export default PdfViewer;
