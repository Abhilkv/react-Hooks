import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

import Alert from '../../components/notifier/notifier';
import ExportFile from '../../components/exportAsFile/exportFile';
import { INVENTORY_TABLE_HEADER } from '../../../../constants/tableHeaders';
import styles from './styles.scss';

const Inventory = (props) => {
  const { isVendorAndBrandListFetched,
    isInventoryDataFetched,
    vendorDetail, productDetail,
    isLoading, getProductData } = props;
  const [vendor, setVendor] = useState('');
  const [alertBox, setAlert] = useState({ open: false, alertMsg: '', severity: 'info' });
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const { getVendorData, clearResponse } = props;
    getVendorData();
    return () => {
      clearResponse();
    };
  }, []);

  useEffect(() => {
    const isProductsLoaded = isInventoryDataFetched && productDetail.data;
    if (isProductsLoaded && productDetail.data.products.result.length > 0) {
      if (productDetail.data.products.result.filter((product) => product.stocks.length !== 0).length <= 0) {
        setAlert({ open: true, alertMsg: 'No products with valid stock', severity: 'info' });
      } else {
        setShowDetails(true);
      }
    } else if (isProductsLoaded && productDetail.data.products.result.length <= 0) {
      setAlert({ open: true, alertMsg: 'No products present', severity: 'info' });
    }
  }, [productDetail]);

  const clearData = () => {
    setShowDetails(false);
    setAlert({ open: false, alertMsg: '', severity: 'info' });
  };

  const handleChangeVendor = (event) => {
    const vendorName = event.target.value;
    clearData();
    setVendor(vendorName);
    getProductData(vendorName, '');
  };

  const arrSum = (arr) => {
    const values = arr.map((item) => (item.inventory_quantity));
    return values.reduce((a, b) => a + b, 0);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert({ open: false, alertMsg: '', severity: 'info' });
  };

  const exportProductDataAsCsv = () => {
    const productData = productDetail.data.products.result.filter((product) => product.stocks.length !== 0);
    if (productData.length <= 0) {
      return [];
    }
    const headerData = INVENTORY_TABLE_HEADER.map((value) => (value.label));
    const products = productData.map((product, index) => (
      { Sr_No: index + 1,
        Product_Id: product.source_product_id,
        SKU: product.sku,
        Supplier_SKU: product.sku.split('//')[0],
        Vendor: product.vendor,
        Brand: product.brand,
        Product_title: product.source_product_title,
        Variant_title: product.source_variant_title,
        Stock: arrSum(product.stocks),
        Cost_price: product.cost_price,
        Selling_price: product.price }
    ));
    const csvData = [headerData, ...products];
    return csvData;
  };

  return (
    <div className={styles.inventory}>
      <Alert
        open={alertBox.open}
        handleClose={handleClose}
        message={alertBox.alertMsg}
        severity={alertBox.severity}
      />

      <div className={styles.vendorTitle}>
        <span className={styles.title}>Vendor</span>
      </div>
      <div className={styles.selectOptions}>
        <div className={styles.selectPart}>
          <select className={styles.selectVendor} value={vendor} onChange={handleChangeVendor} name="vendor">
            <option value="" key="select_vendor" disabled={true}>Select vendor</option>
            <option value="get_all_products_data" key="get_all_products">All</option>
            { isVendorAndBrandListFetched && vendorDetail.data.productvendors.map((vendorName) => (
              <option value={vendorName} key={vendorName} className={styles.returnOptionsList}>{vendorName}</option>
            ))}
          </select>
        </div>
        { showDetails
       && (
       <ExportFile
         text="Export as CSV"
         dataSet={exportProductDataAsCsv()}
         extension="csv"
         fileName={`inventory_${new Date().toJSON().slice(0, 10).replace(/-/g, '/')}.xlsx`}
       />)}
      </div>
      <div className={styles.productDetailsTable}>
        {isLoading && <CircularProgress color="secondary" />}
        {(vendor !== 'get_all_products_data') && showDetails
       && (
       <table className={styles.productList}>
         <thead>
           <tr>
             {INVENTORY_TABLE_HEADER.map((head) => (
               <td key={head.id} className={styles.tableHeading}>{head.label}</td>
             ))}
           </tr>
         </thead>
         <tbody>
           { productDetail.data.products.result.filter((product) => product.stocks.length !== 0)
             .map((product, index) => (
               <tr key={product.id}>
                 <td className={`${styles.tableContent} ${styles.serialNoRowWidth}`}>
                   {index + 1}
                 </td>
                 <td className={`${styles.tableContent} ${styles.rowWidth}`}>
                   {product.source_product_id}
                 </td>
                 <td className={`${styles.tableContent} ${styles.skuWidth}`}>
                   {product.sku}
                 </td>
                 <td className={`${styles.tableContent} ${styles.variantSkuWidth}`}>
                   {product.sku.split('//')[0]}
                 </td>
                 <td className={`${styles.tableContent} ${styles.rowWidth}`}>
                   {product.vendor}
                 </td>
                 <td className={`${styles.tableContent} ${styles.rowWidth}`}>
                   {product.brand}
                 </td>
                 <td className={`${styles.tableContent} ${styles.nameBox}`}>
                   {product.source_product_title}
                 </td>
                 <td className={`${styles.tableContent} ${styles.variantTitle}`}>
                   {product.source_variant_title}
                 </td>
                 <td className={`${styles.tableContent} ${styles.rowWidth}`}>
                   {arrSum(product.stocks)}
                 </td>
                 <td className={`${styles.tableContent} ${styles.rowWidth}`}>
                   {product.cost_price}
                 </td>
                 <td className={`${styles.tableContent} ${styles.rowWidth}`}>
                   {product.price}
                 </td>
               </tr>
             )) }
         </tbody>
       </table>)}
      </div>
    </div>
  );
};

Inventory.propTypes = {
  vendorDetail: PropTypes.shape(),
  productDetail: PropTypes.shape(),
  isVendorAndBrandListFetched: PropTypes.bool,
  isInventoryDataFetched: PropTypes.bool,
  isLoading: PropTypes.bool,
  getVendorData: PropTypes.func,
  getProductData: PropTypes.func,
  clearResponse: PropTypes.func
};

Inventory.defaultProps = {
  vendorDetail: {},
  productDetail: {},
  isVendorAndBrandListFetched: false,
  isInventoryDataFetched: false,
  isLoading: false,
  getVendorData: () => {},
  getProductData: () => {},
  clearResponse: () => {}
};

export default Inventory;
