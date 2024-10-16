    import { ALL_MARKETPLACE_FAIL, ALL_MARKETPLACE_REQUEST, ALL_MARKETPLACE_SUCCESS, MARKETPLACE_DETAILS_FAIL, MARKETPLACE_DETAILS_REQUEST, MARKETPLACE_DETAILS_SUCCESS } from "../constants/marketplaceConstants.js";
import { CLEAR_ERRORS} from "../constants/usersConstants.js";

    export const marketplacesReducer = (state = { marketplaces: [] }, action) => {
    switch (action.type) {

            case ALL_MARKETPLACE_REQUEST:
                return {
                    loading: true,
                    marketplaces: [],
                };
            case ALL_MARKETPLACE_SUCCESS:
            return {
                loading: false,
                marketplaces: action.payload.marketplaces,
            };
        
        
            case ALL_MARKETPLACE_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        
            case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
            default:
            return state;
    }
    };

    export const marketplaceDetailsReducer = (state = { marketplace: {} }, action) => {
        switch (action.type) {
        case MARKETPLACE_DETAILS_REQUEST:
            return {
            loading: true,
            ...state,
            };
        case MARKETPLACE_DETAILS_SUCCESS:
            return {
            loading: false,
            product: action.payload,
            };
        case MARKETPLACE_DETAILS_FAIL:
            return {
            loading: false,
            error: action.payload,
            };
    
        case CLEAR_ERRORS:
            return {
            ...state,
            error: null,
            };
        default:
            return state;
        }
    };
    