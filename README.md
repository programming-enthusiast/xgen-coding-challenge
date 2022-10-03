# xgen-coding-challenge
## Requirements
* Write a script in the `index.js` file that will use the information in `info.js` to display products.
* `info.js` contains two HTML templates that should be used for the products as well as a list of products.
* The double brackets `{{...}}` should be replaced with the corresponding product attribute.
   * Ex: `{{prod_name}}` should be replaced with `Top 2`.
* There should be two separate elements displayed. One using `htmlTemplate1` and the other using `htmlTemplate2` (both found in `info.js`).
   * Both elements should contain 4 products.
   * Exclude any products with the `"is_in_stock": "0"` value.
   * The products should be randomized with every page load.
   * The first element should display products with the "top" product type only.
   * The second element should display products that do not have the "top" product type.
* Style the elements to make them look presentable - add any flare you want.
* This should be done entirely with *vanilla* JavaScript

## Check
* This should be done programmatically. 
* If the HTML was different, HTML had a different layout, products were in a different order, or new product attributes were added, the script should still function the same.
* Doing `template.replace('{{prod_name}}', 'Top 2')` does not count as adding a new product attribute would not work.
