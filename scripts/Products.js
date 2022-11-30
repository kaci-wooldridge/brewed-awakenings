import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
       const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("product")) {
 
            const [,productId] = itemClicked.id.split("--")

            for (const product of products) {
                if (product.id === parseInt(productId)) {
                    window.alert(`${product.name} costs\n$${product.price}`)
                }
            }
        }
    }
)

