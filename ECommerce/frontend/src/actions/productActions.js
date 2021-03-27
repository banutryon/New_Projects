import axios from "axios";
import {
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
	dispatch({
		type: PRODUCT_LIST_REQUEST,
	});
	try {
		const { data } = await axios.get("/api/products");
		dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
	}
};

// export const detailsProduct = (productId) => async (dispatch) => {
// 	dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
// 	try {
// 	}
// };
