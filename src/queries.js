export const PRODUCTS_ALL_QUERY = `
query MyQuery {
  products {
    productTitle
    productSlug
    productDescription
    productPrice
    availability
    productPhoto {
      url
    }
  }
}
`;

export const CAROUSEL_ALL_QUERY = `
query MyQuery {
  products {
    productTitle
    productSlug
    productDescription
    productPrice
    availability
    productPhoto {
      url
    }
  }
}
`;

export const PRODUCTS_DETAILS_QUERY = `
query MyQuery ($slug: String!) {
  product(where: {productSlug: $slug}) {
    productTitle
    productSlug
    productPrice
    productDescription
    availability
    productPhoto {
      url
    }
  }
}
`;

export const REVIEWS_ALL_QUERY = `
query MyQuery {
  customerReviews {
    customerReviewPhoto {
      url
    }
  }
}
`;

export const CREATE_ORDER_MUTATION = `
mutation MyMutation ($addressLine1: String!, $addressLine2: String!, $addressLine3: String!, $emailAddress: String!, $fullName: String!, $methodOfPayment: String!, $mobileNo: String!) {
  createOrder(data: {
    addressLine1: $addressLine1,
    addressLine2: $addressLine2, 
    addressLine3: $addressLine3, 
    emailAddress: $emailAddress, 
    fullName: $fullName, 
    methodOfPayment: $methodOfPayment, 
    mobileNo: $mobileNo
  }) {
    id
  }
}
`;