/* eslint-disable */
import i18n from "i18next";

/* Gets the nested array of errors by the name path */
export const getErrorsByPath = (errors, name) => {
  const parts = name.split(".");
  let result = errors;
  for (const part of parts) {
    if (!result) return;
    result = result[part];
  }
  return result;
};

/* Maps server errors and converts them to match yup objects shape */
export const setServerErrors = (responseErrors, setError) => {
  for (const key of Object.keys(responseErrors)) {
    for (const msg of Object.values(responseErrors)) {
    const message = msg.message;
    if(msg.field == key){
      setError(key, { message, type: "manual" });
    }
  }
  }
};

export const formatCoordinates = (coor) => {
  const latlngArr = coor?.split(", ").map((item) => Number(item));
  return { lat: latlngArr?.[0] ?? 0, lng: latlngArr?.[1] ?? 0 };
};

/* Google map styles and options */
export const mapContainerStyle = { width: "100%", height: "45vh" };

export const mapOptions = {
  strokeColor: "#2a32ff",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#2a32ff",
  fillOpacity: 0.2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 300,
  zIndex: 1,
};

export const debounce = (func, wait) => {
  let timeout;

  return function executedFunction() {
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = null;
      func.apply(context, args);
    };

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
  };
};



export const getActiveLocale = () => (i18n.language === "en" ? "en" : "ar");
