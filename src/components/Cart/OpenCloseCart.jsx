
import { useEffect } from "react";

export function closeMenuRef(ref, closeMenu) {
  useEffect(() => {
    const close = (event) => {
      const cartIcon = document.querySelector(".cart-icon");

      if (cartIcon && cartIcon.contains(event.target)) {
        console.log("Ignoring click"); // Lägg till denna logg
        return
      }
        
      if (ref.current && !ref.current.contains(event.target)) {
          console.log("Clicked outside menu"); // Lägg till denna logg

          closeMenu();
        }
      }
    


    document.addEventListener("mousedown", close);
    return () => {
      document.removeEventListener("mousedown", close);
    };
  }, [ref, closeMenu]);
}


export function toggleCart(setIsOpen) {
  useEffect(() => {
    const toggle = () => {
      console.log("Toggling menu"); // Logga varje gång toggle triggas
      setIsOpen((prev) => {
        console.log("Previous state:", prev); // Logga tidigare state
        const newState = !prev;
        console.log("New state:", newState); // Logga det nya tillståndet
        return newState;
      });
    };

    const cartIcon = document.querySelector(".cart-icon");
    if (cartIcon) {
      console.log("cart-icon found"); // Logga om cart-icon hittas
      cartIcon.addEventListener("click", toggle);
    } else {
      console.log("cart-icon not found"); // Logga om cart-icon inte hittas
    }

    return () => {
      if (cartIcon) {
        cartIcon.removeEventListener("click", toggle);
      }
    };
  }, [setIsOpen]);
}


// }
// export function toggleCart(setIsOpen) {
//   useEffect(() => {
//     const toggle = () => {
//       console.log("Toggling cart menu"); // Lägg till denna logg        console.log("Toggling menu"); // Logga varje gång toggle triggas

//       setIsOpen((prev) => !prev); // toggles
//     };

//     const cartIcon = document.querySelector(".cart-icon");
//     if (cartIcon) {
//       cartIcon.addEventListener("click", toggle);
//     }

//     return () => {
//       if (cartIcon) {
//         cartIcon.removeEventListener("click", toggle);
//       }
//     };
//   }, [setIsOpen]);
// }
