import { useEffect } from "react";

export function closeMenuRef(ref, closeMenu) {
  useEffect(() => {
    const close = (event) => {
      const cartIcon = document.querySelector(".cart-icon");

      if (cartIcon && cartIcon.contains(event.target)) {
        return;
      }

      if (ref.current && !ref.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", close);
    return () => {
      document.removeEventListener("mousedown", close);
    };
  }, [ref, closeMenu]);
}

export function toggleCart(setIsOpen) {
  useEffect(() => {
    const toggle = () => {
      setIsOpen((prev) => {
        const newState = !prev;
        return newState;
      });
    };

    const cartIcon = document.querySelector(".cart-icon");
    if (cartIcon) {
      cartIcon.addEventListener("click", toggle);
    } else {
    }

    return () => {
      if (cartIcon) {
        cartIcon.removeEventListener("click", toggle);
      }
    };
  }, [setIsOpen]);
}
