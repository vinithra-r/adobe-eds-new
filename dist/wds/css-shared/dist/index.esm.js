const colors = Object.freeze({
  "wds2-colour-nissanblack": {
    type: "color",
    value: "rgba(0, 0, 0, 1)"
  },
  "wds2-colour-nissangrey": {
    type: "color",
    value: "rgba(239, 239, 239, 1)"
  },
  "wds2-colour-nissanwhite": {
    type: "color",
    value: "rgba(255, 255, 255, 1)"
  },
  "wds2-colour-validation-success-onlight": {
    type: "color",
    value: "rgba(10, 128, 53, 1)"
  },
  "wds2-colour-validation-success-ondark": {
    type: "color",
    value: "rgba(14, 190, 79, 1)"
  },
  "wds2-colour-validation-error-onlight": {
    type: "color",
    value: "rgba(224, 0, 52, 1)"
  },
  "wds2-colour-validation-error-ondark": {
    type: "color",
    value: "rgba(255, 133, 161, 1)"
  },
  "wds2-colour-validation-background-success-onlight": {
    type: "color",
    value: "rgba(231, 242, 235, 1)"
  },
  "wds2-colour-validation-background-error-onlight": {
    type: "color",
    value: "rgba(245, 231, 234, 1)"
  },
  "wds2-colour-validation-background-info-onlight": {
    type: "color",
    value: "rgba(239, 239, 239, 1)"
  },
  "wds2-colour-action-hover-onlight": {
    type: "color",
    value: "rgba(76, 76, 76, 1)"
  },
  "wds2-colour-keyline-onlight": {
    type: "color",
    value: "rgba(204, 204, 204, 1)"
  },
  "wds2-colour-background-grey": {
    type: "color",
    value: "rgba(246, 246, 246, 1)"
  },
  "wds2-colour-offers": {
    type: "color",
    value: "rgba(0, 118, 171, 1)"
  },
  "wds2-colour-action-focus-onlight": {
    type: "color",
    value: "rgba(84, 133, 240, 1)"
  },
  "wds2-colour-action-disabled-onlight": {
    type: "color",
    value: "rgba(204, 204, 204, 1)"
  },
  "wds2-colour-action-hover-ondark": {
    type: "color",
    value: "rgba(204, 204, 204, 1)"
  },
  "wds2-colour-action-focus-ondark": {
    type: "color",
    value: "rgba(84, 133, 240, 1)"
  },
  "wds2-colour-action-disabled-ondark": {
    type: "color",
    value: "rgba(76, 76, 76, 1)"
  }
});

const fonts = Object.freeze({
  "wds2-type-display-l-japanese": {
    type: "font",
    styles: {
      fontFamily: "ShinGoPro-Regular",
      fontWeight: 400,
      fontSize: 36,
      letterSpacing: 1.5,
      lineHeight: "52px"
    }
  },
  "wds2-type-display-xl-japanese": {
    type: "font",
    styles: {
      fontFamily: "ShinGoPro-Regular",
      fontWeight: 400,
      fontSize: 58,
      letterSpacing: 1.5,
      lineHeight: "78px"
    }
  },
  "wds2-type-display-m": {
    type: "font",
    styles: {
      fontFamily: "NissanBrand-Regular",
      fontWeight: 400,
      fontSize: 32,
      letterSpacing: 1.5,
      lineHeight: "42px"
    }
  },
  "wds2-type-display-s": {
    type: "font",
    styles: {
      fontFamily: "NissanBrand-Regular",
      fontWeight: 400,
      fontSize: 24,
      letterSpacing: 1.5,
      lineHeight: "34px"
    }
  },
  "wds2-type-display-xs": {
    type: "font",
    styles: {
      fontFamily: "NissanBrand-Regular",
      fontWeight: 400,
      fontSize: 20,
      letterSpacing: 1.5,
      lineHeight: "26px"
    }
  },
  "wds2-type-subtitle-m": {
    type: "font",
    styles: {
      fontFamily: "NissanBrand-Bold",
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: 2,
      lineHeight: "26px"
    }
  },
  "wds2-type-subtitle-s": {
    type: "font",
    styles: {
      fontFamily: "NissanBrand-Bold",
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: 2,
      lineHeight: "24px"
    }
  },
  "wds2-type-body-light-m": {
    type: "font",
    styles: {
      fontFamily: "NissanBrand-Light",
      fontWeight: 300,
      fontSize: 16,
      letterSpacing: 0.8999999761581421,
      lineHeight: "26px"
    }
  },
  "wds2-type-body-regular-m": {
    type: "font",
    styles: {
      fontFamily: "NissanBrand-Regular",
      fontWeight: 400,
      fontSize: 16,
      letterSpacing: 0.8999999761581421,
      lineHeight: "26px"
    }
  },
  "wds2-type-body-link-m": {
    type: "font",
    styles: {
      fontFamily: "NissanBrand-Regular",
      fontWeight: 400,
      fontSize: 16,
      letterSpacing: 0.8999999761581421,
      lineHeight: "26px"
    }
  },
  "wds2-type-body-bold-m": {
    type: "font",
    styles: {
      fontFamily: "NissanBrand-Bold",
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: 0.8999999761581421,
      lineHeight: "26px"
    }
  },
  "wds2-type-body-regular-s": {
    type: "font",
    styles: {
      fontFamily: "NissanBrand-Regular",
      fontWeight: 400,
      fontSize: 14,
      letterSpacing: 0.8999999761581421,
      lineHeight: "24px"
    }
  },
  "wds2-type-body-light-s": {
    type: "font",
    styles: {
      fontFamily: "NissanBrand-Light",
      fontWeight: 300,
      fontSize: 14,
      letterSpacing: 0.8999999761581421,
      lineHeight: "24px"
    }
  },
  "wds2-type-body-link-s": {
    type: "font",
    styles: {
      fontFamily: "NissanBrand-Regular",
      fontWeight: 400,
      fontSize: 14,
      letterSpacing: 0.8999999761581421,
      lineHeight: "24px"
    }
  },
  "wds2-type-body-bold-s": {
    type: "font",
    styles: {
      fontFamily: "NissanBrand-Bold",
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: 0.8999999761581421,
      lineHeight: "24px"
    }
  },
  "wds2-type-disclaimer-light": {
    type: "font",
    styles: {
      fontFamily: "NissanBrand-Light",
      fontWeight: 300,
      fontSize: 12,
      letterSpacing: 0.8999999761581421,
      lineHeight: "18px"
    }
  },
  "wds2-type-disclaimer-bold": {
    type: "font",
    styles: {
      fontFamily: "NissanBrand-Bold",
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: 0.8999999761581421,
      lineHeight: "18px"
    }
  },
  "wds2-type-action-button-m": {
    type: "font",
    styles: {
      fontFamily: "NissanBrand-Bold",
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: 2,
      lineHeight: "24px"
    }
  },
  "wds2-type-action-button-m-hover": {
    type: "font",
    styles: {
      fontFamily: "NissanBrand-Bold",
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: 2,
      lineHeight: "24px"
    }
  },
  "wds2-type-action-filter": {
    type: "font",
    styles: {
      fontFamily: "NissanBrand-Bold",
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: 2,
      lineHeight: "20px"
    }
  },
  "wds2-type-action-filter-hover": {
    type: "font",
    styles: {
      fontFamily: "NissanBrand-Bold",
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: 2,
      lineHeight: "20px"
    }
  },
  "wds2-type-quote-l": {
    type: "font",
    styles: {
      fontFamily: "NissanBrand-Regular",
      fontWeight: 400,
      fontSize: 42,
      letterSpacing: 2,
      lineHeight: "52px"
    }
  },
  "wds2-type-quote-s": {
    type: "font",
    styles: {
      fontFamily: "NissanBrand-Regular",
      fontWeight: 400,
      fontSize: 24,
      letterSpacing: 2,
      lineHeight: "34px"
    }
  },
  "wds2-type-display-l": {
    type: "font",
    styles: {
      fontFamily: "NissanBrand-Regular",
      fontWeight: 400,
      fontSize: 42,
      letterSpacing: 1.5,
      lineHeight: "52px"
    }
  },
  "wds2-type-display-xl": {
    type: "font",
    styles: {
      fontFamily: "NissanBrand-Regular",
      fontWeight: 400,
      fontSize: 68,
      letterSpacing: 1.5,
      lineHeight: "78px"
    }
  },
  "wds2-type-display-m-japanese": {
    type: "font",
    styles: {
      fontFamily: "ShinGoPro-Regular",
      fontWeight: 400,
      fontSize: 28,
      letterSpacing: 1.5,
      lineHeight: "38px"
    }
  },
  "wds2-type-display-s-japanese": {
    type: "font",
    styles: {
      fontFamily: "ShinGoPro-Regular",
      fontWeight: 400,
      fontSize: 20,
      letterSpacing: 1.5,
      lineHeight: "34px"
    }
  },
  "wds2-type-subtitle-m-japanese": {
    type: "font",
    styles: {
      fontFamily: "ShinGoPro-Bold",
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: 2,
      lineHeight: "26px"
    }
  },
  "wds2-type-body-regular-m-japanese": {
    type: "font",
    styles: {
      fontFamily: "ShinGoPro-Regular",
      fontWeight: 400,
      fontSize: 16,
      letterSpacing: 0.8999999761581421,
      lineHeight: "26px"
    }
  },
  "wds2-type-body-light-m-japanese": {
    type: "font",
    styles: {
      fontFamily: "ShinGoPro-Light",
      fontWeight: 300,
      fontSize: 16,
      letterSpacing: 0.8999999761581421,
      lineHeight: "26px"
    }
  },
  "wds2-type-body-link-m-japanese": {
    type: "font",
    styles: {
      fontFamily: "ShinGoPro-Regular",
      fontWeight: 400,
      fontSize: 16,
      letterSpacing: 0.8999999761581421,
      lineHeight: "26px"
    }
  },
  "wds2-type-body-bold-m-japanese": {
    type: "font",
    styles: {
      fontFamily: "ShinGoPro-Bold",
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: 0.8999999761581421,
      lineHeight: "26px"
    }
  },
  "wds2-type-body-regular-s-japanese": {
    type: "font",
    styles: {
      fontFamily: "ShinGoPro-Regular",
      fontWeight: 400,
      fontSize: 14,
      letterSpacing: 0.8999999761581421,
      lineHeight: "24px"
    }
  },
  "wds2-type-body-light-s-japanese": {
    type: "font",
    styles: {
      fontFamily: "ShinGoPro-Light",
      fontWeight: 300,
      fontSize: 14,
      letterSpacing: 0.8999999761581421,
      lineHeight: "24px"
    }
  },
  "wds2-type-body-link-s-japanese": {
    type: "font",
    styles: {
      fontFamily: "ShinGoPro-Bold",
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: 0.8999999761581421,
      lineHeight: "24px"
    }
  },
  "wds2-type-disclaimer-light-japanese": {
    type: "font",
    styles: {
      fontFamily: "ShinGoPro-Light",
      fontWeight: 300,
      fontSize: 12,
      letterSpacing: 0.8999999761581421,
      lineHeight: "18px"
    }
  },
  "wds2-type-disclaimer-bold-japanese": {
    type: "font",
    styles: {
      fontFamily: "ShinGoPro-Bold",
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: 0.8999999761581421,
      lineHeight: "18px"
    }
  },
  "wds2-type-subtitle-s-japanese": {
    type: "font",
    styles: {
      fontFamily: "ShinGoPro-Bold",
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: 2,
      lineHeight: "24px"
    }
  },
  "wds2-type-disclaimer-link-light": {
    type: "font",
    styles: {
      fontFamily: "NissanBrand-Light",
      fontWeight: 300,
      fontSize: 12,
      letterSpacing: 0.8999999761581421,
      lineHeight: "18px"
    }
  },
  "wds2-type-disclaimer-regular": {
    type: "font",
    styles: {
      fontFamily: "NissanBrand-Regular",
      fontWeight: 400,
      fontSize: 12,
      letterSpacing: 0.8999999761581421,
      lineHeight: "18px"
    }
  },
  "wds2-type-disclaimer-link-regular": {
    type: "font",
    styles: {
      fontFamily: "NissanBrand-Regular",
      fontWeight: 400,
      fontSize: 12,
      letterSpacing: 0.8999999761581421,
      lineHeight: "18px"
    }
  },
  "wds2-type-disclaimer-link-light-japanese": {
    type: "font",
    styles: {
      fontFamily: "ShinGoPro-Light",
      fontWeight: 300,
      fontSize: 12,
      letterSpacing: 0.8999999761581421,
      lineHeight: "18px"
    }
  },
  "wds2-type-disclaimer-regular-japanese": {
    type: "font",
    styles: {
      fontFamily: "ShinGoPro-Regular",
      fontWeight: 400,
      fontSize: 12,
      letterSpacing: 0.8999999761581421,
      lineHeight: "18px"
    }
  },
  "wds2-type-disclaimer-link-regular-japanese": {
    type: "font",
    styles: {
      fontFamily: "ShinGoPro-Regular",
      fontWeight: 400,
      fontSize: 12,
      letterSpacing: 0.8999999761581421,
      lineHeight: "18px"
    }
  }
});

const radius = Object.freeze({
  "wds2-radius-l": {
    type: "radius",
    value: 40
  }
});

const border = Object.freeze({
  "wds2-stroke-s": {
    type: "border",
    value: "1px"
  },
  "wds2-stroke-m": {
    type: "border",
    value: "2px"
  },
  "wds2-stroke-l": {
    type: "border",
    value: "4px"
  }
});

const animation = Object.freeze({
  "wds2-motion-hover-on": {
    type: "animation",
    bezierCurve: "0.77, 0, 0.18, 1",
    blendMode: "PASS_THROUGH",
    transitionDuration: 300
  },
  "wds2-motion-hover-off": {
    type: "animation",
    bezierCurve: "0.77, 0, 0.18, 1",
    blendMode: "PASS_THROUGH",
    transitionDuration: 300
  },
  "wds2-motion-hero-start": {
    type: "animation",
    bezierCurve: "0.77, 0, 0.18, 1",
    blendMode: "PASS_THROUGH",
    transitionDuration: 1200
  },
  "wds2-motion-hero-end": {
    type: "animation",
    bezierCurve: "0.77, 0, 0.18, 1",
    blendMode: "PASS_THROUGH"
  },
  "wds2-motion-slide-out": {
    type: "animation",
    bezierCurve: "0.77, 0, 0.18, 1",
    blendMode: "PASS_THROUGH",
    transitionDuration: 300
  },
  "wds2-motion-slide-in": {
    type: "animation",
    bezierCurve: "0.77, 0, 0.18, 1",
    blendMode: "PASS_THROUGH",
    transitionDuration: 300
  }
});

const grid = Object.freeze({
  "wds2-grid-l": {
    type: "grid",
    column: 12,
    padding: "40px",
    margin: "80px",
    minViewport: "1024px",
    maxViewport: "1499px"
  },
  "wds2-grid-xl": {
    type: "grid",
    column: 12,
    padding: "40px",
    margin: "0px",
    minViewport: "1500px"
  },
  "wds2-grid-m": {
    type: "grid",
    column: 12,
    padding: "30px",
    margin: "40px",
    minViewport: "768px",
    maxViewport: "1023px"
  },
  "wds2-grid-s": {
    type: "grid",
    column: 2,
    padding: "20px",
    margin: "20px",
    minViewport: "320px",
    maxViewport: "767px"
  }
});

const forms = Object.freeze({
  "wds2-radio-element-margin": {
    type: "margin",
    value: "24px"
  },
  "wds2-dropdown-element-margin": {
    type: "margin",
    value: "40px"
  }
});

const icons = Object.freeze({
  "wds2-icon": {
    type: "font",
    styles: {
      fontFamily: "nissan-modernized-icons-font",
      fontWeight: "normal",
      lineHeight: 1
    }
  },
  "wds2-icon-alert": {
    type: "content",
    value: "\\e68d"
  },
  "wds2-icon-anchor-link-mobile": {
    type: "content",
    value: "\\e601"
  },
  "wds2-icon-arrow-up": {
    type: "content",
    value: "\\e921"
  },
  "wds2-icon-automatic": {
    type: "content",
    value: "\\e602"
  },
  "wds2-icon-battery": {
    type: "content",
    value: "\\e604"
  },
  "wds2-icon-battery-leasing": {
    type: "content",
    value: "\\e605"
  },
  "wds2-icon-body-type": {
    type: "content",
    value: "\\e91d"
  },
  "wds2-icon-book-a-service": {
    type: "content",
    value: "\\e606"
  },
  "wds2-icon-download-a-brochure": {
    type: "content",
    value: "\\e64d"
  },
  "wds2-icon-build": {
    type: "content",
    value: "\\e64e"
  },
  "wds2-icon-burger-menu": {
    type: "content",
    value: "\\e64f"
  },
  "wds2-icon-cab-type": {
    type: "content",
    value: "\\e91c"
  },
  "wds2-icon-calculator": {
    type: "content",
    value: "\\e68f"
  },
  "wds2-icon-calendar": {
    type: "content",
    value: "\\e688"
  },
  "wds2-icon-capacity": {
    type: "content",
    value: "\\e650"
  },
  "wds2-icon-car": {
    type: "content",
    value: "\\e651"
  },
  "wds2-icon-carwings": {
    type: "content",
    value: "\\e607"
  },
  "wds2-icon-cargo-length": {
    type: "content",
    value: "\\e925"
  },
  "wds2-icon-charging-cost": {
    type: "content",
    value: "\\e608"
  },
  "wds2-icon-chassis": {
    type: "content",
    value: "\\e90a"
  },
  "wds2-icon-circle-outline": {
    type: "content",
    value: "\\e689"
  },
  "wds2-icon-clock": {
    type: "content",
    value: "\\e800"
  },
  "wds2-icon-close-cross": {
    type: "content",
    value: "\\e609"
  },
  "wds2-icon-coins": {
    type: "content",
    value: "\\e60a"
  },
  "wds2-icon-colour": {
    type: "content",
    value: "\\e68c"
  },
  "wds2-icon-compare": {
    type: "content",
    value: "\\e60b"
  },
  "wds2-icon-configure": {
    type: "content",
    value: "\\e60c"
  },
  "wds2-icon-contact-email": {
    type: "content",
    value: "\\e60d"
  },
  "wds2-icon-contact-phone": {
    type: "content",
    value: "\\e628"
  },
  "wds2-icon-cookie": {
    type: "content",
    value: "\\e652"
  },
  "wds2-icon-cubic_volume": {
    type: "content",
    value: "\\e909"
  },
  "wds2-icon-dimensions": {
    type: "content",
    value: "\\e91e"
  },
  "wds2-icon-directions": {
    type: "content",
    value: "\\e654"
  },
  "wds2-icon-discount": {
    type: "content",
    value: "\\e655"
  },
  "wds2-icon-document": {
    type: "content",
    value: "\\e656"
  },
  "wds2-icon-doors": {
    type: "content",
    value: "\\e60e"
  },
  "wds2-icon-double-slider": {
    type: "content",
    value: "\\e60f"
  },
  "wds2-icon-down-arrow": {
    type: "content",
    value: "\\e610"
  },
  "wds2-icon-download-brochure": {
    type: "content",
    value: "\\e611"
  },
  "wds2-icon-efficiency-class": {
    type: "content",
    value: "\\e613"
  },
  "wds2-icon-elipsis": {
    type: "content",
    value: "\\e614"
  },
  "wds2-icon-email-us": {
    type: "content",
    value: "\\e657"
  },
  "wds2-icon-emission": {
    type: "content",
    value: "\\e658"
  },
  "wds2-icon-emission-control-standard": {
    type: "content",
    value: "\\e659"
  },
  "wds2-icon-Engine": {
    type: "content",
    value: "\\e65b"
  },
  "wds2-icon-engine-capacity": {
    type: "content",
    value: "\\e91f"
  },
  "wds2-icon-engine-size": {
    type: "content",
    value: "\\e65a"
  },
  "wds2-icon-explore": {
    type: "content",
    value: "\\e616"
  },
  "wds2-icon-external-link": {
    type: "content",
    value: "\\e617"
  },
  "wds2-icon-social-facebook": {
    type: "content",
    value: "\\e618"
  },
  "wds2-icon-feedback-star": {
    type: "content",
    value: "\\e619"
  },
  "wds2-icon-feedback-star-empty": {
    type: "content",
    value: "\\e902"
  },
  "wds2-icon-feedback-star-half-filled": {
    type: "content",
    value: "\\e901"
  },
  "wds2-icon-find-a-dealer": {
    type: "content",
    value: "\\e67f"
  },
  "wds2-icon-fuel-type": {
    type: "content",
    value: "\\e61a"
  },
  "wds2-icon-full-screen-close": {
    type: "content",
    value: "\\e61b"
  },
  "wds2-icon-full-screen": {
    type: "content",
    value: "\\e65c"
  },
  "wds2-icon-geolocator": {
    type: "content",
    value: "\\e65d"
  },
  "wds2-icon-globe": {
    type: "content",
    value: "\\e65e"
  },
  "wds2-icon-google-plus": {
    type: "content",
    value: "\\e65f"
  },
  "wds2-icon-gross-weight": {
    type: "content",
    value: "\\e62b"
  },
  "wds2-icon-height": {
    type: "content",
    value: "\\e90f"
  },
  "wds2-icon-horsepower": {
    type: "content",
    value: "\\e660"
  },
  "wds2-icon-image-gallery-all": {
    type: "content",
    value: "\\e61c"
  },
  "wds2-icon-image-gallery-one": {
    type: "content",
    value: "\\e61d"
  },
  "wds2-icon-image-slider-control": {
    type: "content",
    value: "\\e90c"
  },
  "wds2-icon-info": {
    type: "content",
    value: "\\e61f"
  },
  "wds2-icon-information": {
    type: "content",
    value: "\\e620"
  },
  "wds2-icon-instagram": {
    type: "content",
    value: "\\e621"
  },
  "wds2-icon-inventory": {
    type: "content",
    value: "\\e900"
  },
  "wds2-icon-i-nventory-funnel": {
    type: "content",
    value: "\\e690"
  },
  "wds2-icon-inventory-results": {
    type: "content",
    value: "\\e691"
  },
  "wds2-icon-left-arrow": {
    type: "content",
    value: "\\e622"
  },
  "wds2-icon-length": {
    type: "content",
    value: "\\e910"
  },
  "wds2-icon-linkedin": {
    type: "content",
    value: "\\e661"
  },
  "wds2-icon-list": {
    type: "content",
    value: "\\e663"
  },
  "wds2-icon-list-view": {
    type: "content",
    value: "\\e662"
  },
  "wds2-icon-list-view-2": {
    type: "content",
    value: "\\e664"
  },
  "wds2-icon-live-chat": {
    type: "content",
    value: "\\e665"
  },
  "wds2-icon-loading-spinner": {
    type: "content",
    value: "\\e623"
  },
  "wds2-icon-log-out": {
    type: "content",
    value: "\\e680"
  },
  "wds2-icon-mpg": {
    type: "content",
    value: "\\e629"
  },
  "wds2-icon-mph": {
    type: "content",
    value: "\\e666"
  },
  "wds2-icon-manual": {
    type: "content",
    value: "\\e624"
  },
  "wds2-icon-map-view": {
    type: "content",
    value: "\\e625"
  },
  "wds2-icon-map-view-2": {
    type: "content",
    value: "\\e626"
  },
  "wds2-icon-mileage": {
    type: "content",
    value: "\\e693"
  },
  "wds2-icon-minus": {
    type: "content",
    value: "\\e627"
  },
  "wds2-icon-more-dealer-details": {
    type: "content",
    value: "\\e681"
  },
  "wds2-icon-new-cars": {
    type: "content",
    value: "\\e667"
  },
  "wds2-icon-bas-express-booking": {
    type: "content",
    value: "\\e68b"
  },
  "wds2-icon-bas-maintenance-package": {
    type: "content",
    value: "\\e68a"
  },
  "wds2-icon-number-of-seats": {
    type: "content",
    value: "\\e920"
  },
  "wds2-icon-offers": {
    type: "content",
    value: "\\e668"
  },
  "wds2-icon-options": {
    type: "content",
    value: "\\e91a"
  },
  "wds2-icon-pdf": {
    type: "content",
    value: "\\e682"
  },
  "wds2-icon-package": {
    type: "content",
    value: "\\e911"
  },
  "wds2-icon-packs": {
    type: "content",
    value: "\\e918"
  },
  "wds2-icon-pagination-off": {
    type: "content",
    value: "\\e669"
  },
  "wds2-icon-pagination-on": {
    type: "content",
    value: "\\e66a"
  },
  "wds2-icon-pan": {
    type: "content",
    value: "\\e62a"
  },
  "wds2-icon-payload": {
    type: "content",
    value: "\\e924"
  },
  "wds2-icon-phone": {
    type: "content",
    value: "\\e913"
  },
  "wds2-icon-photo": {
    type: "content",
    value: "\\e683"
  },
  "wds2-icon-play": {
    type: "content",
    value: "\\e62c"
  },
  "wds2-icon-player--control-fullscreen": {
    type: "content",
    value: "\\e62d"
  },
  "wds2-icon-player-control-no-volume": {
    type: "content",
    value: "\\e62e"
  },
  "wds2-icon-player-control-pause": {
    type: "content",
    value: "\\e62f"
  },
  "wds2-icon-player-control-play": {
    type: "content",
    value: "\\e630"
  },
  "wds2-icon-player-control-volume": {
    type: "content",
    value: "\\e66b"
  },
  "wds2-icon-plus": {
    type: "content",
    value: "\\e66c"
  },
  "wds2-icon-preferred-dealer": {
    type: "content",
    value: "\\e66e"
  },
  "wds2-icon-preferred-dealer-solid": {
    type: "content",
    value: "\\e66d"
  },
  "wds2-icon-print": {
    type: "content",
    value: "\\e631"
  },
  "wds2-icon-quick-view": {
    type: "content",
    value: "\\e632"
  },
  "wds2-icon-registration-date": {
    type: "content",
    value: "\\e694"
  },
  "wds2-icon-reset": {
    type: "content",
    value: "\\e633"
  },
  "wds2-icon-review": {
    type: "content",
    value: "\\e695"
  },
  "wds2-icon-right-arrow": {
    type: "content",
    value: "\\e634"
  },
  "wds2-icon-road-tax": {
    type: "content",
    value: "\\e635"
  },
  "wds2-icon-road-side-assistance": {
    type: "content",
    value: "\\e636"
  },
  "wds2-icon-running-cost": {
    type: "content",
    value: "\\e637"
  },
  "wds2-icon-save": {
    type: "content",
    value: "\\e684"
  },
  "wds2-icon-save-2": {
    type: "content",
    value: "\\e916"
  },
  "wds2-icon-search": {
    type: "content",
    value: "\\e670"
  },
  "wds2-icon-seat": {
    type: "content",
    value: "\\e671"
  },
  "wds2-icon-services": {
    type: "content",
    value: "\\e672"
  },
  "wds2-icon-share": {
    type: "content",
    value: "\\e674"
  },
  "wds2-icon-share-cfg": {
    type: "content",
    value: "\\e685"
  },
  "wds2-icon-share-save": {
    type: "content",
    value: "\\e673"
  },
  "wds2-icon-slider-arrow-left": {
    type: "content",
    value: "\\e638"
  },
  "wds2-icon-slider-arrow-right": {
    type: "content",
    value: "\\e639"
  },
  "wds2-icon-social-draugiem": {
    type: "content",
    value: "\\e90e"
  },
  "wds2-icon-social-email-us-fill": {
    type: "content",
    value: "\\e923"
  },
  "wds2-icon-social-facebook-fill": {
    type: "content",
    value: "\\e63a"
  },
  "wds2-icon-social-google-plus-fill": {
    type: "content",
    value: "\\e63b"
  },
  "wds2-icon-social-instagram-fill": {
    type: "content",
    value: "\\e63c"
  },
  "wds2-icon-social-line-fill": {
    type: "content",
    value: "\\e922"
  },
  "wds2-icon-social-linkedin-fill": {
    type: "content",
    value: "\\e63d"
  },
  "wds2-icon-social-ok-fill": {
    type: "content",
    value: "\\e63e"
  },
  "wds2-icon-social-ok-outline": {
    type: "content",
    value: "\\e675"
  },
  "wds2-icon-social-pinterest-fill": {
    type: "content",
    value: "\\e676"
  },
  "wds2-icon-social-twitter-fill": {
    type: "content",
    value: "\\e677"
  },
  "wds2-icon-social-vk-fill": {
    type: "content",
    value: "\\e678"
  },
  "wds2-icon-social-vk-outline": {
    type: "content",
    value: "\\e679"
  },
  "wds2-icon-social-wechat-fill": {
    type: "content",
    value: "\\e904"
  },
  "wds2-icon-social-wechat-outline": {
    type: "content",
    value: "\\e906"
  },
  "wds2-icon-social-weibo": {
    type: "content",
    value: "\\e905"
  },
  "wds2-icon-social-weibo-outline": {
    type: "content",
    value: "\\e907"
  },
  "wds2-icon-social-youtube": {
    type: "content",
    value: "\\e63f"
  },
  "wds2-icon-social-youku-fill": {
    type: "content",
    value: "\\e692"
  },
  "wds2-icon-social-youku-outline": {
    type: "content",
    value: "\\e908"
  },
  "wds2-icon-speed": {
    type: "content",
    value: "\\e640"
  },
  "wds2-icon-sponsored-dealer-award": {
    type: "content",
    value: "\\e90d"
  },
  "wds2-icon-style-packs": {
    type: "content",
    value: "\\e919"
  },
  "wds2-icon-summary": {
    type: "content",
    value: "\\e91b"
  },
  "wds2-icon-test-drive": {
    type: "content",
    value: "\\e641"
  },
  "wds2-icon-Tick": {
    type: "content",
    value: "\\e642"
  },
  "wds2-icon-towing": {
    type: "content",
    value: "\\e644"
  },
  "wds2-icon-trade-in": {
    type: "content",
    value: "\\e687"
  },
  "wds2-icon-trade-in-quote": {
    type: "content",
    value: "\\e686"
  },
  "wds2-icon-trash": {
    type: "content",
    value: "\\e645"
  },
  "wds2-icon-trims": {
    type: "content",
    value: "\\e917"
  },
  "wds2-icon-social-twitter": {
    type: "content",
    value: "\\e67a"
  },
  "wds2-icon-tyre": {
    type: "content",
    value: "\\e67b"
  },
  "wds2-icon-universal-price": {
    type: "content",
    value: "\\e903"
  },
  "wds2-icon-up-arrow": {
    type: "content",
    value: "\\e67c"
  },
  "wds2-icon-van": {
    type: "content",
    value: "\\e90b"
  },
  "wds2-icon-version-grade": {
    type: "content",
    value: "\\e915"
  },
  "wds2-icon-video-carousel-link": {
    type: "content",
    value: "\\e67d"
  },
  "wds2-icon-warranty": {
    type: "content",
    value: "\\e646"
  },
  "wds2-icon-wheel": {
    type: "content",
    value: "\\e647"
  },
  "wds2-icon-world": {
    type: "content",
    value: "\\e648"
  },
  "wds2-icon-wreath": {
    type: "content",
    value: "\\e649"
  },
  "wds2-icon-your-choice": {
    type: "content",
    value: "\\e64a"
  },
  "wds2-icon-your-choice-light": {
    type: "content",
    value: "\\ea34"
  },
  "wds2-icon-social-youtube1": {
    type: "content",
    value: "\\e64b"
  },
  "wds2-icon-zoom": {
    type: "content",
    value: "\\e64c"
  },
  "wds2-icon-accessories": {
    type: "content",
    value: "\\e600"
  },
  "wds2-icon-aerodynamic_body_kit": {
    type: "content",
    value: "\\e954"
  },
  "wds2-icon-after_sales": {
    type: "content",
    value: "\\e953"
  },
  "wds2-icon-ambient_lighting": {
    type: "content",
    value: "\\e932"
  },
  "wds2-icon-android_compatibility": {
    type: "content",
    value: "\\e973"
  },
  "wds2-icon-assistance": {
    type: "content",
    value: "\\e931"
  },
  "wds2-icon-assisted_steering": {
    type: "content",
    value: "\\e952"
  },
  "wds2-icon-aux": {
    type: "content",
    value: "\\e972"
  },
  "wds2-icon-available": {
    type: "content",
    value: "\\e603"
  },
  "wds2-icon-battery_service": {
    type: "content",
    value: "\\e930"
  },
  "wds2-icon-bed_channel_system": {
    type: "content",
    value: "\\e951"
  },
  "wds2-icon-best_seller": {
    type: "content",
    value: "\\e950"
  },
  "wds2-icon-bluetooth": {
    type: "content",
    value: "\\e971"
  },
  "wds2-icon-car_location": {
    type: "content",
    value: "\\e94f"
  },
  "wds2-icon-clear": {
    type: "content",
    value: "\\e68e"
  },
  "wds2-icon-climate_control": {
    type: "content",
    value: "\\e94e"
  },
  "wds2-icon-commerce": {
    type: "content",
    value: "\\e929"
  },
  "wds2-icon-continuously_variable_transmission": {
    type: "content",
    value: "\\e94d"
  },
  "wds2-icon-cylinder": {
    type: "content",
    value: "\\e653"
  },
  "wds2-icon-device_compatibility": {
    type: "content",
    value: "\\e934"
  },
  "wds2-icon-drive_train_2wd": {
    type: "content",
    value: "\\e970"
  },
  "wds2-icon-drive_train_4wd": {
    type: "content",
    value: "\\e96f"
  },
  "wds2-icon-dual_climate_control": {
    type: "content",
    value: "\\e96e"
  },
  "wds2-icon-editpencil2": {
    type: "content",
    value: "\\e612"
  },
  "wds2-icon-engine": {
    type: "content",
    value: "\\e96d"
  },
  "wds2-icon-enginePower": {
    type: "content",
    value: "\\e615"
  },
  "wds2-icon-epedal_driving": {
    type: "content",
    value: "\\e942"
  },
  "wds2-icon-exclaimation": {
    type: "content",
    value: "\\e914"
  },
  "wds2-icon-extended_range": {
    type: "content",
    value: "\\e96c"
  },
  "wds2-icon-exterior_view": {
    type: "content",
    value: "\\e96b"
  },
  "wds2-icon-faqs": {
    type: "content",
    value: "\\e960"
  },
  "wds2-icon-fuel_type_ev": {
    type: "content",
    value: "\\e96a"
  },
  "wds2-icon-fully_boxed_frame": {
    type: "content",
    value: "\\e940"
  },
  "wds2-icon-grants_savings_incentive": {
    type: "content",
    value: "\\e93f"
  },
  "wds2-icon-heated_seats": {
    type: "content",
    value: "\\e95f"
  },
  "wds2-icon-heated_steering_wheel": {
    type: "content",
    value: "\\e95e"
  },
  "wds2-icon-home_and_public_charging_stations": {
    type: "content",
    value: "\\e93e"
  },
  "wds2-icon-horn": {
    type: "content",
    value: "\\e95d"
  },
  "wds2-icon-indicator": {
    type: "content",
    value: "\\e61e"
  },
  "wds2-icon-instant_acceleration": {
    type: "content",
    value: "\\e93d"
  },
  "wds2-icon-intelligent_key": {
    type: "content",
    value: "\\e93c"
  },
  "wds2-icon-interior_view": {
    type: "content",
    value: "\\e969"
  },
  "wds2-icon-keep_me_informed": {
    type: "content",
    value: "\\e968"
  },
  "wds2-icon-lights": {
    type: "content",
    value: "\\e95b"
  },
  "wds2-icon-lights_and_horn": {
    type: "content",
    value: "\\e93b"
  },
  "wds2-icon-maintain_speed": {
    type: "content",
    value: "\\e93a"
  },
  "wds2-icon-managing_my_device_on_the_go": {
    type: "content",
    value: "\\e92a"
  },
  "wds2-icon-map_updates": {
    type: "content",
    value: "\\e938"
  },
  "wds2-icon-nissan_concierge_entertainment": {
    type: "content",
    value: "\\e937"
  },
  "wds2-icon-nissan_fleet": {
    type: "content",
    value: "\\e936"
  },
  "wds2-icon-noise_cancellation": {
    type: "content",
    value: "\\e95a"
  },
  "wds2-icon-oil_and_filter_change": {
    type: "content",
    value: "\\e935"
  },
  "wds2-icon-onboarding_to_ownership": {
    type: "content",
    value: "\\e92b"
  },
  "wds2-icon-player_control_back": {
    type: "content",
    value: "\\e943"
  },
  "wds2-icon-player_control_forward": {
    type: "content",
    value: "\\e944"
  },
  "wds2-icon-player_control_rewind": {
    type: "content",
    value: "\\e946"
  },
  "wds2-icon-player_control_skip": {
    type: "content",
    value: "\\e945"
  },
  "wds2-icon-public_charging_stations": {
    type: "content",
    value: "\\e94c"
  },
  "wds2-icon-rapid_charge": {
    type: "content",
    value: "\\e967"
  },
  "wds2-icon-rear_entertainment": {
    type: "content",
    value: "\\e94b"
  },
  "wds2-icon-request_a_call_back": {
    type: "content",
    value: "\\e966"
  },
  "wds2-icon-restaurant": {
    type: "content",
    value: "\\e958"
  },
  "wds2-icon-running_cost": {
    type: "content",
    value: "\\e94a"
  },
  "wds2-icon-seat_capacity": {
    type: "content",
    value: "\\e933"
  },
  "wds2-icon-service_booking_date": {
    type: "content",
    value: "\\e957"
  },
  "wds2-icon-service_log": {
    type: "content",
    value: "\\e956"
  },
  "wds2-icon-slide_in": {
    type: "content",
    value: "\\e912"
  },
  "wds2-icon-soundproof": {
    type: "content",
    value: "\\e949"
  },
  "wds2-icon-tick": {
    type: "content",
    value: "\\e926"
  },
  "wds2-icon-torque": {
    type: "content",
    value: "\\e643"
  },
  "wds2-icon-touch_screen": {
    type: "content",
    value: "\\e964"
  },
  "wds2-icon-usb": {
    type: "content",
    value: "\\e963"
  },
  "wds2-icon-voice_recognition": {
    type: "content",
    value: "\\e927"
  },
  "wds2-icon-warning": {
    type: "content",
    value: "\\e67e"
  },
  "wds2-icon-width": {
    type: "content",
    value: "\\e962"
  },
  "wds2-icon-wiper_blade_replacement": {
    type: "content",
    value: "\\e948"
  },
  "wds2-icon-work_location": {
    type: "content",
    value: "\\e947"
  },
  "wds2-icon-zoom_in": {
    type: "content",
    value: "\\e92c"
  },
  "wds2-icon-zoom_out": {
    type: "content",
    value: "\\e92d"
  },
  "wds2-icon-drive_train_awd": {
    type: "content",
    value: "\\e928"
  },
  "wds2-icon-driving_log_history": {
    type: "content",
    value: "\\e92e"
  },
  "wds2-icon-dealer_review": {
    type: "content",
    value: "\\e92f"
  },
  "wds2-icon-nissan_intelligent_mobility": {
    type: "content",
    value: "\\e939"
  },
  "wds2-icon-slider_arrow_down": {
    type: "content",
    value: "\\e941"
  },
  "wds2-icon-upholstery": {
    type: "content",
    value: "\\e955"
  },
  "wds2-icon-copy": {
    type: "content",
    value: "\\e959"
  },
  "wds2-icon-settings": {
    type: "content",
    value: "\\e95c"
  },
  "wds2-icon-offers_horizontal": {
    type: "content",
    value: "\\e961"
  },
  "wds2-icon-rotate_device": {
    type: "content",
    value: "\\e965"
  },
  "wds2-icon-Gallery-View-List": {
    type: "content",
    value: "\\e701"
  },
  "wds2-icon-Gallery-View-Grid": {
    type: "content",
    value: "\\e702"
  },
  "wds2-icon-connected-car": {
    type: "content",
    value: "\\e998"
  },
  "wds2-icon-wrench": {
    type: "content",
    value: "\\e999"
  },
  "wds2-icon-social-fb-messenger": {
    type: "content",
    value: "\\e99a"
  },
  "wds2-icon-social-whatsapp": {
    type: "content",
    value: "\\e99b"
  },
  "wds2-icon-abs-alert": {
    type: "content",
    value: "\\e9a2"
  },
  "wds2-icon-accelerate": {
    type: "content",
    value: "\\e9a3"
  },
  "wds2-icon-airbag-status": {
    type: "content",
    value: "\\e9a4"
  },
  "wds2-icon-airbag": {
    type: "content",
    value: "\\e9a5"
  },
  "wds2-icon-alexa": {
    type: "content",
    value: "\\e9a6"
  },
  "wds2-icon-android-auto": {
    type: "content",
    value: "\\e9a7"
  },
  "wds2-icon-apple-carplay": {
    type: "content",
    value: "\\e9a8"
  },
  "wds2-icon-area-alert": {
    type: "content",
    value: "\\e9a9"
  },
  "wds2-icon-area": {
    type: "content",
    value: "\\e9aa"
  },
  "wds2-icon-autonomous-driving": {
    type: "content",
    value: "\\e9ab"
  },
  "wds2-icon-brake-alert": {
    type: "content",
    value: "\\e9ac"
  },
  "wds2-icon-brake-fluid": {
    type: "content",
    value: "\\e9ad"
  },
  "wds2-icon-brake": {
    type: "content",
    value: "\\e9ae"
  },
  "wds2-icon-buy-at-home": {
    type: "content",
    value: "\\e99c"
  },
  "wds2-icon-camera": {
    type: "content",
    value: "\\e9af"
  },
  "wds2-icon-cant-connect": {
    type: "content",
    value: "\\e9b0"
  },
  "wds2-icon-car-locator": {
    type: "content",
    value: "\\e9b1"
  },
  "wds2-icon-change-driver": {
    type: "content",
    value: "\\e9b2"
  },
  "wds2-icon-charging": {
    type: "content",
    value: "\\e9b3"
  },
  "wds2-icon-check-in": {
    type: "content",
    value: "\\e9b4"
  },
  "wds2-icon-check-out": {
    type: "content",
    value: "\\e9b5"
  },
  "wds2-icon-co2": {
    type: "content",
    value: "\\e9b6"
  },
  "wds2-icon-crossing-boutique": {
    type: "content",
    value: "\\e9b7"
  },
  "wds2-icon-crossing-cafe": {
    type: "content",
    value: "\\e9b8"
  },
  "wds2-icon-curfew-alert": {
    type: "content",
    value: "\\e9b9"
  },
  "wds2-icon-delivery-follow-up": {
    type: "content",
    value: "\\e9ba"
  },
  "wds2-icon-delivery": {
    type: "content",
    value: "\\e9bb"
  },
  "wds2-icon-direction-walking": {
    type: "content",
    value: "\\e9bc"
  },
  "wds2-icon-discover-at-home": {
    type: "content",
    value: "\\e99d"
  },
  "wds2-icon-door-to-door-navigation": {
    type: "content",
    value: "\\e9bd"
  },
  "wds2-icon-download-document": {
    type: "content",
    value: "\\e9be"
  },
  "wds2-icon-drivers-profiles": {
    type: "content",
    value: "\\e9bf"
  },
  "wds2-icon-driving-history": {
    type: "content",
    value: "\\e9c0"
  },
  "wds2-icon-driving-restriction": {
    type: "content",
    value: "\\e9c1"
  },
  "wds2-icon-engine-oil": {
    type: "content",
    value: "\\e9c2"
  },
  "wds2-icon-engine-start-stop": {
    type: "content",
    value: "\\e9c3"
  },
  "wds2-icon-engine-stop": {
    type: "content",
    value: "\\e9c4"
  },
  "wds2-icon-entertainment": {
    type: "content",
    value: "\\e9c5"
  },
  "wds2-icon-error-installing-update": {
    type: "content",
    value: "\\e9c6"
  },
  "wds2-icon-export-document": {
    type: "content",
    value: "\\e9c7"
  },
  "wds2-icon-extended-test-drive": {
    type: "content",
    value: "\\e9c8"
  },
  "wds2-icon-eyes-on-the-road": {
    type: "content",
    value: "\\e9c9"
  },
  "wds2-icon-face-happy": {
    type: "content",
    value: "\\e9ca"
  },
  "wds2-icon-face-neutral": {
    type: "content",
    value: "\\e9cb"
  },
  "wds2-icon-face-unhappy": {
    type: "content",
    value: "\\e9cc"
  },
  "wds2-icon-floor-guide": {
    type: "content",
    value: "\\e9cd"
  },
  "wds2-icon-fuel-prices-gbp": {
    type: "content",
    value: "\\e9ce"
  },
  "wds2-icon-fuel-prices-dollar": {
    type: "content",
    value: "\\e9cf"
  },
  "wds2-icon-fuel-prices-jpy": {
    type: "content",
    value: "\\e9d0"
  },
  "wds2-icon-google-assistant": {
    type: "content",
    value: "\\e9d1"
  },
  "wds2-icon-guest-driver": {
    type: "content",
    value: "\\e9d2"
  },
  "wds2-icon-hands-off-wheel": {
    type: "content",
    value: "\\e9d3"
  },
  "wds2-icon-hd-radio-technology": {
    type: "content",
    value: "\\e9d4"
  },
  "wds2-icon-hood-open": {
    type: "content",
    value: "\\e9d5"
  },
  "wds2-icon-horsepower-boost": {
    type: "content",
    value: "\\e9d6"
  },
  "wds2-icon-install-update": {
    type: "content",
    value: "\\e9d7"
  },
  "wds2-icon-installation-completed": {
    type: "content",
    value: "\\e9d8"
  },
  "wds2-icon-interior-vehicle-camera": {
    type: "content",
    value: "\\e9d9"
  },
  "wds2-icon-invisible": {
    type: "content",
    value: "\\e9da"
  },
  "wds2-icon-license-plate": {
    type: "content",
    value: "\\e9db"
  },
  "wds2-icon-live-traffic-information": {
    type: "content",
    value: "\\e9dc"
  },
  "wds2-icon-lock": {
    type: "content",
    value: "\\e9dd"
  },
  "wds2-icon-low-tyre-pressure": {
    type: "content",
    value: "\\e9de"
  },
  "wds2-icon-mobile-internet-hotspot": {
    type: "content",
    value: "\\e9df"
  },
  "wds2-icon-multiple-drivers": {
    type: "content",
    value: "\\e9e0"
  },
  "wds2-icon-new-feature": {
    type: "content",
    value: "\\e9e1"
  },
  "wds2-icon-oil-alert": {
    type: "content",
    value: "\\e9e2"
  },
  "wds2-icon-oil-level": {
    type: "content",
    value: "\\e9e3"
  },
  "wds2-icon-pandora": {
    type: "content",
    value: "\\e9e4"
  },
  "wds2-icon-parking": {
    type: "content",
    value: "\\e9e5"
  },
  "wds2-icon-password": {
    type: "content",
    value: "\\e9e6"
  },
  "wds2-icon-payment-methods": {
    type: "content",
    value: "\\e9e7"
  },
  "wds2-icon-payment": {
    type: "content",
    value: "\\e9e8"
  },
  "wds2-icon-power-on": {
    type: "content",
    value: "\\e9e9"
  },
  "wds2-icon-destination-search": {
    type: "content",
    value: "\\e9ea"
  },
  "wds2-icon-ranking": {
    type: "content",
    value: "\\e9eb"
  },
  "wds2-icon-receive-package": {
    type: "content",
    value: "\\e9ec"
  },
  "wds2-icon-remote-battery-management": {
    type: "content",
    value: "\\e9ed"
  },
  "wds2-icon-remote-charging": {
    type: "content",
    value: "\\e9ee"
  },
  "wds2-icon-remote-climate-control": {
    type: "content",
    value: "\\e9ef"
  },
  "wds2-icon-remote-control": {
    type: "content",
    value: "\\e9f0"
  },
  "wds2-icon-remote-diagnostics": {
    type: "content",
    value: "\\e9f1"
  },
  "wds2-icon-remote-door-control": {
    type: "content",
    value: "\\e9f2"
  },
  "wds2-icon-remote-engine-start-stop": {
    type: "content",
    value: "\\e9f3"
  },
  "wds2-icon-remote-horn-light": {
    type: "content",
    value: "\\e9f4"
  },
  "wds2-icon-remote-parking": {
    type: "content",
    value: "\\e9f5"
  },
  "wds2-icon-remote-vehicle-servicing": {
    type: "content",
    value: "\\e9f6"
  },
  "wds2-icon-road-ahead": {
    type: "content",
    value: "\\e9f7"
  },
  "wds2-icon-safety": {
    type: "content",
    value: "\\e9f8"
  },
  "wds2-icon-schedule-an-update-installation": {
    type: "content",
    value: "\\e9f9"
  },
  "wds2-icon-self-driving-car": {
    type: "content",
    value: "\\e9fa"
  },
  "wds2-icon-self-driving-wheel": {
    type: "content",
    value: "\\e9fb"
  },
  "wds2-icon-service-at-home": {
    type: "content",
    value: "\\e99e"
  },
  "wds2-icon-shared-vehicle": {
    type: "content",
    value: "\\e9fc"
  },
  "wds2-icon-sharing-permissions": {
    type: "content",
    value: "\\e9fd"
  },
  "wds2-icon-siriusxm": {
    type: "content",
    value: "\\e9fe"
  },
  "wds2-icon-sleep": {
    type: "content",
    value: "\\e9ff"
  },
  "wds2-icon-smart-alerts": {
    type: "content",
    value: "\\ea00"
  },
  "wds2-icon-speed-alert": {
    type: "content",
    value: "\\ea01"
  },
  "wds2-icon-speed-cameras": {
    type: "content",
    value: "\\ea02"
  },
  "wds2-icon-split-billing": {
    type: "content",
    value: "\\ea03"
  },
  "wds2-icon-start-at-home": {
    type: "content",
    value: "\\e99f"
  },
  "wds2-icon-stolen-vehicle-tracking": {
    type: "content",
    value: "\\ea04"
  },
  "wds2-icon-streaming-audio-via-bluetooth": {
    type: "content",
    value: "\\ea05"
  },
  "wds2-icon-street-view": {
    type: "content",
    value: "\\ea06"
  },
  "wds2-icon-support": {
    type: "content",
    value: "\\ea07"
  },
  "wds2-icon-support-at-home": {
    type: "content",
    value: "\\e9a0"
  },
  "wds2-icon-sync-driver-profile": {
    type: "content",
    value: "\\ea08"
  },
  "wds2-icon-take-control": {
    type: "content",
    value: "\\ea09"
  },
  "wds2-icon-test-drive-at-home": {
    type: "content",
    value: "\\e9a1"
  },
  "wds2-icon-tom-tom-weather": {
    type: "content",
    value: "\\ea0a"
  },
  "wds2-icon-traffic": {
    type: "content",
    value: "\\ea0b"
  },
  "wds2-icon-transportation": {
    type: "content",
    value: "\\ea0c"
  },
  "wds2-icon-trip-advisor": {
    type: "content",
    value: "\\ea0d"
  },
  "wds2-icon-trunk-open": {
    type: "content",
    value: "\\ea0e"
  },
  "wds2-icon-tyre-pressure": {
    type: "content",
    value: "\\ea0f"
  },
  "wds2-icon-update--required": {
    type: "content",
    value: "\\ea10"
  },
  "wds2-icon-upload-offers": {
    type: "content",
    value: "\\ea11"
  },
  "wds2-icon-usb1": {
    type: "content",
    value: "\\ea12"
  },
  "wds2-icon-vehicle-damage": {
    type: "content",
    value: "\\ea13"
  },
  "wds2-icon-vehicle-delivery": {
    type: "content",
    value: "\\ea14"
  },
  "wds2-icon-vehicle-health": {
    type: "content",
    value: "\\ea15"
  },
  "wds2-icon-vehicle-status": {
    type: "content",
    value: "\\ea16"
  },
  "wds2-icon-vehicle-towed": {
    type: "content",
    value: "\\ea17"
  },
  "wds2-icon-vehicle-unlock": {
    type: "content",
    value: "\\ea18"
  },
  "wds2-icon-weather": {
    type: "content",
    value: "\\ea19"
  },
  "wds2-icon-wifi": {
    type: "content",
    value: "\\ea1a"
  },
  "wds2-icon-yen": {
    type: "content",
    value: "\\ea1b"
  },
  "wds-icon-elevator": {
    type: "content",
    value: "\\ea28"
  },
  "wds-icon-escalator-up": {
    type: "content",
    value: "\\ea29"
  },
  "wds-icon-escalator-down": {
    type: "content",
    value: "\\ea2a"
  },
  "wds-icon-dealer-sales-staff": {
    type: "content",
    value: "\\ea2b"
  },
  "wds-icon-desktop": {
    type: "content",
    value: "\\ea2c"
  },
  "wds-icon-tablet": {
    type: "content",
    value: "\\ea2d"
  },
  "wds-icon-body-repair": {
    type: "content",
    value: "\\ea1c"
  },
  "wds-icon-communication-preference": {
    type: "content",
    value: "\\ea1d"
  },
  "wds-icon-fingerprint": {
    type: "content",
    value: "\\ea1e"
  },
  "wds-icon-language": {
    type: "content",
    value: "\\ea1f"
  },
  "wds-icon-link": {
    value: "\\ea20",
    type: "content"
  },
  "wds-icon-qibla": {
    value: "\\ea21",
    type: "content"
  },
  "wds-icon-share-location": {
    value: "\\ea22",
    type: "content"
  },
  "wds-icon-upload": {
    value: "\\ea23",
    type: "content"
  },
  "wds-icon-virtual-showroom": {
    value: "\\ea24",
    type: "content"
  },
  "wds-icon-wallet": {
    value: "\\ea25",
    type: "content"
  },
  "wds-icon-contact-linkedin": {
    value: "\\ea2e",
    type: "content"
  },
  "wds-icon-contact-spotify": {
    value: "\\ea2f",
    type: "content"
  },
  "wds-icon-contact-tiktok": {
    value: "\\ea30",
    type: "content"
  },
  "wds-icon-dealership": {
    value: "\\ea31",
    type: "content"
  },
  "wds-icon-mail-checked": {
    value: "\\ea32",
    type: "content"
  },
  "wds-icon-pin-ev": {
    value: "\\ea33",
    type: "content"
  },
  "wds-icon-alert-fill": {
    value: "\\e974",
    type: "content"
  },
  "wds-icon-alert-outline": {
    value: "\\e975",
    type: "content"
  },
  "wds-icon-bell-fill": {
    value: "\\e976",
    type: "content"
  },
  "wds-icon-bell-outline": {
    value: "\\e977",
    type: "content"
  },
  "wds-icon-car-fill": {
    value: "\\e978",
    type: "content"
  },
  "wds-icon-car-outline": {
    value: "\\e979",
    type: "content"
  },
  "wds-icon-direction-fill": {
    value: "\\e97a",
    type: "content"
  },
  "wds-icon-direction-outline": {
    value: "\\e97b",
    type: "content"
  },
  "wds-icon-document-fill": {
    value: "\\e97c",
    type: "content"
  },
  "wds-icon-document-outline": {
    value: "\\e97d",
    type: "content"
  },
  "wds-icon-garage-fill": {
    value: "\\e97e",
    type: "content"
  },
  "wds-icon-garage-outline": {
    value: "\\e97f",
    type: "content"
  },
  "wds-icon-headset-fill": {
    value: "\\e980",
    type: "content"
  },
  "wds-icon-headset-outline": {
    value: "\\e981",
    type: "content"
  },
  "wds-icon-info-book-fill": {
    value: "\\e982",
    type: "content"
  },
  "wds-icon-info-book-outline": {
    value: "\\e983",
    type: "content"
  },
  "wds-icon-info-fill": {
    value: "\\e984",
    type: "content"
  },
  "wds-icon-info-outline": {
    value: "\\e985",
    type: "content"
  },
  "wds-icon-mail-fill": {
    value: "\\e986",
    type: "content"
  },
  "wds-icon-mail-outline": {
    value: "\\e987",
    type: "content"
  },
  "wds-icon-map-fill": {
    value: "\\e988",
    type: "content"
  },
  "wds-icon-map-outline": {
    value: "\\e989",
    type: "content"
  },
  "wds-icon-map-pin-fill": {
    value: "\\e98a",
    type: "content"
  },
  "wds-icon-map-pin-outline": {
    value: "\\e98b",
    type: "content"
  },
  "wds-icon-more-fill": {
    value: "\\e98c",
    type: "content"
  },
  "wds-icon-more-outline": {
    value: "\\e98d",
    type: "content"
  },
  "wds-icon-news-fill": {
    value: "\\e98e",
    type: "content"
  },
  "wds-icon-news-outline": {
    value: "\\e98f",
    type: "content"
  },
  "wds-icon-shield-fill": {
    value: "\\e990",
    type: "content"
  },
  "wds-icon-shield-outline": {
    value: "\\e991",
    type: "content"
  },
  "wds-icon-shopping-basket-fill": {
    value: "\\e992",
    type: "content"
  },
  "wds-icon-shopping-basket-outline": {
    value: "\\e993",
    type: "content"
  },
  "wds-icon-shopping-cart-fill": {
    value: "\\e994",
    type: "content"
  },
  "wds-icon-shopping-cart-outline": {
    value: "\\e995",
    type: "content"
  },
  "wds-icon-user-fill": {
    value: "\\e996",
    type: "content"
  },
  "wds-icon-user-outline": {
    value: "\\e997",
    type: "content"
  },
  "wds-icon-campaigns-fill": {
    value: "\\ea26",
    type: "content"
  },
  "wds-icon-campaigns-outline": {
    value: "\\ea27",
    type: "content"
  }
});

export { animation, border, colors, fonts, forms, grid, icons, radius };
